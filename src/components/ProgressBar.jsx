function ProgressBar({ completed, total }) {
  const percentage = total === 0 ? 0 : (completed / total) * 100;

  return (
    <div className="bg-white rounded p-4 shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm font-bold text-gray-700">Inspection Progress</p>
        <p className="{`text-sm font-bold ${completed === total ? 'text-green-500' : 'text-slate-600}`}">
          {completed} / {total} Completed
        </p>
      </div>
      <div className="bg-gray-200 rounded-full h-3">
        <div
          className={`h-3 rounded-full transition-all duration-300 ${completed === total ? "bg-green-500" : "bg-slate-600"}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-right text-xs text-gray-400 mt-1">{percentage}%</p>
    </div>
  );
}

export default ProgressBar;
