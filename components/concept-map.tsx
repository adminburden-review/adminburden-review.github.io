import React from "react";

const STROKE = "#2f3135";
const BACKGROUND = "#fcfcfa";
const DASH = "12 10";
const DOTS = "4 6";

export function ConceptMap() {
  return (
    <section className="rounded-[24px] border border-marino/16 bg-white px-5 py-5 shadow-card md:px-7">
      <div className="mb-5 max-w-4xl space-y-2 border-b border-marino/10 pb-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-marino/58">
          Administrative Burden Framework
        </p>
        <p className="text-sm leading-6 text-marino/82 md:text-[15px]">
          This concept map follows the canonical framework used in the administrative burden
          literature, linking upstream political and bureaucratic factors to state action,
          experiences of burden, downstream outcomes, distributive effects, and feedback effects.
        </p>
      </div>

      <div className="rounded-[20px] border border-[#d7d7d3] bg-[#fdfcf9] p-3 md:p-5">
        <p className="mb-3 text-xs leading-5 text-marino/60 md:hidden">
          Scroll horizontally to view the full figure.
        </p>

        <div className="overflow-x-auto">
          <svg
            viewBox="0 0 1200 650"
            className="h-auto min-w-[980px] w-full"
            role="img"
            aria-labelledby="concept-map-title concept-map-desc"
            style={{ fontFamily: "var(--font-sans), sans-serif" }}
          >
            <title id="concept-map-title">Administrative burden concept map</title>
            <desc id="concept-map-desc">
              Diagram showing how factors influencing state actions and burden tolerance shape
              state actions, experiences of burden, outcomes, distributive effects, and feedback
              effects.
            </desc>

            <defs>
              <marker
                id="concept-map-arrow"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={STROKE} />
              </marker>
            </defs>

            <rect x="0" y="0" width="1200" height="650" fill={BACKGROUND} rx="16" />

            <g fill="none" stroke={STROKE} strokeWidth="2.2">
              <rect x="30" y="30" width="300" height="130" fill="#ffffff" />
              <rect
                x="395"
                y="30"
                width="390"
                height="115"
                fill="none"
                strokeDasharray={DASH}
              />
              <rect
                x="350"
                y="220"
                width="250"
                height="240"
                fill="none"
                strokeDasharray={DASH}
              />
              <rect
                x="690"
                y="180"
                width="250"
                height="350"
                fill="none"
                strokeDasharray={DASH}
              />
            </g>

            <SvgBox
              x={425}
              y={75}
              width={140}
              height={55}
              lines={["Citizen Factors"]}
              fontSize={14}
            />
            <SvgBox
              x={585}
              y={75}
              width={155}
              height={55}
              lines={["State", "Characteristics"]}
              fontSize={14}
            />
            <SvgBox
              x={385}
              y={270}
              width={160}
              height={78}
              lines={["Formal Policy", "Design"]}
              fontSize={14}
            />
            <SvgBox
              x={385}
              y={382}
              width={160}
              height={78}
              lines={["Informal Policy", "Design"]}
              fontSize={14}
            />
            <SvgBox
              x={725}
              y={240}
              width={160}
              height={68}
              lines={["Learning Costs"]}
              fontSize={14}
            />
            <SvgBox
              x={725}
              y={326}
              width={160}
              height={68}
              lines={["Compliance Costs"]}
              fontSize={14}
            />
            <SvgBox
              x={725}
              y={412}
              width={160}
              height={68}
              lines={["Psychological", "Costs"]}
              fontSize={14}
            />
            <SvgBox
              x={92}
              y={315}
              width={170}
              height={85}
              lines={["Burden Tolerance", "/ Program", "Support"]}
              fontSize={14}
            />
            <SvgBox
              x={1010}
              y={340}
              width={145}
              height={65}
              lines={["Outcomes"]}
              fontSize={14}
            />

            <g fill={STROKE} fontSize="12.5">
              <text x="42" y="52" fontWeight="700" textDecoration="underline">
                <tspan x="42" dy="0">
                  Factors Influencing State Actions
                </tspan>
                <tspan x="42" dy="16">
                  and/or Burden Tolerance.
                </tspan>
              </text>
              <text x="42" y="91">
                <tspan x="42" dy="0">
                  1) Ideology
                </tspan>
                <tspan x="42" dy="18">
                  2) Target Group Deservingness
                </tspan>
                <tspan x="42" dy="18">
                  3) Personal Experience with Benefits
                </tspan>
                <tspan x="42" dy="18">
                  4) Bureaucratic Processes
                </tspan>
              </text>
            </g>

            <g fill={STROKE} fontSize="15" fontWeight="700" textAnchor="middle">
              <text x="590" y="62">
                Distributive Effects
              </text>
              <text x="475" y="245">
                State Actions
              </text>
              <text x="815" y="205">
                Experiences of Burden
              </text>
            </g>

            <g
              fill="none"
              stroke={STROKE}
              strokeWidth="2.3"
              markerEnd="url(#concept-map-arrow)"
            >
              <line x1="190" y1="160" x2="190" y2="315" />
              <line x1="190" y1="160" x2="350" y2="260" />
              <line x1="350" y1="357" x2="262" y2="357" />
              <line x1="545" y1="309" x2="725" y2="309" />
              <line x1="545" y1="421" x2="725" y2="421" />
              <line x1="600" y1="145" x2="600" y2="309" />
              <line x1="940" y1="373" x2="1010" y2="373" />
              <path d="M 830 530 V 590 H 190 V 402" />
              <line x1="475" y1="590" x2="475" y2="460" />
            </g>

            <line
              x1="262"
              y1="388"
              x2="350"
              y2="388"
              fill="none"
              stroke={STROKE}
              strokeWidth="2.3"
              strokeDasharray={DOTS}
              markerEnd="url(#concept-map-arrow)"
            />

            <g fill={STROKE} fontSize="14" fontWeight="600">
              <text x="176" y="245">
                7b
              </text>
              <text x="268" y="228">
                7a
              </text>
              <text x="305" y="348">
                6b
              </text>
              <text x="305" y="405">
                6a
              </text>
              <text x="635" y="300">
                1
              </text>
              <text x="635" y="412">
                2
              </text>
              <text x="586" y="235">
                3
              </text>
              <text x="978" y="364">
                4
              </text>
              <text x="456" y="520">
                5a
              </text>
              <text x="170" y="525">
                5b
              </text>
            </g>

            <text
              x="505"
              y="620"
              fill={STROKE}
              fontSize="15"
              fontWeight="600"
              textAnchor="middle"
            >
              Feedback Effects
            </text>
          </svg>
        </div>

        <p className="mt-4 text-xs leading-5 text-marino/68 md:text-sm">
          <span className="font-semibold text-tinta">Source:</span>{" "}
          <a
            href="https://academic.oup.com/jpart/article/34/2/180/7287903"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-marino/35 underline-offset-2 transition hover:text-marino"
          >
            Halling, A., &amp; Baekgaard, M. (2024). Administrative Burden in Citizen-State
            Interactions: A Systematic Literature Review. Journal of Public Administration
            Research and Theory, 34(2), 180-195.
          </a>
        </p>
      </div>
    </section>
  );
}

function SvgBox({
  x,
  y,
  width,
  height,
  lines,
  fontSize
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  lines: string[];
  fontSize: number;
}) {
  const lineHeight = fontSize + 5;
  const startY = y + height / 2 - ((lines.length - 1) * lineHeight) / 2 + fontSize / 3;
  const centerX = x + width / 2;

  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill="#ffffff" stroke={STROKE} strokeWidth="2.2" />
      <text
        x={centerX}
        y={startY}
        fill={STROKE}
        fontSize={fontSize}
        fontWeight="500"
        textAnchor="middle"
      >
        {lines.map((line, index) => (
          <tspan key={`${line}-${index}`} x={centerX} dy={index === 0 ? 0 : lineHeight}>
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );
}
