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
                    <p>A Dungeons and Dragons combat encounter tracker web application created to help game masters track combat scenarios for their players. It was built with EJS, NodeJs, along with a SQL postgres database with API calls to the dungeons and dragons API.</p>
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
                    <p>Built in a small team of four developers, stay inside is a social media web app designed to schedule online group events with others. The front end is built using JavaScript and React. The backend is built in a NoSQL Mongo Database with a API built from scratch for the project.</p>
                </div>
            </div>
            <div className='breakBread'>
                <div className='breakBreadTitle'>
                    <h3>Breaking Bread</h3>
                </div>
                <div className='breakBreadimg'>
                    <img src='/breakingbread.png' alt='screen shot for breaking bread web page' />
                </div>
                <div className="breakBreadDesc">
                    <p>Breaking Bread is a hackathon proof of concept that was developed by a team of UX designers and developers. It is a web application where users with different political affiliations can enter chat rooms to discuss articles they read prior to entering chat room with goal of finding compromise between the two users. Built with NextJs and Javascript.</p>
                </div>
            </div>
            <div className='helpWanted'>
                <div className='helpWantedTitle'>
                    <h3>Help Wanted</h3>
                </div>
                <div className='helpWantedimg'>
                    <img src='/helpwanted.png' alt='screen shot for help wanted web page' />
                </div>
                <div className="helpWantedDesc">
                    <p>Built in a team of three developers, Help Wanted is a web application designer for people who want to learn musical instruments during COVID to be able to search for instructors who are registered on the app. Built using TypeScript and NextJs on the front end. On the back end it is built with a NoSQL Mongo database with TypeScript and Javascript.</p>
                </div>
            </div>
        </div>
    )
}