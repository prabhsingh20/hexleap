import { useEffect, useState } from "react";
import Collection from "../components/Collection/Collection";
import DetailCards from "../components/Details/DetailCards";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="h-[1778px]">
      <button
        className="absolute right-10 top-5 text-light-text dark:text-dark-text"
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        {!darkMode ? (
          <span className="material-symbols-outlined text-3xl">dark_mode</span>
        ) : (
          <span className="material-symbols-outlined text-3xl">light_mode</span>
        )}
      </button>

      <DetailCards />
      <Collection />
    </div>
  );
};

export default App;
