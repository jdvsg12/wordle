import { useState } from 'react'
import deleteSimbol from '../assets/delete.svg'

function Keyboard({ handleKeySelect, handleDeleteLetter, handleValidator }) {
  const [letter, setLetter] = useState([])

  const fristKeysRow = [
    { key: "Q", stade: "key" },
    { key: "W", stade: "key" },
    { key: "E", stade: "key" },
    { key: "R", stade: "key" },
    { key: "S", stade: "key" },
    { key: "T", stade: "key" },
    { key: "Y", stade: "key" },
    { key: "U", stade: "key" },
    { key: "I", stade: "key" },
    { key: "O", stade: "key" },
    { key: "P", stade: "key" }

  ]
  const secondKeyRow = [
    { key: "A", stade: "key" },
    { key: "S", stade: "key" },
    { key: "D", stade: "key" },
    { key: "F", stade: "key" },
    { key: "G", stade: "key" },
    { key: "H", stade: "key" },
    { key: "J", stade: "key" },
    { key: "K", stade: "key" },
    { key: "L", stade: "key" },
    { key: "Ñ", stade: "key" }
  ]
  const LastKeyRow = [
    { key: "Z", stade: "key" },
    { key: "X", stade: "key" },
    { key: "C", stade: "key" },
    { key: "V", stade: "key" },
    { key: "B", stade: "key" },
    { key: "N", stade: "key" },
    { key: "M", stade: "key" }
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
        {fristKeysRow.map(({ key, stade }, index) => {
          return (
            <li onClick={onKeyboardClick} key={`${key}-${index}`} className={stade}>{key}</li>
          )
        })}
      </ul>
      <ul className="flex justify-around my-3 mx-auto pl-4 md:pl-13 pr-2 md:pr-6 ">
        {secondKeyRow.map(({ key, stade }, index) => {
          return (
            <li onClick={onKeyboardClick} key={`${key}-${index}`} className={stade}>{key}</li>
          )
        })}
      </ul>
      <ul className="flex justify-around my-3 mx-auto pl-1 pr-4 md:pr-14">
        <li onClick={onValidatorWord} className="letters !w-76 !h-44 border-none !text-2sm cursor-pointer !font-light bg-gray-250  dark:bg-blue-dark-200 dark:text-white">ENTER</li>
        {LastKeyRow.map(({ key, stade }, index) => {
          return (
            <li onClick={onKeyboardClick} key={`${key}-${index}`} className={stade}>{key}</li>
          )
        })}
        <li onClick={onDeleteClick} className="letters !w-76 !h-44 border-none !text-2sm cursor-pointer !font-light bg-gray-250 dark:bg-blue-dark-200 dark:text-white"><img src={deleteSimbol} alt="boton de borrar" title="eliminar" /></li>

      </ul>
    </section>
  )
}

export default Keyboard