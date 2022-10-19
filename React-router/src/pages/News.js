import { useState } from "react";
import axios from "axios";

const News = () => {
    const [data, setData] = useState('');
    const onClick = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=kr&apiKey=ffbbc82f694941a7b0e2d4f4515abcc7")
        .then(response => {
            setData(response.data);
        });
    };

    return (
        <div>
        <div>
            <button onClick={onClick}>서버 정보 불러오기</button>
        </div>
        {data && <textarea row={7} value={JSON.stringify(data, null, 2)} />}
        </div>
    
    );

};
export default News;