import styles from "./hero.module.scss";

const Hero = ({ title, description, children }) => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>{title}</h1>
    {description && <p className={styles.description}>{description}</p>}
    {children}
  </div>
);

export default Hero;
