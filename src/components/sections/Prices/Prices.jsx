import React from  'react';
import './prices.scss';

const Prices = () => {
    return (
        <div className='wrapper' id='godziny'>
          <h1 className='text'>Godziny otwarcia podziemi</h1>
            <div className='text-wrapper'>
                <h4>od poniedziałku do niedzieli 10:00-17:00</h4>       
<h3>W sezonie zimowym od 15 listopada do 15 kwietnia:</h3>
<h4>od poniedziałku do niedzieli 10:00-17:00</h4>

<h3>W sezonie letnim od 16 kwietnia do 14 listopada:</h3>
<h4>od poniedziałku do niedzieli 10:00-18:00</h4>

<h4>W miesiącach marzec-kwiecień oraz październik-grudzień czas oczekiwania na przewodnika uzależniony jest od intensywności ruchu turystycznego. (max 30min.).</h4>
<h4>W przypadku rezerwacji możliwość ustalenia indywidualnego terminu zwiedzania podziemi.
Preferowany kontakt telefoniczny: <span className='bigger'>512 561 292</span> lub za pomocą poczty elektronicznej: <span className='bigger'>projekt@arado.pl</span></h4>

            
            </div>
        </div>
    );
};

export default Prices