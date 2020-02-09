import React from 'react'

const Block = (props) => {
    const {children, id} = props;
    return ( 
        <section className='block' id={id}>
            {children}
        </section>
     );
}
 
export default Block;