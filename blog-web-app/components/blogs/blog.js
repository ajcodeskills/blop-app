import Header from "../header/header";
import styles from "./blog.module.css";
function Blog({ data }) {
  return (
    <>
      <Header />
      <div className={styles.container}>{data}</div>
    </>
  );
}

export default Blog;
