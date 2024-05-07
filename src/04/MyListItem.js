export default function MyListItem({title, imgUrl, content}) {
    console.log(imgUrl)
  return (
    <div className="flex w-full h-full justify-center items-start p-2 bg-red-300">
        <div className=" flex w-1/3 m-5">
            <img src={imgUrl} alt={title}/>
        </div>
        <div className=" flex flex-col w-2/3 m-2 p-2">
            <div>
            <h1 className="text-xl font-bold">{title}</h1>
            </div>
            <div>
            {content}
            </div>
            <div className="flex justify-end items-center">
                <span>❤</span>
                <span className="inline-flex mx-2">좋아요</span>
                <span className="text-xl font-bold">0</span>
            </div>
        </div>    
    </div>
  )
}
