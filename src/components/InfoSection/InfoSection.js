import React from 'react'
import { InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img } from './InfoSection.elements'
import { Container, Button } from '../../globalStyles'
import { Link } from 'react-router-dom'
import { useState } from 'react';

import './styles.css';
import svg_1 from './svg_1.jpg';

// const InfoSection = ({

//     primary,
//     lightBg,
//     topLine,
//     lightTopLine,
//     lightText,
//     lightTextDesc,
//     headline,
//     description,
//     buttonLabel,
//     img,
//     alt,
//     imgStart,
//     start
// }) => {
function InfoSection() {
    const [role, setRole] = useState('user');
    const [userName, setUserName] = useState('');
    const [adminName, setAdminName] = useState('');
    const [adminPass, setAdminPass] = useState('');

    const handleChange = (event) => {
        setRole(event.target.value);
    }

    const handleSubmit = () => {
        if (role === 'user') {
            //display input for user name
        }
        if (role === 'admin') {
            // take admin action
        }
    }

    return (
        <>
            <InfoSec >
                <Container>
                    <InfoRow >
                        <InfoColumn>
                            <TextWrapper>
                                <h1>Document Management System</h1>
                                <p className="role" >Your Role ?</p>
                                <div className="radio">
                                    <label>
                                        <input
                                            type="radio"
                                            value="user"
                                            checked={role === 'user'}
                                            onChange={handleChange}
                                        />
                                        User
                                    </label>
                                    <label className="radio2">
                                        <input
                                            type="radio"
                                            value="admin"
                                            checked={role === 'admin'}
                                            onChange={handleChange}
                                        />
                                        Admin
                                    </label>
                                    {role === 'user' &&
                                        <div>
                                            <input type="text" className="user-input" placeholder="Enter your username" onChange={e => setUserName(e.target.value)} value={userName} />
                                            <br />
                                            <button className="user-submit" onClick={handleSubmit}>Enter</button>
                                        </div>
                                    }
                                    {role === 'admin' &&
                                        <div>
                                            <input type="text" className="user-input" placeholder="Enter your name" onChange={e => setAdminName(e.target.value)} value={adminName} />
                                            <input type="text" className="user-input" placeholder="Enter your password" onChange={e => setAdminPass(e.target.value)} value={adminPass} />
                                            <br />
                                            <button className="user-submit" onClick={handleSubmit}>Enter</button>
                                        </div>
                                    }
                                </div>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper >
                                <Img src={svg_1} alt="image" />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection;