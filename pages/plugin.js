import React from "react";
import useTranslation from "next-translate/useTranslation";
import LanguageSelect from "../component/LanguageSelect";

function plugin() {
  const { t } = useTranslation("common");
  const title = t("title");
  const titleFromOtherNamespace = t("about:title");
  const example = t("variable-example", { count: 21 });
  const exampleDefault = t(
    "example",
    { count: 3 },
    { default: "Defaul Text: {{count}}." }
  );

  return (
    <div>
      <h1>{title}</h1>
      Title From Other Namespace : {titleFromOtherNamespace}
      <br />
      <br />
      Variable : {example}
      <br />
      <br />
      example Default : {exampleDefault}
      <LanguageSelect />
    </div>
  );
}

export default plugin;
