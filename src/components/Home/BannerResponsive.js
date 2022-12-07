import { Swiper, SwiperSlide } from 'swiper/react';

const BannerResponsive = (props) => {
    const { bannerList } = props;

    return (
        <>
            {bannerList.map((bannerItem, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className="home-banner-item">
                            <a href="#!">
                                <picture>
                                    <img
                                        className="banner-picture"
                                        src={bannerItem}
                                        alt="banner"
                                    />
                                </picture>
                            </a>
                        </div>
                    </SwiperSlide>
                );
            })}
        </>
    );
};

export default BannerResponsive;
