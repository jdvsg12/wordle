import { useState, useEffect } from "react";
import Cronometro from "./Chronometer";
import statistic from "../assets/statistic.svg";



function ModalStatistic() {
    const gamesInLocalStorage = JSON.parse(localStorage.getItem('game'));
    const winnerInLocalStorage = JSON.parse(localStorage.getItem('winner'));
    const [statisticModal, setStatisticModal] = useState('closeModal');
    const [bgStatisticModal, setBgStatisticModal] = useState('closeModal');
    const [winner, setWinner] = useState()
    const [games, setGames] = useState()

    useEffect(() => {
        setGames(gamesInLocalStorage)
        setWinner(winnerInLocalStorage)
    }, [gamesInLocalStorage, winnerInLocalStorage])

    function handleModal() {
        statisticModal === "openModal" ? setStatisticModal('closeModal') : setStatisticModal('openModal')
        bgStatisticModal === "bgOpneModal" ? setBgStatisticModal('closeModal') : setBgStatisticModal('bgOpneModal')
    }

    return (<>
        <img onClick={handleModal} className="w-10" src={statistic} alt="estadisticas de juego" title="Estadistica" />
        <div className={bgStatisticModal}></div>
        <section className={statisticModal}>
            <h2 className="text-center font-bold text-3xl mb-2">Estadísticas</h2>
            <article className="grid grid-cols-2 place-items-center py-4">
                <div className="grid place-items-center">
                    <h4 className="text-3xl my-1 font-bold">{games}</h4>
                    <p className="text-center text-xl">Jugadas</p>
                </div>
                <div className="grid place-items-center">
                    <h4 className="text-3xl my-1 font-bold">{winner}</h4>
                    <p className="text-center text-xl">Victorias</p>
                </div>
            </article>
            <article>
                <h3 className="text-xl text-center my-1">Ganaste</h3>
                <h4 className="text-xl text-center my-1">SIGUIENTE PALABRA</h4>
                <Cronometro />
            </article>
            <button onClick={handleModal} className="btn">Aceptar</button>
        </section>

    </>
    )
}

export default ModalStatistic