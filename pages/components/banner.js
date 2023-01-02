import Image from 'next/image';
import banner from '../../styles/banner.module.css'
import bannerImageOne from '../../public/images/the-bandarban.jpg'
import bannerImageFive from '../../public/images/the-innani-beach.jpg'
import bannerImageTwo from '../../public/images/the-rangamati.jpg'
import bannerImageThree from '../../public/images/the-sajek-valley.jpg'
import bannerImagefour from '../../public/images/the-tangoar-haor.jpg'
import haritage from '../../public/images/images.jpg'

const Banner = () => {
    return (
        <div className={banner.main} >
            <div className={banner.detailPart}>
                <div>
                    <h2>Welcome to Travel Gear Bangladesh</h2>

                    <p className={banner.firstP}>
                        Travel Gear brings you the places to visit in Dhaka as well as the places to visit in Bangladesh. We will guide you for visiting the tourist’s spots, historical places in Bangladesh, ecotourism sites in Bangladesh and World Heritage Sites in Bangladesh. Travel Mate Team is here to make your journey affordable, enjoyable and memorable. If you are a tourist or foreign citizen, just get in touch with us and we will take the work to handle your Visa Processing, Air-Ticketing, Hotel-Booking, Tourist Transport and tour-package planning that will be suitable for you.
                    </p>
                </div>

                <div>
                    <h2>Why Choose Travel Gear</h2>

                    <div className={banner.grid}>
                        <div className='d-flex'>
                            <div>
                                <i className={`${banner.uil} uil uil-globe`}></i>
                            </div>

                            <div>
                                <br />
                                <h4>Diverse Destinations</h4>
                                <p className={banner.secondP}>Travel Gear knows the value of your time and the varieties bucket list of you. We have the innovative team to fulfill your taste of diverse destination.</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div>
                                <i className={`${banner.uil} uil uil-check-circle`}></i>
                            </div>

                            <div>
                                <br />
                                <h4>Easy Tour Confirmation</h4>
                                <p className={banner.secondP}>A long Tour Confirmation process can’t support you to purchase any tour package. Travelmate has tried to complete the whole process into one call.</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div>
                                <i className={`${banner.uil} uil uil-shutter-alt`}></i>
                            </div>

                            <div>
                                <br />
                                <h4>Beautiful Places</h4>
                                <p className={banner.secondP}>Travelers want beautiful and unique places every time they want to leave the home. We’re ready with years of experience to introduce the best places in the Wolrd.</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div>
                                <i className={`${banner.uil} uil uil-comment-message `}></i>
                            </div>

                            <div>
                                <br />
                                <h4>
                                    Experienced Team
                                </h4>
                                <p className={banner.secondP}>Travelmate introduces 24/7 support team via online or offline. You can reach us in every method including email, social media or phone call. Just feel free to ask anything.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className={banner.imagePart}>
                <div className='d-grid'>
                    <button className='btn btn-primary '>
                        Buy Event Ticket
                    </button>
                </div>
                <br />
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <Image src={bannerImageOne} width={400} height={221.1} className="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h3>Bandarban</h3>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <Image src={bannerImageTwo} width={400} height={221.1} className="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h3>Rangamati</h3>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <Image src={bannerImageThree} width={400} height={221.1} className="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h3>Sajek</h3>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <br />
                <div className={banner.secondImg}>
                    <Image src={haritage} height={300} width={380} alt=""></Image>

                    <h5>World Haritage Tour in Bangladesh</h5>
                </div>
            </div>
        </div>
    );
};

export default Banner;