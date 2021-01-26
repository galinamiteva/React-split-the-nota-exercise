import React, {useState} from 'react';
import './App.css';

import AndraForm from './AndraForm';

function App(props) {
    const [summa, setSumma]=useState(sum='', tip='', friends='');

    handleChange(event){
        const {sum, tip, friends}=event.target;
        let sum=setSumm({ [sum]: value });
        let tip=setSumm({ [tip]: value });
        let friends=setSumm({ [friends]: value });        
    };

   
    return(
        <main className='wrapper'>
            <h2>Split the nota</h2>
            
            {summa? 

            <section className='form' id='inputForm'>
            <section>
                <input type='text' id='sum' className='form_input' value={sum} onChange={handleChange}></input>
                <label for='sum' className='form_label form_label_sum'>Summa</label>
            </section>
            <section>
                <input type='text' id='numberOfFriends' className='form_input' value={friends} onChange={handleChange} ></input>
                <label for='numberOfFriends' className='form_label form_label_friends'>Antal vänner</label>
            </section>
            <section>
            <input type='text' id='tip' className='form_input' value={tip} onChange={handleChange}></input>
                <label for='tip' className='form_label form_label_tip'>Drics</label>
            </section>
                <button id='calculateButton' className='form_button' onClick={()=> moreInfo(info)}>Räkna</button>           
    </section>
                                 
            :

            <section className='form' id='showSum'>
                <AndraForm info={summa} close={setSumma}/> 
            </section>}
        </main>
    )
}

export default App;