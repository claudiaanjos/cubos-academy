function Card(props) {
    console.log(props.children)
    return (
        < div className="card">
            <img className="card-close" src="./assets/close.svg" alt="" />
            <img className="card-cookie" src={"./assets/" + props.img + ".svg"} alt="" />
            <p className="card-text">{props.children}</p>
            <button className={"card-btn " + (props.type === "cookie" ? " btn-cookie " : " btn-alert ")}>{props.btn}</button>
        </div>
    );
}

function App() {
    return (
        <>
            <Card img="cookie" type="cookie" btn="Tudo bem!">Nós utilizamos cookies para melhorar nossa UX, analytics e marketing.</Card>
            <Card img="alert" type="alert" btn="Extender login">Você será deslogado imediatamente!</Card>
        </>
    );
}

export default App;