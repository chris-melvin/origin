import Layout from "../components/layout";
import Head from "next/head";
import Navbar from "../components/navbar";

export default function Guide() {
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
