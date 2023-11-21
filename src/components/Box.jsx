

function Box({ letterPress, letterWord, wordRandom }) {

    const matchLetter = (letterPress, letterWord) => {
    
        if (letterWord === letterPress) {
            return "correct"
        }
        else if (wordRandom.includes(letterPress)) {
            return "includes"
        }
        else {
            return "fail"
        }
    }

    return (
        <div className={matchLetter(letterPress, letterWord)}>{letterPress}</div>
    )
}

export default Box