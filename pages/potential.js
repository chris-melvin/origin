import Layout from "../components/layout";
import Head from "next/head";
import Navbar from "../components/navbar";
import guide from "../shared/guide.json";
import Table from "../components/table";

export default function Guide({ filecontent }) {
  console.log(filecontent);
  return (
    <>
      <Layout>
        <Head>
          <title>Axie Origin - Potential Points</title>
        </Head>
        <Navbar />
        <h1 className="text-2xl text-center my-10">Potential Points</h1>
        <section>
          <h1 className="text-6xl text-center">Coming Soon</h1>
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
