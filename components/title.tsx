import styles from '../styles/title/title.module.css'

interface TitleProps{
  texto : string;
}

export default function Title(props : TitleProps) {
 
  return (
   <h1 className={styles.title}>{props.texto}</h1>
  );

}
