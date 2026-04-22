"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Footer from "./components/Footer";

const MINT  = "#aaf0ee";
const AMBER = "#fed383";

/* ── Connecticut SVG outline ── */
function CTShape() {
  return (
    <svg
      viewBox="0 0 800 439.2"
      className="w-full max-w-xs opacity-90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ctGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={MINT} stopOpacity="0.6" />
          <stop offset="100%" stopColor={AMBER} stopOpacity="0.4" />
        </linearGradient>
        <filter id="ctGlow">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Connecticut outline path adapted from a state outline SVG */}
      <path
        d="M677.1085162621312,300.96288589456344L674.4340826308944,297.4520716521747L668.8577419020367,295.20403748883655L659.4723780406857,296.927588332499L657.8112353051583,295.9817660344088L657.4439443621523,295.7371868179416L653.4309049999683,294.56728625265896L650.5394919292921,294.63305854712416L647.115044019476,297.8918734136041L642.72977534866,300.0887189192017L640.1087377956974,297.84419431940296L639.2608821482572,297.8959836763661L637.4216496025547,301.71167948710354L633.674664688162,302.26442532211877L632.1777226095146,307.41941248661897L630.4199730965411,307.27724758527984L627.0063278615235,303.2482435916154L607.6883674985147,302.09921921198475L604.6154694912912,304.3470856049262L602.9558699950285,307.29162846219333L599.2520957798115,310.5374003357665L592.3380752635603,310.414150358014L583.8937787007235,305.9504757592731L580.0844469203766,302.93633519531977L578.942449870683,300.92260990495197L576.9362388374429,300.30613311762136L574.806568663691,300.6349225034428L571.5966310105105,303.71712671827663L571.1027944484813,304.7444493113926L570.7941465972108,310.5378111680784L571.603421263233,314.903370478798L570.4586463828855,316.25187931199434L568.9515189251433,315.8912430233886L568.0465634252287,313.71417830512837L564.234145166367,310.55835277560254L561.0689614516123,309.99715039601506L557.1707390900992,310.3771752541361L556.0182480134645,310.7337774623793L556.444182048217,312.47317227673557L556.1947945843931,314.2761243955156L553.0576978241043,317.1805570301658L535.6891572897075,319.29327138766894L532.6536056724872,319.0148166198851L530.7094328573512,317.18466433470894L526.1571856990049,319.43126559890516L526.3346582134836,322.6131493662324L514.4328884207389,325.8570664531362L510.7109039823008,319.13309864454095L508.475676243419,319.0402801553828L494.2794183243532,318.8402675398138L487.9169515183203,322.4468367111476L483.8569976827421,322.12734925941913L479.58500277334315,324.1867034792522L477.39360302934074,326.5546626640844L473.6818039699938,326.0808411994476L472.86326986843414,324.2959290166182L470.36198768175745,324.78004737636L469.17955776354574,325.4908109122098L468.09959893196356,328.15261925347113L464.8621916200136,330.49600722414107L457.4851993268603,323.270176927359L453.71969554139287,321.79184227147925L449.18257212775643,323.02379347878923L443.25622473555995,321.66864403714135L435.7557733019021,323.7218740359731L431.9594047313076,324.17397415835876L429.18157406989485,322.8188828528182L426.24911083500047,323.722284666248L422.3601479090248,327.5819314023083L422.1749591982625,330.1684050297281L420.6625847270516,332.05678378634366L419.33385572734187,332.76571252920803L414.4414786368943,332.9668527672693L413.4911519028392,331.10850585559274L414.252277504067,330.2829430939946L413.8658503942861,328.9901535340796L410.78585348648267,326.94923376863153L407.5839406774285,328.76024476747625L400.90757900664903,323.7567775867283L399.97145007375366,323.7567775867283L391.12405941716133,324.6260666577291L381.0636827050839,329.7796288123682L380.8676913195304,329.03367175733183L378.5494373086585,327.92763009756527L372.1036355827782,327.9543168661894L371.3496088821339,328.42482076371743L370.1628578940072,331.6286260840807L367.9131237061156,332.63148136792734L361.7089932477829,333.73979193357445L357.3879233300322,333.2882635272108L354.6409574537429,331.8104810533696L354.3631743876067,331.3999714722577L355.0421996603909,329.5526006007185L357.6039768259179,328.15672487746815L357.8817598920614,326.6376010888962L353.45111998710854,317.1780926471238L350.78841497422036,317.5473368449839L349.7899391753708,318.3593276059164L349.5479592599768,322.9420758016586L344.97997106120965,327.21241480522804L336.831359139891,330.04524527506146L329.3620811392029,337.47487182525947L325.75059263152434,341.90703924898844L322.7875732593493,347.03594890508066L320.5035791599621,349.45645384024283L318.89830168552,349.5385010305181L318.80570733013883,348.5949432021753L318.15754684247804,348.2667414006919L309.4842335739995,347.03594890508066L306.7989972679716,348.4718679968628L300.59517545748895,353.674175015507L292.5570594669189,362.6230500143902L291.78729172585736,364.0400952797627L291.057339557603,367.74677485031134L291.1807986981112,368.85363674542896L291.674635260144,370.1977977192091L290.84128606171726,371.3951470756765L284.9149386695244,373.03470361161817L272.62427258418757,367.4044583293926L272.4307503814416,365.5952328295716L270.24768412942285,364.8769205295939L262.56790829417514,368.40310846161265L254.65448603552068,374.7540810828523L252.56710061739795,374.18274353646666L248.58554333604116,381.39529640816363L244.14101427778223,385.04181677569613L236.6096980589973,380.7806656232351L233.6466786868259,381.68211929951394L228.86232834432303,385.53344461407323L223.05974874048843,388.11434332867793L210.20888680509597,390.562281247594L204.0772885918086,397.2479163414573L201.61057496447756,397.8199925862027L197.43889060674337,403.1597398121721L190.8359871245666,409.9396635411631L186.11336635231783,409.77593716303636L180.59628601090662,412.1289988651097L177.7798743680869,418.41073598388175L172.85292871829733,413.42802676210704L165.57624697680512,417.28913389304944L165.61853173242707,421.0703134786818L163.79750940994927,425.2432751049728L161.88389273208668,426.42958738294874L161.1730767306144,424.1706402146192L161.47555162486242,421.36530582011255L160.67399315511648,420.181225481836L159.8863238386839,420.0789355190045L154.8998091535941,423.1818310191902L151.66703155942014,426.2659612083353L149.9077388071928,428.6793465372575L149.16698396414722,432.48305752579654L144.87677883152355,432.76933663140335L144.56195802323418,428.82659695115944L141.25603088830394,426.5940306873854L138.7087601717867,426.97895499612787L126.5091452025772,432.248306390331L124.13348269136623,435.08726747432047L122.23190327970588,439.1999999999989L121.51121054699252,438.0804895009296L121.7886849652823,435.7955298041652L121.60349625452,433.34188572133826L122.77666673719432,429.98821089711055L123.05444980333414,428.3521205146444L122.83839630744478,427.90217824575484L120.58495834533824,424.75237198771174L118.17750510545011,420.82482501768754L115.24504187055209,416.0373528042837L113.02277734142626,412.39503047467406L110.83137759742385,408.87542428609413L103.8553188630649,397.2888670852426L102.09602611083756,394.8317121363161L100.49105728424911,391.9237888577245L127.68385892450169,375.20778165955926L130.00458211818477,373.803621172925L150.74942149759954,361.40275668930553L166.28181596480135,351.86156316089L167.86517944181105,350.8852698188166L176.13015160306168,345.9843971448063L165.11913950907547,327.94241046500247L155.06431845832412,312.04757736581996L155.69149089209895,307.0450980754722L155.49241302803057,303.6209673070007L155.6779103866429,299.3608411481655L156.9881205152742,282.8835630113899L157.3902886654796,278.6690824633206L158.08659821793844,266.5850150574879L159.16563110597053,255.0969615040358L159.22859526763204,254.27975551251438L159.38291919326366,252.13719858118384L159.66131955510718,247.9219862431546L159.68632003106177,247.2099832878066L159.71749346403885,246.31387856508445L159.72613560387617,246.11908711799333L159.75329661478463,245.52193746617377L160.1854036065597,237.80515117192408L160.2162683916904,237.59917489393774L160.2162683916904,237.3861937515885L160.25299748598627,236.91285046774283L160.28231903185952,236.53878386872202L160.3088627470679,236.24010358126907L161.51320666271567,216.66369621079502L164.2990621682584,178.46811284300748L164.6151175679588,169.62134281845283L165.6126674232546,150.45757301276717L167.11393057182067,128.39453778110146L167.41023250904254,121.02729243876456L169.2476131676376,94.10921008126024L169.2673666301198,93.89714826804084L170.18096426987177,79.63209743825428L171.3167883625356,65.62514114630176L171.865255594239,53.23650640482083L172.96157276194208,38.23896585699913L173.99862954220225,20.98027762363563L174.7088282479708,0.39445578355480393L191.53075343777164,0L234.2451468704312,1.4975706002078368L234.6534879776591,1.5158584755918127L253.80230931816914,2.3450340641902585L254.19058831506482,2.373296231893619L308.6805145692997,4.457963315639063L325.2564474216415,4.959987738484415L367.17576398943856,5.351875998918331L367.21094984448064,5.352291571918613L372.2965404898205,5.6909814017508324L382.66741694027223,5.857207950060911L381.67974381622116,22.0173294227734L397.1127536753156,19.774555110041547L397.2979423860743,17.822355863940174L398.18499631061786,16.972065700809253L398.1933298025979,15.703848829909475L398.8106255051316,14.956099909022669L399.273597282041,13.959068427715465L398.77482235438947,13.465523922213833L398.47975500857865,12.804126592891407L398.5288300169268,12.076238031480898L399.02050604399847,11.943703652239492L399.76342142200156,12.351275906858064L399.9745365522649,12.317207926616902L401.03289003426835,10.469161898630773L401.7427800921796,8.474722570830636L401.1872139598963,7.68521539833273L399.95262255482885,7.1865671297364315L400.4773239019851,5.981461611605482L418.9687253192933,5.735031538941257L435.2631713312767,7.560554213767318L446.127884343754,8.225407065856416L446.4365321950245,10.635358378736782L451.59095131120193,10.760005052628912L454.02957798406715,10.760005052628912L456.8385820784533,8.497160850853106L470.75860017063314,6.771019714235081L492.81179779157173,6.894022430442419L535.8780497746848,7.763336107436771L556.7503607166764,7.880101204618768L591.8855975135994,8.453946368630568L614.1671945444796,9.658108073221229L637.6769013755547,9.852148319196203L667.4756168240565,10.89586925722324L695.2940476588337,11.227840322091652L695.7286238334163,17.668665969687936L696.1360389970941,47.837059921817854L697.2968635657089,86.93130035306967L697.2968635657089,87.32901933343419L697.7212543612004,100.36385680606145L697.7271186703802,101.0549538549476L698.2533632567902,116.25867505502902L698.6805318829465,135.0976669996944L699.5089427157436,163.51021755822694L698.7799164910539,187.90585860582723L696.2098058335432,262.1753486879388L689.8186347773444,260.9858694114391L683.2570901072395,264.06441288012684L682.3576902686436,264.99613743540067L682.077129371839,266.65250220043526L682.4910261403929,270.9610391055394L685.1725586722059,275.4186216703547L685.7373842400266,281.02297246258786L683.8469161510111,284.05397433103826L684.3984698612294,287.99910891494255L686.3602356038864,291.8602050778645L683.4533901406467,296.177427799068L676.8174613383853,301.8468875147737ZM194.81692711021606,413.6780844862187L200.5438879904941,407.48734748804236L211.57835732117383,397.0742844954493L216.45746255401173,397.0742844954493L206.06096833190895,408.89425350000965Z"
        fill="url(#ctGrad)"
        fillOpacity="0.12"
        stroke="url(#ctGrad)"
        strokeWidth="4"
        filter="url(#ctGlow)"
      />
      {/* State label */}
      <text
        x="400"
        y="205"
        textAnchor="middle"
        fill={MINT}
        fillOpacity="0.7"
        fontSize="32"
        fontWeight="800"
        letterSpacing="10"
        fontFamily="system-ui, sans-serif"
      >
        CONNECTICUT
      </text>
      {/* Dot markers for cities */}
      {[
        { x: 205, y: 385, label: "Fairfield" },
        { x: 405, y: 145, label: "Hartford" },
        { x: 430, y: 328, label: "New Haven" },
      ].map((city) => (
        <g key={city.label}>
          <circle cx={city.x} cy={city.y} r="10" fill={AMBER} fillOpacity="0.8" />
          <circle cx={city.x} cy={city.y} r="18" fill={AMBER} fillOpacity="0.15" />
        </g>
      ))}
    </svg>
  );
}

