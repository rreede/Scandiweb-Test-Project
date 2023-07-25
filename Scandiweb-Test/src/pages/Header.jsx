import { Outlet, Link } from "react-router-dom";

function Header() {

    return(
        <>
        <header>
        <h2>Product Add</h2>
        <nav>
             <Link to={`/`}><button >Save</button></Link>
             <Link to={`/`}><button id='delete-product-btn'>Cancel</button></Link>
        </nav>

        </header>
        </>
    )

}

export default Header;