import styles from "../../../styles/content/Image.module.css"
import design from "../../../images/design 1.svg"

export const Image=()=>{
    return(
        <div>
            <img src={design} className={styles.image}/>
        </div>
    )
}