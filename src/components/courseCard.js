import React from 'react';
import CoverCard from './coverCard';

// functions
import keyGen from '../functions/keyGen';

function matchTagData(key) {
  const variations = {
    new: {
      className: 'tag_newCourse',
      text: '新開課',
    },
    opening: {
      className: 'tag_opening',
      text: '開放報名中',
    },
  };

  return variations[key];
}

const CourseCard = (props) => {
  const {
    imgUrl, name, instructor, tag, month, type,
  } = props.courseInfo;
  return (
    <CoverCard imgUrl={imgUrl} ratio={0.75}>
      <div className="courseCard_tagWrapper">
        {tag.map((key) => {
          const data = matchTagData(key);
          return (
            <span className={`tag ${data.className}`} key={keyGen()}>
              {data.text}
            </span>
          );
        })}
        <h3 className="courseCard_title">{name}</h3>
        <small className="courseCard_instructor">
          講師：
          {instructor}
        </small>
        <div className="courseCard_timeInfo">
          <span>開課時間</span>
          <span>{`${month}｜${type}`}</span>
        </div>
      </div>
    </CoverCard>
  );
};

export default CourseCard;
