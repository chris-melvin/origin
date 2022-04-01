import Layout from "../components/layout";
import { getAllCards } from "../lib/api";
import Head from "next/head";
import AxieCard from "../components/axie-card";
import Navbar from "../components/navbar";

export default function Index({ allCards }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Axie Origin</title>
        </Head>
        <Navbar />
        <h1 className="text-2xl text-center my-10">
          Axie Origin Card Explorer
        </h1>
        <section className="grid sm:grid-cols-autofit gap-2 items-stretch">
          {allCards.map((card) => (
            <AxieCard key={card._id} {...card} />
          ))}
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allCards = await getAllCards();
  return {
    props: { allCards },
    revalidate: 1,
  };
}
