import { AppProps } from "next/app";
import "../styles/globals.css";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
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
        onClick={() => setDarkMode(!darkMode)}
      >
        {!darkMode ? (
          <span className="material-symbols-outlined text-3xl">dark_mode</span>
        ) : (
          <span className="material-symbols-outlined text-3xl">light_mode</span>
        )}
      </button>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
