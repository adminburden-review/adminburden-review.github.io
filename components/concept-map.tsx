import Link from "next/link";

type ArrowTone = "main" | "context" | "feedback";

const exploreLinks = [
  { label: "Explore State Actions", href: "/library?focus=state-actions" },
  { label: "Explore Burden Experiences", href: "/library?focus=burden-experiences" },
  { label: "Explore Outcomes", href: "/library?relationship=Citizen%20Experience%20-%3E%20Outcomes" },
  { label: "Explore Distributive Effects", href: "/library?focus=distributive-effects" },
  {
    label: "Explore Feedback",
    href: "/library?relationship=Feedback%20%2F%20Burden%20Tolerance%20%2F%20State%20Action%20-%3E%20Institutional%20Design"
  }
];

export function ConceptMap() {
  return (
    <section className="space-y-5 rounded-3xl border border-marino/20 bg-white p-6 shadow-card">
      <div className="max-w-4xl">
        <h2 className="font-serif text-2xl text-tinta">
          Conceptual Framework of Administrative Burden
        </h2>
        <p className="mt-2 text-sm leading-6 text-marino/80">
          The framework is presented as a stable analytical composition rather than as an
          interactive diagram. Structural conditions shape state action, state action generates
          burden, burden shapes outcomes, and outcomes produce both distributive effects and later
          feedback into state action.
        </p>
      </div>

      <div className="rounded-3xl border border-marino/15 bg-[#fcfbf8] p-4 md:p-6">
        <div className="hidden md:block">
          <svg
            viewBox="0 0 1120 760"
            className="h-auto w-full"
            role="img"
            aria-label="Static conceptual framework of administrative burden"
          >
            <defs>
              <marker
                id="framework-arrow-main"
                viewBox="0 0 12 12"
                refX="9"
                refY="6"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 12 6 L 0 12 z" fill="#17365d" />
              </marker>
              <marker
                id="framework-arrow-context"
                viewBox="0 0 12 12"
                refX="9"
                refY="6"
                markerWidth="5"
                markerHeight="5"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 12 6 L 0 12 z" fill="#5b6b61" />
              </marker>
              <marker
                id="framework-arrow-feedback"
                viewBox="0 0 12 12"
                refX="9"
                refY="6"
                markerWidth="5"
                markerHeight="5"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 12 6 L 0 12 z" fill="#8a7256" />
              </marker>
            </defs>

            <rect x="42" y="38" width="1036" height="684" rx="24" fill="#ffffff" stroke="#d8dde5" />

            <path
              d="M 280 170 V 216 H 220 V 252"
              fill="none"
              stroke="#5b6b61"
              strokeWidth="4"
              strokeLinecap="round"
              markerEnd="url(#framework-arrow-context)"
            />
            <path
              d="M 560 170 V 244"
              fill="none"
              stroke="#5b6b61"
              strokeWidth="4"
              strokeLinecap="round"
              markerEnd="url(#framework-arrow-context)"
            />
            <path
              d="M 840 170 V 216 H 900 V 252"
              fill="none"
              stroke="#5b6b61"
              strokeWidth="4"
              strokeLinecap="round"
              markerEnd="url(#framework-arrow-context)"
            />

            <path
              d="M 340 360 H 442"
              fill="none"
              stroke="#17365d"
              strokeWidth="7"
              strokeLinecap="round"
              markerEnd="url(#framework-arrow-main)"
            />
            <path
              d="M 678 360 H 782"
              fill="none"
              stroke="#17365d"
              strokeWidth="7"
              strokeLinecap="round"
              markerEnd="url(#framework-arrow-main)"
            />

            <path
              d="M 886 462 V 520 H 694 V 552"
              fill="none"
              stroke="#5b6b61"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              markerEnd="url(#framework-arrow-context)"
            />
            <path
              d="M 958 462 V 552"
              fill="none"
              stroke="#8a7256"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="10 9"
              markerEnd="url(#framework-arrow-feedback)"
            />
            <path
              d="M 872 634 H 146 V 430"
              fill="none"
              stroke="#8a7256"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="10 9"
              markerEnd="url(#framework-arrow-feedback)"
            />

            <rect x="82" y="62" width="956" height="108" rx="18" fill="#f8f4ed" stroke="#d2d9e1" />
            <text x="98" y="95" fontSize="13" fill="#76879a" letterSpacing="2.2" fontWeight="700">
              1. STRUCTURAL AND DISTRIBUTIVE CONDITIONS
            </text>
            <text
              x="98"
              y="132"
              fontSize="24"
              fill="#10243f"
              fontFamily="var(--font-serif)"
            >
              Structural and Distributive Conditions
            </text>
            <rect x="98" y="144" width="430" height="26" rx="13" fill="#ffffff" stroke="#d5dbe3" />
            <rect x="592" y="144" width="430" height="26" rx="13" fill="#ffffff" stroke="#d5dbe3" />
            <text x="114" y="161" fontSize="14" fill="#10243f" fontWeight="500">
              Citizen Position and Resources
            </text>
            <text x="608" y="161" fontSize="14" fill="#10243f" fontWeight="500">
              State Characteristics and Administrative Capacity
            </text>

            <rect x="82" y="252" width="258" height="196" rx="18" fill="#fbf5ea" stroke="#d9c7a6" />
            <text x="98" y="285" fontSize="13" fill="#7f8ea0" letterSpacing="2.1" fontWeight="700">
              2. STATE ACTIONS
            </text>
            <text
              x="98"
              y="326"
              fontSize="22"
              fill="#10243f"
              fontFamily="var(--font-serif)"
            >
              State Actions
            </text>
            <rect x="98" y="346" width="226" height="40" rx="12" fill="#ffffff" stroke="#d5dbe3" />
            <rect x="98" y="396" width="226" height="40" rx="12" fill="#ffffff" stroke="#d5dbe3" />
            <text x="112" y="370" fontSize="14" fill="#10243f" fontWeight="500">
              Formal Policy Design
            </text>
            <text x="112" y="419" fontSize="14" fill="#10243f" fontWeight="500">
              Informal Policy Design /
            </text>
            <text x="112" y="438" fontSize="14" fill="#10243f" fontWeight="500">
              Implementation
            </text>

            <rect x="442" y="232" width="236" height="256" rx="18" fill="#ffffff" stroke="#cad3de" />
            <text x="458" y="265" fontSize="13" fill="#7f8ea0" letterSpacing="2.1" fontWeight="700">
              3. EXPERIENCES OF BURDEN
            </text>
            <text
              x="458"
              y="306"
              fontSize="25"
              fill="#10243f"
              fontFamily="var(--font-serif)"
            >
              Experiences of Burden
            </text>
            <rect x="458" y="332" width="204" height="40" rx="12" fill="#f7f4ee" stroke="#d5dbe3" />
            <rect x="458" y="382" width="204" height="40" rx="12" fill="#f7f4ee" stroke="#d5dbe3" />
            <rect x="458" y="432" width="204" height="40" rx="12" fill="#f7f4ee" stroke="#d5dbe3" />
            <text x="472" y="356" fontSize="14" fill="#10243f" fontWeight="500">
              Learning Costs
            </text>
            <text x="472" y="406" fontSize="14" fill="#10243f" fontWeight="500">
              Compliance Costs
            </text>
            <text x="472" y="456" fontSize="14" fill="#10243f" fontWeight="500">
              Psychological Costs
            </text>

            <rect x="782" y="252" width="258" height="210" rx="18" fill="#f6faf7" stroke="#bfd0c4" />
            <text x="798" y="285" fontSize="13" fill="#7f8ea0" letterSpacing="2.1" fontWeight="700">
              4. OUTCOMES
            </text>
            <text
              x="798"
              y="326"
              fontSize="22"
              fill="#10243f"
              fontFamily="var(--font-serif)"
            >
              Outcomes
            </text>
            <rect x="798" y="342" width="226" height="34" rx="11" fill="#ffffff" stroke="#d5dbe3" />
            <rect x="798" y="384" width="226" height="34" rx="11" fill="#ffffff" stroke="#d5dbe3" />
            <rect x="798" y="426" width="226" height="34" rx="11" fill="#ffffff" stroke="#d5dbe3" />
            <rect x="798" y="468" width="226" height="34" rx="11" fill="#ffffff" stroke="#d5dbe3" />
            <text x="812" y="364" fontSize="14" fill="#10243f" fontWeight="500">
              Access / Take-up
            </text>
            <text x="812" y="406" fontSize="14" fill="#10243f" fontWeight="500">
              Exclusion / Drop-off
            </text>
            <text x="812" y="448" fontSize="14" fill="#10243f" fontWeight="500">
              Appeals / Correction
            </text>
            <text x="812" y="490" fontSize="14" fill="#10243f" fontWeight="500">
              Trust / Stress / Wellbeing
            </text>

            <rect x="520" y="552" width="320" height="130" rx="18" fill="#fbfaf7" stroke="#d2d9e1" />
            <text x="536" y="585" fontSize="13" fill="#7f8ea0" letterSpacing="2.1" fontWeight="700">
              5. DISTRIBUTIVE EFFECTS
            </text>
            <text
              x="536"
              y="626"
              fontSize="22"
              fill="#10243f"
              fontFamily="var(--font-serif)"
            >
              Distributive Effects
            </text>
            <rect x="536" y="642" width="288" height="34" rx="11" fill="#ffffff" stroke="#d5dbe3" />
            <rect x="536" y="684" width="288" height="34" rx="11" fill="#ffffff" stroke="#d5dbe3" />
            <text x="550" y="664" fontSize="14" fill="#10243f" fontWeight="500">
              Unequal burden across groups
            </text>
            <text x="550" y="706" fontSize="14" fill="#10243f" fontWeight="500">
              Unequal outcomes across groups
            </text>

            <rect
              x="872"
              y="552"
              width="168"
              height="116"
              rx="18"
              fill="#ffffff"
              stroke="#c5cfdb"
              strokeDasharray="7 6"
            />
            <text x="888" y="585" fontSize="13" fill="#7f8ea0" letterSpacing="2.1" fontWeight="700">
              6. FEEDBACK
            </text>
            <text
              x="888"
              y="620"
              fontSize="18"
              fill="#10243f"
              fontFamily="var(--font-serif)"
            >
              Feedback / Burden
            </text>
            <text
              x="888"
              y="647"
              fontSize="18"
              fill="#10243f"
              fontFamily="var(--font-serif)"
            >
              Tolerance / State
            </text>
            <text
              x="888"
              y="674"
              fontSize="18"
              fill="#10243f"
              fontFamily="var(--font-serif)"
            >
              Action
            </text>
          </svg>
        </div>

        <div className="space-y-4 md:hidden">
          <MobilePanel
            step="1"
            title="Structural and Distributive Conditions"
            tone="band"
            items={[
              "Citizen Position and Resources",
              "State Characteristics and Administrative Capacity"
            ]}
          />
          <MobileArrow label="Structural and Distributive Conditions shape State Actions, Burden, and Outcomes." tone="context" />
          <MobilePanel
            step="2"
            title="State Actions"
            tone="actions"
            items={["Formal Policy Design", "Informal Policy Design / Implementation"]}
          />
          <MobileArrow label="State Actions generate Experiences of Burden." tone="main" />
          <MobilePanel
            step="3"
            title="Experiences of Burden"
            tone="burden"
            items={["Learning Costs", "Compliance Costs", "Psychological Costs"]}
          />
          <MobileArrow label="Experiences of Burden shape Outcomes." tone="main" />
          <MobilePanel
            step="4"
            title="Outcomes"
            tone="outcomes"
            items={[
              "Access / Take-up",
              "Exclusion / Drop-off",
              "Appeals / Correction",
              "Trust / Stress / Wellbeing"
            ]}
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <MobilePanel
              step="5"
              title="Distributive Effects"
              tone="effects"
              items={["Unequal burden across groups", "Unequal outcomes across groups"]}
            />
            <MobilePanel
              step="6"
              title="Feedback / Burden Tolerance / State Action"
              tone="feedback"
              items={["Later state response shaped by observed outcomes"]}
            />
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-marino/15 bg-fondo/60 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-marino/60">
          Reading guide
        </p>
        <p className="mt-2 text-sm leading-6 text-marino/80">
          Dark solid arrows mark the main analytical pathway. Lighter solid arrows indicate
          contextual shaping. Dashed arrows capture feedback from outcomes back into later state
          action.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {exploreLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="rounded-full border border-marino/20 bg-white px-4 py-2 text-sm font-semibold text-marino transition hover:bg-fondo"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

function MobilePanel({
  step,
  title,
  tone,
  items
}: {
  step: string;
  title: string;
  tone: "band" | "actions" | "burden" | "outcomes" | "effects" | "feedback";
  items: string[];
}) {
  return (
    <div className={mobilePanelClassName(tone)}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-marino/55">
        {step}. {title}
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-xl border border-marino/12 bg-white/88 px-3 py-2 text-sm font-medium text-tinta"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileArrow({ label, tone }: { label: string; tone: ArrowTone }) {
  return (
    <div className="rounded-2xl border border-marino/12 bg-white px-4 py-3">
      <div className="flex items-center gap-3">
        <span className={legendLineClassName(tone)} />
        <p className="text-sm text-marino/80">{label}</p>
      </div>
    </div>
  );
}

function mobilePanelClassName(
  tone: "band" | "actions" | "burden" | "outcomes" | "effects" | "feedback"
) {
  const base = "rounded-2xl border p-4 shadow-[0_8px_18px_rgba(16,36,63,0.05)]";

  switch (tone) {
    case "band":
      return `${base} border-marino/18 bg-[linear-gradient(180deg,rgba(246,243,237,0.96),rgba(255,255,255,0.99))]`;
    case "actions":
      return `${base} border-arena bg-[linear-gradient(180deg,rgba(232,220,196,0.66),rgba(255,255,255,0.99))]`;
    case "burden":
      return `${base} border-marino/24 bg-white`;
    case "outcomes":
      return `${base} border-musgo/28 bg-[linear-gradient(180deg,rgba(71,98,79,0.12),rgba(255,255,255,0.99))]`;
    case "effects":
      return `${base} border-marino/18 bg-[linear-gradient(180deg,rgba(246,243,237,0.94),rgba(255,255,255,0.99))]`;
    case "feedback":
    default:
      return `${base} border-marino/22 border-dashed bg-white`;
  }
}

function legendLineClassName(tone: ArrowTone) {
  if (tone === "main") {
    return "h-[5px] w-10 rounded-full bg-marino";
  }

  if (tone === "context") {
    return "h-[4px] w-10 rounded-full bg-musgo";
  }

  return "h-[3px] w-10 rounded-full bg-arena [background-image:linear-gradient(90deg,currentColor_62%,transparent_62%)] [background-size:14px_100%] text-[#8a7256]";
}
