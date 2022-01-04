import React from "react";
import useTranslation from "next-translate/useTranslation";

function Footer() {
  const { t, lang } = useTranslation("common");
  return (
    <>
      <div className="footer">
        <h4>
          {t("copyright")} <span style={{ color: "red" }}>&#10084;</span> Dhaval
          Makwana
        </h4>
      </div>
    </>
  );
}

export default Footer;
