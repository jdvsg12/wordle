import Box from "./Box"

export default function BoxCurrent({letterPress}) {
    return (
        <article className="w-11/12 md:w-450 m-auto flex justify-between items-center my-5">

            {letterPress.map((letter, index) => (
                <Box key={index} letterPress={letter} stateLetter={"letters"} />
            ))}

            {Array.from(Array(5 - letterPress.length)).map((letter, index) => (
                <Box key={index} letterPress={letter} stateLetter={"empty"} />
            ))}
        </article>
    )
}
