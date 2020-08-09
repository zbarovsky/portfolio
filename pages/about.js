import Navbar from '../components/navbar'


export default function About () {
    return (
        <div className='aboutme'>
            <div className='aboutMeTitle'>
                <h3>About Me</h3>
                <div className='aboutMeBio'>
                    <p>I am a software engineer based in the Seattle area. After years of social work, I decided to follow my passion for coding and collaborating with others by using code to bring action to their goals. When I'm not working, I'm often found either playing music or videogames.</p>
                </div>
            </div>
            <div className='aboutMePic'>
                <img src='/headShot.png' alt="headshot for Zack Barovsky" />
            </div>
        </div>
    )
}