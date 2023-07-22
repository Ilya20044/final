import styles from "../../../styles/content/Text.module.css"


export const Text=()=>{
    return(
        <div>
            <p className={styles.title}>Whales Design</p>
            <p className={styles.main}>Мы помогаем зарабатывать в интернете</p>
            <buttom className={styles.buttom}>Обсудить проект</buttom>
        </div>
    )
}