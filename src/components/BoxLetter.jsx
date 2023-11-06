import { useState, useEffect } from "react"
import Keyboard from "../components/Keyboard";
import { WORDS_LIST } from "../services/word"



function BoxLetter() {
  const wordShow = [];
  const [letterPress, setLetterPress] = useState([]);
  const [words, setWords] = useState([...WORDS_LIST]);
  const [wordRandom, setWordRandom] = useState(words[0]);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * words.length)
    setWordRandom(words[randomNumber].toUpperCase())

  }, [])

  function handleKeySelect(pressedKey) {
    const maxNumberWord = "5";
    const letter = pressedKey.target.innerText;
    if (letterPress.length <= maxNumberWord) {
      setLetterPress(letterPress => [...letterPress, ...letter])
    }
  }

  function handleDeleteLetter(deleteKey) {
    letterPress.pop()
  }

  for (let i = 0; i < wordRandom.split("").length; i++) {
    if (i < wordRandom.split("").length) {
      const letter = wordRandom.split("")[i];
      const valor = letterPress[i];
      const objeto = { letter: letter, letterPress: valor };
      wordShow.push(objeto)
    }
  }

  function handleValidator(e) {

  }


  return (
    <section>
      <article className="w-568 m-auto flex justify-between items-center my-10">
        {wordShow.map(({ letter, letterPress }, index) => {
          return (
            <div onChange={handleValidator} className="letters" key={`${letter}-${index}`}>{letterPress}</div>
          )
        })}
      </article>
      <Keyboard handleKeySelect={handleKeySelect} handleDeleteLetter={handleDeleteLetter} handleValidator={handleValidator} />
    </section>
  )
}

export default BoxLetter