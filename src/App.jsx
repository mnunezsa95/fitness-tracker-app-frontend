import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Workouts from "./components/Workouts";
import Statistics from "./components/Statistics";

function App() {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(prefer-color-scheme: dark)").matches) setTheme("dark");
    else setTheme("light");
  }, []);

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <button type="button" onClick={handleThemeSwitch}>
        {theme === "dark" ? <MoonIcon className="size-6" /> : <SunIcon className="size-6" />}
      </button>
      <h1 className="dark:bg-background text-4xl font-Mona-Sans">Statistics</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
