import "./style.css"

function Box({children}) {
    return(
        <div className="content">
            {children}
        </div>
    )
}

export default Box;