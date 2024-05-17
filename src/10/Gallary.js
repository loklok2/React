import { useState, useEffect } from "react"
import GallaryCard from "./GallaryCard"

export default function Gallary() {
    const [gdata, setGdata] = useState()
    const [cards, setCards] = useState()


    const getFetchData = (url)=>{
        fetch(url)
        .then(resp => resp.json())
        .then(data =>{
            console.log(data)
            setGdata(data.response.body.items.item)
        })
        .catch(err => console.log(err))
    }
    useEffect(()=>{
        let url ='https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=uqd0qw3oWDymRkpNK7rd5ClUhIzNSnUhmnufIQyAKHORtRVEjpqgOh27ONA1fsL3a4RcH0YONs4y%2BWBuSj%2FMEw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%EC%84%9C%EC%9A%B8&_type=json'
        getFetchData(url)
    },[])

    //gdata가 만들어질때
    useEffect(()=>{
        if(!gdata) return
        console.log(gdata)
        let tm = gdata.map(item=> <GallaryCard  key={item.galContentId}
                                                imgUrl={item.galWebImageUrl}
                                                title={item.galTitle}
                                             location={item.galPhotographyLocation}
                                                Ttag={item.galSearchKeyword}
                            />)
        setCards(tm)
    },[gdata])

  return (
    <div className="w-full flex flex-col justify-start items-start ">
        <div className="w-full flex justify-center items-center my-5 h-40">
            입력
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">  
        {gdata && cards}
        </div>
    </div>
  )
}


///grid 중앙정렬 안될시 place-items-center
