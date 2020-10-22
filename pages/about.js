import {Container, Row, Col, Image, Button} from 'react-bootstrap';

export default function About () {
    return (
        <div  id='about' className='aboutme'>
            <Container fluid auto>
                <Row>
                    <Col>
                        <h1 className='aboutMe mb-3'>Who am I</h1>
                        <p className='bio mb-3'>I am a software engineer based in the Seattle area. After years of social work, I decided to follow my passion for coding and collaborating with others by using code to bring action to their goals. When I'm not working, I'm often found either playing music or videogames.</p>
                    </Col>
                    <Col>
                        <img  src='/headShot.png' alt="headshot for Zack Barovsky" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}