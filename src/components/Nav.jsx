import ModalInfoGame from "../components/ModalInfoGame";
import ModalStatistic from "./ModalStatistic";
import InputToggle from "./InputToggle";


function Nav() {
  return (
    <nav className='nav dark:bg-blue-dark-400 dark:text-white'>
      <ModalInfoGame />
      <h1 className='text-4xl text-center font-bold'>WORDLE</h1>
      <div className="flex items-center justify-center">
        <ModalStatistic />
        <InputToggle />
      </div>
    </nav>
  )
}

export default Nav