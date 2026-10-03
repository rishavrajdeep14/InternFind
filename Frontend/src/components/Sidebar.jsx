import './Sidebar.css';
import { NavLink } from "react-router-dom";
function Sidebar () {
    return (
        <aside>
                <h3>WORKSPACE</h3>

                <NavLink to= "/overview">Overview</NavLink>
                <NavLink to= "/applications">Applications</NavLink>
                <NavLink to= "/analytics">Analytics</NavLink>


                <h3>SETTINGS</h3>
                <NavLink to= "/preferences">Preferences</NavLink>
                <NavLink to= "/help">Help</NavLink>
                

        </aside>
    )
}
export default Sidebar;
