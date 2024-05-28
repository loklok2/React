import { useEffect, useState, useRef } from "react"
import TailInput from "../Ui/TailInput"
import ButtonC from "../Ui/ButtonC"

export default function Rest() {
  const [tdata, setTdata] = useState([])            
  const [tags, setTags] = useState()                  
  const [isUpdate, setIsUpdate] = useState(false)
  const [isUpdateId, setIsUpdateId] = useState()

  const txt1Ref = useRef();
  const txt2Ref = useRef();


  const jsonUpdate = async(item) => {
    console.log("item",item)
    txt1Ref.current.value = item.title;
    txt2Ref.current.value = item.author;
    setIsUpdate(true)
    setIsUpdateId(item.id)
  }

  const getFetch = async (url) => {
    const resp = await fetch(url)
    const data = await resp.json()
    setTdata(data)
  }

  const jsonUpdate2 = async() => {
    console.log('jsonUpdate2', isUpdateId)
    const postUpDate = {
      id : isUpdateId,
      title: txt1Ref.current.value,
      author: txt2Ref.current.value
    }
    if (txt1Ref.current.value === "") {
      alert("제목을 입력하세요")
      txt1Ref.current.focus();
      return
    }
    if (txt2Ref.current.value === "") {
      alert("제목을 입력하세요")
      txt2Ref.current.focus();
      return
    }
    let url = `http://localhost:3005/posts/${isUpdateId}`;
    const resp = await fetch(url, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postUpDate)
    })

    const data = await resp.json();
    console.log(data)
    setTdata(tdata.map(item=>item.id === isUpdateId ? data : item))
    txt1Ref.current.value = "";
    txt2Ref.current.value = "";
    setIsUpdate(false)
    setIsUpdateId("")
    
  }

  const jsonDelete = async (id) => {
    let url = `http://localhost:3005/posts/${id}`
    await fetch(url, {
      method: 'DELETE'
    })
    setTdata(tdata.filter(item => item.id !== id));
  }

  const jsonPost = async () => {
    console.log("Post")
    if (txt1Ref.current.value === "") {
      alert("제목을 입력하세요")
      txt1Ref.current.focus();
      return
    }
    if (txt2Ref.current.value === "") {
      alert("제목을 입력하세요")
      txt2Ref.current.focus();
      return
    }
    const postData = {
      title: txt1Ref.current.value,
      author: txt2Ref.current.value
    }
    let url = 'http://localhost:3005/posts';

    const resp = await fetch(url, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData)
    })

    const data = await resp.json();
    console.log(data)
    setTdata([...tdata, data])

  }

  const handleOk = () => {
    if (isUpdate) jsonUpdate2();
    else jsonPost();
  }

  useEffect(() => {
    console.log(tdata)
  }, [tdata])

  useEffect(() => {
    if (!tdata) return;
    let tm = tdata.map(item => <tr className='text-center border-b border-red-300'
      key={item.id}>
      {/* <td className="px-6 py-3">{item.id}</td> */}
      <td className="px-6 py-3">{item.title}</td>
      <td className="px-6 py-3">{item.author}</td>
      <td><a href="#" className="inline-flex hover:bg-red-950 hover:text-white" onClick={() => jsonDelete(item.id)}>[삭제]</a></td>
      <td><a href="#" className="inline-flex hover:bg-orange-500 hover:text-white" onClick={() => jsonUpdate(item)}>[수정]</a></td>
    </tr>)
    setTags(tm)
  }, [tdata])

  useEffect(() => {
    let url = 'http://localhost:3005/posts'
    getFetch(url)
  }, [])

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-7 
                      bg-slate-100
                      text-center mb-5">

        <label htmlFor="txt1" className="my-2">제목</label>
        <div className="flex col-span-2">
          <TailInput id="txt1"
            type="text"
            inRef={txt1Ref} />
        </div>
        <label htmlFor="txt2" className="my-2">작성자</label>
        <div className="flex col-span-2 w-full">
          <TailInput id="txt2"
            type="text"
            inRef={txt2Ref} />
        </div>
        <ButtonC
          caption={isUpdate ? "수정" : "입력"}
          bcolor="blue"
          handleClick={handleOk} />
      </div>
      <table className="w-11/12 text-left text-sm font-light text-surface">
        <thead className="border-b border-neutral-900 font-medium">
          <tr className="bg-red-300 text-black font-bold text-center">
            {/* <th scope="col" className="px-6 py-3">id</th> */}
            <th scope="col" className="px-6 py-3">제목</th>
            <th scope="col" className="px-6 py-3">작성자</th>
            <th scope="col" className="px-6 py-3">삭제</th>
            <th scope="col" className="px-6 py-3">편집</th>
          </tr>
        </thead>
        <tbody>
          {tags}
        </tbody>
      </table>
    </div>
  )
}
