import React from 'react';

const FeedbackSingle = (props) => {
  const {
    person, identity, feedback, imgUrl,
  } = props.data || {};
  return (
    <div className="container-fluid feedbackSingle">
      <div className="row justify-content-center align-items-center feedbackSingle_row">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 container">
          <div className="row">
            <div className="col-12 feedbackSingle_feedback">
              <p>{feedback}</p>
            </div>
            <div className="col-3 col-sm-2 feedbackSingle_img">
              <div className="feedbackSingle_imgWrapper">
                <img src={imgUrl} alt="" />
              </div>
            </div>
            <div className="col-9 col-sm-10 feedbackSingle_person">
              <h1>{person}</h1>
              <h2>{identity}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSingle;
