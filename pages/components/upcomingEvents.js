import Image from 'next/image';

import events from '../../styles/upcomingEvents.module.css'
import one from '../../public/images/one.jpg'
import Script from 'next/script';
import { useEffect, useState } from 'react';

// export const getStaticProps = async () => {

//     const res = await fetch('http://localhost:3000/api/blogs')
//     const mainData = res.json()
//     return {
//         props: {
//             data: mainData
//         }
//     }
// }



const UpcomingEvents = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/api/blogs")
            .then(res => res.json())
            .then(res => setData(res))
    }, [])

    console.log(data)

    return (
        <div className={events.main}>
            <br />
            <h2>UPCOMING EVENTS</h2>
            <div className={events.mainContainer}>
                <button id='btn-left' className={events.left}><i class={`${events.uil} uil-arrow-left`}></i></button>
                <section id='slider' className={events.eventss}>

                    <div className={`${events.eventsContainer} thumbnail`}>

                        <div className={events.eventsImage}>
                            <Image src={one} width={300} height={200} alt=""></Image>
                        </div>

                        <div className={events.eventsDetail}>
                            <br />
                            <p> 16-feb/ 23</p>
                            <h4>safari park tour</h4>
                            <p>Bangabandhu sheikh Mujib safari part, gazipur safari park road,sreepur Bangladesh</p>

                            <div className={events.button}>
                                <button className={events.buttonOne}><i class="uil uil-share-alt"></i></button>
                                <button className={events.buttonTwo}>Details</button>
                            </div>
                        </div>

                    </div>
                    <div className={`${events.eventsContainer} thumbnail`}>
                        <div className={events.eventsImage}>
                            <Image src={one} width={300} height={200} alt=""></Image>
                        </div>

                        <div className={events.eventsDetail}>
                            <br />
                            <p> 16-feb/ 23</p>
                            <h4>safari park tour</h4>
                            <p>Bangabandhu sheikh Mujib safari part, gazipur safari park road,sreepur Bangladesh</p>

                            <div className={events.button}>
                                <button className={events.buttonOne}><i class="uil uil-share-alt"></i></button>
                                <button className={events.buttonTwo}>Details</button>
                            </div>
                        </div>

                    </div>
                    <div className={`${events.eventsContainer} thumbnail`}>
                        <div className={events.eventsImage}>
                            <Image src={one} width={300} height={200} alt=""></Image>
                        </div>

                        <div className={events.eventsDetail}>
                            <br />
                            <p> 16-feb/ 23</p>
                            <h4>safari park tour</h4>
                            <p>Bangabandhu sheikh Mujib safari part, gazipur safari park road,sreepur Bangladesh</p>

                            <div className={events.button}>
                                <button className={events.buttonOne}><i class="uil uil-share-alt"></i></button>
                                <button className={events.buttonTwo}>Details</button>
                            </div>
                        </div>

                    </div>
                    <div className={`${events.eventsContainer} thumbnail`}>
                        <div className={events.eventsImage}>
                            <Image src={one} width={300} height={200} alt=""></Image>
                        </div>

                        <div className={events.eventsDetail}>
                            <br />
                            <p> 16-feb/ 23</p>
                            <h4>safari park tour</h4>
                            <p>Bangabandhu sheikh Mujib safari part, gazipur safari park road,sreepur Bangladesh</p>

                            <div className={events.button}>
                                <button className={events.buttonOne}><i class="uil uil-share-alt"></i></button>
                                <button className={events.buttonTwo}>Details</button>
                            </div>
                        </div>

                    </div>
                    <div className={`${events.eventsContainer} thumbnail`}>
                        <div className={events.eventsImage}>
                            <Image src={one} width={300} height={200} alt=""></Image>
                        </div>

                        <div className={events.eventsDetail}>
                            <br />
                            <p> 16-feb/ 23</p>
                            <h4>safari park tour</h4>
                            <p>Bangabandhu sheikh Mujib safari part, gazipur safari park road,sreepur Bangladesh</p>

                            <div className={events.button}>
                                <button className={events.buttonOne}><i class="uil uil-share-alt"></i></button>
                                <button className={events.buttonTwo}>Details</button>
                            </div>
                        </div>

                    </div>
                </section>
                <button id='btn-right' className={events.right}><i class={`${events.uil} uil-arrow-right`}></i></button>
            </div>



            <Script src='./vanillaJs.js'></Script>
        </div>
    );



};


export default UpcomingEvents;



