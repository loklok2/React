import { useEffect, useState, useRef } from "react";
import TailSelect from "../Ui/TailSelect";
import GallaryCard from "../10/GallaryCard";

export default function Festival() {
    const [tdata, setTdata] = useState();       //부산 축제 정보
    const [ops, setOps] = useState();           //축제 구정보
    const selRef = useRef();                   //옵션 선택
    const [cards, setCards] = useState()

    // data fetch
    const getFetchData = (url) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log("fetch", data)
                setTdata(data.getFestivalKr.item)
            })
            ;

        console.log("getFetchData", url)
    }

    //구선택
    const handleGuSelect = (e) => {
        e.preventDefault();
        const selectedGu = selRef.current.value;
        if (selectedGu) { 
            const filteredData = tdata.filter(item => item.GUGUN_NM === selectedGu);
            let tm = filteredData.map(item => (
                <GallaryCard 
                    key={item.UC_SEQ}
                    imgUrl={item.MAIN_IMG_NORMAL}
                    title={item.TITLE}
                    location={item.MAIN_PLACE}
                    Ttag={item.PLACE}
                />
            ));
            setCards(tm); 
        }
    }


    //컴포넌트 생성
    useEffect(() => {
        let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`
        url = url + `serviceKey=${process.env.REACT_APP_API_KEY}&pageNo=1&numOfRows=37&resultType=json`

        getFetchData(url)
    }, [])

    useEffect(() => {
        if (!tdata) return;
        console.log(tdata);
        let tm = tdata.map(item => item.GUGUN_NM);
        tm = [...new Set(tm)].sort();
        setOps(tm);
    }, [tdata]);

    useEffect(() => {
        if (!tdata) return
        console.log(tdata)
        let tm = tdata.map(item => <GallaryCard key={item.UC_SEQ}
            imgUrl={item.MAIN_IMG_NORMAL}
            title={item.TITLE}
            location={item.MAIN_PLACE}
            Ttag={item.PLACE}
        />)
        setCards(tm)
    }, [tdata])


    return (
        <div className="w-full h-full flex flex-col justify-start items-start">
            <form className="w-full flex justify-center items-center">
                <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 my-5">
                    <label htmlFor="op"
                        className="text-xl font-bold
                                inline-flex justify-center items-center mr-5
                               text-gray-900 dark:text-white">
                        🎐부산축제정보🎐
                    </label>
                    {ops && <TailSelect id="op"
                        selRef={selRef}
                        ops={ops}
                        initText="---부산 지역 구 선택 ---"
                        handleChange={handleGuSelect} />}
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
