import { Button } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import "./SingleTeam.css";
import { Link } from 'react-router-dom';

const SingleTeam = (props) => {

    const { strTeamBadge, idTeam, strTeam, strSport } = props.league;

    return (

        <div className="col-md-4 my-3 singleTeam ">
            <Card >

                <div className="text-center pt-5">
                    <Card.Img variant="top" src={strTeamBadge} />
                </div>

                <Card.Body>
                    <div className="text-center">
                        <Card.Title> {strTeam}</Card.Title>
                        <Card.Text>
                            <span>Sports type: {strSport}</span>
                        </Card.Text>
                        <Button as={Link} to={`/team/${idTeam}`} variant="primary"> Explore  <FontAwesomeIcon icon={faArrowRight} />
                        </Button>
                    </div>
                </Card.Body>

            </Card>
        </div>
    );
};

export default SingleTeam;