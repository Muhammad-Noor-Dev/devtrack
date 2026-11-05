
function Stats({ applications }) {
  const total = applications.length;

  const applied = applications.filter(
    (app) => app.status === "Applied"
  ).length;

  const interview = applications.filter(
    (app) => app.status === "Interview"
  ).length;

  const rejected = applications.filter(
    (app) => app.status === "Rejected"
  ).length;

  const offer = applications.filter(
    (app) => app.status === "Offer"
  ).length;

  const stats = [
    { label: "Total Applications", value: total, color: "blue" },
    { label: "Applied", value: applied, color: "purple" },
    { label: "Interviews", value: interview, color: "orange" },
    { label: "Offers", value: offer, color: "green" },
    { label: "Rejected", value: rejected, color: "red" },
  ];

  return (
    <section className="stats-section">
      {stats.map((stat) => (
        <div className="stat-card" key={stat.label}>
          <div className={`stat-icon ${stat.color}`}>
            {stat.label.charAt(0)}
          </div>

          <p>{stat.label}</p>
          <h2>{stat.value}</h2>
        </div>
      ))}
    </section>
  );
}

export default Stats;
