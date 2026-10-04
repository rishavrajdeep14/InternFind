import "./Analytics.css";
import { useState, useEffect } from "react";


import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    BarChart,
    Bar
} from "recharts";


const statusData = [
    { name: "Applied", value: 15 },
    { name: "Interview", value: 5 },
    { name: "Rejected", value: 4 },
    { name: "Offer", value: 2 }
];


const applicationsOverTime = [
    { month: "May", applications: 3 },
    { month: "Jun", applications: 5 },
    { month: "Jul", applications: 4 },
    { month: "Aug", applications: 7 },
    { month: "Sep", applications: 5 }
];


const companyData = [
    { company: "Google", applications: 5 },
    { company: "Microsoft", applications: 4 },
    { company: "Amazon", applications: 3 },
    { company: "Deloitte", applications: 3 },
    { company: "TCS", applications: 2 }
];


const recentActivity = [
    {
        company: "Google",
        role: "Software Engineering Intern",
        status: "Interview",
        date: "Sep 10, 2026"
    },
    {
        company: "Microsoft",
        role: "Frontend Developer Intern",
        status: "Applied",
        date: "Sep 8, 2026"
    },
    {
        company: "Amazon",
        role: "SDE Intern",
        status: "Rejected",
        date: "Sep 6, 2026"
    },
    {
        company: "Deloitte",
        role: "Technology Intern",
        status: "Applied",
        date: "Sep 4, 2026"
    }
];


function Analytics() {

    const [applications,setApplications] = useState([]);
    useEffect(() => {
        fetch("https://internfind-backend.onrender.com/api/applications", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((res) => res.json())
        .then((data) => {
            setApplications(data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    const totalApplications = applications.length;

    const appliedCount = applications.filter(
    (application) => application.status === "Applied"
    ).length;

    const interviewCount = applications.filter(
    (application) => application.status === "Interview"
    ).length;

    const rejectedCount = applications.filter(
    (application) => application.status === "Rejected"
    ).length;

    const offerCount = applications.filter(
    (application) => application.status === "Offer"
    ).length;
    return (
        <div className="analytics-page">

            <div className="analytics-header">
                <h1>Analytics</h1>
                <p>Track your internship application progress.</p>
            </div>

            <div className="analytics-cards">

                <div className="analytics-card">
                    <p>Total Applications</p>
                    <h2>{ totalApplications }</h2>
                    <span className="card-info">All applications</span>
                </div>

                <div className="analytics-card">
                    <p>Applied</p>
                    <h2>{ appliedCount }</h2>
                    <span className="card-info">62.5% of total</span>
                </div>

                <div className="analytics-card">
                    <p>Interviews</p>
                    <h2>{ interviewCount }</h2>
                    <span className="card-info">20.8% of total</span>
                </div>

                <div className="analytics-card">
                    <p>Offers</p>
                    <h2>{ offerCount }</h2>
                    <span className="card-info success-text">8.3% success rate</span>
                </div>

            </div>

            <div className="analytics-grid">

                <div className="analytics-box">

                    <div className="box-header">
                        <h2>Application Status</h2>
                        <p>Current distribution of your applications</p>
                    </div>

                    <div className="chart-container">
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>

                                <Pie
                                    data={statusData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                    innerRadius={60}
                                    paddingAngle={3}
                                >
                                    {statusData.map((entry, index) => (
                                        <Cell
                                            key={index}
                                            fill={
                                                [
                                                    "#f97316",
                                                    "#fb923c",
                                                    "#fdba74",
                                                    "#fed7aa"
                                                ][index]
                                            }
                                        />
                                    ))}
                                </Pie>

                                <Tooltip />
                                <Legend />

                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                </div>

                <div className="analytics-box">

                    <div className="box-header">
                        <h2>Applications Over Time</h2>
                        <p>Number of applications submitted each month</p>
                    </div>

                    <div className="chart-container">
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={applicationsOverTime}>

                                <CartesianGrid strokeDasharray="3 3" />

                                <XAxis dataKey="month" />

                                <YAxis />

                                <Tooltip />

                                <Line
                                    type="monotone"
                                    dataKey="applications"
                                    stroke="#f97316"
                                    strokeWidth={3}
                                    dot={{ r: 4 }}
                                />

                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                </div>

            </div>

            <div className="analytics-box company-box">

                <div className="box-header">
                    <h2>Most Applied Companies</h2>
                    <p>Companies where you have submitted the most applications</p>
                </div>

                <div className="company-chart">
                    <ResponsiveContainer width="100%" height={320}>
                        <BarChart data={companyData}>

                            <CartesianGrid strokeDasharray="3 3" />

                            <XAxis dataKey="company" />

                            <YAxis />

                            <Tooltip />

                            <Bar
                                dataKey="applications"
                                fill="#f97316"
                                radius={[6, 6, 0, 0]}
                            />

                        </BarChart>
                    </ResponsiveContainer>
                </div>

            </div>

            <div className="analytics-box success-box">

                <div className="box-header">
                    <h2>Application Performance</h2>
                    <p>How your applications are progressing</p>
                </div>

                <div className="performance-grid">

                    <div className="performance-item">
                        <span>Interview Rate</span>
                        <strong>20.8%</strong>

                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: "20.8%" }}
                            ></div>
                        </div>
                    </div>


                    <div className="performance-item">
                        <span>Offer Rate</span>
                        <strong>8.3%</strong>

                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: "8.3%" }}
                            ></div>
                        </div>
                    </div>


                    <div className="performance-item">
                        <span>Rejection Rate</span>
                        <strong>16.7%</strong>

                        <div className="progress-bar">
                            <div
                                className="progress-fill rejection-fill"
                                style={{ width: "16.7%" }}
                            ></div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="analytics-box activity-box">

                <div className="box-header">
                    <h2>Recent Application Activity</h2>
                    <p>Your latest internship applications</p>
                </div>

                <div className="activity-list">

                    {recentActivity.map((activity, index) => (

                        <div className="activity-item" key={index}>

                            <div className="activity-company">
                                <div className="company-icon">
                                    {activity.company.charAt(0)}
                                </div>

                                <div>
                                    <h3>{activity.company}</h3>
                                    <p>{activity.role}</p>
                                </div>
                            </div>


                            <div className="activity-right">

                                <span
                                    className={`status-badge ${activity.status.toLowerCase()}`}
                                >
                                    {activity.status}
                                </span>

                                <span className="activity-date">
                                    {activity.date}
                                </span>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}

export default Analytics;