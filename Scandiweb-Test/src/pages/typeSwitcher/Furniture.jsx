import { Outlet, Link } from "react-router-dom";

function Header() {

    return(
        <div className='property-container'>
       <label className='main-label' htmlFor="">Height(CM)</label>
        <input type="text" name="" id="" /><br/>

        <label className='main-label' htmlFor="">Width(CM)</label>
        <input type="text" name="" id="" /><br/>

        <label className='main-label' htmlFor="">Length(CM)</label>
        <input type="text" name="" id="" /><br/>
        </div>
    )

}

export default Header;