import React from 'react';

const CoverCard = (props) => {
  const { imgUrl, ratio, children } = props;
  const style = {
    paddingTop: `${ratio * 100}%`,
  };

  return (
    <div className="coverCard">
      <div className="coverCard_imgContainer" style={style}>
        <img src={imgUrl} alt="" />
      </div>
      <div className="coverCard_content">{children}</div>
    </div>
  );
};

export default CoverCard;
