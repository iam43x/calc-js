const ARABIC_REGEX = "^(?<operandA>\\d+)\\s*(?<operator>[+\\-\\/*])\\s*(?<operandB>\\d+)$"
const ROMANCE_REGEX = "^(?<operandA>[IVX]+)\\s*(?<operator>[+\\-\\/*])\\s*(?<operandB>[IVX]+)$"

export function parseGroups(input) { 
    let arabicMatch = input.match(ARABIC_REGEX)
    if(arabicMatch == null) {
        let romanceMatch = input.match(ROMANCE_REGEX)
        if(romanceMatch == null) {
            throw new Error("Неверное выражение!")
        } else {
            return {
                operandA: romanceMatch.groups.operandA,
                operandB: romanceMatch.groups.operandB,
                operator: romanceMatch.groups.operator,
                isRomance: true
            }
        }
    } else {
        return { 
            operandA: arabicMatch.groups.operandA,
            operandB: arabicMatch.groups.operandB,
            operator: arabicMatch.groups.operator,
            isRomance: false
        }
    }
}