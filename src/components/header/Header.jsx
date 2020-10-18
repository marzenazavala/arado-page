import React from 'react';
import './header.scss';
import moment from 'moment';
import 'moment/locale/pl'

const Header = () => {
    const date = moment().locale('pl').format('LL');
    return (
        <div>
            
            <div className='main'>
                <div className='title'>
                    Projekt Arado
                </div>
                <div className='date'>{date}</div>
                <div className='subtitle'>zaginione laboratorium Hitlera</div>
                <div className='menu'>
                    <div>OFERTA</div>
                    <div>HISTORIA</div>
                    <div>RAJD</div>
                    <div>GALERIA</div>
                    <div>CENNIK</div>
                    <div>PARTNERZY</div>
                    <div>WYCIECZKI ŁĄCZONE</div>
                    <div>KONTAKT</div>
                </div>
            </div>
        </div>
       
    )
};

export default Header