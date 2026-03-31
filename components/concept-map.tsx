import Link from "next/link";

type TooltipSide = "top" | "bottom" | "right";
type RelationshipTone = "primary" | "secondary" | "feedback";
type NodeTone = "context" | "center" | "outcomes" | "support";

interface MapNode {
  label: string;
  eyebrow: string;
  description: string;
  href: string;
  tone: NodeTone;
  desktopClassName: string;
  tooltipSide?: TooltipSide;
}

interface Relationship {
  key: string;
  label: string;
  description: string;
  href: string;
  tone: RelationshipTone;
  path: string;
}

const burdenNodes = [
  {
    label: "Learning Costs",
    description: "Information search, eligibility clarity, and understanding of procedures.",
    href: "/library?burden=Learning%20Costs"
  },
  {
    label: "Compliance Costs",
    description: "Forms, documentation, time burdens, and repeated procedural steps.",
    href: "/library?burden=Compliance%20Costs"
  },
  {
    label: "Psychological Costs",
    description: "Stress, stigma, uncertainty, and adverse encounters with the state.",
    href: "/library?burden=Psychological%20Costs"
  }
];

const mapNodes: MapNode[] = [
  {
    label: "Distributive Factors",
    eyebrow: "Context",
    description:
      "Social position, place, race, gender, income, and administrative capacity condition exposure to burden and shape outcomes.",
    href: "/library?relationship=Distributive%20Factors%20-%3E%20Citizen%20Experience",
    tone: "support",
    desktopClassName: "left-1/2 top-6 w-[17rem] -translate-x-1/2",
    tooltipSide: "bottom"
  },
  {
    label: "Institutional Design",
    eyebrow: "Upstream rules",
    description:
      "Eligibility rules, sequencing, forms, deadlines, and channel design set the formal architecture citizens must navigate.",
    href: "/library?relationship=Institutional%20Design%20-%3E%20Citizen%20Experience",
    tone: "context",
    desktopClassName: "left-5 top-36 w-[17rem] xl:left-8",
    tooltipSide: "right"
  },
  {
    label: "Implementation / Street-Level Bureaucracy",
    eyebrow: "Administrative practice",
    description:
      "Frontline discretion, local routines, caseworker behavior, and digital interfaces reshape how burden is actually experienced.",
    href: "/library?relationship=Implementation%20%2F%20Street-Level%20Bureaucracy%20-%3E%20Citizen%20Experience",
    tone: "context",
    desktopClassName: "left-5 top-[25rem] w-[19rem] xl:left-8",
    tooltipSide: "right"
  },
  {
    label: "Citizen Experience",
    eyebrow: "Core mechanism",
    description:
      "The lived path through programs where citizens interpret rules, comply with demands, and absorb the emotional consequences of state action.",
    href: "/library",
    tone: "center",
    desktopClassName:
      "left-1/2 top-1/2 z-20 w-[24rem] -translate-x-1/2 -translate-y-1/2 xl:w-[25rem]",
    tooltipSide: "bottom"
  },
  {
    label: "Outcomes",
    eyebrow: "Consequences",
    description:
      "Take-up, drop-off, equity, trust, policy performance, and citizen-state relations emerge from the burden process.",
    href: "/library?relationship=Citizen%20Experience%20-%3E%20Outcomes",
    tone: "outcomes",
    desktopClassName: "right-6 top-[17rem] w-[16rem] xl:right-8",
    tooltipSide: "bottom"
  },
  {
    label: "Intermediation and Supports",
    eyebrow: "Mediating resources",
    description:
      "Brokers, NGOs, family members, community organizations, and administrative supports can soften or redistribute burden.",
    href: "/library?relationship=Intermediation%20and%20Supports%20-%3E%20Citizen%20Experience",
    tone: "support",
    desktopClassName: "bottom-7 left-[28%] w-[16rem] -translate-x-1/2 xl:left-[31%]",
    tooltipSide: "top"
  },
  {
    label: "Feedback / Burden Tolerance / State Action",
    eyebrow: "System learning",
    description:
      "Observed outcomes feed back into political tolerance for burden, administrative learning, and renewed state action.",
    href: "/library?relationship=Feedback%20%2F%20Burden%20Tolerance%20%2F%20State%20Action%20-%3E%20Institutional%20Design",
    tone: "support",
    desktopClassName: "bottom-8 right-8 w-[17rem]",
    tooltipSide: "top"
  }
];

