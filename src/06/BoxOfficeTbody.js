import { AiFillCaretUp } from "react-icons/ai"; 
import { AiFillCaretDown } from "react-icons/ai";

export default function BoxOfficeTbody({ dailyList, setSelMv }) {
    // console.log(dailyList)
    const handleMvSelect = (mv) =>{
        // console.log("handleMvSelect", mv);
        setSelMv(mv);
    }
    const tags = dailyList.map(item =>
        <tr key={item.movieCd} 
            onClick={()=>{handleMvSelect(item)}}
                className="border-b border-neutral-200  hover:bg-neutral-100">
            <td className="whitespace-nowrap px-6 py-2 font-medium">{item.rank}</td>
            <td className="whitespace-nowrap px-6 py-2">{item.movieNm}</td>
            <td className="whitespace-nowrap px-6 py-2 text-right">{parseInt(item.salesAmt).toLocaleString()}</td>
            <td className="whitespace-nowrap px-6 py-2 text-right">{parseInt(item.audiCnt).toLocaleString()}</td>
            <td className="px-2 py-2 text-center justify-center items-center flex">
                <span>{item.rankInten > 0 ? <AiFillCaretUp className="text-red-400"/> :
                    item.rankInten < 0 ? <AiFillCaretDown className="text-blue-400"/> : '-'}
                </span>
                {parseInt(item.rankInten) !==0 && Math.abs(item.rankInten)}
            </td>
        </tr>
    );
    return (
        <tbody>
            {tags}
        </tbody>
    )
}
