import "./Preferences.css";
import "./Preferences.css";

function Preferences() {
    return (
        <div className="preferences">

            <div className="preferences-heading">
                <h1>Preferences</h1>
                <p>
                    Set your internship preferences to find opportunities
                    that match you.
                </p>
            </div>

            <div className="preferences-card">

                <div className="preference-group">
                    <label>Preferred Location</label>

                    <input
                        type="text"
                        placeholder="e.g. Bangalore, Hyderabad, Remote"
                    />
                </div>

                <div className="preference-group">
                    <label>Work Mode</label>

                    <div className="preference-options">
                        <label>
                            <input type="checkbox" />
                            Remote
                        </label>

                        <label>
                            <input type="checkbox" />
                            Hybrid
                        </label>

                        <label>
                            <input type="checkbox" />
                            On-site
                        </label>
                    </div>
                </div>

                <div className="preference-group">
                    <label>Minimum Stipend</label>

                    <input
                        type="number"
                        placeholder="e.g. 10000"
                    />
                </div>

                <div className="preference-group">
                    <label>Preferred Skills</label>

                    <input
                        type="text"
                        placeholder="e.g. React, JavaScript, Python"
                    />
                </div>

                <button className="save-preferences">
                    Save Preferences
                </button>

            </div>
        </div>
    );
}

export default Preferences;

