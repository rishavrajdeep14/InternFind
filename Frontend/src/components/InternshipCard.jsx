import "./InternshipCard.css";

function InternshipCard({ internship, applied = false })  {

    async function handleApply() {
    try {
        const response = await fetch("http://localhost:3000/api/applications", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                internshipId: internship._id
            })
        });

        const data = await response.json();
        console.log(data);

        if (response.ok) {
            window.open(internship.applyLink, "_blank");
        }

    } catch (error) {
        console.log(error);
    }
}


    return (
        <div className="internship-card">

            <div className="card-top">
                <div>
                    <h2>{internship.title}</h2>
                    <p className="company">{internship.company}</p>
                </div>

                <span className="category">
                    {internship.category}
                </span>
            </div>

            <div className="card-info">
                <span>📍 {internship.location}</span>
                <span>💼 {internship.workMode || "Work mode not specified"}</span>
            </div>

            <div className="card-info">
                {internship.stipend > 0
                ? `₹${internship.stipend}/month`
                : "Stipend not specified"}
                <span>⏱ {internship.duration || "Duration not specified"}</span>
            </div>

            {internship.skills.length > 0 && (
                <div className="skills">
                    {internship.skills.map((skill, index) => (
                    <span key={index}>{skill}</span>
                    ))}
                    </div>
            )}

            <div className="card-bottom">
                <span className="openings">
                    {internship.openings} openings
                </span>

                {applied ? (
                <button disabled>Applied ✓</button>
                ) : (
                <>
                <button onClick={ handleApply }>Apply</button>
                </>
                )}
            </div>

        </div>
    );
}

export default InternshipCard;