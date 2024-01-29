import { parseGroups } from "./parse.js"
import { parseRomance } from "./roman.js"
import { validate } from "./valid.js"
import { compute } from "./math.js"

export function calculate(input) {
  let groups = parseGroups(input)

  let numberOperandA
  let numberOperandB

  if(groups.isRomance) {
    numberOperandA = parseRomance(groups.operandA)
    numberOperandB = parseRomance(groups.operandB)
  } else {
    numberOperandA = parseInt(groups.operandA, 10)
    numberOperandB = parseInt(groups.operandB, 10)
  }
  validate(numberOperandA)
  validate(numberOperandB)
  let result = compute(numberOperandA, numberOperandB, groups.operator)
  result = Math.trunc(result)
  if(groups.isRomance && result <= 0) result = ''
  return result
}
