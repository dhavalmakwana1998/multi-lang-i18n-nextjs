import { route } from "next/dist/server/router";
import LanguageSelect from "../component/LanguageSelect";

export default function Home({ greetings }) {
  return (
    <div>
      <h1>{greetings}</h1>
      <LanguageSelect />
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
