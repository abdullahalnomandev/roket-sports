import React from 'react';
import './TeamDetails.css';
import maleImg from '../../Photo/male.png';
import femaleImg from '../../Photo/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const TeamDetailsInfo = (props) => {
    console.log(props);
    const { strTeamBadge, strTeam, strCountry, strGender, intFormedYear, strDescriptionEN, strStadiumDescription, strSport, strTeamBanner } = props.singleTeamDetails;

    return (

        <div className="teamDetailsInfo">

            <div className="baner">
                <div className="picpute">
                    <img src={strTeamBanner} alt="" />
                </div>
                
                <div className="image">
                    <img src={strTeamBadge} alt="" />
                </div>
            </div>

            
            <div className="container">
                <div className="row teamDetails">
                    <div className="col-md-6">
                        <h1>{strTeam}</h1>
                        <p> <FontAwesomeIcon icon={faClock} />  Founder : {intFormedYear}</p>
                        <p> <FontAwesomeIcon icon={faFlag} />   Country :    {strCountry}</p>
                        <p> <FontAwesomeIcon icon={faFutbol} />  Sport Type : {strSport} </p>
                        <p> <FontAwesomeIcon icon={faMars} />      Gender : {strGender}  </p>
                    </div>

                    <div className="col-md-6 genderImg">
                        {
                            (strGender == "Male") ? <img src={maleImg} alt="" /> : <img src={femaleImg} alt="" />
                        }
                    </div>

                </div>

                <div className="description">
                    <p>{strDescriptionEN}</p>
                    <p>{strStadiumDescription}</p>
                </div>


                <div className="social-Icon">
                    <a className="twitter" title="Twitter" href="https://twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>

                    <a className="facebook" title="Facebook" href="https://facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>

                    <a className="youTube" title="Youtube" href="https://youtube.com" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
                </div>


            </div>


        </div>
    );
};

export default TeamDetailsInfo;