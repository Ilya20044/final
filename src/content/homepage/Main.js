import { Footer } from "../../common/Footer"
import { Form } from "../../common/Form"
import { Brifs } from "./Content/Brifs"
import { Clients } from "./Content/Clients"
import { Content } from "./Content/Content"
import { Text } from "./Text/Text"


export const Main=()=>{
    return(
        <div>
            <Content/>
            <Text/>
            <Brifs/>
            <Clients/>
            <Form/>
            <Footer/>
        </div>
    )
}