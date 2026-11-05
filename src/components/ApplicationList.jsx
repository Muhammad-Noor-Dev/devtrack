
function ApplicationList({
  applications,
  deleteApplication,
  startEditing,
}) {
  if (applications.length === 0) {
    return (
      <section className="applications-section">
        <h2>Your Applications</h2>

        <div className="empty-state">
          <h3>No applications found</h3>
          <p>Try another search or add a new job application.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="applications-section">
      <div className="section-heading">
        <div>
          <h2>Your Applications</h2>
          <p>{applications.length} applications found</p>
        </div>
      </div>

      <div className="applications-list">
        {applications.map((application) => (
          <article className="application-card" key={application.id}>
            <div className="application-top">
              <div>
                <h3>{application.company}</h3>
                <p>{application.jobTitle}</p>
              </div>

              <span
                className={`status-badge ${application.status.toLowerCase()}`}
              >
                {application.status}
              </span>
            </div>

            <div className="application-details">
              <span>📍 {application.location || "Location not provided"}</span>
              <span>📅 {application.date || "Date not provided"}</span>
            </div>

            {application.notes && (
              <p className="application-notes">{application.notes}</p>
            )}

            {application.jobLink && (
              <a
                href={application.jobLink}
                target="_blank"
                rel="noreferrer"
                className="job-link"
              >
                View Job Posting ↗
              </a>
            )}

            <div className="button-group">
              <button
                className="edit-button"
                onClick={() => startEditing(application)}
              >
                Edit
              </button>

              <button
                className="delete-button"
                onClick={() => {
                  if (window.confirm("Delete this application?")) {
                    deleteApplication(application.id);
                  }
                }}
              >
                Delete
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ApplicationList;
