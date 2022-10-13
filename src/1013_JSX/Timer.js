// 시계 만들기

import { useState } from "react"

const Clock = () => {
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date());
    }

    // 시간 흘러가게 하는 코드(1초마다 한번씩 tick 함수 호출)
    setInterval(tick, 1000);


    return (
        <div>
            <h1> ＜현재 시간 표시＞</h1>
            <h2> ▶ 현재 시간 : {date.toLocaleTimeString()}</h2>
        </div>
    )
}
export default Clock;