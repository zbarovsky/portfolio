

export default function Contact () {


    return (
        <div>
            <div className='contact my-5'>
                <h2 className='pl-3'>
                    Let's collaborate!
                </h2>
                <p className='pl-3'>Connect with me on any of the platforms below, OR checkout my resume and shoot me an email if you're interested in collaborating!</p>
            </div>
            <div className='socialmediaSet pl-3'>
                <a href='https://www.instagram.com/zbarovsky/' target='_blank'><img className='socialMedia' src='/instagram.svg'/></a>
                <a href='https://twitter.com/zbarovsky' target='_blank'><img className='socialMedia' src='/twitter.svg' /></a>
                <a href='https://github.com/zbarovsky' target='_blank'><img className='socialMedia' src='/010-github.png' /></a>
                <a href='https://www.linkedin.com/in/zbarovsky/' target='_blank'><img className='socialMedia' src='013-linkedin.png' /></a>
                <a href='mailto:zachary.barovsky@gmail.com' target='_blank'><img className='socialMedia' src='email.svg' /></a>
                <a href='/resume.pdf' target='_blank'><img className='socialMedia' src='resume.svg' /></a>
            </div>
            <div className='flaticon mt-3 ml-3'>
                Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </div>
        </div>
    )
}