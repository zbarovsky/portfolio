import {Container, Row, Col, Image, Button} from 'react-bootstrap';

export default function About () {
    return (
        <div  id='about' className='aboutMe'>
            <div className='aboutMeContainer'>
                <div className='bio'>
                    <h1 className='aboutMe'>Who am I</h1>
                    <p className='bioParagraph'>I am a software engineer based in the Seattle area. After years of social work, I decided to follow my passion for coding and collaborating with others by using code to bring action to their goals. When I'm not working, I'm often found either playing music or videogames.</p>
                </div>
                <div className='profilePic'>
                    <img src='/headShot.png' alt="headshot for Zack Barovsky" />
                </div>
            </div>
        </div>
    )
}