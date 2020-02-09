import React from 'react'

const ButtonCta = (props) => {
    const { action, href } = props;
    return ( 
        <a className='button_cta' href={href}>
            {action}
        </a>
     );
}
 
export default ButtonCta;