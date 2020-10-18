import React from 'react';
import AdsSection from '../../components/sections/AdsSection/AdsSection';
import MainSection from '../../components/sections/MainSection/MainSection';

import './home.scss'

const Home = () => {
    return (
        
    <div className='newspaper'>
        {/* first row */}
        <MainSection />

{/* second row */}
    <div className='newspaper row-3'>
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
                    </div>
                    <div className='more'>czytaj dalej</div>
                </div>
                <div className='row-item'>
                    <div className='item-title'>Rajd Arado 2018 - Pałac Jedlinka</div>
                    <div>Dnia 28 kwietnia 2018 roku 
                        ruszyła kolejna edycja Rajdu 
                        Arado – największej imprezy 
                        militarnej o charakterze 
                        historyczno-edukacyjnym. 
                        Pierwszym miejscem, które 
                        opanowali rekonstruktorzy 
                        było miasto Kowary i Jelenia Góra. 
                        Drugiego dnia Rajd Arado zawitał 
                        do Seidorf Mountain Resort w Sosnówce, 
                        miasta Karpacz i Osady Śnieżka w Łomnicy. 
                    </div>
                    <div className='more'>czytaj dalej</div>
                </div>
                <div className='row-item'>
                    <div className='item-title'>Rajd Arado 2018 - Osada Śnieżka</div>
                    <div>Dnia 28 kwietnia 2018 roku ruszyła 
                        kolejna edycja Rajdu Arado – największej 
                        imprezy militarnej o charakterze 
                        historyczno-edukacyjnym. 
                        Pierwszym miejscem, które opanowali 
                        rekonstruktorzy było miasto Kowary i Jelenia Góra. 
                        Drugiego dnia Rajd Arado zawitał do Seidorf 
                        Mountain Resort w Sosnówce, miasta Karpacz 
                        i Osady Śnieżka w Łomnicy.
                    </div>
                    <div className='more'>czytaj dalej</div>
                </div>
            </div>
            <AdsSection />
    </div>
        
    );
};

export default Home;