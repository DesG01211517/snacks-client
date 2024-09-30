"use client"
export default function SnackCard({ snack }) {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{snack?.name}</h2>
        <p className="text-gray-600 mt-2">{snack?.description}</p>
        <p className="text-gray-600 mt-2">{snack?.price}</p>
      </div>
    </div>
  );
};

