import "./Applications.css";
import InternshipCard from "../components/InternshipCard";

import { useEffect, useState } from "react";

function Applications() {

    const [applications, setApplications] = useState([]);

    useEffect(() => {
        fetch("https://internfind-backend.onrender.com/api/applications", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((res) => res.json())
        .then((data) => {
         console.log(data);
         setApplications(data);
})
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return (
    <div>
        <h1>My Applications</h1>

        {applications.map((application) => (
            application.internshipId && (
                <InternshipCard
                    key={application._id}
                    internship={application.internshipId}
                    applied={true}
                />
            )
        ))}
    </div>
);
}


export default Applications;