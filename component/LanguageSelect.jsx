import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function languageSelect() {
  const router = useRouter();
  return (
    <div
      style={{
        paddingTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          margin: "0 4px",
          padding: "4px",
          backgroundColor: router.locale == "en" ? "yellow" : "",
        }}
      >
        <Link href={router.asPath} locale="en">
          English
        </Link>
      </span>
      <span
        style={{
          margin: "0 4px",
          padding: "4px",
          backgroundColor: router.locale == "hi" ? "yellow" : "",
        }}
      >
        <Link href={router.asPath} locale="hi">
          हिन्दी
        </Link>
      </span>
      <span
        style={{
          margin: "0 4px",
          padding: "4px",
          backgroundColor: router.locale == "gu" ? "yellow" : "",
        }}
      >
        <Link href={router.asPath} locale="gu">
          ગુજરાતી
        </Link>
      </span>
    </div>
  );
}

export default languageSelect;
