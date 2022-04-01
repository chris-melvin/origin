import Meta from "../components/meta";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Meta />

      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
