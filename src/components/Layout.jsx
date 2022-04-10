import React from 'react';
import {Header} from "./header/Header.jsx";
import {Main} from "./main/Main.jsx";

const Layout = () => {

    return (
        <>
            <header>
                <Header/>
            </header>

            <main>
                <Main/>
            </main>
        </>
    )
}

export {Layout}