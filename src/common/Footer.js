import styles from "../common/Footer.module.css"
import logo from "../images/logo (2).svg"
import telegram from "../images/telegram.svg"
import viber from "../images/viber.svg"
import whatsap from "../images/whatsap.svg"

export const Footer=()=>{
    return(
        <div className={styles.container}>
             <img src={logo}/>
             <div className={styles.brifs}>
                <p className={styles.title}>Брифы</p>
                <p className={styles.text}>Бриф на разработку веб дизайна</p>
                <p className={styles.text}>Бриф на разработку айдентика</p>
                <p className={styles.text}>Бриф на разработку презентации</p>
                <p className={styles.text}>Бриф на разработку иллюстрации</p>
                <p className={styles.text}>Бриф на разработку логотипа</p>
             </div>
             <div className={styles.about}>
                    <p className={styles.title}>О нас</p>
                    <p className={styles.text}>Портфолио</p>
                    <p className={styles.text}>Услуги и цены</p>
                    <p className={styles.text}>Мы</p>
                    <p className={styles.text}>Контакты</p>
             </div>
             <div className={styles.contact}>
                <p className={styles.title}>Контакты</p>
                <p className={styles.text}>hello@whalesagency.com</p>
                <p className={styles.text}>+38 (098) 888 10 08</p>
                <p className={styles.text}>+38 (063) 333 10 33</p>
                <div className={styles.socialnet}>
                    <a className={styles.img} href='#'><img src={telegram} /></a>
                    <a className={styles.img} href='#'><img src={viber}/></a>
                    <a className={styles.img} href='#'><img src={whatsap}/></a>
                </div>
             </div>
        </div>
    )
}