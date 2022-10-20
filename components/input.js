import styles from "../styles/listaItem/listaitem.module.css";

export default function Input(props) {
  function Mudar(e) {
    props.MudarMensagem(e.target.value);
  }

  return <input onChange={Mudar} placeholder={props.placeholder}></input>;
}
