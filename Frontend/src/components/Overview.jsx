import { useState,useEffect } from "react";
import "./Overview.css";

function Overview () {
    const [applications,setApplications] = useState([]);

    const applied= applications.filter((app) => {
    return app.status=="Applied";
})


    useEffect(() => {
    fetch("http://localhost:3000/api/applications", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
        .then((res) => res.json())
        .then((data) => {
            setApplications(data);
        });
}, []);

    return (
        <div className="overview">

            <div className="overview-heading">
                <p>Welcome Back,</p>
                <p>Lets have a quick look at your Internship Activity</p>
            </div>

            <div className="overview-stats">

                <div className="stat-card">
                    <p>Applications</p>
                    <h2>{applications.length}</h2>
                    <span>Total internships available</span>
                </div>

                <div className="stat-card">
                    <p>Applied</p>
                    <h2>{applied.length}</h2>
                    <span>Internships you applied to</span>
                </div>

            </div>

        </div>
    );

}

export default Overview;