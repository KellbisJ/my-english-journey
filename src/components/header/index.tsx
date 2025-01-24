import { NavigateFunction, useNavigate } from "react-router";
import { useDarkMode } from "../../hooks/use-dark-mode";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const Header = (): React.JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useDarkMode()
  const navigate: NavigateFunction = useNavigate()

  const handleNavigate = (path: string) => {
    navigate(path)
  }
  return (
     <header className="p-4 bg-indigo-500 dark:bg-indigo-950 text-white flex justify-between items-center transition">
        <h1 className="cursor-pointer" onClick={() => {handleNavigate('/')}}>English Journey</h1>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="bg-gray-900 dark:bg-gray-200 text-white dark:text-black p-2 rounded"
        >
          {!isDarkMode ? <MdDarkMode/> : <MdOutlineLightMode/>}
        </button>
      </header>
  )
}

export {Header}