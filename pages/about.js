import Layout from "../components/layout";
import Head from "next/head";
import Navbar from "../components/navbar";
import guide from "../shared/guide.json";
import Table from "../components/table";

export default function Guide() {
  return (
    <>
      <Layout>
        <Head>
          <title>Axie Origin - About</title>
        </Head>
        <Navbar />
        <h1 className="text-2xl text-center my-10">About Page</h1>
        <section>
          <p className="text-center">
            A community made card explorer and guide. UI improvements soon.{" "}
          </p>
        </section>
      </Layout>
    </>
  );
}
