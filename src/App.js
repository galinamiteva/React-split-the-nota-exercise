import React, {useState} from 'react';
import './App.css';

import AndraForm from './AndraForm';

function App(props) {
    const [sum, setSum]=useState('');
    const [tip, setTip]=useState('');
    const [friends, setFriends]=useState('')
    const [result, setResult]=useState('')

    let divideTotal=(total, friends)=>{
        const sumDivided=total / parseInt(friends)
        return sumDivided;
    };

    let calculateTip = (sum, tip) => {   //бакшиша е почти винаги 10% от общатата сума 

        const calculatedTip = parseInt(sum) * parseFloat(tip);  //тук смятат общата сума умн по бакшиша
    
        return calculatedTip;
    }

        function handleClick(){
            const calculatedTip=calculateTip(sum, tip);
            const totalSum=parseInt(sum) + calculatedTip;
            const sumToPay=divideTotal(totalSum, friends)
            setResult(sumToPay)
            
        }

        function comeBack(){
            setResult('')
        }

        

    return(
        <main className='wrapper'>
            <h2>Split the nota</h2>           

        {result? 

<section className='form' id='showSum'>
<AndraForm friendSum={result} close={comeBack} /> 
</section>:                                   
         

<section className='form' id='inputForm'>
                <section>                   
                    <input type='number' id='sum' className='form__input' onChange={event => setSum(event.target.value)}/>
                    <label htmlFor="sum" className="form__label form__label_sum">Summa: </label>
                </section>
                <section>
                    <input type='number' id='numberOfFriends' className='form__input'  onChange={event => setFriends(event.target.value)}/>
                    <label htmlFor="numberOfFriends" className="form__label form__label_friends"> Antal vänner: </label>
                </section>
                <section>
                    <input type='number' id='tip' className='form__input' onChange={event => setTip(event.target.value)}/>  
                    <label htmlFor="tip" className="form__label form__label_tip"> Drics:</label>
                </section>
                    <button id='calculateButton' className='form__button' onClick ={ handleClick }>Räkna</button>           
            </section>  

            }   
        </main>
    )
}

export default App;