import { Footer } from "../../../../common/Footer"
import { Form } from "../../../../common/Form"
import { Brifs } from "../../Content/Brifs"
import { Clients } from "../../Content/Clients"
import { Content } from "../../Content/Content"
import { MainText } from "../../Content/MainText"


export const Main=()=>{
    return(
        <div >
            <Content/>
            <MainText/>
            <Brifs/>
            <Clients/>
            <Form/>
            <Footer/>
        </div>
    )
}