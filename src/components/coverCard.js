import React from "react";

const CoverCard = props => {
    const { img_url, ratio, children } = props;
    const style = {
        paddingTop: `${ratio * 100}%`
    }

    return (
        <div className="coverCard">
            <div className="coverCard_imgContainer" style={style}>
                <img
                    src={img_url}
                    alt=""
                />
            </div>
            <div className="coverCard_content">
                {
                    children
                }
            </div>
        </div>
    );
};

export default CoverCard;
