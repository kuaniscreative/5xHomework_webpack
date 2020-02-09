import React from 'react'

// components
import Block from './block';
import TitledContainer from './titledContainer';
import CoverCard from './coverCard';
import ButtonCta from './buttonCta';

const Showcase = (props) => {
    const { showcase } = props.data || {};
    console.log(showcase)
    return ( 
        <Block id='showcase'>
            <TitledContainer title='案例作品 Showcase'>
                <div className="row justify-content-center">
                    {
                         showcase.map((info, i) => {
                            return (
                                <div className="col-10 col-sm-12 col-md-6 col-lg-4 showcase_card" key={i}>
                                    <CoverCard ratio={0.612} img_url={info.img_url}>
                                        <h2 className="showcase_name">
                                            {info.name}
                                        </h2>
                                        <p className="showcase_description">
                                            {info.description}
                                        </p>
                                    </CoverCard>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="row">
                    <div className="col-12 popularCourse_cta">
                        <ButtonCta action="看更多案例" href="/" />
                    </div>
                </div>
            </TitledContainer>
        </Block>
     );
}
 
export default Showcase;