export default function TableHead() {
  return (
    <thead>
      <tr className="bg-gray-50 border-b-2 sm:hidden md:table-row">
        <th className="text-left p-4 text-xs text-gray-500 font-semibold">
          Car
        </th>
        <th className="text-left p-4 text-xs text-gray-500 font-semibold">
          Next Reservation
        </th>
        <th className="text-left p-4 text-xs text-gray-500 font-semibold">
          Status
        </th>
        <th className="text-left p-4 text-xs text-gray-500 font-semibold">
          Rating
        </th>
        <th className="text-left p-4 text-xs text-gray-500 font-semibold">
          Actions
        </th>
      </tr>
    </thead>
  );
}
