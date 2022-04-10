import Layout from "../components/layout";
import { getAllCards } from "../lib/api";
import Head from "next/head";
import AxieCard from "../components/axie-card";
import Navbar from "../components/navbar";
import Search from "../components/search";

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
        <section>
          {/* {allCards.map((card) => (
            <AxieCard key={card._id} {...card} />
          ))} */}

          <Search allCards={allCards} />
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
