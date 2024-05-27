
import ButtonC from "../Ui/ButtonC"

export default function RecoilDiv3({n, setN, n2}) {

    const handleUp = ()=>{
        setN(n +1)
    }    
    const handleDown = () =>{
        setN(n -1)
    }

 
    return (
        <div className="flex flex-col justify-center items-center 
                                                text-2xl font-bold">
            <div>
                RecoilDiv3 : n = {n}, n2 = {n2}
            </div>
            <div>
                <ButtonC caption="증가"
                bcolor="red"
                handleClick={handleUp}/>
                <ButtonC caption="감소"
                bcolor="red"
                handleClick={handleDown}/>
            </div>

        </div>
    )
}
