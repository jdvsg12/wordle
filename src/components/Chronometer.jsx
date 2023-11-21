import React, { useState, useEffect } from 'react';

const formatSecondsToMinutesAndSeconds = (seconds) => {
  const minutos = Math.floor(seconds / 60);
  const segundosRestantes = seconds % 60;
  return `${minutos < 10 ? '0' : ''}${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
};

const Cronometro = () => {
  const initialSeconds = JSON.parse(localStorage.getItem('seconds')) || 300;
  const [segundos, setSegundos] = useState(initialSeconds);

  useEffect(() => {
    let intervalID;

    const reiniciarCronometro = () => {
      setSegundos(300); // Reiniciar a 5 minutos
      localStorage.setItem('seconds', JSON.stringify(300));
    };

    const reinicioIntervalID = setInterval(() => {
      reiniciarCronometro();
    }, 300000); // 300000 milisegundos = 5 minutos

    intervalID = setInterval(() => {
      setSegundos((prevSegundos) => {
        const newSegundos = prevSegundos - 1;

        if (newSegundos <= 0) {
          reiniciarCronometro();
        } else {
          localStorage.setItem('seconds', JSON.stringify(newSegundos));
        }

        return newSegundos;
      });
    }, 1000);

    return () => {
      clearInterval(intervalID);
      clearInterval(reinicioIntervalID);
    };
  }, []);

  return (
    <div>
      <p className='text-center'>{formatSecondsToMinutesAndSeconds(segundos)}</p>
    </div>
  );
};

export default Cronometro;
