# odin-calculator
1. Calculator Layout: (Done)
[Screen]
[Clear] [Delete]
[7] [8] [9] [÷]
[4] [5] [6] [x]
[1] [2] [3] [-] 
[.] [0] [=] [+]

2. Add functionality to buttons (Done)
3. Create operate function (Done)
4. Math Logic (Done)

Bugs:
1. Narrow screen causes disfigured calculator layout (FIXED)
    - Change padding number
2. Text overflow on calc screen (FIXED)


Logic
1. New Calc:
    -Waiting for Number
2. Number (1) input already
    -If input number, add number
    -If input operator, insert operator and start new number
3. Operator has been inserted
    -If input number, add on to second number
    -If input operator, change inserted operator
4. Number (2) input already
    -If input number, add on to second number
    -If input operator, carry out "=", 
        result becomes first number,
        add "operator"
    