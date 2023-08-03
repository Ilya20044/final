import { Link, NavLink} from "react-router-dom";
import styles from "../../../../styles/nav/Navigation.module.css"
import logo from "../../../../images/logo.svg"
import React, { useState } from 'react';
  


export const Navigation =()=>{

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    
    const handleButtonClick = () => {
      setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const [inputValue, setInputValue] = useState('');
  
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
  
    const handleSubmit = () => {
        document.cookie = `data=${inputValue}; path=/;`;
    };

    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return(
        <>
        <div className={styles.navigation}>
            <img classname={styles.Logo} src={logo}/>
            <nav className={styles.nav}>
                <NavLink path to={'/'} className={styles.link} id='main'>Главная</NavLink>
                <NavLink path to={'/Услуги и цены'} className={styles.link}>Услуги и цены</NavLink>
                <NavLink path to={'/Мы'} className={styles.link}>Мы</NavLink>
                <NavLink path to={'/Контакты'} className={styles.link}>Контакты</NavLink>
            </nav>
            <div className={styles.burger}>
                <button onClick={handleToggle} className={styles.buttonBurger}>
                    {isOpen ? ' ' : ' '}
                </button>
                {isOpen && (
                    <ul>
                        <li>Пункт меню 1</li>
                        <li>Пункт меню 2</li>
                        <li>Пункт меню 3</li>
                    </ul>
                )}
            </div>
            <div className={styles.contact}>
                <p className={styles.number}>+38 (097) 757 51 51</p>
                <buttom className={styles.button} onClick={handleButtonClick} >Обсудить проект</buttom>
            </div>
        </div>
        {isPopupOpen && (
                    <div className="popup">
                        <form className={styles.form}>
                            <div className={styles.block}>
                            <div className={styles.inputBlock}>
                                <div>
                                    <p className={styles.formTitle}>Ваше имя</p>
                                    <input placeholder="введите ваше имя" type="text" className={styles.input} onChange={handleChange}/>
                                </div>
                                <div>
                                    <p className={styles.formTitle}>Телефон</p>
                                    <input placeholder="введите ваш телефон" type="phone" className={styles.input} onChange={handleChange}/>
                                </div>
                                <div>
                                    <p className={styles.formTitle}>Email</p>
                                    <input placeholder="введите вашу почту" type="email" className={styles.input} onChange={handleChange}/>
                                </div>
                            </div>
                            <div className={styles.massage}>
                                <p className={styles.formTitle}>Сообщение</p>
                                <input placeholder="введите сообщение" type="text" className={styles.inputMassage} onChange={handleChange}/>
                            </div>
                            </div>
                            <div className={styles.formButton}>
                                <button className={styles.buttom} onClick={handleSubmit}>Отправить</button>
                            </div>
                        </form>
                        <button onClick={handleClosePopup} className={styles.buttom}>Закрыть</button>
                    </div>
            )}
        </>
    );
};