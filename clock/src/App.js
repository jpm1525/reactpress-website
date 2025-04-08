import './App.css';

let time = (new Date()).toLocaleTimeString();

function updateTime(){
    time = (new Date()).toLocaleTimeString();
    document.getElementById("time").innerText = time;
}

setInterval(updateTime, 1000);

function App() {
    return (
        <div className="App">
            <div className="min-vh-100 row align-items-center justify-content-center">
                <div className="col-md-3 p-3 border bg-light">
                    <h1>Hello, world!</h1>
                    <h2>It is <span id ="time">{time}</span></h2>
                </div>
            </div>
        </div>
    );
}

export default App;
