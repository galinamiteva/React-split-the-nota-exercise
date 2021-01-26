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
                    <input type='number' id='sum' className='form_input' onChange={event => setSum(event.target.value)}></input>
                    <label for='sum' className='form_label form_label_sum'>Summa</label>
                </section>
                <section>
                    <input type='number' id='numberOfFriends' className='form_input'  onChange={event => setFriends(event.target.value)} ></input>
                    <label for='numberOfFriends' className='form_label form_label_friends'>Antal vänner</label>
                </section>
                <section>
                <input type='number' id='tip' className='form_input' onChange={event => setTip(event.target.value)}></input>
                    <label for='tip' className='form_label form_label_tip'>Drics</label>
                </section>
                    <button id='calculateButton' className='form_button' onClick ={ handleClick }>Räkna</button>           
            </section>  

            }   
        </main>
    )
}

export default App;