import React from 'react';
import './mainSection.scss';

const MainSection = () => {
  return (
    <div>
      <div className='newspaper'>
      <div className='newspaper row-3'>
        <div className='photo-border'>
          <div className='photo'/>
        </div>
          <div className='row-item'>
                  <div className='item-title'>Hotel Seidorf Mountain Resort</div>
                  <div>W trakcie tegorocznego rajdu, wraz 
                      z rekonstruktorami odwiedziliśmy wiele 
                      miejsc, jednak niewątpliwie wielkim 
                      zaskoczeniem była dla nas #sosnówka 
                      i hotel Seidorf Mountain Resort. 
                      Przepiękny krajobraz jak i sam pomysł 
                      na ulokowanie hotelu to coś co po 
                      prostu trzeba zobaczyć. Gorąco polecamy 
                      i zapraszamy do oglądania galerii 
                      z inscenizacji historycznej, jaką 
                      wspólnie udało nam się zorganizować
                  </div>
                  <div className='more'>czytaj dalej</div>
              </div>
      </div>
      </div>
    </div>
  );
};

export default MainSection;