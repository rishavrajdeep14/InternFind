import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Overview from "./components/Overview";
import Help from "./components/Help";
import Preferences from "./components/Preferences";
import InternshipCard from "./components/InternshipCard"
import Admin from "./Admin"
import Analytics from "./components/Analytics";
import Applications from "./components/Applications";
import {Route,Routes} from 'react-router-dom'
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";




function DashboardLayout () {
const [internships,setInternships] = useState([]);
    useEffect(() => {
    fetch("https://internfind-backend.onrender.com/api/external-internships/")
        .then((res) => res.json())
        .then((data) => {
            setInternships(data);
        })
        .catch((error) => {
            console.log(error);
        });
}, []);

  return (
    <>
        <Navbar />

        <div className="layout">
            <Sidebar />

            <main>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <h1>Dashboard</h1>

                                {internships.map((internship) => (
                                    <InternshipCard
                                        key={internship._id}
                                        internship={internship}
                                    />
                                ))}
                            </>
                        }
                    />
                    

                    <Route path="/overview" element={ <Overview /> } />
                    <Route path="/applications" element={<Applications />} />
                    <Route path="/analytics" element={ <Analytics />} />
                    <Route path="/preferences" element={ <Preferences /> } />
                    <Route path="/help" element={<Help  />} />
                </Routes>
            </main>
        </div>
    </>
)
}

function App () {
  return(
    <>
    <Routes>
      <Route path ="/signin" element={<SignIn />} />
      <Route path ="/signup" element={<SignUp />} />
      <Route path="/*" element={<DashboardLayout />} />
      <Route path="/admin" element={<Admin />} />

    </Routes>
    </>

  )};
export default App;