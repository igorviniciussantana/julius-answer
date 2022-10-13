import styles from '../styles/title/title.module.css'

export default function Title(props) {
 
  return (
   <h1 className={styles.title}>{props.texto}</h1>
  );

}
