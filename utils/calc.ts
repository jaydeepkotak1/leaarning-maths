import { parse, evaluate } from "mathjs";

export function stepAndNotebook(expression: string): string {
    if (!expression) return "Invalid expression";

    // Handle implicit multiplication: 2(3-3) → 2*(3-3)
    const parsedExpr = expression.replace(/(\d)\(/g, '$1*(');

    const stepLines: string[] = [`Expression: ${parsedExpr}`];
    let stepCount = 1;

    let finalAnswer: number;

    try {
        // Parse expression
        const node = parse(parsedExpr);

        // Recursive evaluation with step logging
        function evalNode(n: any): number {
            if (n.isConstantNode) return parseFloat(n.value);

            if (n.isOperatorNode) {
                const left = evalNode(n.args[0]);
                const right = evalNode(n.args[1]);
                let result;

                switch (n.op) {
                    case '+':
                        result = left + right;
                        break;
                    case '-':
                        result = left - right;
                        break;
                    case '*':
                        result = left * right;
                        break;
                    case '/':
                        result = left / right;
                        break;
                    default:
                        result = NaN;
                }

                stepLines.push(`Step ${stepCount}: ${left} ${n.op} ${right} = ${result}`);
                stepCount++;
                return result;
            }

            if (n.isParenthesisNode) {
                return evalNode(n.content);
            }

            return NaN;
        }

        finalAnswer = evalNode(node);
    } catch (err) {
        return "Invalid expression";
    }

    stepLines.push(`✅ Final Answer: ${finalAnswer}`);

    // Notebook-style (simple)
    const notebookNumbers = parsedExpr.match(/-?\d+(\.\d+)?/g)?.map(Number) || [];
    const notebookOperators = parsedExpr.match(/[\+\-\*\/]/g) || [];
    const maxLength = Math.max(...notebookNumbers.map(n => n.toString().length), 1);

    const notebookLines: string[] = [];
    if (notebookNumbers.length) {
        notebookLines.push('  ' + notebookNumbers[0].toString().padStart(maxLength, ' '));
        for (let i = 1; i < notebookNumbers.length; i++) {
            const op = notebookOperators[i - 1];
            notebookLines.push(`${op} ${notebookNumbers[i].toString().padStart(maxLength, ' ')}`);
        }
        notebookLines.push('-'.repeat(maxLength + 2));
        notebookLines.push('  ' + finalAnswer.toString().padStart(maxLength, ' '));
    }

    return `${stepLines.join('\n')}\n\n--- Notebook Style ---\n${notebookLines.join('\n')}`;
}
