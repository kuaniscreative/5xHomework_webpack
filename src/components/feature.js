import React from 'react';

// components
import Block from './block';
import TitledContainer from './titledContainer';

// functions
import keyGen from '../functions/keyGen';

const Feature = (props) => {
  const { title, feature } = props.data;
  return (
    <Block id="feature">
      <TitledContainer title={title}>
        <div className="row justify-content-center">
          {feature.map((info) => (
            <div
              className="featureSingle col-8 col-sm-8 col-md-3 col-lg-3"
              key={keyGen()}
            >
              <a href={info.href}>
                <div className="imgContainer">
                  <img src={info.imgUrl} alt="" />
                </div>
                <h2>{info.title}</h2>
                <p>{info.content}</p>
              </a>
            </div>
          ))}
        </div>
      </TitledContainer>
    </Block>
  );
};

export default Feature;
