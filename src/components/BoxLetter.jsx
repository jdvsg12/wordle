import { useState, useEffect } from "react";
import { WORDS_LIST } from "../services/word";
import Keyboard from "../components/Keyboard";
// import Box from "../components/Box";
import ToastNotification from "./ToastNotification";
import BoxRow from "./BoxRow";

const maxNumberletter = "5";

function BoxLetter() {
  const [words, setWords] = useState([...WORDS_LIST]);
  const [stateLetter, useStateLetter] = useState([]);
  const [secondsInLocalStorage, setSecondsInLocalStorage] = useState(null);
  const [letterPress, setLetterPress] = useState([]);
  const [showToast, setShowToast] = useState(false)
  const [wordShow, setWordShow] = useState([]);

  const getRandomWord = () => {
    const randomNumber = Math.floor(Math.random() * words.length);
    return words[randomNumber].toUpperCase();
  };
  const [wordRandom, setWordRandom] = useState(() => {
    const storedWord = localStorage.getItem('wordRandomLocal');
    return storedWord ? JSON.parse(storedWord) : getRandomWord();
  });

  useEffect(() => {
    localStorage.setItem("wordRandomLocal", JSON.stringify(wordRandom));
  }, [wordRandom]);

  useEffect(() => {
    const secondsFromLocalStorage = localStorage.getItem('seconds') * 1000;
    setSecondsInLocalStorage(secondsFromLocalStorage);

    const interval = setInterval(() => {
      const newRandomWord = getRandomWord();
      setWordRandom(newRandomWord);
      const newArrayWords = words.filter(wordDelete => {
        return wordDelete !== newRandomWord;
      });
      setWords(newArrayWords);
    }, secondsFromLocalStorage);

    return () => {
      clearInterval(interval);
    };
  }, [secondsInLocalStorage, words]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      const letter = event.key.toUpperCase();

      if (event.key === 'Backspace') {
        handleDeleteLetter()
      }
      else if (event.key.match(/^[a-zA-Z]$/) && letterPress.length < maxNumberletter) {

        setLetterPress(letterPress => [...letterPress, ...letter]);
      } else if (event.key === 'Enter') {
        handleValidator()
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [letterPress]);

  function handleValidator() {
    const findWord = words.includes(letterPress.join('').toLowerCase())
    if (letterPress.length >= maxNumberletter && findWord === true) {
      wordShow.map(({ letter, letterPress }) => {
        if (letter === letterPress) {
          useStateLetter(stateLetter => [...stateLetter, ...["correct"]])
        }
        else if (wordRandom.split("").includes(letterPress)) {
          useStateLetter(stateLetter => [...stateLetter, ...["includes"]])
        }
        else {
          useStateLetter(stateLetter => [...stateLetter, ...["fail"]])
        }
      })

      for (let i in wordRandom) {
        const letter = wordRandom[i];
        const letterPressValue = letterPress[i];
        const letterState = stateLetter[i]
        const objeto = {
          letter: letter,
          letterPress: letterPressValue,
          stateLetter: letterState
        };

      }
    } else setShowToast(true);

  }
  useEffect(() => {
    const newWordShow = [];

    for (let i in wordRandom) {
      const letter = wordRandom[i];
      const letterPressValue = letterPress[i];
      const letterState = stateLetter[i]
      const objeto = {
        letter: letter,
        letterPress: letterPressValue,
        stateLetter: letterState
      };
      newWordShow.push(objeto);
    }
    setWordShow(newWordShow);
  }, [wordRandom, letterPress, stateLetter]);

  function handleKeySelect(pressedKey) {
    const letter = pressedKey.target.innerText;
    if (letterPress.length < maxNumberletter) {
      setLetterPress(letterPress => [...letterPress, ...letter]);
    }
  }

  function handleDeleteLetter() {
    if (letterPress.length > 0) {
      setLetterPress((prevLetterPress) => prevLetterPress.slice(0, -1));
    }
    setShowToast(false)
  }
  return (
    <section>
      {showToast === true ? <ToastNotification /> : undefined}
      <BoxRow letterPress={letterPress} wordRandom={wordRandom}/>
      <BoxRow letterPress={letterPress} wordRandom={wordRandom}/>
      <BoxRow letterPress={letterPress} wordRandom={wordRandom}/>
      <BoxRow letterPress={letterPress} wordRandom={wordRandom}/>
      <BoxRow letterPress={letterPress} wordRandom={wordRandom}/>
      {/* <article className="w-450 m-auto flex justify-between items-center my-5">
        {wordShow.map(({ wordRandom, letterPress, stateLetter }, i) => (
          <Box key={i} letterPress={letterPress} stateLetter={stateLetter} />
        ))}
      </article> */}

      <Keyboard
        handleKeySelect={handleKeySelect}
        handleDeleteLetter={handleDeleteLetter}
        handleValidator={handleValidator}
        letterPress={letterPress}
        wordRandom={wordRandom} />
    </section>
  );
}

export default BoxLetter;
