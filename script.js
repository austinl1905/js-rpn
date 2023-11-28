class Calculator
{
    constructor()
    {
        this.operands = [];
        this.operators = [];
        this.exp = '';
        this.form = document.getElementById('form-1');
        this.output = document.getElementById('output');
        this.precedence =
        {
            '+': 1,
            '-': 1,
            '*': 2,
            '/': 2,
            '*': 3
        }
    }

    toInfix()
    {
        this.queue = [];
        this.operators = [];
        this.exp = '';
        this.output.innerHTML = "";

        this.exp = this.form.elements[0].value;

        if (!this.validate(this.exp))
        {
            this.output.innerHTML = "Invalid input."
        }
        else
        {
            const isOperator = (token) => precedence.hasOwnProperty(token);
        }

        this.form.reset;
    }

    handleOperator(operator) // Called when token is an operator
    {
        while (this.operators.length > 0 && // If there are still operators in the array
        isOperator(this.operators[this.operators.length - 1]) && // If the last element in the stack is an operator
        precedence[operator] <= precedence[this.operators[this.operators.length - 1]] ) // If the precedence of the current operator is less than or equal to the precedence of the last element in the stack
        {

        }
    }

    validate(exp)
    {
        let splitExp = this.exp.split(' ');

        for (let i = 0; i < splitExp.length; i++)
        {
            if (splitExp[i].isNaN = 1)
            {
                return false;
            }
        }
        return true;
    }
}

const calculator = new Calculator();

button = document.getElementById('submit');
button.addEventListener('click', calculator.toInfix());

