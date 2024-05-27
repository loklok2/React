
import RecoilDiv2 from "./RecoilDiv2"
import { AtomN, AtomN2 } from "./AtomN"
import { useRecoilState, useRecoilValue } from "recoil"
import { useEffect } from "react"

export default function RecoilDiv1() {
    const [n,setN] = useRecoilState(AtomN)
    const n2 = useRecoilValue(AtomN2)

    useEffect(()=>{
        if(localStorage.getItem("n")) return
        setN(parseInt(localStorage.getItem("n")))
    },[])
    useEffect(()=>{
        localStorage.removeItem("n")
        setN(0)
    },[])

    return (
        <div className="flex flex-col justify-center items-center 
                                                text-2xl font-bold">
            <div>
                RecoilDiv1 : n ={n}, n2 = {n2}
            </div>
            <RecoilDiv2/>
        </div>
    )
}