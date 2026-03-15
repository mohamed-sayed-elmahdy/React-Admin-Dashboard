import { FaSortDown, FaSortUp } from "react-icons/fa";

function TableHeader({ headers, sort, setSort, direction, setDirection }) {
  return (
    <thead>
      <tr className="text-left text-gray-600 text-sm w-full">
        {headers.map((header, idx) => {
          const isSorted = sort === header.key;
          const sortIcon = direction === "asc" ? <FaSortDown className="mb-1.5"/> : <FaSortUp className="-mb-1.5"/>;

          return (
            <th
              key={idx}
              className={`p-3 ${header.sortable ? "cursor-pointer select-none rounded" : ""} ${isSorted ? "bg-primary text-white" : ""}`}
              onClick={() => {
                if (!header.sortable) return; 
                setSort(header.key);
                setDirection(direction === "asc" ? "desc" : "asc");
              }}
            >
              <span className="flex items-center justify-center gap-1">
                {header.label} {isSorted && header.sortable && sortIcon}
              </span>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export default TableHeader;