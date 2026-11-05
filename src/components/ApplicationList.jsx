function ApplicationList({
  applications,
  deleteApplication,
  startEditing,
}) {
  if (applications.length === 0) {
    return (
      <section className="applications-section">
        <h2>Your Applications</h2>
        <p>No applications yet. Add your first one!</p>
      </section>
    );
  }

  return (
    <section className="applications-section">
      <h2>Your Applications</h2>

      <div className="applications-list">
        {applications.map((application) => (
          <div key={application.id} className="application-card">
            <h3>{application.company}</h3>

            <p>
              <strong>Job:</strong> {application.jobTitle}
            </p>

            <p>
              <strong>Location:</strong>{" "}
              {application.location || "Not provided"}
            </p>

            <p>
              <strong>Date:</strong> {application.date || "Not provided"}
            </p>

            <p>
              <strong>Status:</strong> {application.status}
            </p>

            {application.notes && (
              <p>
                <strong>Notes:</strong> {application.notes}
              </p>
            )}

            {application.jobLink && (
              <p>
                <a
                  href={application.jobLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Job Posting
                </a>
              </p>
            )}

            <div className="button-group">
              <button
                onClick={() => startEditing(application)}
                className="edit-button"
              >
                Edit
              </button>

              <button
                onClick={() => deleteApplication(application.id)}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ApplicationList;