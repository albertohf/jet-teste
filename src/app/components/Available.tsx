export default function Available({ status }: { status: boolean }) {
  return (
    <div>
      {status ? (
        <button className="bg-green-100 hover:bg-green-300 text-green-800 py-1 px-2 rounded text-xs font-medium">
          Available
        </button>
      ) : (
        <button className="bg-red-100 hover:bg-red-300 text-red-800 py-1 px-2 rounded text-xs font-medium">
          Unavailable
        </button>
      )}
    </div>
  );
}
