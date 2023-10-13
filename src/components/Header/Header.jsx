import { SunIcon } from "../Icons/SunIcon";
import { MoonIcon } from "../Icons/MoonIcon";
import { useState } from "react";

export const Header = () => {
  const [darkMode, setDarkMode] = useState("black");

  const toggleMode = () => {
    darkMode === "black" ? setDarkMode("white") : setDarkMode("black");
    darkMode === "black"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");

  };

  return (
    <header  className=" border-b border-gray-200 transition-all  dark:border-gray-500 shadow-sm w-full flex justify-around bg-white dark:bg-slate-800 p-5 text-black dark:text-white fixed top-0">
      <div className="hover:scale-125 transition text-xl">{"</>"}</div>
      <div className="flex gap-3">
        <ul className="flex gap-3 ">
          <li>
            <a href="#sobremi" className="hover:text-gray-400 dark:hover:text-blue-400 transition ">Inicio</a>
          </li>
          <li>
            <a href="#sobremi" className="hover:text-gray-400 dark:hover:text-blue-400 transition ">Sobre Mi</a>
          </li>
          <li>
            <a href="#proyectos" className="hover:text-gray-400 dark:hover:text-blue-400  transition ">Proyectos</a>
          </li>
          <li>
            <a href="#contacto" className="hover:text-gray-400 dark:hover:text-blue-400 transition ">Contacto</a>
          </li>
        </ul>
        <div onClick={toggleMode}>
          {darkMode === "black" ? <MoonIcon color={darkMode}/> : <SunIcon color={darkMode}/>}
        </div>
      </div>
    </header>
  );
};
