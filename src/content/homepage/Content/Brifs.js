import styles from "../../../styles/content/Brifs.module.css"


export const Brifs=()=>{
    return(
        <div  className={styles.container}>
            <p className={styles.title}>Брифы</p>
            <p className={styles.text}>Помогите нам, сделать ваш проект лучше! После заполнения брифа, Мы свяжемся с вами в ближайшее время!</p>
            <div className={styles.brifs}>
                <p className={styles.number}>01<p className={styles.brif}>Веб Дизайн</p></p>
                <p className={styles.number}>02<p className={styles.brif}>Лого</p></p>
                <p className={styles.number}>03<p className={styles.brif}>Иллюстрация</p></p>
                <p className={styles.number}>04<p className={styles.brif}>Презентация</p></p>
                <p className={styles.number}>05<p className={styles.brif}>Айдентика</p></p>
            </div>
        </div>
    )
}