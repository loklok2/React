import { useEffect, useState } from "react"
import RecoilDiv2 from "./RecoilDiv2"

export default function RecoilDiv1() {
    const [n, setN] = useState(2)
    const [n2, setN2] = useState(0)

    useEffect(()=>{
        setN2(n*2)
    },[n])

    return (
        <div className="flex flex-col justify-center items-center 
                                                text-2xl font-bold">
            <div>
                RecoilDiv1 : n = {n}, n2 = {n2}
            </div>
            <RecoilDiv2 n = {n} setN={setN} n2 = {n2} />
        </div>
    )
}