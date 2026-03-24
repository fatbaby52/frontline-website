interface SpecTableProps {
  specifications: Record<string, string>;
}

export function SpecTable({ specifications }: SpecTableProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <table className="w-full">
        <tbody>
          {Object.entries(specifications).map(([key, value], index) => (
            <tr
              key={key}
              className={index % 2 === 0 ? "bg-card" : "bg-muted/50"}
            >
              <td className="px-4 py-3 text-sm font-medium text-muted-foreground sm:px-6">
                {key}
              </td>
              <td className="px-4 py-3 font-mono text-sm text-foreground sm:px-6">
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
