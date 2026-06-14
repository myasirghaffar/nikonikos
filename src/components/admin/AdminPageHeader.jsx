import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const AdminPageHeader = ({ title, description, actionLabel, actionTo }) => {
  return (
    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
      <div>
        <h1 className="text-2xl font-bold leading-8 text-white">{title}</h1>
        <p className="mt-1 text-sm font-normal leading-5 text-gray-400">
          {description}
        </p>
      </div>

      {actionLabel && actionTo ? (
        <Link
          to={actionTo}
          className="inline-flex h-11 items-center justify-center rounded-xl bg-rose-700 px-6 text-sm font-medium leading-5 text-white shadow-[0_0_15px_rgba(200,16,46,0.2)]"
        >
          <Plus className="mr-2 h-4 w-4" />
          {actionLabel}
        </Link>
      ) : null}
    </div>
  );
};

export default AdminPageHeader;
