import cimg from './clock.png';
import MyClockTime from './MyClockTime';

function MyClockImg() {

    return(
        <header className="App-header">
            <img src={cimg} className='App-logo'alt='시계'/>
            <MyClockTime/>
        </header>
    );
}

export default MyClockImg