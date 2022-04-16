import React, { useState } from "react";
import { useDrop } from "react-dnd";
import Layout from "../components/layout";
import { getAllCards } from "../lib/api";
import Head from "next/head";
import Navbar from "../components/navbar";
import TierCard from "../components/tiercard";
import List from "../components/list";
import { handleCard } from "../components/utils";

export default function TierList({ allCards }) {
  const tier = ["Stier", "Atier", "Btier", "Ctier", "Dtier", "Ftier"];
  const [list, setList] = useState(allCards);
  const removeTier = "";
  const [{ isOver, result }, dropRef] = useDrop({
    accept: "card",
    drop: (item, monitor) => {
      handleCard(item, removeTier, list, setList);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <>
      <Layout>
        <Head>
          <title>Axie Origin</title>
        </Head>
        <Navbar />
        <h1 className="text-2xl text-center my-10">
          Origin Cards Tier List Maker
        </h1>
        {tier.map((cardTier) => (
          <List key={cardTier} tier={cardTier} list={list} setList={setList} />
        ))}

        <section
          className="grid sm:grid-cols-list  items-stretch"
          ref={dropRef}
        >
          {list
            .filter((e) => e.tier === null)
            .map((card) => (
              <TierCard draggable key={card._id} {...card} />
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
