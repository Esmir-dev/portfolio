import englishContent from "./englishContent";
import bosnianContent from "./bosnianContent";

function getContent(language) {
  if (language === "en") return englishContent;
  if (language === "bh") return bosnianContent;
}

export { getContent };
