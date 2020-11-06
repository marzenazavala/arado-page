import React from  'react';
import Slide from 'react-reveal';
import './hours.scss';

const Prices = () => {
  return (
    <div className='wrapper' id='godziny'>
      <h1 className='text'>Godziny otwarcia podziemi</h1>
      <div className='hours-content'>
        <div className='text-wrapper'>
          <div className='text-hours'>     
            <h3>W sezonie zimowym od 15 listopada do 15 kwietnia:</h3>
            <h4>od poniedziałku do niedzieli 10:00-17:00</h4>

            <h3>W sezonie letnim od 16 kwietnia do 14 listopada:</h3>
            <h4>od poniedziałku do niedzieli 10:00-18:00</h4>

            <h4>W miesiącach marzec-kwiecień oraz październik-grudzień czas oczekiwania na przewodnika uzależniony jest od intensywności ruchu turystycznego. (max 30min.).</h4>
            <h4>W przypadku rezerwacji możliwość ustalenia indywidualnego terminu zwiedzania podziemi.
                Preferowany kontakt telefoniczny: <span className='bigger'>512 561 292</span> lub za pomocą poczty elektronicznej: <span className='bigger'>projekt@arado.pl</span></h4>
          </div>
        </div>
        <Slide right>
          <div className='info-wrapper'>
            <div className='info-text'>
              <p>Ze względów bezpieczeństwa wejście do podziemi odbywa się tylko pod opieką przewodnika.</p>
              <p>Zwiedzanie polega na odkrywaniu tajemnic w związku z czym przewodnik jest osobą wymaganą 
                dla uzyskania pożądanego efektu. Z turystów indywidualnych formowane są grupy (max. 30 osób) 
                które co około 30 minut wyruszają na trasę.</p>
                
              <p>Grupy zorganizowane przyjmowane są zgodnie z ustalonymi godzinami wejść - preferowana rezerwacja.</p>
              <p>Bezpłatny wstęp przysługuje dzieciom do lat 6, pilotowi, kierowcy autokaru lub opiekunowi grupy 
                zorganizowanej. Jeżeli grupa liczy mniej niż 10 osób to opiekunowi grupy nie przysługuje wstęp 
                bezpłatny. Przewodnicy turystyczni i piloci wycieczek posiadający aktualne uprawnienia mają wstęp 
                bezpłatny po okazaniu stosownego zaświadczenia.</p>

              <p>W wartowniach (budynkach wejścia/wyjścia) znajdują się bezpłatne toalety.</p>
              <p>Trasa zwiedzania dopasowana jest indywidualnie do wieku uczestników.</p>
              <p>Specjalne bonifikaty dla stałych klientów i biur turystycznych, oraz pamiątki do nabycia w budynku wejścia.</p>
            </div>
          </div>
        </Slide>
      </div>
    </div>
    );
};

export default Prices