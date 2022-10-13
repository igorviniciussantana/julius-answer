import styles from "../styles/lista/lista.module.css";

export default function ListaItem(props) {
 
  return (
    <div>
        <span>{props.id + 1}</span>
        <span>{props.saida}</span>
    </div>
  );

}
