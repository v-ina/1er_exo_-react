import logo from "./img/google.svg"

function Header (){

    const isUserLoggedIn = true
    const itemsInCart = 2

    return (
        <header>
            <nav>
                <ul className="nav--ul">
                    <li><a href=""><img src={logo} className="nav--logo" alt="logo" /></a></li>
                    <li><a href="">ACCEUIL</a></li>
                    <li><a href="">ABOUT US</a></li>
                    <li>
                        {isUserLoggedIn ? (
                            <a href="">MY PAGE</a>
                            ):( <button>CONNECTEZ-VOUS</button>
                        )}  
                    </li>
                    <li>
                        {itemsInCart > 0 ? <p>Cart : {itemsInCart}</p> : <p>Pas d'item au panier</p>}
                    </li>
                </ul>
            </nav>
            <h1>Bonjour? JE SUIS H1</h1>
        </header>
    )
}

export default Header