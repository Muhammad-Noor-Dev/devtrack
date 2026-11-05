import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ApplicationForm from "./components/ApplicationForm";
import ApplicationList from "./components/ApplicationList";

function App() {
  // Load applications from Local Storage when the app starts
  const [applications, setApplications] = useState(() => {
    const savedApplications = localStorage.getItem("applications");
    return savedApplications ? JSON.parse(savedApplications) : [];
  });

  // Keep track of the application being edited
  const [editingApplication, setEditingApplication] = useState(null);

  // Save applications to Local Storage whenever they change
  useEffect(() => {
    localStorage.setItem("applications", JSON.stringify(applications));
  }, [applications]);

  // Add a new application
  function addApplication(newApplication) {
    setApplications([...applications, newApplication]);
  }

  // Delete an application
  function deleteApplication(id) {
    const updatedApplications = applications.filter(
      (application) => application.id !== id
    );

    setApplications(updatedApplications);
  }

  // Start editing an application
  function startEditing(application) {
    setEditingApplication(application);
  }

  // Update an existing application
  function updateApplication(updatedApplication) {
    const updatedApplications = applications.map((application) =>
      application.id === updatedApplication.id
        ? updatedApplication
        : application
    );

    setApplications(updatedApplications);
    setEditingApplication(null);
  }

  return (
    <div>
      <Header />

      <main>
        <ApplicationForm
          addApplication={addApplication}
          editingApplication={editingApplication}
          updateApplication={updateApplication}
        />

        <ApplicationList
          applications={applications}
          deleteApplication={deleteApplication}
          startEditing={startEditing}
        />
      </main>
    </div>
  );
}

export default App;