import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ApplicationForm from "./components/ApplicationForm";
import ApplicationList from "./components/ApplicationList";
import Stats from "./components/Stats";
import SearchFilter from "./components/SearchFilter";

function App() {
  // Load applications from Local Storage
  const [applications, setApplications] = useState(() => {
    const savedApplications = localStorage.getItem("applications");
    return savedApplications ? JSON.parse(savedApplications) : [];
  });

  const [editingApplication, setEditingApplication] = useState(null);

  // Search and filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  // Save applications whenever they change
  useEffect(() => {
    localStorage.setItem("applications", JSON.stringify(applications));
  }, [applications]);

  function addApplication(newApplication) {
    setApplications([...applications, newApplication]);
  }

  function deleteApplication(id) {
    const updatedApplications = applications.filter(
      (application) => application.id !== id
    );

    setApplications(updatedApplications);
  }

  function startEditing(application) {
    setEditingApplication(application);
  }

  function updateApplication(updatedApplication) {
    const updatedApplications = applications.map((application) =>
      application.id === updatedApplication.id
        ? updatedApplication
        : application
    );

    setApplications(updatedApplications);
    setEditingApplication(null);
  }

  // Filter applications based on search and status
  const filteredApplications = applications.filter((application) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      application.company.toLowerCase().includes(search) ||
      application.jobTitle.toLowerCase().includes(search);

    const matchesStatus =
      selectedStatus === "All" ||
      application.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <Header />

      <main>
        <Stats applications={applications} />

        <SearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
        />

        <div className="content-grid">
          <ApplicationForm
            addApplication={addApplication}
            editingApplication={editingApplication}
            updateApplication={updateApplication}
          />

          <ApplicationList
            applications={filteredApplications}
            deleteApplication={deleteApplication}
            startEditing={startEditing}
          />
        </div>
      </main>
    </div>
  );
}

export default App;