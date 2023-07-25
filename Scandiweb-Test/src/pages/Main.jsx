import { useState } from "react";
import { useEffect } from "react";

import Book from './typeSwitcher/Book';
import Furniture from './typeSwitcher/Furniture';
import DVD from './typeSwitcher/DVD';

function Main() {

const [type, setType] = useState('SelectType');

const [dvdContentVisible, setDvdContentVisible] = useState(false);

const [furnitureContentVisible, setFurnitureContentVisible] = useState(false);

const [bookContentVisible, setBookContentVisible] = useState(false);

useEffect(()=> {
    type === 'DVD'
    ? setDvdContentVisible(true)
    :setDvdContentVisible(false);

    type === 'Furniture'
    ? setFurnitureContentVisible(true)
    :setFurnitureContentVisible(false);

    type === 'Book'
    ? setBookContentVisible(true)
    :setBookContentVisible(false);

},[type]);

const handleOnChange = (e) => {
    setType(e.target.value);
}

    return(
        <main>
           <form action="" id='productType'>
            <span className='input-field'>
                <label className='main-label' htmlFor="">SKU</label>
                <input type="text" name="" id="" /> <br />
            </span>

        <span className='input-field'>
            <label className='main-label' htmlFor="">Name</label>
            <input type="text" name="" id="" /> <br />
        </span>

        <span className='input-field'>
            <label className='main-label' htmlFor="">Price ($)</label>
            <input type="text" name="" id="" /> <br /><br />
    
        </span>
        
            <label className='main-label' htmlFor="">Type Switcher</label>
            <select name="" id="" value={type} onChange={handleOnChange}>
            <option value="SelectType">Select Type</option>
                <option id='DVD' value="DVD">DVD</option>
                <option id='Book' value="Book">Book</option>
                <option id='Value' value="Furniture">Furniture</option>
            </select>

           </form>

        {dvdContentVisible && <DVD/>}
        {furnitureContentVisible && <Furniture/>}
        {bookContentVisible && <Book/>}

        </main>
    )

}

export default Main;