
const User = (props) => {
    return (
        <div>
            <b>{props.user.userName}</b> <span>{props.user.email}</span>
        </div>
    );

}

const ArrayList = () => {
        
        const users = [
        {
            id : 100,
            userName : "정찬호",
            email : "chanho@gmail.com"
        },
        {
            id : 200,
            userName : "정은종",
            email : "silverbell@gmail.com"
        }, 
        {
            id : 300,
            userName : "김도연",
            email : "doyeon2@gmail.com"
        }
    ];
    return (
        <div>
            {/* <div>
            <b>{users[0].userName}</b> <span>{users[0].email}</span>
            </div>
            <div>
            <b>{users[1].userName}</b> <span>{users[1].email}</span>
            </div>
            <div>
            <b>{users[2].userName}</b> <span>{users[2].email}</span>
            </div> */}
            
            {/* props를  넘겨주는 부모 컴포넌트 */}
            <User user={users[1]} />
            <User user={users[0]} /> 
            <User user={users[2]} />

        </div>
    )
}
export default ArrayList;