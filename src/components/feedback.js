import React from "react";

// components
import Block from "./block";
import TitledContainer from "./titledContainer";
import FeedbackSingle from "./feedbackSingle";
import Carousel from "./carousel";

const Feedback = props => {
    const { feedback } = props.data;
    return (
        <Block id="feedback">
            <TitledContainer title="看看他們怎麼說" isFluid={true}>
                <div className="row">
                    <div className="col-12">
                        <Carousel>
                            {feedback.map((info, i) => {
                                return <FeedbackSingle data={info} key={i} />;
                            })}
                        </Carousel>
                    </div>
                </div>
            </TitledContainer>
        </Block>
    );
};

export default Feedback;
