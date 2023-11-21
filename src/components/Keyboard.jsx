import { useEffect } from 'react'
import deleteSimbol from '../assets/delete.svg'

function Keyboard({ handleKeySelect, handleDeleteLetter, handleValidator }) {

  const fristKeysRow = [
    "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"
  ]
  const secondKeyRow = [
    "A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"
  ]
  const LastKeyRow = [
    "Z", "X", "C", "V", "B", "N", "M"
  ]

  const onKeyboardClick = (pressedKey) => {
    handleKeySelect(pressedKey)
  }

  const onDeleteClick = (deleteKey) => {
    handleDeleteLetter(deleteKey)
  }

  const onValidatorWord = () => {
    handleValidator()
  }

  return (
    <section className="w-11/12 md:w-638 bg-gray-200 mx-auto py-6 rounded-2xl dark:bg-blue-dark-400 dark:text-white">
      <ul className="flex justify-around my-3 mx-auto px-2 md:px-10">
        {fristKeysRow.map((key, index) => {
          return (
            <li onClick={onKeyboardClick} key={`${key}-${index}`} className="letters !w-44 !h-44 !font-light !text-2sm cursor-pointer border-none bg-gray-250 dark:bg-blue-dark-200 dark:text-white">{key}</li>
          )
        })}
      </ul>
      <ul className="flex justify-around my-3 mx-auto pl-4 md:pl-13 pr-2 md:pr-6 ">
        {secondKeyRow.map((key, index) => {
          return (
            <li onClick={onKeyboardClick} key={`${key}-${index}`} className="letters !w-44 !h-44 !font-light !text-2sm cursor-pointer border-none bg-gray-250 dark:bg-blue-dark-200 dark:text-white">{key}</li>
          )
        })}
      </ul>
      <ul className="flex justify-around my-3 mx-auto pl-1 pr-4 md:pr-14">
        <li onClick={onValidatorWord} className="letters !w-76 !h-44 border-none !text-2sm cursor-pointer !font-light bg-gray-250  dark:bg-blue-dark-200 dark:text-white">ENTER</li>
        {LastKeyRow.map((key, index) => {
          return (
            <li onClick={onKeyboardClick} key={`${key}-${index}`} className="letters !w-44 !h-44 !font-light !text-2sm cursor-pointer border-none bg-gray-250 dark:bg-blue-dark-200 dark:text-white">{key}</li>
          )
        })}
        <li onClick={onDeleteClick} className="letters !w-76 !h-44 border-none !text-2sm cursor-pointer !font-light bg-gray-250 dark:bg-blue-dark-200 dark:text-white"><img src={deleteSimbol} alt="boton de borrar" title="eliminar" /></li>

      </ul>
    </section>
  )
}

export default Keyboard