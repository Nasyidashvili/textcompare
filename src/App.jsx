import './App.css'
import {useState} from "react"
import {diffWords} from 'diff';
import Sidemenu from './Sidemenu.jsx'
import { IoSwapHorizontal } from "react-icons/io5";

function App() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [move, setMove] = useState([])

  function Comparing() {
      const diff = diffWords(text1, text2)
      setMove(diff);
  }

  return (
    <>
    <div className='textapp'>
      <Sidemenu/>
      <main>
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
          <button className='new-page'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="9"/>
              <line x1="12" y1="7" x2="12" y2="17"/>
              <line x1="7" y1="12" x2="17" y2="12"/>
            </svg>
            ახლის გახსნა
          </button>
        </div>
        <div className='texteditor'>
          <textarea name="compare" className='textcompare' placeholder='დაიწყე წერა...' onChange={e => setText1(e.target.value)}></textarea>
          <div className='swap'><IoSwapHorizontal/></div>
          <textarea name="compare" className='textcompare' placeholder='დაიწყე წერა...' onChange={e => setText2(e.target.value)}></textarea>
        </div>
        
        <div className='divbutton'>
            <button className='button-compare' onClick={Comparing}>შედარება</button>
        </div>

        <div className='switched'>
          {move.map((number, index) => (
            <span
              key={index} className={
                number.added ? "added " :
                number.removed ? "deleted" : "unchanged"
              }>{number.value}</span>
          ))} 
        </div>
      </main>
    </div>
    </>
  );
}

export default App
