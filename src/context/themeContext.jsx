import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

const getStorage = () => {
  const storage = localStorage.getItem("theme");
  return storage ? JSON.parse(localStorage.getItem("theme")) : "light";
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getStorage() || "light");

  useEffect(() => {
    // Remove previous theme class
     document.documentElement.style.colorScheme = ``;
    document.documentElement.classList.remove(
      theme === "light" ? "dark" : "light"
    );

    // Add current theme class
    document.documentElement.classList.add(theme);
    document.documentElement.style.colorScheme = `${theme}`;
    // Save theme to localStorage
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
