import { NextResponse } from "next/server";
import { isMailgunConfigured, isRequestFormEnabled, sendLeadEmails, type LeadSubmission } from "@/lib/mailgun";

export const runtime = "nodejs";

function isNonEmptyString(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isProbablyEmail(value: string) {
  return value.includes("@") && isValidEmail(value);
}

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

function normalizeString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function parseSubmission(payload: unknown): LeadSubmission | null {
  if (!payload || typeof payload !== "object") return null;
  const body = payload as Record<string, unknown>;

  if (body.kind === "contact") {
    const name = normalizeString(body.name);
    const email = normalizeString(body.email);
    const phone = normalizeString(body.phone);
    const message = normalizeString(body.message);
    if (!name || !email || !message) return null;
    return { kind: "contact", name, email, phone, message };
  }

  if (body.kind === "business") {
    const name = normalizeString(body.name);
    const business = normalizeString(body.business);
    const city = normalizeString(body.city);
    const spaceType = normalizeString(body.spaceType);
    const footTraffic = normalizeString(body.footTraffic);
    const productCategory = normalizeString(body.productCategory);
    const contact = normalizeString(body.contact);
    const notes = normalizeString(body.notes);
    if (!name || !business || !city || !spaceType || !contact) return null;
    return { kind: "business", name, business, city, spaceType, footTraffic, productCategory, contact, notes };
  }

  if (body.kind === "request") {
    const name = normalizeString(body.name);
    const email = normalizeString(body.email);
    const company = normalizeString(body.company);
    const location = normalizeString(body.location);
    const foot = normalizeString(body.foot);
    const details = normalizeString(body.details);
    const selectedTypes = Array.isArray(body.selectedTypes)
      ? body.selectedTypes.filter((value): value is string => typeof value === "string" && value.trim().length > 0)
      : [];
    if (!name || !email || !location) return null;
    return { kind: "request", name, email, company, location, foot, details, selectedTypes };
  }

  return null;
}

function validateSubmission(submission: LeadSubmission) {
  if (submission.kind === "contact") {
    if (!isValidEmail(submission.email)) return "Enter a valid email address.";
    return null;
  }

  if (submission.kind === "business") {
    if (!isProbablyEmail(submission.contact) && submission.contact.replace(/\D/g, "").length < 10) {
      return "Enter a valid phone number or email address.";
    }
    return null;
  }

  if (!isValidEmail(submission.email)) return "Enter a valid email address.";
  return null;
}

export async function POST(request: Request) {
  if (!isMailgunConfigured()) {
    return NextResponse.json({ error: "Mail delivery is not configured." }, { status: 500 });
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return badRequest("Invalid request body.");
  }

  const honey = payload && typeof payload === "object" ? (payload as Record<string, unknown>).companyWebsite : "";
  if (isNonEmptyString(honey)) {
    return NextResponse.json({ ok: true });
  }

  const submission = parseSubmission(payload);
  if (!submission) {
    return badRequest("Missing required fields.");
  }

  if (submission.kind === "request" && !isRequestFormEnabled()) {
    return NextResponse.json({ error: "Custom request form is disabled." }, { status: 403 });
  }

  const validationError = validateSubmission(submission);
  if (validationError) {
    return badRequest(validationError);
  }

  try {
    await sendLeadEmails(submission);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead email send failed", error);
    return NextResponse.json({ error: "We couldn't send your message right now." }, { status: 500 });
  }
}
