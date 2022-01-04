import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main style={{ textAlign: "center" }}>{children}</main>
      <Footer />
    </>
  );
}
