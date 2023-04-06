import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import Resume from "./components/Resume";
import TagFilter from "./components/TagFilter";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  function handleToggle() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className="w-screen min-h-screen">
      <div>
        <BrowserRouter>
          <div className="w-1/2 mx-auto">
            <NavBar darkMode={darkMode} onClick={handleToggle} />
          </div>
          <div className="w-5/6 sm:w-4/5 md:w-4/5 lg:w-3/5 mx-auto">
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:blogID" element={<BlogPost />} />
                <Route path="/topics/:topicName" element={<TagFilter />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
      <br />
    </div>
  );
}

export default App;
