import React from 'react';
import {total} from './ForstForm'

function AndraForm(props){

    let divideTotal=(total, friends)=>{
        const sumDivided=total / parseInt(friends)
        return sumDivided;
    };

    let calculateTip = (sum, tip) => {   //бакшиша е почти винаги 10% от общатата сума 

        const calculatedTip = parseInt(sum) * parseFloat(tip);  //тук смятат общата сума умн по бакшиша
    
        return calculatedTip;
    }

    let calcSum = (sum, friends, tip) =>{
        const calculatedTip= calculateTip(sum, tip);    //решават какъв % бакшиш ще дадат и пресмятат колко е само бакшиша
        const total = parseInt(sum) + calculatedTip;   // събират сумата+бакшиша
        const friendSum = divideTotal(total, friends);  //делят (сума+бакшиш)/бр приятели
        return friendSum;
    }

    const total=calcSum(sum, friends, tip);



    return(
        <article>
            <a href="#" class="back" onClick={ () => close('') }>X</a>
            <h2>Varje person ska betala</h2>
            <h3 id='friendSum' className='show-sum'>{total}</h3>

        </article>
    )
}

export default AndraForm;