import React from 'react';
import ReactDOM from 'react-dom';
import  { Form } from "./form";
import Link from "next/link";
import ReactPlayer from "react-player";


const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(

    <>
        <div className="relative bg-white.100" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <header className="flex-shrink-0 fixed top-4 left-4 z-30">
                <Link href='/'>
                    <span className=''>
                        <div className="">
                            <svg
                                viewBox={'0 0 59 57'}
                                width={'50'}
                                height={'48'}
                            >
                                <ellipse fill="#61788C" cx="29.11" cy="29.28" rx="27.56" ry="27.86"/>
                                <path
                                    fill={'#FFFFFF'}
                                    d="M28.47,1.39c14.92,0,27.06,12.27,27.06,27.36S43.39,56.11,28.47,56.11S1.42,43.84,1.42,28.75
                S13.55,1.39,28.47,1.39 M28.47,0.89c-15.22,0-27.56,12.47-27.56,27.86s12.34,27.86,27.56,27.86c15.22,0,27.56-12.47,27.56-27.86
                S43.69,0.89,28.47,0.89L28.47,0.89z"/>
                                <path
                                    fill={'#FFFFFF'}
                                    d="M31.01,1.75c14.92,0,27.06,12.27,27.06,27.36S45.93,56.47,31.01,56.47S3.96,44.2,3.96,29.11
                S16.09,1.75,31.01,1.75 M31.01,1.25c-15.22,0-27.56,12.47-27.56,27.86s12.34,27.86,27.56,27.86S58.57,44.5,58.57,29.11
                S46.23,1.25,31.01,1.25L31.01,1.25z"/>
                                <path
                                    fill={'#D9D4C5'}
                                    d="M27.81,0.75c14.92,0,27.06,12.27,27.06,27.36S42.73,55.47,27.81,55.47S0.75,43.2,0.75,28.11
                S12.89,0.75,27.81,0.75 M27.81,0.25c-15.22,0-27.56,12.47-27.56,27.86s12.34,27.86,27.56,27.86S55.36,43.5,55.36,28.11
                S43.03,0.25,27.81,0.25L27.81,0.25z"/>
                                <path
                                    fill={'#D9D4C5'}
                                    d="M30.08,26.34c-0.62-1.06-1.42-1.87-2.4-2.43c-0.98-0.56-2.03-0.84-3.16-0.84c-1.13,0-2.13,0.29-3.02,0.87
                c-0.64,0.42-1.18,0.97-1.63,1.64v-11.8H15.4v23.37h4.47v-2.22c0.45,0.68,0.99,1.23,1.63,1.65c0.89,0.58,1.9,0.87,3.02,0.87
                c1.13,0,2.18-0.28,3.16-0.84c0.98-0.56,1.78-1.37,2.4-2.44c0.62-1.07,0.93-2.37,0.93-3.91C31.01,28.7,30.7,27.39,30.08,26.34z
                 M25.86,32.13c-0.3,0.53-0.69,0.94-1.19,1.23c-0.49,0.29-1.04,0.43-1.63,0.43c-0.51,0-1.01-0.14-1.5-0.42
                c-0.48-0.28-0.88-0.68-1.2-1.21c-0.32-0.53-0.47-1.16-0.47-1.9c0-0.74,0.16-1.37,0.47-1.9c0.32-0.53,0.72-0.93,1.2-1.21
                c0.48-0.28,0.98-0.42,1.5-0.42c0.59,0,1.14,0.15,1.63,0.43c0.49,0.29,0.89,0.7,1.19,1.23s0.44,1.15,0.44,1.87
                C26.3,30.98,26.15,31.6,25.86,32.13z"/>
                                <path
                                    fill={'#F2F2F2'}
                                    d="M44.17,26.18c-0.62-1.09-1.42-1.91-2.4-2.47c-0.98-0.56-2.03-0.84-3.16-0.84c-1.19,0-2.21,0.3-3.07,0.91
            c-0.64,0.45-1.17,1.05-1.59,1.77v-2.21h-4.47v0.49c0.7,0.57,1.31,1.28,1.8,2.12c0.71,1.21,1.07,2.69,1.07,4.42
            c0,1.71-0.36,3.19-1.07,4.4c-0.5,0.85-1.1,1.56-1.81,2.14v6.8h4.47v-8.81c0.42,0.73,0.94,1.33,1.59,1.78
            c0.86,0.61,1.88,0.91,3.07,0.91c1.13,0,2.18-0.28,3.16-0.84c0.98-0.56,1.78-1.39,2.4-2.49c0.62-1.1,0.93-2.45,0.93-4.04
            C45.1,28.62,44.79,27.26,44.17,26.18z M39.95,32.06c-0.3,0.5-0.69,0.88-1.19,1.14c-0.49,0.26-1.04,0.39-1.63,0.39
            c-0.51,0-1.01-0.12-1.5-0.37c-0.48-0.25-0.88-0.62-1.2-1.12c-0.32-0.5-0.47-1.12-0.47-1.86c0-0.74,0.16-1.36,0.47-1.86
            c0.32-0.5,0.72-0.87,1.2-1.12c0.48-0.25,0.98-0.37,1.5-0.37c0.59,0,1.14,0.13,1.63,0.39c0.49,0.26,0.89,0.64,1.19,1.14
            c0.3,0.5,0.44,1.11,0.44,1.83C40.39,30.95,40.24,31.56,39.95,32.06z"/>
                            </svg>
                        </div>
                    </span>
                </Link>
            </header>
            <div className="w-full h-full z-20 bg-white.100 fixed top-0 left-0 ">
                <header className="fixed right-0">
                    <div className="modal-close cursor-pointer z-20 p-4">
                        <button type="button" className="text-white.100" data-dismiss="modal" aria-label="Close" onClick={hide}>
                            <span aria-hidden="true">
                                <svg className="fill-primary text-primary" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                     viewBox="0 0 18 18">
                                    <path
                                        d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </header>

                    <div className="max-w-7xl mx-auto xl:px-0 md:px-12 px-6 py-12 mt-12">
                        <div className="flex flex-col md:flex-row justify-center">
                            <div className="flex flex-col justify-center md:p-16 p-6 md:mb-0 mb-12 bg-bg-contactModal bg-no-repeat bg-cover h-screen75vh md:block hidden">
                                <div className="">
                                    <div className="text-gray.100 md:text-2xl pb-6">I look forward to getting to know you and working on something great!</div>
                                </div>
                                <div className="text-gray.100 md:text-base text-xs">
                                    <div className="">Roger Katona</div>
                                    <div>roger.katona@blueprospect.com</div>
                                    <div>904-450-5173</div>
                                </div>
                            </div>
                            <div className="md:p-12 p-6 bg-gray.100 w-full flex flex-col justify-center">
                                <Form/>
                            </div>
                        </div>
                    </div>

            </div>
        </div>
    </>, document.body
) : null;

export default Modal;
