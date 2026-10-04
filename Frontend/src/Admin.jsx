import "./Admin.css";
import { useState } from "react";
import "./Admin.css";


function Admin() {

    const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    workMode: "",
    stipend: "",
    duration: "",
    category: "",
    skills: "",
    applyLink: ""
});

async function handleSubmit(e) {
    e.preventDefault();

    try {
        const response = await fetch("https://internfind-backend.onrender.com/api/admin/internships", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}


    return (
        <div className="admin-page">

    <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <p>Add and manage internship opportunities</p>
    </div>

    <form className="admin-form" onSubmit={ handleSubmit }>

        <div className="form-section">
            <h2>Internship Details</h2>

            <div className="form-grid">

                <div className="form-group">
                    <label>Title</label>
                    <input
                    placeholder="e.g. Frontend Developer Intern"
                    value={formData.title}
                    onChange={(e) =>
                    setFormData({
                    ...formData,
                    title: e.target.value
                })
            }
        />
                </div>

                <div className="form-group">
                    <label>Company</label>
                    <input
                    placeholder="e.g. Frontend Developer Intern"
                    value={formData.company}
                    onChange={(e) =>
                    setFormData({
                    ...formData,
                    company: e.target.value
                })
            }
        />
                </div>

                <div className="form-group">
                    <label>Location</label>
                    <input
                    placeholder="e.g. Frontend Developer Intern"
                    value={formData.location}
                    onChange={(e) =>
                    setFormData({
                    ...formData,
                    location: e.target.value
                })
            }
        />
                </div>

                <div className="form-group">
                    <label>Work Mode</label>
                    <input
                    placeholder="e.g. Frontend Developer Intern"
                    value={formData.workMode}
                    onChange={(e) =>
                    setFormData({
                    ...formData,
                    workMode: e.target.value
                })
            }
        />
                </div>

                <div className="form-group">
                    <label>Stipend</label>
                    <input
                    placeholder="e.g. Frontend Developer Intern"
                    value={formData.stipend}
                    onChange={(e) =>
                    setFormData({
                    ...formData,
                    stipend: e.target.value
                })
            }
        />
                </div>

                <div className="form-group">
                    <label>Duration</label>
                    <input
                    placeholder="e.g. Frontend Developer Intern"
                    value={formData.duration}
                    onChange={(e) =>
                    setFormData({
                    ...formData,
                    duration: e.target.value
                })
            }
        />
                </div>

                <div className="form-group">
                    <label>Category</label>
                    <input
                    placeholder="e.g. Frontend Developer Intern"
                    value={formData.category}
                    onChange={(e) =>
                    setFormData({
                    ...formData,
                    category: e.target.value
                })
            }
        />
                </div>

                <div className="form-group">
                    <label>Skills</label>
                    <input
                    placeholder="e.g. Frontend Developer Intern"
                    value={formData.skills}
                    onChange={(e) =>
                    setFormData({
                    ...formData,
                    skills: e.target.value
                })
            }
        />
                </div>

                <div className="form-group full">
                    <label>Apply Link</label>
                         <input
                    placeholder="e.g. Frontend Developer Intern"
                    value={formData.applyLink}
                    onChange={(e) =>
                    setFormData({
                    ...formData,
                    applyLink: e.target.value
                })
            }
        />
                </div>

            </div>
        </div>

        <div className="form-bottom">
            <button className="add-internship-btn">
                Add Internship
            </button>
        </div>

    </form>

</div>
    );
}

export default Admin;