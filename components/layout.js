import Meta from "../components/meta";
import Footer from "./footer";
export default function Layout({ children }) {
  return (
    <>
      <Meta />

      <div className="min-h-screen dark:bg-bgPrimary">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
