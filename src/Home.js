import React from 'react'
import Header from './components/Header'
import { Container } from 'react-bootstrap'

export default function Home() {
    return (
        <div style={{ height: "100vh" }} className='home'>
            <Header />
            <Container className='d-flex h-100 justify-content-center align-items-center' >
                <div className='home-text'>
                    <p className='fw-bold'><span className='linear-gradient'>We create websites</span> that deligh and inspire people.</p>
                    <p className='fs-5 text-secondary '>Hi! I'm Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups.</p>
                </div>
                <div className='home-img d-flex justify-content-center align-items-center'>
                    <img src="/home-img.png" alt="home" />
                </div>
            </Container>
        </div>
    )
}

