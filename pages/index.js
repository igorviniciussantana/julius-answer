import Head from "next/head";
import styles from "../styles/Home.module.css";
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

      <main className={styles.main}>
        <Title texto="Julius Answer" />

        <Input
          placeholder="Insira sua mensagem"
          MudarMensagem={(ev) => setMensagem(ev)}
        />

        <Lista mensagem={mensagem} />
      </main>
    </div>
  );
}
