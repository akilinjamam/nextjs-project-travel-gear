import React from 'react';
import inbound from '../../styles/inbound.module.css';
import sundorban from '../../public/images/sundorban.png';
import Image from 'next/image';

const InboundsTour = () => {
    return (

        <div className={inbound.main}>
            <br />
            <h2 className={inbound.title}>
                INBOUND TOURS
            </h2>
            <br />
            <div className={inbound.container}>
                <section className={inbound.inbound}>
                    <div className={inbound.imgpart}>
                        <Image src={sundorban} height={200} width={300} alt=""></Image>

                        <p className={inbound.taka}>14000 tk</p>
                        <i className={`${inbound.icon} uil uil-print`}></i>

                        <div className={inbound.star} style={{ display: 'flex', margin: '0' }}>
                            <i class={`${inbound.uil} uil-star`}></i>
                            <i class={`${inbound.uil} uil-star`}></i>
                            <i class={`${inbound.uil} uil-star`}></i>
                            <i class={`${inbound.uil} uil-star`}></i>
                        </div>
                    </div>
                    <div className={inbound.detail}>
                        <h5> Sundarbans: The Home of Royal Bengal Tigers</h5>
                        <p>Happy to reintroduce, the Sundarbans is one of the largest</p>
                    </div>
                </section>
                <section className={inbound.inbound}>
                    <div className={inbound.imgpart}>
                        <Image src={sundorban} height={200} width={300} alt=""></Image>

                        <p className={inbound.taka}>14000 tk</p>
                        <i className={`${inbound.icon} uil uil-print`}></i>

                        <div className={inbound.star} style={{ display: 'flex', margin: '0' }}>
                            <i class={`${inbound.uil} uil-star`}></i>
                            <i class={`${inbound.uil} uil-star`}></i>
                            <i class={`${inbound.uil} uil-star`}></i>
                            <i class={`${inbound.uil} uil-star`}></i>
                        </div>
                    </div>
                    <div className={inbound.detail}>
                        <h5> Sundarbans: The Home of Royal Bengal Tigers</h5>
                        <p>Happy to reintroduce, the Sundarbans is one of the largest</p>
                    </div>
                </section>
                <section className={inbound.inbound}>
                    <div className={inbound.imgpart}>
                        <Image src={sundorban} height={200} width={300} alt=""></Image>

                        <p className={inbound.taka}>14000 tk</p>
                        <i className={`${inbound.icon} uil uil-print`}></i>

                        <div className={inbound.star} style={{ display: 'flex', margin: '0' }}>
                            <i class={`${inbound.uil} uil-star`}></i>
                            <i class={`${inbound.uil} uil-star`}></i>
                            <i class={`${inbound.uil} uil-star`}></i>
                            <i class={`${inbound.uil} uil-star`}></i>
                        </div>
                    </div>
                    <div className={inbound.detail}>
                        <h5> Sundarbans: The Home of Royal Bengal Tigers</h5>
                        <p>Happy to reintroduce, the Sundarbans is one of the largest</p>
                    </div>
                </section>
                <section className={inbound.inbound}>
                    <div className={inbound.imgpart}>
                        <Image src={sundorban} height={200} width={300} alt=""></Image>

                        <p className={inbound.taka}>14000 tk</p>
                        <i className={`${inbound.icon} uil uil-print`}></i>

                        <div className={inbound.star} style={{ display: 'flex', margin: '0' }}>
                            <i class={`${inbound.uil} uil-star`}></i>
                            <i class={`${inbound.uil} uil-star`}></i>
                            <i class={`${inbound.uil} uil-star`}></i>
                            <i class={`${inbound.uil} uil-star`}></i>
                        </div>
                    </div>
                    <div className={inbound.detail}>
                        <h5> Sundarbans: The Home of Royal Bengal Tigers</h5>
                        <p>Happy to reintroduce, the Sundarbans is one of the largest</p>
                    </div>
                </section>
                <section className={inbound.inbound}>
                    <div className={inbound.imgpart}>
                        <Image src={sundorban} height={200} width={300} alt=""></Image>

                        <p className={inbound.taka}>14000 tk</p>
                        <i className={`${inbound.icon} uil uil-print`}></i>

                        <div className={inbound.star} style={{ display: 'flex', margin: '0' }}>
                            <i class={`${inbound.uil} uil-star`}></i>
                            <i class={`${inbound.uil} uil-star`}></i>
                            <i class={`${inbound.uil} uil-star`}></i>
                            <i class={`${inbound.uil} uil-star`}></i>
                        </div>
                    </div>
                    <div className={inbound.detail}>
                        <h5> Sundarbans: The Home of Royal Bengal Tigers</h5>
                        <p>Happy to reintroduce, the Sundarbans is one of the largest</p>
                    </div>
                </section>
                <section className={inbound.inbound}>
                    <div className={inbound.imgpart}>
                        <Image src={sundorban} height={200} width={300} alt=""></Image>

                        <p className={inbound.taka}>14000 tk</p>
                        <i className={`${inbound.icon} uil uil-print`}></i>

                        <div className={inbound.star} style={{ display: 'flex', margin: '0' }}>
                            <i class={`${inbound.uil} uil-star`}></i>
                            <i class={`${inbound.uil} uil-star`}></i>
                            <i class={`${inbound.uil} uil-star`}></i>
                            <i class={`${inbound.uil} uil-star`}></i>
                        </div>
                    </div>
                    <div className={inbound.detail}>
                        <h5> Sundarbans: The Home of Royal Bengal Tigers</h5>
                        <p>Happy to reintroduce, the Sundarbans is one of the largest</p>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default InboundsTour;