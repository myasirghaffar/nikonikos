import { ChevronLeft, ChevronRight } from "lucide-react";

const AdminPagination = ({ page, totalPages, onPageChange, summary }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex flex-col gap-4 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
      <p>{summary}</p>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onPageChange(Math.max(1, page - 1))}
          className="flex size-10 items-center justify-center rounded-xl border border-zinc-800 text-white disabled:opacity-40"
          disabled={page === 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        {pages.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onPageChange(item)}
            className={`flex size-10 items-center justify-center rounded-xl border text-sm ${
              item === page
                ? "border-rose-700 bg-rose-700 text-white"
                : "border-zinc-800 text-gray-400"
            }`}
          >
            {item}
          </button>
        ))}
        <button
          type="button"
          onClick={() => onPageChange(Math.min(totalPages, page + 1))}
          className="flex size-10 items-center justify-center rounded-xl border border-zinc-800 text-white disabled:opacity-40"
          disabled={page === totalPages}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default AdminPagination;
