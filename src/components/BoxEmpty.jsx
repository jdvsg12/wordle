import Box from "./Box"

function BoxEmpty() {
    return (
        <article className="w-11/12 md:w-450 m-auto flex justify-between items-center my-5">
            {Array.from(Array(5)).map((_, index) => (
                <Box key={index} letterPress={""} stateLetter={"empty"} />
            ))}
        </article>
    )
}

export default BoxEmpty