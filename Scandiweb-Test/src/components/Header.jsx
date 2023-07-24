import { Outlet, Link } from "react-router-dom";

function Header() {

    return(
        <>
        <header>
        <h2>Product List</h2>
        <nav>

        <Link to={`/add-product`}><button >ADD</button></Link>
            

            <button id='delete-product-btn'>MASS DELETE</button>
        </nav>

        </header>
        </>
    )

}

export default Header;