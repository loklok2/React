import RecoilDiv3 from "./RecoilDiv3"
export default function RecoilDiv2({n, setN, n2}) {
    return (
        <div className="flex flex-col justify-center items-center 
                                                text-2xl font-bold">
            <div>
                RecoilDiv2 : n = {n}, n2 = {n2} 
            </div>
            <RecoilDiv3 n ={n} setN={setN} n2={n2}/>
        </div>
    )
}
