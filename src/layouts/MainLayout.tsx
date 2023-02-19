import Head from 'next/head';
import React from 'react'
import { ReactElement } from "react";
import Footer from './Footer';
import Navbar from './Navbar';
type prop = {
    title?: string;
    children: ReactElement | ReactElement[];
  };
export default function MainLayout({children ,title="dRSTi"}:prop) {
  return (
    <>
    <Head>
        <title>{title}</title>
        <link rel="icon" href="/dristi_logo.png"></link>
    </Head>
     <Navbar/>
     <>{children}</>
     <Footer/> 
    </>
  )
}
