import "./Main.css"



function Main() {
    return (
        <div className="main">
            <div className="header">
                <p className="header-text">Payments App</p>
                <input type="text" placeholder="Login" className="login-input" />
                <input type="password" placeholder="Parol" className="parol-input" />
                <button className="kirish-btn">Kirish</button>
            </div>
            <div className="main-container">
            <div className="main-left">
                <p className="my-card-text">Mening kartam</p>
                <div className="Credit-Card">
                    <p className="Credit-Card-text">Credit Card</p>
                    <img src="/card-coin.png" alt="card-coin-img" className="card-coin-img" />
                    <p className="Price-num">$ 13,849,00</p>
                    <p className="card-name">NAME SURNAME</p>
                    <div className="under-card">
                        <p className="Card-number">1234 5678 9123 4567</p>
                        <p className="Card-expires">01/23</p>
                    </div>
                </div>

                <div className="transfer">
                    <p className="Transfer-text">Pul o'tkazish</p>
                    <div className="transfer-inputs">
                        <input type="text" className="Card-num-int" placeholder="Karta raqami" /> 
                        <input type="text" className="Card-amount-int" placeholder="Summa" /> 
                    </div>
                    <button className="send-btn">Yuborish</button>
                </div>
            </div>
            <div className="main-right">
                <p className="transaction-history">O'tkazmalar tarixi</p>
                <div className="amount-wripper">
                    <div className="amount-wripper-left">
                        <p>+86,200 $</p>
                    </div>
                    <div className="amount-wripper-right">
                        <p>−56,000 $</p>
                    </div>
                </div>
                <div className="transaction-history-table">
                    <div className="transaction">
                        <div className="transaction-left">
                            <p className="transactioner-name">Ermamatov Farrux</p>
                            <div className="transaction-date-row">
                                <p className="transaction-date">19.01.2022</p>
                                <p className="transaction-time">18:50</p>
                            </div>
                        </div>
                        <div className="transaction-right">
                            <p className="Transaction-ammount positive">+6,600 $</p>
                        </div>
                    </div>

                    <div className="transaction">
                        <div className="transaction-left">
                            <p className="transactioner-name">O'rinboyev Sardor</p>
                            <div className="transaction-date-row">
                                <p className="transaction-date">19.01.2022</p>
                                <p className="transaction-time">18:50</p>
                            </div>
                        </div>
                        <div className="transaction-right">
                            <p className="Transaction-ammount negative">−800 $</p>
                        </div>
                    </div>

                    <div className="transaction">
                        <div className="transaction-left">
                            <p className="transactioner-name">Ermamatov Farrux</p>
                            <div className="transaction-date-row">
                                <p className="transaction-date">19.01.2022</p>
                                <p className="transaction-time">18:50</p>
                            </div>
                        </div>
                        <div className="transaction-right">
                            <p className="Transaction-ammount positive">+6,600 $</p>
                        </div>
                    </div>

                    <div className="transaction">
                        <div className="transaction-left">
                            <p className="transactioner-name">Ermamatov Farrux</p>
                            <div className="transaction-date-row">
                                <p className="transaction-date">19.01.2022</p>
                                <p className="transaction-time">18:50</p>
                            </div>
                        </div>
                        <div className="transaction-right">
                            <p className="Transaction-ammount positive">+6,600 $</p>
                        </div>
                    </div>

                    <div className="transaction">
                        <div className="transaction-left">
                            <p className="transactioner-name">Ermamatov Farrux</p>
                            <div className="transaction-date-row">
                                <p className="transaction-date">19.01.2022</p>
                                <p className="transaction-time">18:50</p>
                            </div>
                        </div>
                        <div className="transaction-right">
                            <p className="Transaction-ammount positive">+6,600 $</p>
                        </div>
                    </div>

                    <div className="transaction">
                        <div className="transaction-left">
                            <p className="transactioner-name">Ermamatov Farrux</p>
                            <div className="transaction-date-row">
                                <p className="transaction-date">19.01.2022</p>
                                <p className="transaction-time">18:50</p>
                            </div>
                        </div>
                        <div className="transaction-right">
                            <p className="Transaction-ammount positive">+6,600 $</p>
                        </div>
                    </div>

                    <div className="transaction">
                        <div className="transaction-left">
                            <p className="transactioner-name">Ermamatov Farrux</p>
                            <div className="transaction-date-row">
                                <p className="transaction-date">19.01.2022</p>
                                <p className="transaction-time">18:50</p>
                            </div>
                        </div>
                        <div className="transaction-right">
                            <p className="Transaction-ammount positive">+6,600 $</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Main;