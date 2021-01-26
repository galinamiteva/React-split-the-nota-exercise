# Övning - Split the nota

Split the nota räknar ut hur mycket varje vän ska betala på exempelvis en restaurang när notan kommer. Användaren matar in summan, antal vänner och sedan dricks (**som skrivs i decimalform d.v.s 10% blir 0.10**).



Funktion för att räkna ut dricks:

```
function calculateTip(sum, tip) {
    const calculatedTip = parseInt(sum) * parseFloat(tip);
    return calculatedTip;
}
```

Funktion för att räkna ut hur mycket varje person ska betala. Total är inklusive dricks.

```
function divideTotal(total, numberOfFriends) {
    const sumDivided = total / parseInt(numberOfFriends);
    return sumDivided;
}
```

**Räkna ut**
![alt text](screenshots/Screen-calculate.png)

**Visa summa**
![alt text](screenshots/Screen-result.png)