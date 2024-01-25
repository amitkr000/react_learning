import asteriod_img from "../assets/Asteroid_Transparent.png";
import styles from "./Cards.module.css";

function Card() {
  return (
    <div className={styles.card}>
      <img
        className={styles.card_img}
        src={asteriod_img}
        alt="Asteroid image"
      ></img>
      <hr></hr>
      <h2 className={styles.card_title}>Asteriod Material</h2>
      <p className={styles.card_text}>
        This is a Procedurally created material in blender using its built in
        nodes feature.
      </p>
    </div>
  );
}

export default Card;
