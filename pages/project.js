import Link from 'next/link'

export default function Project() {

    const projects = [
        {title: 'Dungeons and Dragons Encounter Tracker', link: 'https://github.com/zbarovsky/encounter-tracker', desc: 'A Dungeons and Dragons combat encounter tracker web application created to help game masters track combat scenarios for their players. It was built with EJS, NodeJs, along with a SQL Postgres database with API calls to the dungeons and dragons API.', smallImg: '/small-imgs/ETSmall.png', largeImg: '/large-imgs/ETLarge.png', alt: 'screen shot of encouter tracker website'},
        {title: 'Stay Inside', link: 'https://github.com/zbarovsky/stay-inside-frontend', desc: 'Built in a small team of four developers, stay inside is a social media web app designed to schedule online group events with others. The front end is built using JavaScript and React. The backend is built in a NoSQL Mongo Database with a API built from scratch for the project.', smallImg: '/small-imgs/StayInsideSmall.png', largeImg: '/large-imgs/StayInsideLarge.png', alt: 'screen shot for stay inside web page'},
        {title: 'Cryptocurrency Converter', link: 'https://github.com/zbarovsky/cryptocurrency_converter', desc: 'Cryptocurrency conversion between two types of coins. Built with react frontend and coinpaprika api', smallImg: '/small-imgs/CryptoSmall.png', largeImg: '/large-imgs/CryptoLarge.png', alt: 'scrren shot for cryptocurrency converter web page with a link to github on click'},
        {title: 'Bloom', link: 'https://github.com/zbarovsky/GKI-tracker', desc: 'Bloom is a web app that utilized D3 to chart a users GKI levels over time based on user input.', smallImg: '/small-imgs/BloomSmall.png', largeImg: '/large-imgs/BloomLarge.png', alt: 'screen shot for bloom users profile page'},
        {title: 'Coping Skills Generator', link: 'https://github.com/zbarovsky/coping-skills-react', desc: 'Web app designed to quick suggest coping skills to individuals.', smallImg: '/small-imgs/CSGSmall.png', largeImg: '/large-imgs/CSGLarge.png', alt: 'landing page for coping skills generator web application'},
    ]

    return (
        <div id='project' className='projects'>
            <div className='recent-projects'><h2>Recent Projects</h2><p className='learn-more'>(Click to Learn More)</p></div>
            {/* <div > */}
                {projects.map((project, i) => (
                    <div className='projectsContainer'>
                        <a rel='noopener' target='_blank' href={project.link}><img className='projectSmallImgs' key={i} src={project.smallImg} alt={project.alt} /></a>
                        <p>{project.title}</p>
                    </div>
                ))}
            {/* </div> */}
        </div>
    )
}