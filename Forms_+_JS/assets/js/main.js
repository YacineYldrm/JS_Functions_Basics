//#################################
// 
//            Forms + JS
// 
//#################################

//-----------------------
// 
//    Level 1_3
// 
//-----------------------

function diffCalculator()
{
    const ageFirstPerson = Number(document.body.querySelector('.alter1').value);
    const ageSecondPerson = Number(document.body.querySelector('.alter2').value);
    let answer = document.body.querySelector('#answer');
    let diff;

    if(ageFirstPerson > ageSecondPerson)
    {
        diff = ageFirstPerson - ageSecondPerson;
        answer.textContent = "Der Altersunterschied beträgt: " + diff;
    } 
    else if(ageSecondPerson > ageFirstPerson)
    {
        diff = ageSecondPerson - ageFirstPerson;
        answer.textContent = "Der Altersunterschied beträgt: " + diff;
    }
    else
    {
        diff = 0;
        answer.textContent = "Der Altersunterschied beträgt: " + diff;
    }

}

diffCalculator();