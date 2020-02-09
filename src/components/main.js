import React from "react";

// components
import Carousel from "./carousel";
import Feature from "./feature";
import PopularCourse from "./popularCourse";
import Feedback from "./feedback";
import Showcase from "./showcase";
import MoreInfo from "./moreInfo";

// data
import carouselData from "../json/carousel";
import featureData from "../json/feature";
import popularCourseData from "../json/popularCourse";
import feedbackData from "../json/feedback";
import showcaseData from "../json/showcase";

const Main = () => {
    return (
        <main>
            <Carousel isFullSize={true}>
                {carouselData.carouselItem.map((item, i) => {
                    return (
                        <img
                            src={item.img_url}
                            className="carousel_img"
                            alt=""
                            key={i}
                        />
                    );
                })}
            </Carousel>
            <Feature data={featureData} />
            <PopularCourse data={popularCourseData} />
            <Feedback data={feedbackData} />
            <Showcase data={showcaseData} />
            <MoreInfo />
        </main>
    );
};

export default Main;
