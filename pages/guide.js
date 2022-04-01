import Layout from "../components/layout";
import Head from "next/head";
import Navbar from "../components/navbar";
import guide from "../shared/guide.json";
import Table from "../components/table";

export default function Guide({ filecontent }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Axie Origin - Guides</title>
        </Head>
        <Navbar />
        <h1 className="text-2xl text-center my-10">Guides</h1>
        <section>
          <Table content={filecontent.debuff} title="Debuffs" />
          <Table content={filecontent.buff} title="Buffs" />
          <Table content={filecontent.curse} title="Curse" />
          <Table content={filecontent.summon} title="Summon" />
          <Table content={filecontent.toolcards} title="Tool Cards" />
          <Table content={filecontent.keywords} title="Keywords" />
        </section>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const filecontent = await guide;
  return {
    props: { filecontent },
  };
};
