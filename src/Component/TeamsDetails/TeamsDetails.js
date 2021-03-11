import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TeamDetailsInfo from '../TeamDetailsInfo/TeamDetailsInfo';

const TeamsDetails = () => {

    const { teamDetailsId } = useParams();

    const [singleTeamDetails, setTeamDerails] = useState([])

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamDetailsId}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setTeamDerails(data.teams[0]))
    }, [])

    return (

        <div>
            <TeamDetailsInfo singleTeamDetails={singleTeamDetails}></TeamDetailsInfo>
        </div>

    );
};

export default TeamsDetails;