import logo from "./img/google.svg"

function Header (){
    return (
        <header>
            <nav>
                <ul className="nav--ul">
                    <li><a href=""><img src={logo} className="nav--logo" alt="logo" /></a></li>
                    <li><a href="">ACCEUIL</a></li>
                    <li><a href="">ABOUT US</a></li>
                    <li><a href="">CONTACT</a></li>
                </ul>
            </nav>
            <h1>Bonjour? JE SUIS H1</h1>
        </header>
    )
}

export default Header