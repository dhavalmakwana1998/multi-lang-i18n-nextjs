import { route } from "next/dist/server/router";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home({ greetings }) {
  const router = useRouter();
  // const greetings =
  //   router.locale === "en"
  //     ? "Hello Friends"
  //     : router.locale === "hi"
  //     ? "हैलो मित्रों"
  //     : router.locale === "gu"
  //     ? "હેલો મિત્રો"
  //     : "none";
  return (
    <div>
      <main style={{ textAlign: "center" }}>
        <h1>{greetings}</h1>
        <div
          style={{
            paddingTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ margin: "0 4px" }}>
            <Link href={router.asPath} locale="en">
              English
            </Link>
          </span>
          <span style={{ margin: "0 4px" }}>
            <Link href={router.asPath} locale="hi">
              Hindi
            </Link>
          </span>
          <span style={{ margin: "0 4px" }}>
            <Link href={router.asPath} locale="gu">
              Gujarati
            </Link>
          </span>
        </div>
      </main>
    </div>
  );
}
export async function getStaticProps({ locale }) {
  const greetings =
    locale === "en"
      ? "Hello Friends"
      : locale === "hi"
      ? "हैलो मित्रों"
      : locale === "gu"
      ? "હેલો મિત્રો"
      : "none";
  return {
    props: { greetings }, // will be passed to the page component as props
  };
}
