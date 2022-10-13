
const FormatDate = (date) => {
    return date.toLocaleDateString();
}

const Comment = (props) => {
    return(
        <div>
            <div>

                <img src={props.author.avatarUrl} alt={props.author.name}/>
                <div>{props.author.name}</div>
            </div>
            <div>{props.text}</div>
            <div>{FormatDate(props.date)}</div>

        </div>

    );
}

export default Comment;