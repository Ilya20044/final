import { Prices } from './Header/Nav/Prices';
import { About } from './Header/Nav/About';
import { Contacts } from './Header/Nav/Contacts';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import {Navigation} from "./Header/Nav/Navigation"
import {Portfolio} from "./Header/Nav/Portfolio"
import { Main } from './Main';

export const Homepage=()=>{
    return(
        <div>
            <Navigation/>
                <Routes>
                    <Route path="/" element={<Main/>}></Route>
                    <Route path="/Портфолио" element={<Portfolio/>}></Route>
                    <Route path="/Услуги и цены" element={<Prices/>}></Route>
                    <Route path="/Мы" element={<About/>}></Route>
                    <Route path="/Контакты" element={<Contacts/>}></Route>
                </Routes>
        </div>
    );
};
