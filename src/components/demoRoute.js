import React from 'react'

const DemoRoute = (props) => {

    const containerStyle = {
        display: 'block',
        position: 'relative',
        width: '100%',
        
    };

    const rowStyle = {
        minHeight: '400px',
        height: "100%"
    }

    const wrapperStyle = {
        textAlign: 'center',
        fontSize: '2rem'
    }

    return ( 
        <div className="container" style={containerStyle}>
            <div className="row align-items-center" style={rowStyle}>
                <div className="col-12" style={wrapperStyle}>
                    {props.children}
                </div>
            </div>
            
        </div>
     );
}
 
export default DemoRoute;