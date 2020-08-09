import Link from 'next/link'

export default function Project() {

    return (
        <div id='project' className='projects'>
            <div className='encoutertracker'>
                <div className='encountertrackertitle'>
                    <h3>Encounter Tracker</h3>
                </div>
                <div className='encountertrackerimg'>
                    <a href='https://encounter-tracker.herokuapp.com/' target='_blank'><img src='/encoutertracker.png' alt='screen shot of encouter tracker website' /> </a>
                </div>
                <div className="encountertrackerdesc">
                    <p>A Dungeons and Dragons combat encouter tracker web application created to help game masters track combat scenaros for their players. It was built with EJS, NodeJs, along with a SQL postgres database with API calls to the dungeons and dragons API.</p>
                </div>
            </div>
            <div className='stayinside'>
                <div className='stayinsidetitle'>
                    <h3>Stay Inside</h3>
                </div>
                <div className='stayinsideimg'>
                    <a href='https://stayinside.netlify.app/' target='_blank'><img src='/stayinside.png' alt='screen shot for stay inside web page' /></a>
                </div>
                <div className="stayinsidedesc">
                    <p>A social media web app designed to schedule online group events with others. The front end is built using JavaScript and React. The backend is built in a NoSQL Mongo Database with a API built from scratch for the project.</p>
                </div>
            </div>
        </div>
    )
}