const relationships: Relationship[] = [
  {
    key: "institutional-path",
    label: "Institutional Design -> Citizen Experience",
    description:
      "Primary pathway from formal program architecture into the burdens citizens confront.",
    href: "/library?relationship=Institutional%20Design%20-%3E%20Citizen%20Experience",
    tone: "primary",
    path: "M 282 224 C 338 234 382 248 428 274"
  },
  {
    key: "implementation-path",
    label: "Implementation / Street-Level Bureaucracy -> Citizen Experience",
    description:
      "Primary pathway from implementation practice into the lived citizen encounter with administration.",
    href: "/library?relationship=Implementation%20%2F%20Street-Level%20Bureaucracy%20-%3E%20Citizen%20Experience",
    tone: "primary",
    path: "M 300 432 C 350 420 390 404 432 382"
  },
  {
    key: "experience-outcomes",
    label: "Citizen Experience -> Outcomes",
    description:
      "Primary pathway from burdened experience to take-up, equity, trust, and program performance.",
    href: "/library?relationship=Citizen%20Experience%20-%3E%20Outcomes",
    tone: "primary",
    path: "M 606 332 C 660 330 714 328 758 320"
  },
  {
    key: "distribution-experience",
    label: "Distributive Factors -> Citizen Experience",
    description:
      "Secondary pathway showing how distributive conditions shape how rules are encountered and processed.",
    href: "/library?relationship=Distributive%20Factors%20-%3E%20Citizen%20Experience",
    tone: "secondary",
    path: "M 500 122 C 502 176 500 210 500 248"
  },
  {
    key: "distribution-outcomes",
    label: "Distributive Factors -> Outcomes",
    description:
      "Prepared pathway highlighting how distributive conditions can affect outcomes directly as well as through experience.",
    href: "/library",
    tone: "secondary",
    path: "M 558 118 C 658 142 742 188 806 244"
  },
  {
    key: "intermediation-experience",
    label: "Intermediation and Supports -> Citizen Experience",
    description:
      "Secondary pathway showing how support structures mediate or reduce burden during navigation.",
    href: "/library?relationship=Intermediation%20and%20Supports%20-%3E%20Citizen%20Experience",
    tone: "secondary",
    path: "M 348 562 C 402 502 438 452 468 404"
  },
  {
    key: "outcomes-feedback",
    label: "Outcomes -> Feedback / Burden Tolerance / State Action",
    description:
      "Feedback pathway linking observed outcomes to policy learning, burden tolerance, and later state response.",
    href: "/library",
    tone: "feedback",
    path: "M 834 362 C 836 430 830 486 806 534"
  },
  {
    key: "feedback-institutional",
    label: "Feedback / Burden Tolerance / State Action -> Institutional Design",
    description:
      "Feedback pathway from observed consequences back into redesign of rules, requirements, and administrative structure.",
    href: "/library?relationship=Feedback%20%2F%20Burden%20Tolerance%20%2F%20State%20Action%20-%3E%20Institutional%20Design",
    tone: "feedback",
    path: "M 740 566 C 630 520 472 404 260 258"
  },
  {
    key: "feedback-implementation",
    label: "Feedback / Burden Tolerance / State Action -> Implementation / Street-Level Bureaucracy",
    description:
      "Prepared pathway from system learning into implementation practice, routines, and frontline adjustments.",
    href: "/library",
    tone: "feedback",
    path: "M 760 568 C 658 544 490 486 276 434"
  }
];

const relationshipGroups = [
  {
    title: "Primary pathways",
    tone: "primary" as const,
    description: "Thicker arrows for the main burden-generating sequence."
  },
  {
    title: "Secondary pathways",
    tone: "secondary" as const,
    description: "Medium arrows for conditioning and mediating effects."
  },
  {
    title: "Feedback pathways",
    tone: "feedback" as const,
    description: "Dashed arrows for iterative learning and state response."
  }
];

