import React, { useMemo, useState } from "react";
import { useDrop } from "react-dnd";
import Layout from "../components/layout";
import { getAllCards } from "../lib/api";
import Head from "next/head";
import Navbar from "../components/navbar";
import TierCard from "../components/tiercard";
import List from "../components/list";
import { handleCard } from "../components/utils";
import filterFunction from "../components/filter";
import FilterUI from "../components/filterui";

export default function TierList({ allCards }) {
  const tier = ["Stier", "Atier", "Btier", "Ctier", "Dtier", "Etier", "Ftier"];
  const [allCardsList, setAllCardsList] = useState(allCards);
  const removeTier = "";
  const [search, setSearch] = useState("");
  const [part, setPart] = useState("");
  const [axieClass, setAxieClass] = useState("");
  const filteredCards = allCards.filter((card) =>
    card.title.toLowerCase().includes(search.toLowerCase())
  );
  const [{ isOver, result }, dropRef] = useDrop({
    accept: "card",
    drop: (item, monitor) => {
      handleCard(item, removeTier, allCards, setAllCardsList);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const memoizedFilterFunction = useMemo(
    () => filterFunction(filteredCards, part, axieClass),
    [filteredCards, part, axieClass]
  );
  return (
    <>
      <Layout>
        <Head>
          <title>Axie Origin | Tier List Maker</title>
        </Head>
        <Navbar />
        <h1 className="text-2xl text-center my-10 dark:text-white">
          Cards Tier List Maker
        </h1>
        {tier.map((cardTier) => (
          <List
            key={cardTier}
            tier={cardTier}
            list={allCardsList}
            setList={setAllCardsList}
          />
        ))}
        <section>
          <FilterUI
            search={search}
            part={part}
            axieClass={axieClass}
            setSearch={setSearch}
            setPart={setPart}
            setAxieClass={setAxieClass}
          />
        </section>
        <section className="grid grid-cols-list  items-stretch" ref={dropRef}>
          {memoizedFilterFunction
            .filter((e) => e.tier === null || e.tier === "")
            .map((card) => (
              <div key={card._id} className="mx-auto">
                <TierCard draggable {...card} />
              </div>
            ))}
          <div className="h-40"></div>
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
