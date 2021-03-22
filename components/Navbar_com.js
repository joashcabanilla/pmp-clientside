import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Rb from 'react-bootstrap';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

export default function Navbar_com({ set_search_data }) {

    const search = (e) => {
        set_search_data(e.target.value);
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            search();
        }
    }

    return (
        <div className={styles.maindiv}>    
            <div className={styles.div1}>
                <img width="60rem" height="60rem" src="/assets/navlogo.png" className={styles.logo} />
                <Link href="/" passHref >
                <a className={styles.title}>Pharmacy Management Process System</a>
                </Link>
            </div>
            <div className={styles.div2}>
                <div className={styles.searchdiv}>
                    <input type="text" placeholder="Search" onChange={search} onKeyDown={handleKeyPress} className={styles.searchbox}  />
                    <button onClick={search} className={styles.searchbutton}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    </button>
                </div>
                    <select className={styles.category}>
                        <option>All</option>
                        <option>Dermatological</option>
                    </select>
                <div className={styles.account}>
                    <img className={styles.accountbtn} width="40rem" height="40rem" src="/assets/account.png"/>
                </div>
            </div>
        </div>
    )}
