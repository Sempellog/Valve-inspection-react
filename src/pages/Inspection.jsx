import { useState } from 'react';
import { checklistItems, valveTypes, paintTypes} from '../Data/checklistData';
import ChecklistItem from '../components/checklistItem';
import ProgressBar from '../components/ProgressBar';



function Inspection() {

    const [valveInfo, setValveInfo] = useState({
        name: "",
        id: "",
        tagNo: "",
        valveType: "",
        size: "",
        date: new Date().toISOString().split('T')[0]
    })

    const [answers, setAnswers] = useState({});

    const [message, setMessage] = useState({ text: "", type: ""});

    const handleInfo = (field, value) => {
        setValveInfo(prev => ({ ...prev, [field]: value}))
    }

    const handleAnswer = (id, value) => {
        setAnswers(prev => ({ ...prev, [id]: value}))
    }

    const completed = Object.values(answers).filter(answer => answer === true).length;
    const total = checklistItems.length;

    const handleSubmit = () => {

    if (valveInfo.name === "") {
        setMessage({ text: "Please fill inspector name", type: "error"});
        return
    }
    
    if (valveInfo.valveType === "") {
      setMessage({text: "Please select valve type", type: "error"})
      return
    }

    if (completed < total) {
        setMessage({ text: "Please complete all checklist items", type: "error"})
        return
    }
    
    setMessage({ text: `✓ Inspection completed for ${valveInfo.tagNo} by ${valveInfo.name}`, type: "success"})
    
}

    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-8">
            <div className="max-w-2xl mx-auto flex flex-col gap-6">
                <h1 className="text-2xl font-bold text-slate-900">Final Inspection Checklist</h1>

                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="font-bold text-gray-700 mb-4">Valve Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-bold text-gray-600">Inspector Name</label>
                            <input 
                              type="text"
                              placeholder="Enter your name"
                              value={valveInfo.name}
                              onChange={(e) => handleInfo("name", e.target.value)}
                              className="border border-gray-300 rounded px-3 py-2 text-sm">
                              </input>                           
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-bold text-gray-600">Inspector ID</label>
                            <input
                              type="number"
                              placeholder="E1412455"
                              value={valveInfo.id}
                              onChange={(e) => handleInfo("id", e.target.value)}
                              className="border border-gray-300 rounded px-3 py-2 text-sm"
                              >
                              </input>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-bold text-gray-600">Valve Tag No</label>
                            <input
                              type="text"
                              placeholder="VLV123"
                              value={valveInfo.tagNo}
                              onChange={(e) => handleInfo("tagNo", e.target.value)}
                              className="border border-gray-300 rounded px-3 py-2 text-sm"
                              >
                            </input>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-bold text-gray-600">Valve type</label>
                            <select
                              value={valveInfo.valveTypes}
                              onChange={(e) =>handleInfo("valveType", e.target.value)}
                              className="border border-gray-600 rounded px-3 py-2 text-sm bg-white"
                            >
                                <option value="">Select type</option>
                                {valveTypes.map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-bold text-gray-600">Date</label>
                            <input
                              type="date"
                              value={valveInfo.date}
                              onChange={(e) => handleInfo("date", e.target.value)}
                              className="border border-gray-600 rounded px-3 py-2 text-sm"
                              >
                              </input>
                        </div>


                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h2 className="font-bold text-gray-700">Inspection Checklist</h2>
                    {checklistItems.map(item => (
                        <ChecklistItem
                        key={item.id}
                        item={item}
                        value={answers[item.id] || ""}
                        onChange={handleAnswer}
                        />
                    )
                    )}
                </div>

                <ProgressBar completed={completed} total={total}/>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-bold text-gray-700">Remarks</label>
                    <textarea 
                      placeholder="Enter any remarks or defects observed..."
                      className="border border-gray-300 rounded px-3 py-2 text-sm h-24 resize-none"
                      >
                      </textarea>

                      <button 
                        onClick={handleSubmit} 
                        className="bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-slate-700">
                            Submit Inspection
                        </button>
                        {message.text && (
                            <p className={`text-center font-bold py-2 rounded 
                                ${message.type === "success" ? "text-green-500" : "text-red-600 bg-red-50"}`}>
                                    {message.text}
                                </p>
                        )}
                </div>
            </div>
        </div>
    )   
}

export default Inspection;