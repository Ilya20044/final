import styles from "./Form.module.css"
import form  from "../images/form.svg"
import React, { useState } from 'react';


export const Form=()=>{

    const [inputValue, setInputValue] = useState('');
  
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
  
    const handleSubmit = () => {
        document.cookie = `data=${inputValue}; path=/;`;
    };


    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <p className={styles.title}>Обсудить проект</p>
                <p className={styles.text}>Крутые проекты начинаются с заполнения этой формы</p>
                <img src={form} className={styles.img}/>
            </div>
            <form className={styles.form}>
                <p className={styles.formTitle}>Ваше имя</p>
                <input placeholder="введите ваше имя" type="text" className={styles.input} onChange={handleChange}/>
                <div className={styles.inputBlock}>
                    <div>
                        <p className={styles.formTitle}>Телефон</p>
                        <input placeholder="введите ваш телефон" type="number" className={styles.input} onChange={handleChange}/>
                    </div>
                    <div>
                        <p className={styles.formTitle}>Email</p>
                        <input placeholder="введите вашу почту" type="email" className={styles.input} onChange={handleChange}/>
                    </div>
                </div>
                <p className={styles.formTitle}>Сообщение</p>
                <input placeholder="введите сообщение" type="text" className={styles.input} onChange={handleChange}/>
                <div className={styles.formButton}>
                    <button className={styles.buttom} onClick={handleSubmit}>Отправить</button>
                </div>
            </form>
        </div>
    )
}