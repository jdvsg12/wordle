import { useState, useEffect } from "react"
import Keyboard from "../components/Keyboard";
import { WORDS_LIST } from "../services/word"
const maxNumberWord = "5";



function BoxLetter() {
  const [letterPress, setLetterPress] = useState([]);
  const [words, setWords] = useState([...WORDS_LIST]);
  const [classStyle, setClassStyle] = useState([])
  const [wordRandom, setWordRandom] = useState(words[0]);
  const [wordShow, setWordShow] = useState([])

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * words.length)
    setWordRandom(words[randomNumber].toUpperCase())

  }, [])

  function handleKeySelect(pressedKey) {
    const letter = pressedKey.target.innerText;
    if (letterPress.length <= maxNumberWord) {
      setLetterPress(letterPress => [...letterPress, ...letter])
    }
  }

  function handleDeleteLetter() {
    if (letterPress.length > 0) {
      setLetterPress((prevLetterPress) => prevLetterPress.slice(0, -1));
    }
  }
  useEffect(() => {
    const newWordShow = [];
    for (let i = 0; i < maxNumberWord; i++) {
      if (i < maxNumberWord) {
        const letter = wordRandom.split("")[i];
        const letterPressValue = letterPress[i];
        const classStyleValue = classStyle[i];
        const objeto = { letter: letter, classStyle: classStyleValue, letterPress: letterPressValue };
        newWordShow.push(objeto);
      }
    }
    setWordShow(newWordShow);
  }, [wordRandom, letterPress]);

  const handleValidator = () => {
    if (letterPress.length >= maxNumberWord) {
      console.log("funciona")
    }
  }


  return (
    <section>
      <article className="w-568 m-auto flex justify-between items-center my-10">
        {wordShow.map(({ letter, classStyle, letterPress }, index) => {
          return (
            <div className={!classStyle ? "letters" : classStyle} key={`${letter}-${index}`}>{letterPress}</div>
          )
        })}
      </article>
      <Keyboard wordShow={wordShow} handleKeySelect={handleKeySelect} handleDeleteLetter={handleDeleteLetter} handleValidator={handleValidator} />
    </section>
  )
}

export default BoxLetter