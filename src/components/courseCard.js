import React from "react";
import CoverCard from "./coverCard";

const CourseCard = props => {
    const { img_url, name, instructor, tag, month, type } = props.courseInfo;
    return (
        <CoverCard img_url={img_url} ratio={0.75}>
            <div className="courseCard_tagWrapper">
                {tag.map((key, i) => {
                    const data = matchTagData(key);
                    return (
                        <span className={`tag ${data.className}`} key={i}>
                            {data.text}
                        </span>
                    );
                })}
                <h3 className="courseCard_title">{name}</h3>
                <small className="courseCard_instructor">
                    講師：{instructor}
                </small>
                <div className="courseCard_timeInfo">
                    <span>開課時間</span>
                    <span>
                        {month}｜{type}
                    </span>
                </div>
            </div>
        </CoverCard>
    );
};

function matchTagData(key) {
    const variations = {
        new: {
            className: "tag_newCourse",
            text: "新開課"
        },
        opening: {
            className: "tag_opening",
            text: "開放報名中"
        }
    };

    return variations[key];
}

export default CourseCard;
