import { Outlet, Link } from "react-router-dom";

function Header() {

    return(
        <>
        <header>
        <h2>Product Add</h2>
        <nav>
             <Link to={`/add-product`}><button >Save</button></Link>
             <button id='delete-product-btn'>Cancel</button>
        </nav>

        </header>
        </>
    )

}

export default Header;