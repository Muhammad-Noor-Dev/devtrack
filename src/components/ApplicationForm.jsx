import { useState } from "react";

function ApplicationForm({ addApplication }) {
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Applied");
  const [jobLink, setJobLink] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newApplication = {
      id: Date.now(),
      company,
      jobTitle,
      location,
      date,
      status,
      jobLink,
      notes,
    };

    addApplication(newApplication);

    // Clear the form after adding
    setCompany("");
    setJobTitle("");
    setLocation("");
    setDate("");
    setStatus("Applied");
    setJobLink("");
    setNotes("");
  }

  return (
    <section className="form-section">
      <h2>Add Job Application</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Company Name</label>
          <input
            type="text"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            placeholder="e.g. Google"
            required
          />
        </div>

        <div>
          <label>Job Title</label>
          <input
            type="text"
            value={jobTitle}
            onChange={(event) => setJobTitle(event.target.value)}
            placeholder="e.g. Junior Developer"
            required
          />
        </div>

        <div>
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="e.g. Remote"
          />
        </div>

        <div>
          <label>Application Date</label>
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>

        <div>
          <label>Status</label>
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option>Applied</option>
            <option>Interview</option>
            <option>Rejected</option>
            <option>Offer</option>
          </select>
        </div>

        <div>
          <label>Job Link</label>
          <input
            type="url"
            value={jobLink}
            onChange={(event) => setJobLink(event.target.value)}
            placeholder="https://..."
          />
        </div>

        <div>
          <label>Notes</label>
          <textarea
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            placeholder="Add any notes here..."
          />
        </div>

        <button type="submit">Add Application</button>
      </form>
    </section>
  );
}

export default ApplicationForm;