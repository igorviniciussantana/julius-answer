import styles from "../styles/lista/lista.module.css";
import ListaItem from "./listaItem";

export default function Lista(props) {
  const alfabeto = "abcdefghijklmnopqrstuvwxyz";
  var counter = 1;

  var alfabetoArray = alfabeto.split("");
  var mensagemArray = props.mensagem.split("");


  return (
    <>
      <h1>All Possibilities</h1>

      {alfabetoArray.map((letra,index) => {
        var saida = [];
        return (
          <div>
            {mensagemArray.map((letter) => {
              var retorna = alfabetoArray.indexOf(letter);
              var indice = retorna + counter;
if(letter != ' '){
              if (indice < 26) {
                saida.push(alfabetoArray[indice]);
              } else {
                saida.push(alfabetoArray[indice - 26]);
              }}else{

                saida.push(' ');

              }
            })}
           
           <ListaItem id={index} saida={saida} key={index} />
            <span className={styles.none}>{counter++}</span>
          </div>
        )
      }
      
      )}
    </>
  );

}
