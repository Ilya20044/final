import styles from "./Form.module.css"
import form  from "../images/form.svg"


export const Form=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <p className={styles.title}>Обсудить проект</p>
                <p className={styles.text}>Крутые проекты начинаются с заполнения этой формы</p>
                <img src={form}/>
            </div>
            <form className={styles.form}>
                <p className={styles.formTitle}>Ваше имя</p>
                <input placeholder="введите ваше имя" type="text" className={styles.input}/>
                <div className={styles.inputBlock}>
                    <div>
                        <p className={styles.formTitle}>Телефон</p>
                        <input placeholder="введите ваш телефон" type="number" className={styles.input}/>
                    </div>
                    <div>
                        <p className={styles.formTitle}>Email</p>
                        <input placeholder="введите вашу почту" type="email" className={styles.input}/>
                    </div>
                </div>
                <p className={styles.formTitle}>Сообщение</p>
                <input placeholder="введите сообщение" type="text" className={styles.input}/>
                <div className={styles.formButton}>
                    <button className={styles.buttom}>Отправить</button>
                </div>
            </form>
        </div>
    )
}