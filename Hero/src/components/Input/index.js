import { useState } from 'react';
import './style.css';

import ferro from '../../images/ferro.png';
import bronze from '../../images/bronze.png';
import prata from '../../images/prata.png';
import ouro from '../../images/ouro.png';
import platina from '../../images/platina.png';
import diamante from '../../images/diamante.png';
import mestre from '../../images/mestre.png';
import graoMestre from '../../images/grão-mestre.png';
import desafiante from '../../images/desafiante.png';

const eloDefinitions = {
    Ferro: { image: ferro },
    Bronze: { image: bronze },
    Prata: { image: prata },
    Ouro: { image: ouro },
    Platina: { image: platina },
    Diamante: { image: diamante },
    Mestre: { image: mestre },
    'Grão-Mestre': { image: graoMestre },
    Desafiante: { image: desafiante },
};

function Input() {
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
                    <button onClick={handleCalculateElo}>Clique aqui</button>
                </div>
            </div>
        </div>

    );
}

export default Input;
