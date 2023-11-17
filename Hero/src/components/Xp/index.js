import { useState } from 'react';
import { Link } from 'react-router-dom';
import ferro from '../../images/ferro.png';

import eloDefinitions from '../Elos';

function Elo() {
    const [summonerName, setSummonerName] = useState('');
    const [xp, setXp] = useState(0);
    const [elo, setElo] = useState('');
    const [showResult, setShowResult] = useState(false);

    const calculateElo = (xp) => {
        if (xp < 1000) {
            return 'Ferro';
        } else if (xp >= 1001 && xp <= 2000) {
            return 'Bronze';
        } else if (xp >= 2001 && xp <= 5000) {
            return 'Prata';
        } else if (xp >= 5001 && xp <= 7000) {
            return 'Ouro';
        } else if (xp >= 7001 && xp <= 8000) {
            return 'Platina';
        } else if (xp >= 8001 && xp <= 9000) {
            return 'Diamante';
        } else if (xp >= 9001 && xp <= 10000) {
            return 'Mestre';
        } else if (xp >= 10001 && xp <= 15000) {
            return 'Grão-Mestre';
        } else if (xp >= 15001) {
            return 'Desafiante';
        }
    };

    const getEloImage = (elo) => eloDefinitions[elo]?.image || ferro;

    const handleCalculateElo = () => {
        const calculatedElo = calculateElo(xp);
        setElo(calculatedElo);
        setShowResult(true);
    };

    return (
        <>
            <Link to="/DIO-classificador-nivel-de-heroi"><button className='buttonBack'>«</button></Link>
            <div className="elo">
                <div>
                    <header>
                        <h1>Descubra seu Elo!</h1>
                    </header>
                    <div className="d-flex flex-column">
                        <label htmlFor='summonerName'>Qual o nome do Invocador?</label>
                        <input
                            type="text"
                            value={summonerName}
                            onChange={(e) => setSummonerName(e.target.value)}
                        />

                        <label htmlFor='xp'>Qual a quantidade de XP?</label>
                        <input
                            type="number"
                            value={xp}
                            onChange={(e) => setXp(e.target.value)}
                        />

                        {showResult ? (
                            <p id="result" aria-live="assertive">
                                O Invocador <b>{summonerName}</b> está no elo <b>{elo}</b>!
                            </p>
                        ) : (
                            <p id="instruction" >Clique no botão para descobrir o elo!</p>
                        )}
                    </div>
                    <div className="img d-flex flex-column">
                        <img id="elo" src={getEloImage(elo)} alt="Imagem do Elo" />
                        <button className="button" onClick={handleCalculateElo}>Clique aqui</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Elo;
