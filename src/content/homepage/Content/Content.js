import { Text } from "./Text"
import { Image } from "./Image"
import styles from "../../../styles/content/Content.module.css"

export const Content=()=>{
    return(
        <div className={styles.content}>
            <Text/>
            <Image/>
        </div>
    )
}