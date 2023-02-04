export function isLastCharacterAComma(input: string){
  return input.length > 0 && input[input.length - 1] == ','
}

export function isAlreadyInTheList(newKeyword: string, keywordList: string[]){
  return newKeyword && keywordList.some((k) => newKeyword == k);
}