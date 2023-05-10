import styles from './Scrollbar.module.css'

export default function Scrollbar ( props) {

    return (
        <div className={styles.wrapper}>
        <div className={styles.card}>
         <img className={ styles.rolex} src={props.img1} height={"auto"} width={"auto"}></img> 
         <h2 className={styles.heading2}> {props.heading2}</h2>
         <h4 className={styles.heading4}> {props.heading4}</h4>
         <p className={styles.paragraph}> {props.paragraph}</p>
         </div>
          
         <div className={styles.card}> <img className={ styles.rolex} src={props.img2} height={"auto"} width={"auto"}></img>  <h2 className={styles.heading1}>{props.heading2} </h2> <h4 className={styles.heading4}>{props.heading4} </h4> <p className={styles.paragraph}> {props.paragraph}</p></div>
        <div className={styles.card}>  <img className={ styles.rolex} src={props.img3} height={"auto"} width={"auto"}></img> <h2 className={styles.heading2}> {props.heading2}</h2> <h4  className={styles.heading4}> {props.heading4}</h4> <p className={styles.paragraph}> {props.paragraph}</p></div>
        <div className={styles.card}>  <img className={ styles.rolex} src={props.img4}height={"auto"} width={"auto"}></img> <h2 className={styles.heading3}> {props.heading2}</h2> <h4 className={styles.heading4}> {props.heading4}</h4> <p className={styles.paragraph}>{props.paragraph} </p></div>
        <div className={styles.card}>  <img className={ styles.rolex} src={props.img5}height={"auto"} width={"auto"}></img> <h2 className={styles.heading}>{props.heading2} </h2> <h4 className={styles.heading4}>{props.heading4} </h4> <p className={styles.paragraph}>{props.paragraph} </p></div>
        <div className={styles.card}>  <img className={ styles.rolex} src={props.img6} height={"auto"} width={"auto"}></img> <h2 className={styles.heading2}> {props.heading2}</h2> <h4 className={styles.heading4}> {props.heading4}</h4> <p className={styles.paragraph}> {props.paragraph}</p></div>
        </div>
    )
}