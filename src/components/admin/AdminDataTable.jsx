const AdminDataTable = ({ columns, data, selectedIds = [], onSelect, actions }) => {
  const allSelected = data.length > 0 && data.every((row) => selectedIds.includes(row.id));

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-stone-900/70">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[820px] border-collapse">
          <thead className="bg-white/5">
            <tr>
              <th className="w-16 px-6 py-4 text-left">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={(event) => onSelect?.(event.target.checked ? data.map((row) => row.id) : [])}
                  className="rounded border-zinc-700 bg-black text-rose-700 focus:ring-rose-700"
                />
              </th>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-4 py-4 text-left text-xs font-bold uppercase leading-4 tracking-wider text-gray-500"
                >
                  {column.label}
                </th>
              ))}
              {actions ? (
                <th className="px-4 py-4 text-right text-xs font-bold uppercase leading-4 tracking-wider text-gray-500">
                  Actions
                </th>
              ) : null}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="border-t border-zinc-800">
                <td className="px-6 py-5">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(row.id)}
                    onChange={(event) => {
                      const next = event.target.checked
                        ? [...selectedIds, row.id]
                        : selectedIds.filter((id) => id !== row.id);
                      onSelect?.(next);
                    }}
                    className="rounded border-zinc-700 bg-black text-rose-700 focus:ring-rose-700"
                  />
                </td>
                {columns.map((column) => (
                  <td key={column.key} className="px-4 py-5 align-middle">
                    {column.render ? column.render(row) : row[column.key]}
                  </td>
                ))}
                {actions ? (
                  <td className="px-4 py-5 text-right">{actions(row)}</td>
                ) : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDataTable;
