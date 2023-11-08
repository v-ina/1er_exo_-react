import logo from "./img/google.svg"

function Header (){
    const userLogged = {
        lastName : "yeonsoo",
        firstName : "Kang",
        job : "étudiente"
    }
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
                            <a href="">{userLogged.firstName} {userLogged.lastName} - {userLogged.job}</a>
                            ):( <button>CONNECTEZ-VOUS</button> // 윗줄에 잘 보면 - 가 {}밖에 있기 때문에 js의 빼기 기호가 아니라 html 안의 내용요소처럼 글씨로 인식됐음
                            // 그리고 {}는 valeur par valauer임. ,로 두개 같이 쓰거나 할 수 없음
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