import {useState} from 'react';
import Head from 'next/head';
import Navbar_com from '../components/Navbar_com';
import Router from 'next/router';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import initFirebase from '../services/firebase';

initFirebase(); 

export default function Home() {
  return (
    <>
      <Head>
          <title>PMPS</title>
          <link rel="icon" href="/assets/webicon.ico" />
      </Head>
      <div className="homepage">
          <Navbar_com />
      </div>
    </>
  )}
