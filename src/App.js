import './App.css';
import Strip from "./components/strip/Strip";
import ProgramFrame from "./components/programFrame/ProgramFrame";
import {useEffect, useState} from "react";
import ExampleField from "./components/exampleField/ExampleField";

function App() {
    const [example, setExample] = useState('')
    const [command, setCommand] = useState('')
    const [error, setError] = useState(null)

    const reset = () => {
        setCommand('')
        setError('')
        setExample('')
    }
    const setCommandHandler = (code) => {
        if(!example) {
            setCommand('')
            setError('Enter example at first')
            return
        }
        setCommand(code)
        setError(null)
    }
    let [val, setVal] = useState(0)

    const speed = 400

    useEffect(()=>{
        if(example) {
            if(val < 0 || val > example.length - 1) {
                setVal(0)
                setError('your code is incorrect, Neo')
            }
            setError('')
        }
    },[val, example])

    const timer = ms => new Promise(res => setTimeout(res, ms))

    async function engineGo () { // We need to wrap the loop into an async function for this to work
        if(command.match(/^[rRsSlL]+$/)) {
            for (let i = 0; i < command.length; i++) {
                if (command[i].toUpperCase() === 'R') {
                    setVal(val = val + 1)
                }
                if (command[i].toUpperCase() === 'L') {
                    setVal(val = val - 1)
                }
                if (command[i].toUpperCase() === 'S') {
                    setVal(val)
                }
                await timer(speed); // then the created Promise can be awaited
            }
        } else if (!command.match(/^[rRsSlL]+$/)) {
            setError('wrong command')
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className='errorContainer'>
                    {error && <div className='error'>{error}</div>}
                </div>

                <div>
                    <ExampleField setExample={setExample}/>
                    <Strip example={example} val={val} setVal={setVal}/>
                    <ProgramFrame setError={setError} example={example} engineGo={engineGo} setCommand={setCommandHandler}/>
                </div>
                <button className='reset' onClick={reset}>reset machine</button>
                <div className='description'>
                    <p style={{color: 'green'}}>To write the commands use:</p>
                    <p style={{color: 'green'}}>'r' to move one step right,</p>
                    <p style={{color: 'green'}}>'l' to move one step left,</p>
                    <p style={{color: 'green'}}>'s' to stop the head of machine.</p>
                </div>
            </header>

        </div>
    );
}

export default App;
