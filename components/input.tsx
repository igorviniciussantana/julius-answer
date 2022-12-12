import styles from "../styles/input/input.module.css";

interface InputProps{
  placeholder: string;
  MudarMensagem: (e: string) => void;
}


export default function Input(props : InputProps) {
  function Mudar(e : React.ChangeEvent<HTMLInputElement>) {
    props.MudarMensagem(e.target.value);
  }

  return <input onChange={Mudar} placeholder={props.placeholder} className={styles.input}></input>;
}
