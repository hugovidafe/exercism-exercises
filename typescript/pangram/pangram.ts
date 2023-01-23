export const isPangram = (sentence: string): boolean => new Set(sentence.toLowerCase().match(/[a-z]/g)).size === 26;
