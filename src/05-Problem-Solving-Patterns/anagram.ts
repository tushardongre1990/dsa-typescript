/**
 * Given two strings, write a function to determine if the second string is an anagram of the first. 
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
validAnagram('','') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat", "car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
 */

const validAnagram = (word1: string, word2: string): boolean => {
  if (word1.length !== word2.length) {
    console.log("Different word length");
    return false;
  }

  const word1Frequency: Record<string, number> = {};
  const word2Frequency: Record<string, number> = {};

  for (const val of word1) {
    word1Frequency[val] = (word1Frequency[val] || 0) + 1;
  }
  for (const val of word2) {
    word2Frequency[val] = (word2Frequency[val] || 0) + 1;
  }
  console.log(word1Frequency);
  console.log(word2Frequency);

  for (const val in word1Frequency) {
    if (word1Frequency[val] !== word2Frequency[val]) {
      return false;
    }
  }
  return true;
};

const anagramTestCases: [string, string][] = [
  ["", ""],
  ["aaz", "zza"],
  ["anagram", "nagaram"],
  ["rat", "car"],
  ["awesome", "awesom"],
  ["qwerty", "qeywrt"],
  ["texttwisttime", "timetwisttext"],
];

for (const [str1, str2] of anagramTestCases) {
  console.log(`${str1}, ${str2} =>`, validAnagram(str1, str2));
}
