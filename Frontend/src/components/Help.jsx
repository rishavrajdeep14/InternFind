import "./Help.css";


function Help () {
    return (
        <div className="help-page">

            <div className="help-header">
                <h1>How can we help?</h1>
                <p>Find answers to common questions about InternFind.</p>
            </div>

            <section className="faq-section">
                <h2>Frequently Asked Questions</h2>

                <div className="faq-list">

                    <div className="faq-item">
                        <h3>How do I apply for an internship?</h3>
                        <p>
                            Find an internship you are interested in and
                            click the Apply button.
                        </p>
                    </div>

                    <div className="faq-item">
                        <h3>How do I track my applications?</h3>
                        <p>
                            Go to the Applications page to view and
                            manage your applications.
                        </p>
                    </div>

                    <div className="faq-item">
                        <h3>What do the application statuses mean?</h3>
                        <p>
                            Each status shows the current stage of your
                            internship application.
                        </p>
                    </div>

                    <div className="faq-item">
                        <h3>How do I change my preferences?</h3>
                        <p>
                            Go to Preferences to update your internship
                            interests and preferences.
                        </p>
                    </div>

                </div>
            </section>


            <section className="status-section">
                <h2>Application Status Guide</h2>

                <div className="status-list">
                    <div className="status-item">
                        <span>Applied</span>
                        <p>Application has been submitted.</p>
                    </div>

                    <div className="status-item">
                        <span>Interview</span>
                        <p>You have been shortlisted for an interview.</p>
                    </div>

                    <div className="status-item">
                        <span>Offer</span>
                        <p>You have received an internship offer.</p>
                    </div>

                    <div className="status-item">
                        <span>Rejected</span>
                        <p>The application was unsuccessful.</p>
                    </div>
                </div>
            </section>


            <section className="contact-section">
                <h2>Still need help?</h2>
                <p>Get in touch with the InternFind support team.</p>

                <button>Contact Support</button>
            </section>

        </div>
    );
}

export default Help;