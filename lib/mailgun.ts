type LeadKind = "contact" | "business" | "request";

type ContactSubmission = {
  kind: "contact";
  name: string;
  email: string;
  phone?: string;
  message: string;
};

type BusinessSubmission = {
  kind: "business";
  name: string;
  business: string;
  city: string;
  spaceType: string;
  footTraffic?: string;
  productCategory?: string;
  contact: string;
  notes?: string;
};

type RequestSubmission = {
  kind: "request";
  name: string;
  email: string;
  company?: string;
  location: string;
  foot?: string;
  details?: string;
  selectedTypes: string[];
};

export type LeadSubmission = ContactSubmission | BusinessSubmission | RequestSubmission;

const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
const MAILGUN_REGION = (process.env.MAILGUN_REGION ?? "us").toLowerCase();
const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
const MAILGUN_TO = process.env.MAILGUN_TO;
const MAILGUN_FROM = process.env.MAILGUN_FROM;
const MAILGUN_REPLY_TO = process.env.MAILGUN_REPLY_TO ?? process.env.MAILGUN_TO ?? undefined;
const AUTORESPONDER = parseEnvFlag(process.env.AUTORESPONDER);
const INCLUDE_REQUEST_FORM = parseEnvFlag(process.env.INCLUDE_REQUEST_FORM, true);

function parseEnvFlag(value: string | undefined, fallback = false) {
  if (!value) return fallback;
  return ["1", "true", "yes", "on"].includes(value.toLowerCase());
}

function looksLikeEmail(value: string | undefined) {
  return Boolean(value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()));
}

function getMailgunBaseUrl() {
  return MAILGUN_REGION === "eu" ? "https://api.eu.mailgun.net" : "https://api.mailgun.net";
}

export function isMailgunConfigured() {
  return Boolean(MAILGUN_DOMAIN && MAILGUN_API_KEY && MAILGUN_TO && MAILGUN_FROM);
}

export function isRequestFormEnabled() {
  return INCLUDE_REQUEST_FORM;
}

export function shouldSendAutoresponder() {
  return AUTORESPONDER;
}

function requireConfig() {
  if (!MAILGUN_DOMAIN || !MAILGUN_API_KEY || !MAILGUN_TO || !MAILGUN_FROM) {
    throw new Error("Mailgun is not fully configured.");
  }

  return {
    domain: MAILGUN_DOMAIN,
    apiKey: MAILGUN_API_KEY,
    to: MAILGUN_TO,
    from: MAILGUN_FROM,
    replyTo: MAILGUN_REPLY_TO,
    baseUrl: getMailgunBaseUrl(),
  };
}

type MailgunMessage = {
  to: string;
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
};

