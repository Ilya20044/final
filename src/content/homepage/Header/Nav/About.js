import styles from "../../../../styles/nav/About.module.css"
import map from "../../../../images/map.png"
import { Form } from "../../../../common/Form"
import { Footer } from "../../../../common/Footer"

// export const about=()=> {
//     let block = document.getElementById('about').style.display='none' 
//  }

export const About=()=>{
    return(
        <div className={styles.container} id='about'>
            <p className={styles.bigTitle}>wha</p>
            <p className={styles.bigTitle}>les</p>
            <div className={styles.textBlock}>
                <p className={styles.textTitle}>О нас</p>
                <p className={styles.text}>Мы помогаем упаковывать бизнес по всему миру, и создаем дизайн, который, остается актуальным и вызывает эмоции даже в нашу эпоху фаст-фуд информации! Сотрудничая с веб-студиями, креативными агентствами, издателями, а также разработчиками мобильных игр и арбитражными командами со всего земного шара, мы всегда помним о репутации, следим за качеством, и предоставляем услуги высшего качества.</p>
            </div>
        <div className={styles.blockContainer}>
            <div className={styles.block}>
                <p className={styles.numder}>01</p>
                <p className={styles.blockTitle}>Экономия</p>
                <p className={styles.blockText}>Отсутствие офиса, помогает нам оказывать услуги премиального качества, за более низкую цену</p>
            </div>
            <div className={styles.block}>
                <p className={styles.numder}>02</p>
                <p className={styles.blockTitle}>Скорость</p>
                <p className={styles.blockText}>У нас небольшая команда, а значит принятие решений занимает гораздо меньшее количество времени</p>
            </div>
            <div className={styles.block}>
                <p className={styles.numder}>03</p>
                <p className={styles.blockTitle}>Прозрачность</p>
                <p className={styles.blockText}>Сразу после начала работы, вы будете подключены к нашему удаленному офису, где напрямую сможете общаться с Дизайнером, Менеджером или же Руководителем агентства</p>
            </div>
            <div className={styles.block}>
                <p className={styles.numder}>04</p>
                <p className={styles.blockTitle}>Удобство</p>
                <p className={styles.blockText}>Мы будем предоставлять вам регулярные отчеты о стадии на которой, находится ваш дизайн</p>
            </div>
        </div>
        <div className={styles.geography}>
            <p className={styles.geoTitle}>География наших клиентов</p>
            <div className={styles.geoText}>
                <p className={styles.geoNumber}>55+<p className={styles.numberText}>стран по всему миру</p></p>
                <p className={styles.geoNumber}>235+<p className={styles.numberText}>довольных клиентов</p></p>
                <p className={styles.geoNumber}>10000+<p className={styles.numberText}>часов работы</p></p>
            </div>
            <img src={map} className={styles.map}/>
        </div>
        <Form/>
        <Footer/>
        </div>
    )
}