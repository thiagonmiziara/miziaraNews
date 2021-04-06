import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>15 de março de 2021</time>
            <strong>Creating a Monorepo with Lerpa & Yarn Workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet qui
              voluptate molestias.
            </p>
          </a>

          <a href="#">
            <time>25 de março de 2021</time>
            <strong>Creating a Monorepo with Lerpa & Yarn Workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet qui
              voluptate molestias.
            </p>
          </a>

          <a href="#">
            <time>31 de março de 2021</time>
            <strong>Creating a Monorepo with Lerpa & Yarn Workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet qui
              voluptate molestias.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
