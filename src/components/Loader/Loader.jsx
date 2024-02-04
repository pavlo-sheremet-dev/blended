import style from './Loader.module.css'
import ClipLoader from "react-spinners/ClipLoader";

export const Loader = () => {

  return <div className={style.backdrop}><ClipLoader/></div>;
};