const differentiators = [
  {
    icon: "✦",
    title: "Brand new machines, every time",
    desc: "We never place refurbished or secondhand equipment. Every machine is new, warrantied, and ready to impress.",
    color: MINT,
  },
  {
    icon: "◈",
    title: "AI-powered inventory",
    desc: "Our system tracks real-time trends and sales data to automatically suggest the right products for your location.",
    color: AMBER,
  },
  {
    icon: "◉",
    title: "Self-vend technology available",
    desc: "User pays, door unlocks, AI camera tracks their selection. Hands-free and completely seamless.",
    color: MINT,
  },
  {
    icon: "◆",
    title: "Card and cash on all machines",
    desc: "Every VendyBites machine accepts cash, chip cards, Apple Pay, and Google Pay. Nobody gets turned away.",
    color: AMBER,
  },
];

const categories = [
  {
    icon: "🧴",
    label: "Health & Beauty",
    desc: "Tampons, pads, condoms, lash kits, press-on nails, lip balm, lotion, sunscreen, deodorant, wipes, toothbrush kits, hair ties, and clips.",
  },
  {
    icon: "🍫",
    label: "Snacks (Premium + Healthy)",
    desc: "Protein bars, cookies, jerky, nuts, trail mix, dried fruit, gourmet popcorn, candy, keto snacks, vegan snacks, and more.",
  },
  {
    icon: "🍜",
    label: "Shelf-Stable Meals / Late Night",
    desc: "Cup noodles, ramen, mac and cheese cups, instant oatmeal, microwave popcorn, crackers, and dip packs.",
  },
  {
    icon: "🥤",
    label: "Drinks",
    desc: "Energy drinks, bottled coffee, cold brew, sports drinks, electrolytes, coconut water, and sparkling water.",
  },
  {
    icon: "🔌",
    label: "Tech & Accessories",
    desc: "Phone chargers, USB-C and Lightning cables, earbuds, power banks, and screen wipes.",
  },
  {
    icon: "🛍️",
    label: "Convenience / Emergency",
    desc: "Travel hygiene kits, compact umbrellas, baby wipes, small diaper packs, band-aids, and basic meds.",
  },
  {
    icon: "🎮",
    label: "Fun / Impulse",
    desc: "Trading cards, mystery boxes, blind bags, mini toys, and small books or journals.",
  },
  {
    icon: "💊",
    label: "Wellness / Fitness",
    desc: "Protein and supplement packets, electrolyte sticks, vitamin packs, sleep aids like melatonin, and more.",
  },
  {
    icon: "🔥",
    label: "High-Performing Combos",
    desc: "College: ramen + energy drinks + candy. Gym: protein + electrolytes + healthy snacks. Nightlife: hygiene + beauty + chargers. Transit: chargers + drinks + snacks.",
  },
  {
    icon: "🎛️",
    label: "Build Your Own",
    desc: "Start with a proven mix or tailor the machine around your audience, space, and budget. And more!",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "#0A0A0F" }}>
      <Hero />
      <Marquee />

      {/* ── What We Do ── */}
      <section className="py-24 px-6 relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 50% 50%, ${MINT}06 0%, transparent 65%)` }}
        />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-6"
            style={{ background: `${MINT}15`, color: MINT }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            WHAT WE DO
          </motion.div>
          <motion.h2
            className="text-5xl font-black text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Modern vending for{" "}
            <span style={{ color: MINT }}>Connecticut businesses.</span>
          </motion.h2>
          <motion.p
            className="text-xl text-white/50 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            VendyBites places brand-new, tech-enabled vending machines in Connecticut workplaces,
            gyms, salons, apartments, and more — stocked with the right products for your
            specific space and people. We handle every aspect of setup, stocking, and support
            so it&apos;s completely hands-off for you.
          </motion.p>
        </div>
      </section>

      {/* ── Connecticut Coverage ── */}
      <section className="py-20 px-6 border-y" style={{ borderColor: `${MINT}10` }}>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            className="flex-shrink-0 flex justify-center w-full lg:w-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ background: `radial-gradient(circle, ${MINT}, ${AMBER})` }}
              />
              <CTShape />
            </div>
          </motion.div>

          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest"
              style={{ background: `${AMBER}15`, color: AMBER }}
            >
              CONNECTICUT COVERAGE
            </div>
            <h2 className="text-4xl font-black text-white leading-tight">
              Serving all of Connecticut —<br />
              <span style={{ color: AMBER }}>not just the major cities.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              Proudly serving businesses from Fairfield County to Hartford to
              New Haven — and everywhere in between. We&apos;re not a national
              company that parachutes into a market. We live and operate here,
              and every business we work with gets our direct attention.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Fairfield County", "Hartford", "New Haven", "Stamford", "Bridgeport", "Waterbury", "Norwalk", "Danbury"].map((city) => (
                <span
                  key={city}
                  className="px-3 py-1.5 rounded-full text-sm font-medium"
                  style={{ background: `${MINT}10`, border: `1px solid ${MINT}25`, color: "rgba(255,255,255,0.6)" }}
                >
                  {city}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Our Differentiators ── */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-4"
              style={{ background: `${MINT}15`, color: MINT }}
            >
              WHY VENDYBITES
            </div>
            <h2 className="text-5xl font-black text-white mb-4">Built Different.</h2>
            <p className="text-white/40 text-lg max-w-md mx-auto">
              Four things that set us apart from every other vending company in Connecticut.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                className="card-shine rounded-2xl p-8 border border-white/5 group relative overflow-hidden"
                style={{ background: "rgba(255,255,255,0.02)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ borderColor: `${item.color}40`, background: `${item.color}06` }}
              >
                <div
                  className="text-3xl font-black mb-5 select-none"
                  style={{ color: item.color }}
                >
                  {item.icon}
                </div>
                <div className="w-2 h-2 rounded-full mb-4 opacity-70" style={{ background: item.color }} />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
                <div
                  className="absolute top-0 right-0 w-28 h-28 rounded-bl-full opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ background: item.color }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Machine Categories Teaser ── */}
      <section className="py-20 px-6 relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 50% 50%, ${AMBER}06 0%, transparent 65%)` }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-4"
              style={{ background: `${AMBER}15`, color: AMBER }}
            >
              POPULAR OPTIONS
            </div>
            <h2 className="text-5xl font-black text-white mb-4">Any Space. Any Mix.</h2>
            <p className="text-white/40 text-lg max-w-3xl mx-auto">
              Health and beauty, premium snacks, late-night meals, drinks, tech essentials,
              wellness, emergency items, fun impulse buys, high-performing combos, or a build-your-own setup.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.label}
                className="card-shine rounded-2xl p-7 border border-white/5 text-left group"
                style={{ background: "rgba(255,255,255,0.02)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ borderColor: `${MINT}40`, background: `${MINT}06`, scale: 1.02 }}
              >
                <div className="text-5xl mb-5">{cat.icon}</div>
                <h3 className="text-lg font-black text-white mb-2">{cat.label}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{cat.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/our-machines">
              <motion.button
                className="px-8 py-3 rounded-full font-bold text-sm border"
                style={{ borderColor: `${MINT}40`, color: MINT, background: `${MINT}08` }}
                whileHover={{ scale: 1.05, background: `${MINT}15` }}
                whileTap={{ scale: 0.95 }}
              >
                Explore All Options
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── The Local Difference ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="rounded-3xl p-10 lg:p-16 border relative overflow-hidden text-center"
            style={{ background: `${MINT}06`, borderColor: `${MINT}20` }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: `radial-gradient(ellipse at 50% 0%, ${MINT}10 0%, transparent 60%)` }}
            />
            <div className="relative z-10">
              <div
                className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-8"
                style={{ background: `${MINT}15`, color: MINT }}
              >
                THE LOCAL DIFFERENCE
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
                When you partner with VendyBites,<br />
                <span style={{ color: MINT }}>you work directly with us.</span>
              </h2>
              <p className="text-xl text-white/55 max-w-3xl mx-auto leading-relaxed mb-10">
                No call centers. No ticket systems. No getting bounced around to reps who
                don&apos;t know your machine. Just real support from real people based right
                here in Connecticut — available from day one.
              </p>
              <div
                className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl border"
                style={{ background: "rgba(255,255,255,0.03)", borderColor: `${AMBER}30` }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-black text-lg"
                  style={{ background: `linear-gradient(135deg, ${MINT}30, ${AMBER}30)`, border: `2px solid ${AMBER}40` }}
                >
                  VB
                </div>
                <div className="text-left">
                  <div className="font-bold text-white text-sm">Your direct line to the founders</div>
                  <div className="text-xs mt-0.5" style={{ color: AMBER }}>Connecticut-based. Always reachable.</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Partner CTA Banner ── */}
      <section className="py-20 px-6 relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 50% 50%, ${AMBER}08 0%, transparent 65%)` }}
        />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
              Have a space?{" "}
              <span style={{ color: AMBER }}>Let&apos;s talk.</span>
            </h2>
            <p className="text-xl text-white/45 mb-10 max-w-xl mx-auto">
              Tell us about your business and we&apos;ll figure out the right machine together.
              No commitment required.
            </p>
            <Link href="/for-businesses">
              <motion.button
                className="px-10 py-4 rounded-2xl font-bold text-lg"
                style={{
                  background: `linear-gradient(135deg, ${MINT}, ${AMBER})`,
                  color: "#0A0A0F",
                  boxShadow: `0 0 40px ${MINT}50`,
                }}
                whileHover={{ scale: 1.05, boxShadow: `0 0 60px ${MINT}80` }}
                whileTap={{ scale: 0.95 }}
              >
                Partner With Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
