import React from "react";

const TitledContainer = props => {
    const { title, isFluid, children } = props;
    return (
        <div className={`${isFluid ? 'container-fluid' : 'container'} titledContainer`}>
            <div className="row">
                <div className="titledContainer_title col-12">
                    <h1>{title}</h1>
                </div>
            </div>
            {children}
        </div>
    );
};

export default TitledContainer;
