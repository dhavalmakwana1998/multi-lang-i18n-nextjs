import React from "react";
import LanguageSelect from "../component/LanguageSelect";
import useTranslation from "next-translate/useTranslation";

function about() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("about:title")}</h1>
      <h3>{t("about:desc")}</h3>
      <LanguageSelect />
    </div>
  );
}

export default about;
