import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

export default function ThemeButton() {
  const toggleTheme = () => {};

  return (
    <div
      className="relative w-16 h-8 flex items-center
  dark:bg-gray-900 bg-teal-500 cursor-pointer
  rounded-full p-1
  "
      onClick={() => toggleTheme()}
    >
      <FaMoon className="text-white" size={18} />
      <div
        className="absolute bg-white dark:bg-medium w-6 h-6 rounded-full shadow-sm transform transition-transform duration-300"
        // style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
}
