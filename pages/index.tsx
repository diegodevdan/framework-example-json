import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {NavigationLayout} from "../layouts";
import {GetServerSideProps} from "next";

interface HomeProps {
    Tekapp: any
}

export default function Home({Tekapp}:HomeProps) {

  return (
      <NavigationLayout>
        <h1>ajua</h1>
      </NavigationLayout>
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const resp = await fetch(`http://localhost:3000/api/tekapp`);
    const Tekapp = await resp.json();

    return{
        props: {
            Tekapp
        }
    }
}
