import React from "react";

interface PaginationProps {
  pagination: { url: string | null; label: string; active: boolean }[];
  clickHandler: (url: string | null) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pagination, clickHandler }) => {
  return (
    <div className="flex items-center gap-2 justify-center mt-4">
      {pagination?.length > 0 &&
        pagination.map((data, index) => (
          <button
            key={index}
            onClick={() => clickHandler(data.url)}
            disabled={!data.url}
            className={`btn btn-sm ${
              index === 0 ? "btn-outline" : index === pagination.length - 1 ? "btn-outline" : "btn-primary"
            } ${data.active ? "btn-active" : ""}`}
          >
            {data.label.includes("&laquo;") ? "← Prev" : data.label.includes("&raquo;") ? "Next →" : data.label}
          </button>
        ))}
    </div>
  );
};

export default Pagination;
