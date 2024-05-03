import '../App.css';
import './MyClock.css';
import style from './My.module.css'
function MyClockTime() {
    const now = new Date();
    const nowStt = now. toTimeString();
    const nowStr = now.toLocaleTimeString();
    const gubun = nowStr.substring(0, 2);
    const st = {color:"yellow", fontWeight:"bold"};
    // let divStyle;                            //리턴문에는 if문 사용불가
    // if (gubun == '오전') divStyle = "div1"      //연산자만 사용가능
    // else divStyle = "div2"
    return(
        <>
        {
            // gubun == "오전" ?<div className="div1">{nowStr}</div>
            //                 :<div className="div2">{nowStr}</div>
            //jsx의 삼항연산. 무조건 사용해야하니까 꼭 자주 써서 보자
            // <div className={gubun === "오전" ? "div1":"div2"}>{nowStr}</div>
            // inline 스타일은 카멜표기법으로 문자열로
            // <div style={{color:"yellow", fontWeight:"bold"}}>
            // <div style={st}>
            <div className={style.c1}>
                {nowStr}
            </div>
        }
        </>
    );  
}
export default MyClockTime;