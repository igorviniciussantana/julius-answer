import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import Lista from "../components/lista";
import Title from "../components/title";
import Input from "../components/input";

export default function Home() {
  const [mensagem, setMensagem] = useState("");

  return (
    <div className={styles.container}>
      <Head>
        <title>Julius Answer</title>
        <meta name="description" content="Caesar's cipher decryptor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <Title texto="Julius Answer" />



        <Input
          placeholder="Insira sua mensagem"
          MudarMensagem={(ev) => setMensagem(ev)}
        />
        <Link href="https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar"><a href="https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar" target="_blank">O que é a Cifra de César?</a></Link>
        <Lista mensagem={mensagem} />

      </div>
    </div>
  );
}
