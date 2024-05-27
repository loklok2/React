import { useEffect, useState } from "react"

export default function Rest() {
    const [tdata, setTdata] = useState([])
    const [tags, setTags] = useState()

    const getFetch = async (url) =>{
        const resp = await fetch(url)
        const data = await resp.json()
       setTdata(data)    
    }
    

    useEffect(()=>{
        console.log(tdata)
    },[tdata])

    useEffect(()=>{
        if (!tdata) return;
        let tm = tdata.map(item=><tr>
                            <td className="px-6 py-3">{item.id}</td>
                            <td className="px-6 py-3">{item.title}</td>
                            <td className="px-6 py-3">{item.author}</td>
                            </tr>)
        setTags(tm)
    },[])
    
    useEffect(()=>{
        let url = 'http://localhost:3005/posts'
        getFetch(url)
    },[])
  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      Rest
      <table className="w-11/12 text-left text-sm font-light text-surface">
        <thead className="border-b border-neutral-900 font-medium">
          <tr className="bg-red-300 text-white font-bold text-center">
            <th scope="col" className="px-6 py-3">id</th>
            <th scope="col" className="px-6 py-3">title</th>
            <th scope="col" className="px-6 py-3">author</th>
          </tr>
        </thead>
        <tbody>
          {tags}
        </tbody>
        </table>
    </div>
  )
}
