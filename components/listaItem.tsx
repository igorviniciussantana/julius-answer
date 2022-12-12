import styles from "../styles/listaItem/listaitem.module.css";

interface ListaItemProps{
  id: number;
  saida: string;
}


export default function ListaItem(props : ListaItemProps) {
 
  return (
    <div className={styles.listaItem}>
        <span className={styles.id}>{props.id + 1}</span>
        <span className={styles.valor}>{props.saida}</span>
    </div>
  );

}
