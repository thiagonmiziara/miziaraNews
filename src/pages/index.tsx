import { GetStaticProps } from "next";
import Head from "next/head";

import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../service/stripe";

import styles from "./home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    amount: string;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentConteiner}>
        <section className={styles.hero}>
          <span>👏 Hey,welcome</span>
          <h1>
            News about
            <br /> the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>

          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}

export const getStaticProps : GetStaticProps = async () => {
  //api do stripe pegando o price
  const price = await stripe.prices.retrieve("price_1IaTw7HuvlvAUJetUtypmWDQ");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    //passa o tempo que o conteudo da pagina e revalidada
    revalidate: 60 * 60 * 24, //24horas
  };
};
