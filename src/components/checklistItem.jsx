function ChecklistItem({ item, value, onChange }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
      <p className="text-gray-700 text-sm flex-1">{item.label}</p>
      <select
        value={value}
        onChange={(e) => onChange(item.id, e.target.value)}
        className="border border-gray-300 rounded px-3 bg-white"
      >
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
        <option value="na">N/A</option>
      </select>
    </div>
  );
}

export default ChecklistItem;
