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
    <section className="w-638 bg-gray-200 mx-auto py-6 rounded-2xl">
      <ul className="flex justify-around my-3 mx-auto px-10">
        {fristKeysRow.map((key, index) => {
          return (
            <li onClick={onKeyboardClick} key={`${key}-${index}`} className="letters !w-44 !h-44 !font-light !text-2sm cursor-pointer border-none bg-gray-250">{key}</li>
          )
        })}
      </ul>
      <ul className="flex justify-around my-3 mx-auto pl-13 pr-6 ">
        {secondKeyRow.map((key, index) => {
          return (
            <li onClick={onKeyboardClick} key={`${key}-${index}`} className="letters !w-44 !h-44 !font-light !text-2sm cursor-pointer border-none bg-gray-250">{key}</li>
          )
        })}
      </ul>
      <ul className="flex justify-around my-3 mx-auto pl-1 pr-14">
        <li onClick={onValidatorWord} className="letters !w-76 !h-44 border-none !text-2sm cursor-pointer !font-light bg-gray-250">ENTER</li>
        {LastKeyRow.map((key, index) => {
          return (
            <li onClick={onKeyboardClick} key={`${key}-${index}`} className="letters !w-44 !h-44 !font-light !text-2sm cursor-pointer border-none bg-gray-250">{key}</li>
          )
        })}
        <li onClick={onDeleteClick} className="letters !w-76 !h-44 border-none !text-2sm cursor-pointer !font-light bg-gray-250"><img src={deleteSimbol} alt="boton de borrar" title="eliminar" /></li>

      </ul>
    </section>
  )
}

export default Keyboard