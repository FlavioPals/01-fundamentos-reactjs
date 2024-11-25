function Post(props) {
    console.log(props)
    return (
        <div>
        <strong>{props.authror}</strong>
        <p>{props.content}</p>
        </div>
    )
}

export default Post