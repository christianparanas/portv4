import styles from "./pageheader.module.scss";

const PageHeader = ({ title, description, children, compact }) => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>{title}</h1>
    {description && <p className={styles.description}>{description}</p>}
    {children}
  </div>
);

export default PageHeader;
