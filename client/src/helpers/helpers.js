import { languages, colors } from './constants';

export const getColor = targetLanguage => {
  let languageKeyValue = Object.entries(languages).find(
    ([key, value]) => key === targetLanguage
  );

  return colors[languageKeyValue[0]];
};
