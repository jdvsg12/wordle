import Box from "./Box"

function BoxRow({ letterPress, wordRandom }) {

    return (
        <article className="w-11/12 md:w-450 m-auto flex justify-between items-center my-5">
            {letterPress.map((letter, i) => (
                <Box key={i} letterPress={letter} letterWord={wordRandom.split('')[i]} wordRandom={wordRandom} />
            ))}
            {Array.from(Array(5 - letterPress.length)).map((letter, i) => (
                <Box key={i} letterPress={letter} />
            ))}
        </article>
    )
}

export default BoxRow