async function sendMessage(message: MailgunMessage) {
  const config = requireConfig();
  const form = new FormData();

  form.append("from", config.from);
  form.append("to", message.to);
  form.append("subject", message.subject);
  form.append("text", message.text);
  form.append("html", message.html);

  if (message.replyTo) {
    form.append("h:Reply-To", message.replyTo);
  }

  const credentials = Buffer.from(`api:${config.apiKey}`).toString("base64");
  const response = await fetch(`${config.baseUrl}/v3/${config.domain}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
    },
    body: form,
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Mailgun send failed: ${response.status} ${body}`);
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function fieldRow(label: string, value: string | undefined) {
  const safeValue = value?.trim() ? value.trim() : "Not provided";
  return `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(safeValue)}</p>`;
}

function submissionTitle(kind: LeadKind) {
  switch (kind) {
    case "contact":
      return "New Contact Form Submission";
    case "business":
      return "New Business Lead";
    case "request":
      return "New Custom Request Lead";
  }
}

function submissionSubject(submission: LeadSubmission) {
  switch (submission.kind) {
    case "contact":
      return `New contact form message from ${submission.name}`;
    case "business":
      return `New business lead from ${submission.business}`;
    case "request":
      return `New custom request from ${submission.name}`;
  }
}

function internalEmailBody(submission: LeadSubmission) {
  if (submission.kind === "contact") {
    const html = [
      `<h2>${escapeHtml(submissionTitle(submission.kind))}</h2>`,
      fieldRow("Name", submission.name),
      fieldRow("Email", submission.email),
      fieldRow("Phone", submission.phone),
      fieldRow("Message", submission.message),
    ].join("");

    const text = [
      submissionTitle(submission.kind),
      `Name: ${submission.name}`,
      `Email: ${submission.email}`,
      `Phone: ${submission.phone?.trim() || "Not provided"}`,
      "",
      "Message:",
      submission.message,
    ].join("\n");

    return { html, text, replyTo: looksLikeEmail(submission.email) ? submission.email : undefined };
  }

  if (submission.kind === "business") {
    const html = [
      `<h2>${escapeHtml(submissionTitle(submission.kind))}</h2>`,
      fieldRow("Name", submission.name),
      fieldRow("Business", submission.business),
      fieldRow("City", submission.city),
      fieldRow("Type of Space", submission.spaceType),
      fieldRow("Estimated Foot Traffic", submission.footTraffic),
      fieldRow("Preferred Product Category", submission.productCategory),
      fieldRow("Phone or Email", submission.contact),
      fieldRow("Notes", submission.notes),
    ].join("");

    const text = [
      submissionTitle(submission.kind),
      `Name: ${submission.name}`,
      `Business: ${submission.business}`,
      `City: ${submission.city}`,
      `Type of Space: ${submission.spaceType}`,
      `Estimated Foot Traffic: ${submission.footTraffic?.trim() || "Not provided"}`,
      `Preferred Product Category: ${submission.productCategory?.trim() || "Not provided"}`,
      `Phone or Email: ${submission.contact}`,
      "",
      "Notes:",
      submission.notes?.trim() || "Not provided",
    ].join("\n");

    return { html, text, replyTo: looksLikeEmail(submission.contact) ? submission.contact : undefined };
  }

  const selectedTypes = submission.selectedTypes.length > 0 ? submission.selectedTypes.join(", ") : "Not provided";
  const html = [
    `<h2>${escapeHtml(submissionTitle(submission.kind))}</h2>`,
    fieldRow("Name", submission.name),
    fieldRow("Email", submission.email),
    fieldRow("Company", submission.company),
    fieldRow("Requested Machine Types", selectedTypes),
    fieldRow("Location", submission.location),
    fieldRow("Estimated Foot Traffic", submission.foot),
    fieldRow("Details", submission.details),
  ].join("");

  const text = [
    submissionTitle(submission.kind),
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Company: ${submission.company?.trim() || "Not provided"}`,
    `Requested Machine Types: ${selectedTypes}`,
    `Location: ${submission.location}`,
    `Estimated Foot Traffic: ${submission.foot?.trim() || "Not provided"}`,
    "",
    "Details:",
    submission.details?.trim() || "Not provided",
  ].join("\n");

  return { html, text, replyTo: looksLikeEmail(submission.email) ? submission.email : undefined };
}

function autoresponderBody(submission: LeadSubmission) {
  const safeName = escapeHtml(submission.name);
  let intro = "Thanks for reaching out to VendyBites.";

  if (submission.kind === "business") {
    intro = "Thanks for your interest in partnering with VendyBites.";
  }

  if (submission.kind === "request") {
    intro = "Thanks for sending your custom vending request to VendyBites.";
  }

  const html = [
    `<p>Hi ${safeName},</p>`,
    `<p>${escapeHtml(intro)}</p>`,
    "<p>We received your submission and will follow up directly soon.</p>",
    "<p>If your request is urgent, reply to this email and we’ll prioritize it.</p>",
    "<p>VendyBites<br />Connecticut's vending, done right.</p>",
  ].join("");

  const text = [
    `Hi ${submission.name},`,
    "",
    intro,
    "We received your submission and will follow up directly soon.",
    "If your request is urgent, reply to this email and we’ll prioritize it.",
    "",
    "VendyBites",
    "Connecticut's vending, done right.",
  ].join("\n");

  return { html, text };
}

export async function sendLeadEmails(submission: LeadSubmission) {
  const internal = internalEmailBody(submission);
  await sendMessage({
    to: requireConfig().to,
    subject: submissionSubject(submission),
    text: internal.text,
    html: internal.html,
    replyTo: internal.replyTo,
  });

  if (!shouldSendAutoresponder()) return;

  const recipient = submission.kind === "business" ? submission.contact : submission.email;
  if (!looksLikeEmail(recipient)) return;
  const autoresponder = autoresponderBody(submission);
  await sendMessage({
    to: recipient,
    subject: "We got your message",
    text: autoresponder.text,
    html: autoresponder.html,
    replyTo: requireConfig().replyTo,
  });
}
