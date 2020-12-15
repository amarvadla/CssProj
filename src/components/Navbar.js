import React, { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {

    const [rows, setRows] = useState([]);


    useEffect(() => {
        let rowElem = [];
        for (let i = 0; i < 25; i++) {
            rowElem.push(<div className="card" key={i}>
                <h2>Hello</h2>
                <p>sdlkfjslkdjflsjlfkjdljsflksjldfjlldkjf</p>
            </div>)
        }
        setRows(rowElem);
    }, [])

    return (
        <>
            <div className="top-nav">
                <div className="left">
                    <a href="/home"> HOME  </a>
                    <a href="/shop"> SHOP  </a>
                    <a href="/buy"> BUY  </a>
                    <a href="/sel"> SELL  </a>
                </div>
                <div className="contact">
                    <a href="/contact"> CONTACT US  </a>
                </div>
            </div>
            <div className="grid-layout">
                {rows}
            </div>
        </>
    )
}

export default Navbar
