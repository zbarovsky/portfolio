import Link from 'next/link'
import {Container, Row, Col, Image, Carousel} from 'react-bootstrap';

export default function Project() {

    return (
        <div id='project' className='projects'>
            <Container fluid className="projectsContainer">
                <h3>Recent Projects</h3><p className='learn-more'>(Click to learn more)</p>
                <Carousel>
                    <Carousel.Item>
                        <a href='https://github.com/zbarovsky/encounter-tracker' rel='noopener' target='_blank'><img className='proj-img mx-auto d-block' src='/encoutertracker.png' alt='screen shot of encouter tracker website' /> </a>
                        <Carousel.Caption>
                            <h2 className='proj-desc'>Encounter Tracker</h2>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <a href='https://github.com/zbarovsky/stay-inside-frontend' rel='noopener' target='_blank'><img className='proj-img mx-auto d-block' src='/stayinside.png' alt='screen shot for stay inside web page' /></a>
                        <Carousel.Caption>
                            <h2 className='proj-desc'>Stay Inside</h2>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <a href='https://github.com/zbarovsky/middleground' rel='noopener' target='_blank'><img className='proj-img mx-auto d-block' src='/breakingbread.png' alt='screen shot for breaking bread web page' /></a>
                        <Carousel.Caption>
                            <h2 className='proj-desc'>Breaking Bread</h2>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <a href='https://github.com/zbarovsky/help-wanted-frontend' rel='noopener' target='_blank'><img className='proj-img mx-auto d-block' src='/helpwanted.png' alt='screen shot for help wanted web page' /></a>
                        <Carousel.Caption>
                            <h2 className='proj-desc'>Help Wanted</h2>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <a href='https://github.com/zbarovsky/cryptocurrency_converter' rel='noopener' target='_blank'><img className='proj-img mx-auto d-block' src='/cryptoconverter.png' alt='scrren shot for cryptocurrency converter web page with a link to github on click' /></a>
                        <Carousel.Caption>
                            <h2 className='proj-desc'>Cryptocurrency Converter</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <a href='https://github.com/zbarovsky/GKI-tracker' rel='noopener' target='_blank'><img className='proj-img mx-auto d-block' src='/bloom.png' alt='screen shot for bloom users profile page' /></a>
                        <Carousel.Caption>
                            <h2 className='proj-desc'>Bloom</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    )
}