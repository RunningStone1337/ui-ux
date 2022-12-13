import Link from "next/link";

const Button1 = () => {
    return (
        <html>
        <head >
            <title>Переход по кнопке 1</title>
        </head>
            <div className={"header"}>
                <h1 className={"nameTitle"}>Переход по 1 кнопке</h1>
            </div>
            <Link href="/">
                <button className={"buttonB1"} ><b>Назад</b></button>
            </Link>
        </html>

    );
}
export default Button1;