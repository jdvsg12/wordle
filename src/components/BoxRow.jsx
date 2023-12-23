import Box from "./Box"

function BoxRow({ letterPress, wordRandom }) {
    const word = Array.from(wordRandom).slice('')

    const validationWord = (word, pos) => {
        if (word[pos] === letterPress[pos]) {
            return "correct"
        }
        else if (word.includes(letterPress[pos])) {
            return "includes"
        }
        else {
            return "fail"
        }
    }
    return (
        <article className="w-11/12 md:w-450 m-auto flex justify-between items-center my-5">

            {letterPress.map((letter, index) => (
                <Box key={index} letterPress={letter} stateLetter={validationWord(word, index)} position={index} />
            ))}

            {Array.from(Array(5 - letterPress.length)).map((letter, index) => (
                <Box key={index} letterPress={letter} stateLetter={"empty"} />
            ))}
        </article>
    )
}

export default BoxRow