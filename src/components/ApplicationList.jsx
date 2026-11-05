function ApplicationList({ applications }) {
  if (applications.length === 0) {
    return <p>No applications yet. Add your first one!</p>;
  }

  return (
    <section>
      <h2>Your Applications</h2>

      {applications.map((application) => (
        <div key={application.id} className="application-card">
          <h3>{application.company}</h3>
          <p>{application.jobTitle}</p>
          <p>Status: {application.status}</p>
          <p>Location: {application.location}</p>
        </div>
      ))}
    </section>
  );
}

export default ApplicationList;