import {useState} from 'react';
import Head from 'next/head';
import styles from '../styles/index.module.css';
import Navbar_com from '../components/Navbar_com';
import {firestore} from '../utils/firebase';

export default function Home() {
  const [search_data,set_search_data] = useState("");
  return (
    <>
      <Head>
          <title>PMPS</title>
          <link rel="icon" href="/assets/webicon.ico" />
      </Head>
      <div className={styles.homepage}>
          <Navbar_com set_search_data={set_search_data}>
            </Navbar_com>
          <div className={styles.productdiv}>
              <div className={styles.products}>

            </div>
          </div>
      </div>
    </>
  )}

// export async function getServerSideProps() {
//   const snapshot = await firestore.collection("Category").get();
//   let data = [];
//   snapshot.docs.forEach((doc) => {data.push(doc.data())});

//   return {props : {data}}
// }