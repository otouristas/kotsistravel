import { Icon } from "./Icon";
import { isList, isTable, isText, type Block } from "@/lib/content";

/** Renders the structured body blocks preserved from the legacy CMS. */
export default function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        if (isTable(b)) return <DataTable key={i} rows={b.rows} />;

        if (isList(b)) {
          const List = b.ordered ? "ol" : "ul";
          return (
            <List key={i} className="mt-4 space-y-2">
              {b.items.map((it, j) => (
                <li key={j} className="flex gap-3">
                  <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{it}</span>
                </li>
              ))}
            </List>
          );
        }

        if (!isText(b)) return null;

        if (b.t === "h") {
          return (
            <h2
              key={i}
              className={`text-[1.45rem] font-bold leading-snug tracking-[-0.02em] text-ink ${
                i === 0 ? "mt-0" : "mt-10"
              }`}
            >
              {b.x}
            </h2>
          );
        }

        // Editors marked offers and warnings with red text; keep that signal.
        if (b.em) {
          return (
            <p
              key={i}
              className="mt-4 flex gap-3 rounded-lg border-l-[3px] border-accent-600 bg-accent-100/50 px-4 py-3 font-semibold text-ink"
            >
              <Icon name="star" className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
              <span>{b.x}</span>
            </p>
          );
        }

        return (
          <p key={i} className="mt-4">
            {b.x}
          </p>
        );
      })}
    </>
  );
}

/**
 * Two shapes appear in the archive: wide reference tables (schedules) and
 * single-row spec strips. The latter read better transposed than scrolled.
 */
export function DataTable({ rows }: { rows: string[][] }) {
  const [head, ...body] = rows;
  if (!head) return null;

  if (body.length === 1 && head.length > 3) {
    return (
      <dl className="my-6 grid gap-px overflow-hidden rounded-xl border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
        {head.map((label, i) => (
          <div key={i} className="bg-white px-4 py-3">
            <dt className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-ink-soft">{label}</dt>
            <dd className="mt-1 text-[1.05rem] font-semibold text-ink">{body[0][i] || "—"}</dd>
          </div>
        ))}
      </dl>
    );
  }

  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-rule bg-white">
      <table className="w-full border-collapse text-left text-[0.86rem]">
        <thead>
          <tr className="bg-navy-900 text-white">
            {head.map((h, i) => (
              <th key={i} className="whitespace-nowrap px-4 py-3 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((r, i) => (
            <tr key={i} className="border-t border-rule even:bg-paper-2/60">
              {r.map((c, j) => (
                <td
                  key={j}
                  className={`px-4 py-3 align-top ${j === 0 ? "font-semibold text-ink" : "text-ink-soft"}`}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
