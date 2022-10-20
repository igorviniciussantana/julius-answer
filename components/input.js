import styles from "../styles/input/input.module.css";

export default function Input(props) {
  function Mudar(e) {
    props.MudarMensagem(e.target.value);
  }

  return <input onChange={Mudar} placeholder={props.placeholder} className={styles.input}></input>;
}
