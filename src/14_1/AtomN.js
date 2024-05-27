import { atom, selector } from "recoil"

export const AtomN = atom({
    key : "AtomN",
    default: 10
    // default: parseInt(localStorage.get("n"))
})

export const AtomN2 = selector({
    key : "AtomN2",
    // get : ({get})=>{
    //     let tm = get(AtomN) % 2 === 0 ? "짝수" : "홀수"
    //     return tm
    // }
    get : ({get}) => {
    return get(AtomN)*2
    }
})