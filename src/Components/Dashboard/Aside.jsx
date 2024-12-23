import { NavLink } from 'react-router-dom'

function Aside() {
    return (
        <aside className="menu menu-vertical col-span-2 gap-4 mt-8">
            <div>
                <li><NavLink to="addMarathon" className="text-lg font-medium underline">Add Marathon</NavLink></li>
            </div>
            <div>
                <li><NavLink to="myMarathons" className="text-lg font-medium underline">My Marathons</NavLink></li>
            </div>
            <div>
                <li><NavLink to="myApplies" className="text-lg font-medium underline">My Applies</NavLink></li>
            </div>
        </aside>
    )
}

export default Aside
