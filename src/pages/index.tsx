import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {useState} from "react";

const Home: NextPage = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((count) => count + 1);
    }

    const handleDecrement = () => {
        setCount((count) => count - 1);
    }



  return (
      <html>
      <head>
          <title>UI/UX</title>
      </head>
      <body>
        <div className="root">
          <nav className="header">
              <h1 className="nameTitle">Клычёв Денис БВТ1901</h1>
          </nav>
          <main className={"main"}>
              <div className={"buttonsNav"}>
                  <div className={"outer"}>
                      <Link href="/button1">
                        <button className={"button"} ><b>Задание 1</b></button>
                      </Link>
                  </div>
                  <div className={"outer"}>
                      <Link href="/button2">
                        <button className={"button"}><b>Задание 2</b></button>
                      </Link>

                  </div>
                  <div className={"outer"}>
                      <button className={"button"}><b>Задание 3</b></button>
                  </div>
                  <div className={"outer"}>
                      <button className={"button"}><b>Задание 4</b></button>
                  </div>
              </div>
              <div className={"counterNav"}>
                  <h1 className={"counterTitle"}> Счётчик</h1>
                  <label className={"counterValue"}>{count}</label>
                  <div className={"plusMinusDiv"}>
                      <button className={"valueButton"} onClick={handleDecrement}>-</button>
                      <button className={"valueButton"} onClick={handleIncrement}>+</button>
                  </div>
              </div>
          </main>
        </div>
      </body>
      </html>
  );
};


export default Home;
