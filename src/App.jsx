import './App.css'
import {useState} from "react"
import {diffWords} from 'diff';
import Sidemenu from './Sidemenu.jsx'
import { IoSwapHorizontal } from "react-icons/io5";

function App() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [move, setMove] = useState([])
  const [loadingScreen, setLoadingScreen] = useState(false)

  function Comparing() {
    const diff = diffWords(text1, text2)
    setMove(diff);
    setLoadingScreen(true)
    
    setTimeout(() => {
      const diff = diffWords(text1, text2)
      setMove(diff)
      setLoadingScreen(false)
    }, 1000)
  }

  function Swap() {
    const temp = text1
    setText1(text2)
    setText2(temp)
    setMove([])
  }

  function Newpage() {
    setText1("")
    setText2("")
    setMove([])
  }

  const [open, setOpen] = useState(false)

  return (
    <>
    <div className='textapp'>
      <Sidemenu isOpen={open}/>
      <main>
        <div className='burger' onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className='head-bar'>
          <div className='lang-bar'>
            <select name='language' className='lang'>
              <option value="geo">ქართული</option>
              <option value="eng">English</option>
            </select>
            <label className='format'>
              <input type="checkbox" /> 
              ფორმატის შენარჩუნება
            </label>
          </div>
          <button className={`new-page ${move.length > 0 ? 'active' : ''}`} onClick={Newpage}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="9"/>
              <line x1="12" y1="7" x2="12" y2="17"/>
              <line x1="7" y1="12" x2="17" y2="12"/>
            </svg>
            ახლის გახსნა
          </button>
        </div>
        {
          loadingScreen ? (
            <div className='loading'>
              <div className='spin'>
                <div className='spin-circle'></div>
              </div>
              <p>Converting... Thank you For your patience</p>
            </div>
          ) : (
                    <div className='texteditor'>
          <div className='textcompare'>
            {
              move.length > 0 ? ( 
                move.map((part, i) => part.added ? null : (
                  <span key={i} className={part.removed ? "deleted" : "unchanged"}>{part.value}</span>
                ))
              ) : (
                    <textarea value={text1} name="compare" placeholder='დაიწყე წერა...' onChange={e => setText1(e.target.value)}></textarea>
              )
            }
          </div>
          <div className='swap' onClick={Swap}><IoSwapHorizontal/></div>
          <div className='textcompare'>
            {
              move.length > 0 ? (
                move.map((part, i) => part.removed ? null : (
                  <span key={i} className={part.added ? "added" : "unchanged"}>{part.value}</span>
                ))
              ) : (
                <textarea value={text2} name="compare" placeholder='დაიწყე წერა...' onChange={e => setText2(e.target.value)}></textarea>
              )
            }
          </div>
        </div>
          )
        }  
        <div className='divbutton'>
            <button className={`button-compare ${text1 && text2 ? 'active' : ''}`} onClick={Comparing}>შედარება</button>
        </div>
      </main>
    </div>
    </>
  );
}

export default App
