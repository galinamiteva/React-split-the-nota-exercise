import React from 'react';


function AndraForm(props){
    function close(){
        props.close(props.friendSum)
   }

    return(
        <article>
            <a href="#" className="back" onClick={ close }>X</a>
            <h2>Varje person ska betala</h2>
            <h3 id='friendSum' className='show-sum'>{props.friendSum}</h3>

        </article>
    )
}

export default AndraForm;