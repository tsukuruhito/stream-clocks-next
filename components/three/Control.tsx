import { ChangeEvent, Dispatch, SetStateAction } from "react"

type Props = {
    setColor: Dispatch<SetStateAction<number>>
}

const Control = (props:Props) => {
    const {setColor} = props;
    const handleColorChange = (e:ChangeEvent)=>{
        if(e.target instanceof HTMLInputElement){
            setColor(parseInt(e.target.value.replace("#","0x")));
        }
    }
    return (
        <div className="fixed top-2 right-2">
            <ul>
                <li><input type="color" onChange={(e)=>handleColorChange(e)}/></li>
            </ul>
        </div>
    )
}

export default Control