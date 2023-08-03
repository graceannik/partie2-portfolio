import '.././css/info.css'

const Info = (props) => {
    console.log(props)

    return <div className="info">
        {props.text}
        {props.children}
    </div>
}

export default Info;
