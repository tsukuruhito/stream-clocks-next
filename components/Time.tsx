import { useState } from "react";

const Time = (props:any) => {
    const [date, setDate] = useState(new Date().toLocaleDateString());
    const [time, setTime] = useState("");
    const [day, setDay] = useState(new Date().toLocaleString("en-US", { weekday: "long" }));

    setInterval(()=>{
        const datetime = new Date().toLocaleTimeString().slice(0, -3);
        setDate(new Date().toLocaleDateString());
        setDay(new Date().toLocaleString("en-US", { weekday: "long" }));
        if(datetime.length===4){
            setTime("0"+datetime);
        }else{
            setTime(datetime);
        }
    },1000);

    const setClass = () => {
        if(props.selectedType==="neon"){
            return `${props.selectedType} ${props.neon}`
        }else if(props.selectedType==="geometory"){
            return `${props.selectedType} ${props.geometory}`
        }else if(props.selectedType==="apex"){
            return `${props.selectedType} ${props.apex}`
        }else if(props.selectedType==="retro"){
            return `${props.selectedType} ${props.retro}`
        }else{
            return `${props.selectedType}`
        }
    }
    
    return(
        <div className={setClass()}>
            <div className="date_body"
                {...props.selectedType==="noframe" && {style:{color:props.color}}}
            >
                <div className="date_day">{day}</div>
                <div className="date_date">{date}</div>
                <div className="date_time">{time}</div>
            </div>
        </div>
    )
}

export default Time;