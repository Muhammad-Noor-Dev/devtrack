function Stats({ applications }) {
  const total = applications.length;

  const applied = applications.filter(
    (application) => application.status === "Applied"
  ).length;

  const interview = applications.filter(
    (application) => application.status === "Interview"
  ).length;

  const rejected = applications.filter(
    (application) => application.status === "Rejected"
  ).length;

  const offer = applications.filter(
    (application) => application.status === "Offer"
  ).length;

  return (
    <section className="stats-section">
      <div className="stat-card">
        <span>Total</span>
        <strong>{total}</strong>
      </div>

      <div className="stat-card">
        <span>Applied</span>
        <strong>{applied}</strong>
      </div>

      <div className="stat-card">
        <span>Interview</span>
        <strong>{interview}</strong>
      </div>

      <div className="stat-card">
        <span>Rejected</span>
        <strong>{rejected}</strong>
      </div>

      <div className="stat-card">
        <span>Offers</span>
        <strong>{offer}</strong>
      </div>
    </section>
  );
}

export default Stats;