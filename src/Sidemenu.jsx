import './Sidemenu.css'
import logo from './assets/logo.png'


function Sidemenu() {
    return(
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
    </aside>
    );
}

export default Sidemenu