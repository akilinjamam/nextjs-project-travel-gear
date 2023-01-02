import Image from 'next/image';
import React from 'react';
import articles from '../../styles/latestArticle.module.css';
import imgOne from '../../public/images/article1.png';
import imgTwo from '../../public/images/article2.png';
import imgThree from '../../public/images/article3.png';
import imgFour from '../../public/images/article4.png';

const LatestArticle = () => {
    return (
        <div className={articles.main}>
            <h2 className={articles.title}>LATEST ARTICLE</h2>
            <br />
            <div className={articles.container}>
                <section className={articles.articles}>
                    <div className={articles.imgPart}>
                        <Image src={imgOne} height={200} width={300} alt=""></Image>

                        <div className={articles.detailPart}>
                            <p>Saka Hoping: Travel Guidelines</p>
                        </div>
                    </div>

                </section>
                <section className={articles.articles}>
                    <div className={articles.imgPart}>
                        <Image src={imgOne} height={200} width={300} alt=""></Image>

                        <div className={articles.detailPart}>
                            <p>Saka Hoping: Travel Guidelines</p>
                        </div>
                    </div>

                </section>
                <section className={articles.articles}>
                    <div className={articles.imgPart}>
                        <Image src={imgOne} height={200} width={300} alt=""></Image>

                        <div className={articles.detailPart}>
                            <p>Saka Hoping: Travel Guidelines</p>
                        </div>
                    </div>

                </section>
                <section className={articles.articles}>
                    <div className={articles.imgPart}>
                        <Image src={imgOne} height={200} width={300} alt=""></Image>

                        <div className={articles.detailPart}>
                            <p>Saka Hoping: Travel Guidelines</p>
                        </div>
                    </div>

                </section>
                <section className={articles.articles}>
                    <div className={articles.imgPart}>
                        <Image src={imgOne} height={200} width={300} alt=""></Image>

                        <div className={articles.detailPart}>
                            <p>Saka Hoping: Travel Guidelines</p>
                        </div>
                    </div>

                </section>
                <section className={articles.articles}>
                    <div className={articles.imgPart}>
                        <Image src={imgOne} height={200} width={300} alt=""></Image>

                        <div className={articles.detailPart}>
                            <p>Saka Hoping: Travel Guidelines</p>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    );
};

export default LatestArticle;