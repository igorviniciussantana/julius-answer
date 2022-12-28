import styles from "../styles/lista/lista.module.css";
import ListaItem from "./listaItem";

interface ListaProps {
  mensagem: string;
}

export default function Lista(props: ListaProps) {
  const alfabeto = "abcdefghijklmnopqrstuvwxyz";
  var counter = 0;

  var alfabetoArray = alfabeto.split("");
  var mensagemArray = props.mensagem.split("");

  return (
    <div className={styles.lista}>
      <h1 className={styles.title}>Todas as possibilidades</h1>
      {/* Executa uma função para letra do alfabeto */}
      {alfabetoArray.map((letra, index) => {
        var saida: string[] = [];
        counter++
        return (
          <div key={index} className={styles.itens}>
            <>
              {mensagemArray.map((letter) => {
                var retorna = alfabetoArray.indexOf(letter);
                var indice = retorna + counter;
                if (letter != " ") {
                  if (indice < 26) {
                    saida.push(alfabetoArray[indice]);
                  } else {
                    saida.push(alfabetoArray[indice - 26]);
                  }
                } else {
                  saida.push(" ");
                }
              })}

              <ListaItem id={index} saida={saida} />
            </>
          </div>
        );
      })}
    </div>
  );
}
