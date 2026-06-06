import {NavLink} from 'react-router-dom';


function Navbar() {
    return (
        <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center">
            <h1 className="font-bold text-lg">⚙️ Valve Inspector</h1>
            <div className="flex gap-6">
                <NavLink to="/" className={({isActive}) => isActive ? "text-white font-bold border-b-2 border-whte" : "text-slate-300" }>
                Home
                </NavLink>
                <NavLink to="/Inspection" className={({isActive}) => isActive ? "text-white font-bold border-b-2 border-white" : "text-slate-300"}>
                    Inspection
                </NavLink>
            </div>

        </nav>
    )
}

export default Navbar;