import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ApplicationForm from "./components/ApplicationForm";
import ApplicationList from "./components/ApplicationList";

function App() {
  const [applications, setApplications] = useState([]);

  function addApplication(newApplication) {
    setApplications([...applications, newApplication]);
  }

  return (
    <div>
      <Header />

      <main>
        <ApplicationForm addApplication={addApplication} />

        <ApplicationList applications={applications} />
      </main>
    </div>
  );
}

export default App;