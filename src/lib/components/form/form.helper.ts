export function isLastCharacterAComma(input: string){
  return input.length > 0 && input[input.length - 1] == ','
}

export function isAlreadyInTheList(newKeyword: string, keywordList: string[]){
  return newKeyword && keywordList.some((k) => newKeyword == k);
}

export function addKeywordIfValid(input: string, keywordList: string[]){
  const newKeyword = input.slice(0, -1).trim();
  if (!isAlreadyInTheList(newKeyword, keywordList)) keywordList = [...keywordList, newKeyword];
  return keywordList;
}