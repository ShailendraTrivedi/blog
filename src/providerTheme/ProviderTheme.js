"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ProviderTheme = ({ children }) => {
  const themeToggle = useSelector((state) => state.themesStore.darkMode);
  const [theme, setTheme] = useState(themeToggle);
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
    setTheme(window.localStorage.getItem("darkMode"));
  }, [themeToggle]);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};

export default ProviderTheme;
