import React, { useState } from 'react';
import "../assets/global.css";
import "../Pages/Contact.css";

const ContactError = () => {
    return(
        <section className='errors'>
            <div className='errors-container container'>
                <img src='../images/error.png'className="errors-img" />
                <h4 className='errors-title'>Ошибка</h4>
                <p className='errors-text'>При загрузке Google Карт на этой странице возникла проблема. Подробности вы найдете в консоли JavaScript.</p>
            </div>
        </section>
    )
}
export default ContactError;
