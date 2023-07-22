import { Link, NavLink} from "react-router-dom";
import styles from "../../../../styles/nav/Navigation.module.css"
import logo from "../../../../images/logo.svg"

export const Navigation =()=>{
    return(
        <div className={styles.navigation}>
            <img classname={styles.Logo} src={logo}/>
            <nav className={styles.nav}>
                <NavLink path to={'/'} className={styles.link}>Главная</NavLink>
                <NavLink path to={'/Портфолио'} className={styles.link}>Портфолио</NavLink>
                <NavLink path to={'/Услуги и цены'} className={styles.link}>Услуги и цены</NavLink>
                <NavLink path to={'/Мы'} className={styles.link}>Мы</NavLink>
                <NavLink path to={'/Контакты'} className={styles.link}>Контакты</NavLink>
            </nav>
            <div className={styles.contact}>
                <p className={styles.number}>+38 (097) 757 51 51</p>
                <buttom className={styles.button}>Обсудить проект</buttom>
            </div>
        </div>
    );
};