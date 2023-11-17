import { useState } from 'react';
import './style.css';
import ferro from '../../images/ferro.png';
import eloDefinitions from '../Elos';
import { Link } from 'react-router-dom'; 

function Victories() {
    const [vitorias, setVitorias] = useState(0);
    const [derrotas, setDerrotas] = useState(0);
    const [elo, setElo] = useState('');
    const [showResult, setShowResult] = useState(false);

    const calculateElo = (vitorias, derrotas) => {
        const saldoVitorias = vitorias - derrotas;

        if (saldoVitorias < 10) {
            return 'Ferro';
        } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
            return 'Bronze';
        } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
            return 'Prata';
        } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
            return 'Ouro';
        } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
            return 'Diamante';
        } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
            return 'Lendário';
        } else if (saldoVitorias >= 101) {
            return 'Imortal';
        }
    };

    const getEloImage = (elo) => eloDefinitions[elo]?.image || ferro;

    const handleCalculateElo = () => {
        const calculatedElo = calculateElo(Number(vitorias), Number(derrotas));
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
                        <label htmlFor='vitorias'>Qual a quantidade de vitórias?</label>
                        <input
                            type="number"
                            value={vitorias}
                            onChange={(e) => setVitorias(e.target.value)}
                        />

                        <label htmlFor='derrotas'>Qual a quantidade de derrotas?</label>
                        <input
                            type="number"
                            value={derrotas}
                            onChange={(e) => setDerrotas(e.target.value)}
                        />

                        {showResult ? (
                            <p id="result" aria-live="assertive">
                                O Invocador tem um saldo de vitórias de <b>{vitorias - derrotas}</b> e está no Elo <b>{elo}</b>!
                            </p>
                        ) : (
                            <p id="instruction">Clique no botão para descobrir o elo!</p>
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

export default Victories;