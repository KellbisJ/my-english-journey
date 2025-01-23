import { useDarkMode } from "../../hooks/use-dark-mode";

const Header = (): React.JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useDarkMode()
  return (
     <header className="p-4 bg-indigo-500 dark:bg-indigo-950 text-white flex justify-between items-center transition">
        <h1>English Journey</h1>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="bg-gray-600 dark:bg-gray-200 text-white dark:text-black p-2 rounded"
        >
          Toggle Dark Mode
        </button>
      </header>
  )
}

export {Header}