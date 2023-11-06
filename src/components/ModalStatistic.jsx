import { useState } from "react";
import Cronometro from "./Chronometer";
import statistic from "../assets/statistic.svg";



function ModalStatistic() {
    const [statisticModal, setStatisticModal] = useState('closeModal');
    const [victorys, setVictorys] = useState(['8']);
    const [games, setGames] = useState(['2'])

    function handleModal() {
        statisticModal === "openModal" ? setStatisticModal('closeModal') : setStatisticModal('openModal')
    }

    return (
        <>
            <img onClick={handleModal} className="w-10" src={statistic} alt="estadisticas de juego" title="Estadistica" />
            <section className={statisticModal}>
                <h2 className="text-center font-bold text-3xl mb-2">Estadísticas</h2>
                <article className="grid grid-cols-2 place-items-center py-4">
                    <div className="grid place-items-center">
                        <h4 className="text-3xl my-1 font-bold">{games}</h4>
                        <p className="text-center text-xl">Jugadas</p>
                    </div>
                    <div className="grid place-items-center">
                        <h4 className="text-3xl my-1 font-bold">{victorys}</h4>
                        <p className="text-center text-xl">Victorias</p>
                    </div>
                </article>
                <article>
                    <h4 className="text-xl text-center my-1">SIGUIENTE PALABRA</h4>
                    <Cronometro />
                </article>
                <button onClick={handleModal} className="btn">Aceptar</button>
            </section>

        </>
    )
}

export default ModalStatistic