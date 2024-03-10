import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { REVIEWS } from "../config/reviews-config";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/scss/navigation";
import useCheckWidthScreen from "../utils/checkScreenSize";
import Star from "../assets/star.svg?react";

const breakpoints = {
    1024: {
        slidesPerView: 3,
    },
};

export const Reviews = () => {
    const isTablet = useCheckWidthScreen(1024);

    const showRating = (rating) => {
        let stars = [];

        for (let i = 0; i < 5; i++) {
            stars.push(<Star className={`${i <= rating && "filled"} star`} />);
        }
        return stars;
    };

    return (
        <div className="reviews-section">
            <h3 className="section-header">Ревюта</h3>
            <div className="container">
                <div className="reviews-container">
                    <Swiper
                        modules={[Navigation]}
                        navigation={isTablet}
                        spaceBetween={20}
                        slidesPerView={1}
                        {...{ breakpoints }}
                        loop
                    >
                        {REVIEWS.map((review, index) => (
                            <SwiperSlide key={index} className="slide">
                                <div className="rating"><span>Rating:</span> {showRating(review.rating)}</div>
                                <p className="reviewer-text">{review.text}</p>
                                <div className="reviewer">
                                    <img src={review.reviewer_avatar}></img>
                                    <p>{review.reviewer}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};
