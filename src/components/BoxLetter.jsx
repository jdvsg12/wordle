import { useState, useEffect } from "react";
import { WORDS_LIST } from "../services/word";
import Keyboard from "../components/Keyboard";
import ToastNotification from "./ToastNotification";
import BoxRow from "./BoxRow";
import BoxEmpty from "./BoxEmpty";
import BoxCurrent from "./BoxCurrent";

const maxNumberletter = "5";

function BoxLetter() {
  const [words, setWords] = useState([...WORDS_LIST]);
  const [secondsInLocalStorage, setSecondsInLocalStorage] = useState(null);
  const [turn, setTurn] = useState(4);
  const [completWord, setCompletWord] = useState([]);
  const [letterPress, setLetterPress] = useState([]);
  const [showToast, setShowToast] = useState(false)
  const [winner, setWinner] = useState(() => {
    const winnerLocalStorage = localStorage.getItem('winner');
    return winnerLocalStorage === null ? 0 : JSON.parse(winnerLocalStorage)
  })
  const [game, setGame] = useState(() => {
    const gamesLocalStorage = localStorage.getItem('game');
    return gamesLocalStorage === null ? 0 : JSON.parse(gamesLocalStorage)
  })

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
    localStorage.setItem("winner", winner);
    localStorage.setItem("game", JSON.parse(game));
  }, [wordRandom, winner, game]);

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
      if (wordRandom === letterPress.join("")) {
        setWinner(winner + 1)
        setGame(game + 1)
        setCompletWord([])
        setLetterPress([])
        const newRandomWord = getRandomWord();
        setWordRandom(newRandomWord)
      }
      else {
        setTurn(turn - 1)
        setCompletWord([...completWord, letterPress])
      }

      if (turn === 0) {
        setCompletWord([])
        setTurn(4)
        setGame(game + 1)
        setLetterPress([])
        setSecondsInLocalStorage(300)
        const newRandomWord = getRandomWord();
        setWordRandom(newRandomWord)
      }

    } else setShowToast(true);

  }

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
      {completWord.map((word, index) => (
        <BoxRow key={`${index}-${word}`} letterPress={word} wordRandom={wordRandom} />
      ))}
      <BoxCurrent letterPress={letterPress} />
      {Array.from(Array(turn)).map((_, index) => (
        < BoxEmpty key={index} letterPress={letterPress} />
      ))}

      <Keyboard
        handleKeySelect={handleKeySelect}
        handleDeleteLetter={handleDeleteLetter}
        handleValidator={handleValidator}
        wordRandom={wordRandom} />
    </section>
  );
}

export default BoxLetter;
