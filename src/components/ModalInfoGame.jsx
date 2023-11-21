
import { useState, useEffect } from "react"
import question from "../assets/question.svg"

function ModalInfoGame() {
  const [modal, setModal] = useState("closeModal");
  const [bgModal, setBgModal] = useState("closeModal");

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');

    if (!hasVisitedBefore) {
      // Si es la primera visita, muestra el modal y actualiza el estado
      setModal('openModal')
      setBgModal('bgOpneModal')
      localStorage.setItem('hasVisitedBefore', true);
    }
  }, []);


  function handleModal() {
    modal === "openModal" ? setModal('closeModal') : setModal('openModal')
    bgModal === "bgOpneModal" ? setBgModal('closeModal') : setBgModal('bgOpneModal')
  }
  return (<>
    <img onClick={handleModal} className="w-8 cursor-pointer" src={question} alt="modal info del juego" title="simbolo de preguunta" />
    <div className={bgModal}></div>
    <article className={modal}>
      <h2 className="text-center font-bold text-3xl mb-2 dark:text-white">Cómo jugar</h2>
      <p className="text-lg my-1 dark:text-white">Adivina la palabra oculta en cinco intentos.</p>
      <p className="text-lg my-1 dark:text-white">Cada intento debe ser una palabra válida de 5 letras.</p>
      <p className="text-lg my-1 dark:text-white">Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.</p>
      <h3 className="text-lg font-bold dark:text-white">Ejemplos</h3>
      <ul className="flex justify-around my-3">
        <li className="letters !border-0 bg-green text-white">G</li>
        <li className="letters text-black bg-white dark:bg-blue-dark-500 dark:border-white dark:text-white">A</li>
        <li className="letters text-black bg-white dark:bg-blue-dark-500 dark:border-white dark:text-white">T</li>
        <li className="letters text-black bg-white dark:bg-blue-dark-500 dark:border-white dark:text-white">O</li>
        <li className="letters text-black bg-white dark:bg-blue-dark-500 dark:border-white dark:text-white">S</li>
      </ul>
      <p className="text-lg my-1">La letra <b>G</b> está en la palabra y en la posición correcta.</p>
      <ul className="flex justify-around my-3">
        <li className="letters text-black bg-white dark:bg-blue-dark-500 dark:border-white dark:text-white">V</li>
        <li className="letters text-black bg-white dark:bg-blue-dark-500 dark:border-white dark:text-white">O</li>
        <li className="letters bg-yellow !border-0 text-white">C</li>
        <li className="letters text-black bg-white dark:bg-blue-dark-500 dark:border-white dark:text-white">A</li>
        <li className="letters text-black bg-white dark:bg-blue-dark-500 dark:border-white dark:text-white">L</li>
      </ul>
      <p className="text-lg my-1">La letra <b>C</b> está en la palabra pero en la posición incorrecta.</p>
      <ul className="flex justify-around my-3">
        <li className="letters text-black bg-white dark:bg-blue-dark-500 dark:border-white dark:text-white">C</li>
        <li className="letters text-black bg-white dark:bg-blue-dark-500 dark:border-white dark:text-white">A</li>
        <li className="letters text-black bg-white dark:bg-blue-dark-500 dark:border-white dark:text-white">N</li>
        <li className="letters text-black bg-white dark:bg-blue-dark-500 dark:border-white dark:text-white">T</li>
        <li className="letters bg-gray-300 !border-0 text-white">O</li>
      </ul>
      <p className="text-lg my-1">La letra <b>O</b> no está en la palabra.</p>
      <p className="text-lg my-1">Puede haber letras repetidas. Las pistas son independientes para cada letra.</p>
      <p className="text-lg my-1 text-center">¡Una palabra nueva cada 5 minutos!</p>
      <button onClick={handleModal} className="btn">!JUGAR¡</button>
    </article>
  </>
  )
}

export default ModalInfoGame