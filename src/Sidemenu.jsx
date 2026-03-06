import './Sidemenu.css'
import logo from './assets/logo.png'
import {use, useState} from 'react'




function Sidemenu() {
    const [open, setOpen] = useState(false)
    return(
        <>
        <aside className='sidemenu'>
        <div className='logo'>
            <img src={logo} alt='enagram-logo'></img>
            <p className='logo-name'>ENAGRAM</p>
        </div>
        <nav>
            <ul>
                <li>მართლმწერი</li>
                <li className='text-compare'>ტექსტის შედარება</li>
                <li>ხმა → ტექსტი</li>
                <li>ტექსტი → ხმა</li>
                <li>PDF კონვერტაცია</li>
            </ul>
        </nav>
        <div className='account'>
            <div className='account-avatar'>ნ</div>
            <p className='name'>ნიკოლოზ ნასყიდაშვილი</p>
            <div className='dots'>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </aside>
    </>
    );
}

export default Sidemenu