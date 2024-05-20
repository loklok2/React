import { useState, useEffect, useRef } from "react"
import GallaryCard from "./GallaryCard"
import ButtonC from '../Ui/ButtonC';

export default function Gallary() {
    const [gdata, setGdata] = useState()
    const [cards, setCards] = useState()
    const inRef = useRef()

    const handleOk = (e) => {
        e.preventDefault();
        console.log(inRef.current.value);
        if (inRef.current.value == '') {
            alert('키워드를 입력하세요.');
            inRef.current.focus();
            return;
        }

        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
        url = url + `serviceKey=uqd0qw3oWDymRkpNK7rd5ClUhIzNSnUhmnufIQyAKHORtRVEjpqgOh27ONA1fsL3a4RcH0YONs4y%2BWBuSj%2FMEw%3D%3D`;
        url = url + `&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`
        url = url + `&keyword=${encodeURI(inRef.current.value)}&_type=json`

        console.log(url)
        getFetchData(url)
    }
    const handleClear = (e) => {
        e.preventDefault();
        setGdata('')
        setCards('')
        inRef.current.value = ''
        inRef.current.focus()   // 초기화 후 커서
    }
    const getFetchData = (url) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setGdata(data.response.body.items.item)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        // let url = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=uqd0qw3oWDymRkpNK7rd5ClUhIzNSnUhmnufIQyAKHORtRVEjpqgOh27ONA1fsL3a4RcH0YONs4y%2BWBuSj%2FMEw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%EC%84%9C%EC%9A%B8&_type=json'
        // getFetchData(url)
    }, [])

    //gdata가 만들어질때
    useEffect(() => {
        if (!gdata) return
        console.log(gdata)
        let tm = gdata.map(item => <GallaryCard key={item.galContentId}
            imgUrl={item.galWebImageUrl}
            title={item.galTitle}
            location={item.galPhotographyLocation}
            Ttag={item.galSearchKeyword}
        />)
        setCards(tm)
    }, [gdata])
    

    return (
        <div className="w-full h-full flex flex-col justify-start items-start">
            <form className="w-full flex justify-center items-center">
                <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 my-5">
                    <div>
                        <input type="text" id="txt1"
                            ref={inRef}
                            className="bg-gray-50 border
                              border-gray-300
                              text-gray-900 
                              text-sm 
                              rounded-lg
                              focus:ring-blue-500
                              focus:border-blue-500 
                              block w-full p-2.5" />
                    </div>
                    <div>
                        <ButtonC caption="확인"
                            bcolor="red"
                            handleClick={handleOk} />
                        <ButtonC caption="취소"
                            bcolor="red"
                            handleClick={handleClear} />
                    </div>
                </div>
            </form>
            <div className="w-full grid grid-cols-1 
                        md:grid-cols-2 lg:grid-cols-3 
                        gap-2">
                {cards}
            </div>
        </div>
    )
}


///grid 중앙정렬 안될시 place-items-center
