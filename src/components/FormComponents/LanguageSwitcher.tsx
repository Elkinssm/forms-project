// LanguageSwitcher.tsx
import { Button } from "@chakra-ui/react";
import i18n from "../../../i18n"; 

const LanguageSwitcher = () => {
  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <Button onClick={toggleLanguage}>
      {i18n.language === "en" ? "Español" : "English"}
    </Button>
  );
};

export default LanguageSwitcher;
