// DEPENDENCIES //
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES //
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";

// COMPONENTS //
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import CSS from "../src/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Index />} />
            <Route path="/projects/new" element={<New />} />
            <Route path="/projects/:id" element={<Show />} />
            <Route path="/projects/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
