import styles from "../../../../styles/nav/Contact.module.css"
import dog from "../../../../images/dog.svg"
import telegram from "../../../../images/telegram.svg"
import viber from "../../../../images/viber.svg"
import whatsap from "../../../../images/whatsap.svg"
import { Form } from "../../../../common/Form"
import { Footer } from "../../../../common/Footer"


export const Contacts=()=>{
    return(
        <div>
            <p className={styles.title}>Hello</p>
            <div className={styles.content}>
                <img src={dog}/>
                <div className={styles.contacts}>
                    <p className={styles.text}>телефон</p>
                    <p className={styles.contact}>+38 (097) 757 51 51</p>
                    <div className={styles.socialnet}>
                        <a className={styles.img} href='#'><img src={telegram} /></a>
                        <a className={styles.img} href='#'><img src={viber}/></a>
                        <a className={styles.img} href='#'><img src={whatsap}/></a>
                    </div>
                    <p className={styles.text}>Почта</p>
                    <p className={styles.contact}>hello@whalesagency.com</p>
                </div>

            </div>
            <Form/>
            <Footer/>
        </div>
    )
}