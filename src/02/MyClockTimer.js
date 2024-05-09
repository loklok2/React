import '../App.css';
import './MyClock.css';
import style from './My.module.css'
import { useState, useEffect } from 'react';


function MyClockTime() {    //1초간격으로 시간이 돌아야하게 만들자
    const [ctime, setCtime] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setCtime(new Date())
        }, 1000);
        return () => {
            clearInterval(tm);
        }
    }, [])


    return (
        <>
            {
                <div className={style.c1}>
                    {nowStr}
                </div>
            }
        </>
    );
}
export default MyClockTime;