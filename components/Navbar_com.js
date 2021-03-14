import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as Rb from 'react-bootstrap'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar_com() {

    const search = () => {
        console.log('search');
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            search();
        }
    }

    return (
        <div className={styles.maindiv}>
            <div className={styles.div1}>
                <img width="50rem" height="50rem" src="/assets/logo.png" className={styles.logo} />
                <h1 className={styles.title}>Pharmacy Management Process System</h1>
            </div>
            <div className={styles.div2}>
                <div className={styles.searchdiv}>
                    <input type="text" placeholder="Search" onKeyDown={handleKeyPress} className={styles.searchbox}  />
                    <button onClick={search} className={styles.searchbutton}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    </button>
                </div>
                <Link href="/" passHref >
                <a className={styles.homelink}>Home</a> 
                </Link>
                <div className={styles.account}>
                    <img width="30rem" height="30rem" src="/assets/user1.png"/>
                    <Rb.Dropdown>
                    <Rb.Dropdown.Toggle 
                    variant="btn-sm" 
                    id="dropdown-basic">
                    </Rb.Dropdown.Toggle>
                    <Rb.Dropdown.Menu style={{backgroundColor:'white'}}>
                    <Link href="/signin" passHref>
                        <Rb.Dropdown.Item as="button">Log In</Rb.Dropdown.Item>
                    </Link>
                    <Link href="/signup" passHref>
                        <Rb.Dropdown.Item as="button">Create Account</Rb.Dropdown.Item>
                    </Link>
                    </Rb.Dropdown.Menu>
                    </Rb.Dropdown>
                </div>
            </div>
        </div>
    )}
