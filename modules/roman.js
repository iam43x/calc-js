const ROMANCE_TO_ARABIC_MAPPING = { I: 1, V: 5, X: 10 }

export function parseRomance(input) {
  let result = 0
  for (let i = 0; i < input.length; i++) {
    let currentRoman = input[i]
    let nextRoman = input[i + 1]
    let currentArabic = ROMANCE_TO_ARABIC_MAPPING[currentRoman]
    let nextArabic = ROMANCE_TO_ARABIC_MAPPING[nextRoman] || 0
    if (currentArabic < nextArabic) {
      result -= currentArabic
    } else {
      result += currentArabic
    }
  }
  return result
}