export function ConceptMap() {
  return (
    <section className="space-y-5 rounded-3xl border border-marino/20 bg-white p-6 shadow-card">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="max-w-3xl">
          <h2 className="font-serif text-2xl text-tinta">Administrative Burden Analytical Map</h2>
          <p className="mt-2 text-sm leading-6 text-marino/80">
            The map foregrounds Citizen Experience as the central mechanism while making upstream
            design, implementation, distributive conditions, supports, outcomes, and feedback loops
            visibly relational. Nodes and pathways remain navigable and prepared for library
            filtering.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {relationshipGroups.map((group) => (
            <LegendBadge
              key={group.title}
              tone={group.tone}
              title={group.title}
              description={group.description}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4 lg:hidden">
        <MobileNodeCard node={mapNodes[0]} />

        <div className="grid gap-3 sm:grid-cols-2">
          <MobileNodeCard node={mapNodes[1]} />
          <MobileNodeCard node={mapNodes[2]} />
        </div>

        <MobileCenterCard />

        <MobileNodeCard node={mapNodes[4]} />

        <div className="grid gap-3 sm:grid-cols-2">
          <MobileNodeCard node={mapNodes[5]} />
          <MobileNodeCard node={mapNodes[6]} />
        </div>

        <div className="rounded-2xl border border-marino/15 bg-fondo p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-marino/60">
            Relationship index
          </p>
          <div className="mt-3 space-y-4">
            {relationshipGroups.map((group) => (
              <div key={group.title} className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className={legendLineClassName(group.tone)} />
                  <p className="text-sm font-semibold text-tinta">{group.title}</p>
                </div>
                <div className="grid gap-2">
                  {relationships
                    .filter((relationship) => relationship.tone === group.tone)
                    .map((relationship) => (
                      <Link
                        key={relationship.key}
                        href={relationship.href}
                        className="rounded-xl border border-marino/15 bg-white px-3 py-2 text-sm text-marino transition hover:-translate-y-0.5 hover:shadow-md"
                      >
                        <span className="font-medium text-tinta">{relationship.label}</span>
                        <span className="mt-1 block text-xs text-marino/75">
                          {relationship.description}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative hidden min-h-[42rem] overflow-hidden rounded-[2rem] border border-marino/15 bg-fondo lg:block">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(232,220,196,0.4),transparent_34%),radial-gradient(circle_at_78%_84%,rgba(71,98,79,0.16),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.92),rgba(244,240,233,0.88))]" />
        <div className="paper-grid absolute inset-0 bg-[linear-gradient(to_right,rgba(23,54,93,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,54,93,0.05)_1px,transparent_1px)] opacity-50" />

        <svg
          viewBox="0 0 1000 680"
          className="absolute inset-0 z-0 h-full w-full"
          fill="none"
          aria-label="Analytical relationships linking context, citizen experience, outcomes, and feedback"
        >
          <defs>
            <marker
              id="arrowhead-primary"
              viewBox="0 0 12 12"
              refX="10"
              refY="6"
              markerWidth="10"
              markerHeight="10"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 12 6 L 0 12 z" fill="#17365d" />
            </marker>
            <marker
              id="arrowhead-secondary"
              viewBox="0 0 12 12"
              refX="10"
              refY="6"
              markerWidth="9"
              markerHeight="9"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 12 6 L 0 12 z" fill="#47624f" />
            </marker>
            <marker
              id="arrowhead-feedback"
              viewBox="0 0 12 12"
              refX="10"
              refY="6"
              markerWidth="8"
              markerHeight="8"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 12 6 L 0 12 z" fill="#8a6c47" />
            </marker>
          </defs>

          {relationships.map((relationship) => (
            <a
              key={relationship.key}
              href={relationship.href}
              className="group cursor-pointer"
              aria-label={`${relationship.label}. ${relationship.description}`}
            >
              <title>{`${relationship.label}. ${relationship.description}`}</title>
              <path
                d={relationship.path}
                fill="none"
                stroke="transparent"
                strokeWidth="28"
                strokeLinecap="round"
              />
              <path
                d={relationship.path}
                fill="none"
                stroke={getRelationshipStroke(relationship.tone)}
                strokeWidth={getRelationshipStrokeWidth(relationship.tone) + 8}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={relationship.tone === "feedback" ? "8 12" : undefined}
                className="opacity-0 transition-opacity duration-200 group-hover:opacity-20"
              />
              <path
                d={relationship.path}
                fill="none"
                stroke={getRelationshipStroke(relationship.tone)}
                strokeWidth={getRelationshipStrokeWidth(relationship.tone)}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={relationship.tone === "feedback" ? "8 12" : undefined}
                markerEnd={`url(#${getMarkerId(relationship.tone)})`}
                className="opacity-85 transition-all duration-200 group-hover:opacity-100"
              />
            </a>
          ))}
        </svg>

        <div className="absolute right-6 top-5 z-20 max-w-xs rounded-2xl border border-marino/15 bg-white/90 p-4 shadow-card backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-marino/60">
            How to read the map
          </p>
          <p className="mt-2 text-sm leading-6 text-marino/80">
            Thick arrows mark the central burden-generating sequence. Medium arrows show
            conditioning and mediating pathways. Dashed arrows capture policy feedback and system
            learning.
          </p>
        </div>

        {mapNodes.map((node) =>
          node.label === "Citizen Experience" ? (
            <CenterNode key={node.label} node={node} />
          ) : (
            <ConceptNode key={node.label} node={node} />
          )
        )}
      </div>
    </section>
  );
}

function ConceptNode({ node }: { node: MapNode }) {
  return (
    <Link
      href={node.href}
      className={`group absolute z-10 block ${node.desktopClassName}`}
      aria-label={`${node.label}. ${node.description}`}
    >
      <div className={nodeCardClassName(node.tone)}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-marino/55">
          {node.eyebrow}
        </p>
        <h3 className="mt-2 font-serif text-2xl leading-tight text-tinta">{node.label}</h3>
      </div>

      <div className={tooltipClassName(node.tooltipSide ?? "bottom")}>
        {node.description}
      </div>
    </Link>
  );
}

function CenterNode({ node }: { node: MapNode }) {
  return (
    <div className={`group absolute z-20 ${node.desktopClassName}`}>
      <div className="rounded-[2rem] border border-marino/20 bg-white/95 p-6 shadow-[0_22px_50px_rgba(23,54,93,0.14)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_26px_56px_rgba(23,54,93,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marino/30">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-marino/55">
          {node.eyebrow}
        </p>
        <div className="mt-2 flex items-start justify-between gap-3">
          <h3 className="font-serif text-3xl text-tinta">{node.label}</h3>
          <Link
            href={node.href}
            className="rounded-full border border-marino/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-marino transition hover:bg-fondo"
          >
            Open map
          </Link>
        </div>
        <p className="mt-3 text-sm leading-6 text-marino/80">
          The central site where citizens interpret rules, complete administrative demands, and
          experience the costs of dealing with the state.
        </p>

        <div className="mt-4 grid gap-2">
          {burdenNodes.map((burden) => (
            <Link
              key={burden.label}
              href={burden.href}
              className="group/burden rounded-2xl border border-marino/15 bg-fondo px-4 py-3 transition hover:border-marino/30 hover:bg-white"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-semibold text-tinta">{burden.label}</span>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-marino/55">
                  Open
                </span>
              </div>
              <p className="mt-1 text-xs leading-5 text-marino/75">{burden.description}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className={tooltipClassName(node.tooltipSide ?? "bottom")}>
        {node.description}
      </div>
    </div>
  );
}

function MobileNodeCard({ node }: { node: MapNode }) {
  return (
    <Link
      href={node.href}
      className={`${mobileNodeClassName(node.tone)} block rounded-2xl border p-4 shadow-card transition hover:-translate-y-0.5 hover:shadow-md`}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-marino/55">
        {node.eyebrow}
      </p>
      <h3 className="mt-2 font-serif text-xl leading-tight text-tinta">{node.label}</h3>
      <p className="mt-2 text-sm leading-6 text-marino/80">{node.description}</p>
    </Link>
  );
}

function MobileCenterCard() {
  return (
    <div className="rounded-[1.75rem] border border-marino/20 bg-white p-5 shadow-card">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-marino/55">
        Core mechanism
      </p>
      <h3 className="mt-2 font-serif text-2xl text-tinta">Citizen Experience</h3>
      <p className="mt-2 text-sm leading-6 text-marino/80">
        Administrative Burden becomes legible here through information demands, compliance work,
        and psychological strain.
      </p>

      <div className="mt-4 grid gap-2">
        {burdenNodes.map((burden) => (
          <Link
            key={burden.label}
            href={burden.href}
            className="rounded-2xl border border-marino/15 bg-fondo px-4 py-3 transition hover:border-marino/30 hover:bg-white"
          >
            <span className="font-semibold text-tinta">{burden.label}</span>
            <span className="mt-1 block text-xs leading-5 text-marino/75">
              {burden.description}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function LegendBadge({
  tone,
  title,
  description
}: {
  tone: RelationshipTone;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative flex items-center gap-2 rounded-full border border-marino/15 bg-fondo/80 px-3 py-2 text-xs font-semibold text-marino">
      <span className={legendLineClassName(tone)} />
      <span>{title}</span>
      <span className="pointer-events-none absolute right-0 top-full z-20 mt-3 hidden w-60 rounded-2xl border border-marino/15 bg-white p-3 text-left text-xs font-normal leading-5 text-marino/80 shadow-card group-hover:block">
        {description}
      </span>
    </div>
  );
}

function nodeCardClassName(tone: NodeTone) {
  switch (tone) {
    case "center":
      return "";
    case "outcomes":
      return "rounded-[1.75rem] border border-musgo/25 bg-musgo/10 p-5 shadow-card transition duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-lg";
    case "support":
      return "rounded-[1.75rem] border border-marino/15 bg-white/92 p-5 shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-lg";
    case "context":
    default:
      return "rounded-[1.75rem] border border-marino/18 bg-[linear-gradient(180deg,rgba(232,220,196,0.48),rgba(255,255,255,0.98))] p-5 shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-lg";
  }
}

function mobileNodeClassName(tone: NodeTone) {
  switch (tone) {
    case "outcomes":
      return "border-musgo/25 bg-musgo/10";
    case "support":
      return "border-marino/15 bg-white";
    case "center":
      return "border-marino/20 bg-white";
    case "context":
    default:
      return "border-marino/18 bg-[linear-gradient(180deg,rgba(232,220,196,0.42),rgba(255,255,255,0.98))]";
  }
}

function tooltipClassName(side: TooltipSide) {
  const position =
    side === "top"
      ? "bottom-[calc(100%+0.75rem)] left-1/2 -translate-x-1/2"
      : side === "right"
        ? "left-[calc(100%+0.75rem)] top-1/2 -translate-y-1/2"
        : "left-1/2 top-[calc(100%+0.75rem)] -translate-x-1/2";

  return `pointer-events-none absolute z-30 hidden w-64 rounded-2xl border border-marino/15 bg-white p-3 text-xs leading-5 text-marino/80 shadow-card lg:block ${position} opacity-0 transition duration-200 group-hover:opacity-100 group-focus-visible:opacity-100`;
}

function legendLineClassName(tone: RelationshipTone) {
  if (tone === "primary") {
    return "h-[5px] w-8 rounded-full bg-marino";
  }

  if (tone === "secondary") {
    return "h-[4px] w-8 rounded-full bg-musgo";
  }

  return "h-[3px] w-8 rounded-full bg-arena [background-image:linear-gradient(90deg,currentColor_60%,transparent_60%)] [background-size:12px_100%] text-arena";
}

function getRelationshipStroke(tone: RelationshipTone) {
  if (tone === "primary") {
    return "#17365d";
  }

  if (tone === "secondary") {
    return "#47624f";
  }

  return "#8a6c47";
}

function getRelationshipStrokeWidth(tone: RelationshipTone) {
  if (tone === "primary") {
    return 9;
  }

  if (tone === "secondary") {
    return 6;
  }

  return 4;
}

function getMarkerId(tone: RelationshipTone) {
  if (tone === "primary") {
    return "arrowhead-primary";
  }

  if (tone === "secondary") {
    return "arrowhead-secondary";
  }

  return "arrowhead-feedback";
}
