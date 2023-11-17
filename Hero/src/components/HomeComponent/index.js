import React from "react";
import { Link } from 'react-router-dom';

function HomeComponent() {

    return (

        <div className="elo">
            <div>
                <header>
                    <h1>Descubra seu Elo!</h1>
                </header>
                <div className="d-flex flex-column">
                    <Link to="xp"><button className="button"  >Por XP</button></Link>
                    <Link to="victories"><button className="button" >Vitórias</button></Link>
                </div>
            </div>
        </div>
    );
}


export default HomeComponent;
