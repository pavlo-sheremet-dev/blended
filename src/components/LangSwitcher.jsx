import { useTranslation } from "react-i18next";

export const LangSwitcher = () => {
  const {
    i18n: { language, changeLanguage },
  } = useTranslation();

  return (
    <button
      onClick={() => {
        console.log("click");
        console.log("language", language);
        changeLanguage(language === "en" ? "uk" : "en");
      }}
    >
      {language}
    </button>
  );
};
