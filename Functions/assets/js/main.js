// ###########################################
// 
//                  Functions
// 
// ###########################################

// -----------------------
// 
//        Level 1_2
// 
// -----------------------

console.log("%c Functions-Level-1_2", "color: blue; background-color: gold");

function intro2(paramNam)
{
    let name = "SuperCoder:in";
    console.log("Hi " + name + ". Mein Name ist " + paramNam +".");
}

intro2("John Doe");
intro2("Mareike Musterfrau");

// -----------------------
// 
//        Level 1_3
// 
// -----------------------

console.log("%c Functions-Level-1_3", "color: blue; background-color: gold");

function intro3(name, stadt, alter)
{
    let superName = "SuperCoder:in";
    console.log("Hi " + superName + ". Mein Name ist " + name + ". Ich bin " + alter + " Jahre alt. Ich komme aus " + stadt + ".");
}

intro3("John Doe", "Californien", "55");

// -----------------------
// 
//        Level 1_5
// 
// -----------------------

console.log("%c Functions-Level-1_5", "color: blue; background-color: gold");

function math(paramZahl1, paramZahl2)
{
    console.log("Multiplikation von " + paramZahl1 + " und " + paramZahl2 + ":" + " " + paramZahl1 * paramZahl2);
    console.log("Division von " + paramZahl1 + " und " + paramZahl2 + ":" + " " + paramZahl1 / paramZahl2);
    
}

math(10, 2);
math(30, 20);
math(100, 100);
math(5, 0);
math(45, 173);
math(1, 1000);

// -----------------------
// 
//        Level 1_4
// 
// -----------------------

console.log("%c Functions-Level-1_4", "color: blue; background-color: gold");

const nameTwo = "Mein:e Lieblingsheld:in ist: ";
const power = "Er/sie hat die Fähigkeit: ";
const enemy = "Sein/ihr größte/r Gegner:in ist: ";

function hero(heroName, heroPower, heroEnemy)
{
    console.log(nameTwo + heroName + ". " + power + heroPower + ". " + enemy + heroEnemy + ". ");
}

hero("Ninja Turtles", "Viel Pizza essen und MMA", "The Schredder")