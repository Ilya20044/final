import styles from "../../../../styles/nav/Prices.module.css"
import roket from "../../../../images/roket.svg"
import pen from "../../../../images/pen.svg"
import penLine from "../../../../images/penLine.svg"
import laptop from "../../../../images/laptop.svg"
import creatives from "../../../../images/creatives.svg"
import presentation from "../../../../images/presentation.svg"
import { Form } from "../../../../common/Form"
import { Footer } from "../../../../common/Footer"

export const Prices=()=>(
    <div>
        <p className={styles.title}>Услуги</p>
        <div className={styles.container}>
            <div className={styles.block}>
                <p className={styles.blockTitle}>Айдентика</p>
                <p className={styles.text}>Мы занимаемся дизайном логотипов, элементов фирменного стиля</p>
                <div className={styles.buttomImg}>
                    <buttom className={styles.buttom}>Подробнее</buttom>
                    <img className={styles.img} src={roket} />
                </div>
            </div>
            <div className={styles.block}>
                <p className={styles.blockTitle}>Иллюстрации</p>
                <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <div className={styles.buttomImg}>
                    <buttom className={styles.buttom}>Подробнее</buttom>
                    <img className={styles.img} src={pen} />
                </div>
            </div>
            <div className={styles.block}>
                <p className={styles.blockTitle}>Логотипы</p>
                <p className={styles.text}>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                <div className={styles.buttomImg}>
                    <buttom className={styles.buttom}>Подробнее</buttom>
                    <img className={styles.img} src={penLine} />
                </div>
            </div>
            <div className={styles.block}>
                <p className={styles.blockTitle}>Веб сайты</p>
                <p className={styles.text}>Excepteur sint occaecat cupidatat non proident, sunt in culpa deserunt</p>
                <div className={styles.buttomImg}>
                    <buttom className={styles.buttom}>Подробнее</buttom>
                    <img className={styles.img} src={laptop} />
                </div>
            </div>
            <div className={styles.block}>
                <p className={styles.blockTitle}>Креативы</p>
                <p className={styles.text}>Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                <div className={styles.buttomImg}>
                    <buttom className={styles.buttom}>Подробнее</buttom>
                    <img className={styles.img} src={creatives} />
                </div>
            </div>
            <div className={styles.block}>
                <p className={styles.blockTitle}>Презентации</p>
                <p className={styles.text}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum стиля</p>
                <div className={styles.buttomImg}>
                    <buttom className={styles.buttom}>Подробнее</buttom>
                    <img className={styles.img} src={presentation} />
                </div>
            </div>
        </div>
        <p className={styles.mainTitle}>Цена</p>
        <div className={styles.prices}>
            <div className={styles.pricesBlock}>
                <p className={styles.priceTite}>Стартап</p>
                <p className={styles.for}>от <p className={styles.number}>2000</p></p>
                <buttom className={styles.priceButtom}>Заказать</buttom>
                <div className={styles.outline}></div>
                <p className={styles.point}>Логотип</p>
                <p className={styles.point}>Цветовая схема</p>
                <p className={styles.point}>Визитка</p>
                <p className={styles.point}>Типография</p>
            </div>
            <div className={styles.pricesBlock}>
                <p className={styles.priceTite}>Компания</p>
                <p className={styles.for}>от <p className={styles.number}>2000</p></p>
                <buttom className={styles.priceButtom}>Заказать</buttom>
                <div className={styles.outline}></div>
                <p className={styles.point}>Паттерн/формы</p>
                <p className={styles.point}>Иконки</p>
                <p className={styles.point}>Иллюстрация </p>
                <p className={styles.point}>Оформление соц.сетей</p>
            </div>
            <div className={styles.pricesBlock}>
                <p className={styles.priceTite}>Корпорация</p>
                <p className={styles.for}>от <p className={styles.number}>2000</p></p>
                <buttom className={styles.priceButtom}>Заказать</buttom>
                <div className={styles.outline}></div>
                <p className={styles.point}>Маскот/персонаж</p>
                <p className={styles.point}>Изображения(подборка стиля)</p>
                <p className={styles.point}>Брендбук</p>
                <p className={styles.point}>Оформление</p>
            </div>
        </div>
        <Form/>
        <Footer/>
    </div>
)