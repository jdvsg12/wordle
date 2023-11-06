import ModalInfoGame from "../components/ModalInfoGame";
import ModalStatistic from "./ModalStatistic";

import InputToggle from "./inputToggle";


function Nav() {
  return (
    <nav className='flex justify-between items-center w-638 py-3 px-4 bg-gray-200 rounded-2xl mt-76 mx-auto'>
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