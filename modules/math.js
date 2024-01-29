const COMPUTE_MAP = {
  '+': (operandA, operandB) => { return operandA + operandB },
  '-': (operandA, operandB) => { return operandA - operandB },
  '*': (operandA, operandB) => { return operandA * operandB },
  '/': (operandA, operandB) => { return operandA / operandB }
}

export function compute(operandA, operandB, operator) { return COMPUTE_MAP[operator].call(null, operandA, operandB) }
