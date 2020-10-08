import Link from 'next/link'
import {Container, Row, Col, Image} from 'react-bootstrap';

export default function Project() {

    return (
        <div id='project' className='projects'>
            <Container fluid className="mt-5">
                <Row className='mb-4'>
                    <Col>
                        <h2>Encounter Tracker</h2>
                        <p>A Dungeons and Dragons combat encounter tracker web application created to help game masters track combat scenarios for their players. It was built with EJS, NodeJs, along with a SQL postgres database with API calls to the dungeons and dragons API.</p>
                    </Col>
                    <Col>
                        <a href='https://encounter-tracker.herokuapp.com/' target='_blank'><Image thumbnail  src='/encoutertracker.png' alt='screen shot of encouter tracker website' /> </a>
                    </Col>
                </Row>
                <Row className='mb-4'>
                    <Col>
                        <h2>Stay Inside</h2>
                        <p>Built in a small team of four developers, stay inside is a social media web app designed to schedule online group events with others. The front end is built using JavaScript and React. The backend is built in a NoSQL Mongo Database with a API built from scratch for the project.</p>
                    </Col>
                    <Col>
                        <a href='https://stayinside.netlify.app/' target='_blank'><Image thumbnail src='/stayinside.png' alt='screen shot for stay inside web page' /></a>
                    </Col>
                </Row>
                <Row className='mb-4'>
                    <Col>
                        <h2>Breaking Bread</h2>
                        <p>Breaking Bread is a hackathon proof of concept that was developed by a team of UX designers and developers. It is a web application where users with different political affiliations can enter chat rooms to discuss articles they read prior to entering chat room with goal of finding compromise between the two users. Built with NextJs and Javascript.</p>
                    </Col>
                    <Col>
                        <Image thumbnail src='/breakingbread.png' alt='screen shot for breaking bread web page' />
                    </Col>
                </Row>
                <Row className='mb-5'>
                    <Col>
                        <h2>Help Wanted</h2>
                        <p>Built in a team of three developers, Help Wanted is a web application designer for people who want to learn musical instruments during COVID to be able to search for instructors who are registered on the app. Built using TypeScript and NextJs on the front end. On the back end it is built with a NoSQL Mongo database with TypeScript and Javascript.</p>
                    </Col>
                    <Col>
                        <Image thumbnail src='/helpwanted.png' alt='screen shot for help wanted web page' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}