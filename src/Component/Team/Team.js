import React, { useEffect, useState } from 'react';
import SingleTeam from '../SingleTeam/SingleTeam';
import './Team.css';

const Team = () => {

    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => setLeagues(data.teams))
    }, [])

    return (
        <>
            <div className="header">
                <h2>Racket Sports</h2>
            </div>

            <div className=" single-team">
                <div className="container">
                    <div className="row">
                        {
                            leagues.map((league, id) => <SingleTeam key={id} league={league}></SingleTeam>)
                        }
                    </div>
                </div>
            </div>

        </>
    );
};

export default Team;