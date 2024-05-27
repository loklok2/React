import { AtomN } from "./AtomN"
import { useRecoilState } from "recoil"
import ButtonC from "../Ui/ButtonC"

export default function RecoilDiv3() {

    const [n, setN] = useRecoilState(AtomN)

    const handleUp = ()=>{
        setN(n + 1)
    }    
    const handleDown = () =>{
        setN(n - 1)
    }
    const handleSave = () =>{
        localStorage.setItem("n", n)
    }
    const handleDel = () =>{
        localStorage.removeItem("n")
    }
    
    return (
        <div className="flex flex-col justify-center items-center 
                                                text-2xl font-bold">
            <div>
                RecoilDiv3 : n ={n}
            </div>
            <div>
                <ButtonC caption="증가"
                bcolor="red"
                handleClick={handleUp}/>
                <ButtonC caption="감소"
                bcolor="red"
                handleClick={handleDown}/>
                <ButtonC caption="local저장"
                bcolor="red"
                handleClick={handleSave}/>
                <ButtonC caption="local삭제"
                bcolor="red"
                handleClick={handleDel}/>
            </div>

        </div>
    )
}
