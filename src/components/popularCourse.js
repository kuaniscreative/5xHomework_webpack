import React from "react";

// components
import Block from "./block";
import TitledContainer from "./titledContainer";
import CourseCard from "./courseCard";
import ButtonCta from "./buttonCta";

const PopularCourse = props => {
    const { popularCourse } = props.data;
    return (
        <Block id="popularCourse">
            <TitledContainer title="熱門網頁設計課程推薦">
                <div className="row justify-content-center">
                    {popularCourse.map((courseInfo, i) => {
                        return (
                            <div
                                className="col-10 col-sm-12 col-md-6 col-lg-4 popularCourse_cardWrapper"
                                key={i}
                            >
                                <CourseCard courseInfo={courseInfo}/>
                            </div>
                        );
                    })}
                </div>
                <div className="row">
                    <div className="col-12 popularCourse_cta">
                        <ButtonCta action="看更多網頁課程" href="/" />
                    </div>
                </div>
            </TitledContainer>
        </Block>
    );
};

export default PopularCourse;
