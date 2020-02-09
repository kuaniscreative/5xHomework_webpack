import React from "react";

// components
import Block from "./block";
import TitledContainer from "./titledContainer";

const Feature = props => {
    const { title, feature } = props.data;
    return (
        <Block id="feature">
            <TitledContainer title={title}>
                <div className="row justify-content-center">
                    {feature.map((info, i) => {
                        return (
                            <div
                                className="featureSingle col-8 col-sm-8 col-md-3 col-lg-3"
                                key={i}
                            >
                                <a href={info.href}>
                                    <div className="imgContainer">
                                        <img src={info.img_url} alt="" />
                                    </div>
                                    <h2>{info.title}</h2>
                                    <p>{info.content}</p>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </TitledContainer>
        </Block>
    );
};

export default Feature;
