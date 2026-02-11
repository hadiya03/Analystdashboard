/*import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

// Pages
import DashboardHome from "./pages/DashboardHome";
import CreatePlayer from "./pages/CreatePlayer";
import Players from "./pages/Players";
// CSS
import "./components/styles/layout.css";
import "./pages/styles/page.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<DashboardHome />} />
              <Route path="/create-player" element={<CreatePlayer />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;*/


/*import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import DashboardHome from "./pages/DashboardHome";
import Players from "./pages/Players";
import CreatePlayer from "./pages/CreatePlayer";

import "./components/styles/layout.css";
import "./pages/styles/page.css";
import PlayerProfile from "./pages/PlayerProfile";
import PlayerReadiness from "./pages/PlayerReadiness";
import UpdateAssessment from "./pages/UpdateAssessment";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />

        <div className="main-content">
          <Header />

          <main>
            <Routes>
              <Route path="/" element={<DashboardHome />} />
              <Route path="/players" element={<Players />} />
              <Route path="/create-player" element={<CreatePlayer />} />
              <Route path="/players/:id" element={<PlayerProfile />} />
              <Route path="/players/:id/readiness" element={<PlayerReadiness />} />
              <Route path="/players/:id/update-assessment" element={<UpdateAssessment />} />

            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;*/




import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import DashboardHome from "./pages/DashboardHome";
import Players from "./pages/Players";
import CreatePlayer from "./pages/CreatePlayer";

import "./components/styles/layout.css";
import "./pages/styles/page.css";
import PlayerProfile from "./pages/PlayerProfile";
import PlayerReadiness from "./pages/PlayerReadiness";
import UpdateAssessment from "./pages/UpdateAssessment";
import TrainingSessions from "./pages/TrainingSessions";
import TrainerReports from "./pages/TrainerReports";


const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />

        <div className="main-content">
          <Header />

          <main>
            <Routes>
              <Route path="/" element={<DashboardHome />} />
              <Route path="/players" element={<Players />} />
              <Route path="/create-player" element={<CreatePlayer />} />
              <Route path="/players/:id" element={<PlayerProfile />} />
              <Route path="/players/:id/readiness" element={<PlayerReadiness />} />
              <Route path="/players/:id/update-assessment" element={<UpdateAssessment />} />
              <Route path="/training-sessions"element={<TrainingSessions />}/>
              <Route path="reports" element={<TrainerReports />} />
              
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
