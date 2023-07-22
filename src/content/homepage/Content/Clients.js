import styles from "../../../styles/content/Clients.module.css"
import client1 from "../../../images/clients/client1.svg"
import client2 from "../../../images/clients/client2.svg"
import client3 from "../../../images/clients/client3.svg"
import client4 from "../../../images/clients/client4.svg"
import client5 from "../../../images/clients/client5.svg"
import client6 from "../../../images/clients/client6.svg"
import client7 from "../../../images/clients/client7.svg"
import client8 from "../../../images/clients/client8.svg"
import client9 from "../../../images/clients/client9.svg"



export const Clients=()=>{
    return(
        <div>
            <p className={styles.title}>Клиенты</p>
            <p className={styles.text}>Гордимся сотрудничеством с лидерами своих отраслей и счастливы быть их digital-партнером</p>
            <div className={styles.clients}>
                <img src={client1} className={styles.img}/>
                <img src={client2} className={styles.img}/>
                <img src={client3} className={styles.img}/>
                <img src={client4} className={styles.img}/>
                <img src={client5} className={styles.img}/>
                <img src={client6} className={styles.img}/>
                <img src={client7} className={styles.img}/>
                <img src={client8} className={styles.img}/>
                <img src={client9} className={styles.img}/>
            </div>
        </div>
    )
}