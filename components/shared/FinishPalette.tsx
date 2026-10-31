import type { FinishGroup } from "@/lib/types";

const finishColor: Record<string, string> = {
  "roble-claro": "#E6D3B8",
  roble: "#C4A06A",
  nogal: "#6B4632",
  "nogal-oscuro": "#3E342C",
  "blanco-roto": "#F6F1EA",
  marfil: "#E7D3B8",
  arena: "#D2C0A6",
  piedra: "#C3B6A6",
  "gris-topo": "#9A9086",
  grafito: "#5C564F",
  negro: "#2A2724",
  terracota: "#C46A45",
  nude: "#E4B8A2",
  coral: "#E07A68",
  mostaza: "#C6A04A",
  salvia: "#7E8B62",
  caqui: "#8C8A64",
  celeste: "#8EAEB6",
  azul: "#4E6C84",
  lino: "#E4D5C4",
  teja: "#C47858",
  petroleo: "#2F4F58",
  "piedra-clara": "#F3EFEA",
  "piedra-gris": "#B7B2AC",
  "encimera-madera": "#C4A06A",
  "encimera-negra": "#2A2724",
};

type FinishPaletteProps = {
  title: string;
  lead: string;
  groups: readonly FinishGroup[];
};

export function FinishPalette({ title, lead, groups }: FinishPaletteProps) {
  return (
    <div>
      <h3 className="text-headline-md font-light text-ink-primary">{title}</h3>
      <p className="mt-2 max-w-2xl text-body-sm font-light text-on-surface-variant">{lead}</p>
      <div className="mt-8 space-y-6">
        {groups.map((group) => (
          <div key={group.id}>
            <p className="text-label-uppercase text-warm-label">{group.label}</p>
            <ul className="mt-3 flex flex-wrap gap-3">
              {group.swatches.map((swatch) => (
                <li key={swatch.id} className="w-16">
                  <span
                    className="block h-10 rounded-editorial border border-outline/15"
                    style={{ backgroundColor: finishColor[swatch.id] ?? "#E8E2D9" }}
                  />
                  <span className="mt-1.5 block text-[11px] leading-tight text-ink-primary">
                    {swatch.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
