import Product from "./Product";


    fetch('http://localhost/php/Scandiweb-Test-Project/Scandiweb-Test/src/back-end/api/product/read.php').then(response=>response.json()).then(data=>data);




function Main() {
    return(
        <main>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </main>
    )

}

export default Main;