import React from 'react';

// components
import Carousel from './carousel';
import Feature from './feature';
import PopularCourse from './popularCourse';
import Feedback from './feedback';
import Showcase from './showcase';
import MoreInfo from './moreInfo';

// data
import carouselData from '../json/carousel.json';
import featureData from '../json/feature.json';
import popularCourseData from '../json/popularCourse.json';
import feedbackData from '../json/feedback.json';
import showcaseData from '../json/showcase.json';

// functions
import keyGen from '../functions/keyGen';

const Main = () => (
  <main>
    <Carousel isFullSize>
      {carouselData.carouselItem.map((item) => (
        <img src={item.imgUrl} className="carousel_img" alt="" key={keyGen()} />
      ))}
    </Carousel>
    <Feature data={featureData} />
    <PopularCourse data={popularCourseData} />
    <Feedback data={feedbackData} />
    <Showcase data={showcaseData} />
    <MoreInfo />
  </main>
);

export default Main;
