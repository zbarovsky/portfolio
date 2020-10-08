import Head from 'next/head'
import {Navbar, Nav} from 'react-bootstrap'

export default function Navigation () {

    return (
        <div>
            <Head>
                <title>Zack Barovsky</title>
            </Head>

            <Navbar>
                <Nav.Link className='navigation' href="/">Home</Nav.Link>
                <Nav.Link className='navigation' href="#about">About</Nav.Link>
                <Nav.Link className='navigation' href="#project">Dev Projects</Nav.Link>
                <Nav.Link className='navigation' href='mailto:zachary.barovsky@gmail.com'>Contact</Nav.Link>
            </Navbar>
        </div>
    )
}