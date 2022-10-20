import styles from "../styles/listaItem/listaitem.module.css";

export default function ListaItem(props) {
 
  return (
    <div className={styles.listaItem}>
        <span className={styles.id}>{props.id + 1}</span>
        <span className={styles.valor}>{props.saida}</span>
    </div>
  );

}
