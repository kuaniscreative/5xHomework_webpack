import React from 'react';

// components
import Block from './block';
import TitledContainer from './titledContainer';
import CoverCard from './coverCard';
import ButtonCta from './buttonCta';

// functions
import keyGen from '../functions/keyGen';

const Showcase = (props) => {
  const { showcase } = props.data || {};

  return (
    <Block id="showcase">
      <TitledContainer title="案例作品 Showcase">
        <div className="row justify-content-center">
          {showcase.map((info) => (
            <div
              className="col-10 col-sm-12 col-md-6 col-lg-4 showcase_card"
              key={keyGen()}
            >
              <CoverCard ratio={0.612} imgUrl={info.imgUrl}>
                <h2 className="showcase_name">{info.name}</h2>
                <p className="showcase_description">{info.description}</p>
              </CoverCard>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12 popularCourse_cta">
            <ButtonCta action="看更多案例" href="/" />
          </div>
        </div>
      </TitledContainer>
    </Block>
  );
};

export default Showcase;
