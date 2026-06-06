import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
            <div className="bg-white rounded-xl shadow-md p-10 max-w-lg w-full text-center">
                <p className="text-6xl mb-4">⚙️</p>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Valve Inspection System</h1>
                <p className="text-gray-500 mb-8">Digital final inspection checklist for valve manufacturing. 
                    Replaces paper based inspection processes.</p>
                <Link to="/Inspection" className="bg-slate-900 text-white px-8 py-3 rounded-lg 
                font-bold hover:bg-slate-700 inline-block">Start Inspection →</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-lg w-full">
                <div className="bg-white rounded-lg shadow p-4 text-center">
                    <p className="text-2xl mb-2">📋</p>
                    <p className="font-bold text-sm">8 Checkpoints</p>
                    <p className="text-gray-500 text-xs">Complete Checklist</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4 text-center">    
                    <p className="text-2xl mb-2">✅</p>
                    <p className="font-bold text-sm">Real Time</p>
                    <p className="text-gray-500 text-xs">Progress tracking</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4 text-center">
                    <p className="text-2xl mb-2">🔒</p>
                    <p className="font-bold text-sm">Validated</p>
                    <p className="text-gray-500 text-xs">Submit when complete</p>
                </div>
            </div>
        </div>
    )
}

export default Home;