import styles from "../styles/listaItem/listaitem.module.css";

export default function ListaItem(props) {
 
  return (
    <div>
        <span>{props.id + 1}</span>
        <span>{props.saida}</span>
    </div>
  );

}
