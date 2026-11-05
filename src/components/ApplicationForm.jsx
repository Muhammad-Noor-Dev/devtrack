import { useEffect, useState } from "react";

function ApplicationForm({
  addApplication,
  editingApplication,
  updateApplication,
}) {
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Applied");
  const [jobLink, setJobLink] = useState("");
  const [notes, setNotes] = useState("");

  // Fill the form when the user clicks Edit
  useEffect(() => {
    if (editingApplication) {
      setCompany(editingApplication.company);
      setJobTitle(editingApplication.jobTitle);
      setLocation(editingApplication.location);
      setDate(editingApplication.date);
      setStatus(editingApplication.status);
      setJobLink(editingApplication.jobLink);
      setNotes(editingApplication.notes);
    }
  }, [editingApplication]);

  function handleSubmit(event) {
    event.preventDefault();

    const applicationData = {
      id: editingApplication ? editingApplication.id : Date.now(),
      company,
      jobTitle,
      location,
      date,
      status,
      jobLink,
      notes,
    };

    if (editingApplication) {
      updateApplication(applicationData);
    } else {
      addApplication(applicationData);
    }

    // Clear the form after adding or updating
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
      <h2>
        {editingApplication ? "Edit Job Application" : "Add Job Application"}
      </h2>

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
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Rejected">Rejected</option>
            <option value="Offer">Offer</option>
          </select>
        </div>

        <div>
          <label>Job Link</label>
          <input
            type="url"
            value={jobLink}
            onChange={(event) => setJobLink(event.target.value)}
            placeholder="https://example.com"
          />
        </div>

        <div>
          <label>Notes</label>
          <textarea
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            placeholder="Add any notes here..."
            rows="4"
          />
        </div>

        <button type="submit">
          {editingApplication ? "Update Application" : "Add Application"}
        </button>
      </form>
    </section>
  );
}

export default ApplicationForm;