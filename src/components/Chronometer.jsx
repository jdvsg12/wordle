import React, { useState, useEffect } from 'react';

const formatSecondsToMinutesAndSeconds = (seconds) => {
    const minutos = Math.floor(seconds / 60);
    const segundosRestantes = seconds % 60;
    return `${minutos < 10 ? '0' : ''}${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
};

const Cronometro = () => {
    const [segundos, setSegundos] = useState(300); // Iniciar con 5 minutos (300 segundos)

    useEffect(() => {
        let intervalID;

        if (segundos > 0) {
            intervalID = setInterval(() => {
                setSegundos((prevSegundos) => prevSegundos - 1);
            }, 1000);
        }

        return () => {
            clearInterval(intervalID);
        };
    }, [segundos]);

    return (
        <div>
            <p className='text-center'>{formatSecondsToMinutesAndSeconds(segundos)}</p>
        </div>
    );
};

export default Cronometro;
