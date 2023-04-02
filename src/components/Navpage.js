import React from 'react'
import Main from './Main'

export default function Navpage() {
    return (
        <>




            <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
                <div class="container-fluid">
                    <a class="navbar-brand  name fs-1 fw-bolder" href="#"> <img src={require('./vlogos.png')} alt="Bootstrap" width="30" height="30" className='me-4' />Vikash Shinde</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end me-4" id="navbarSupportedContent">
                        <ul class="navbar-nav ">

                            <li className="nav-item mx-3">
                                <a className=" nav-link btn btn-outline-warning text-dark fw-bold px-3" aria-current="page" href="#Home">HOME</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link btn btn-outline-warning text-dark fw-bold px-3" href="#About">ABOUT</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link btn btn-outline-warning text-dark fw-bold px-3" href="#Projects">PROJECTS</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link btn btn-outline-warning text-dark fw-bold px-3" href="#Contact">CONTACTS</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
