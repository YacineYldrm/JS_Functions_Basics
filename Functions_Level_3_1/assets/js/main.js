//#################################
// 
//            Functions
// 
//#################################

//-----------------------
// 
//       Level 3_1
// 
//-----------------------

const pageStyle = document.body.classList;
const resetStyle = document.body.classList;
// console.log(pageStyle);

function styleChangeOne()
{
    resetStyle.remove('firstStyle','secondStyle', 'thirdStyle', 'fourthStyle');
    pageStyle.add('firstStyle');
}

function styleChangeTwo()
{
    resetStyle.remove('firstStyle','secondStyle', 'thirdStyle', 'fourthStyle');
    pageStyle.add('secondStyle');
}

function styleChangeThree()
{
    resetStyle.remove('firstStyle','secondStyle', 'thirdStyle', 'fourthStyle');
    pageStyle.add('thirdStyle');
}

function styleChangeFour()
{
    resetStyle.remove('firstStyle','secondStyle', 'thirdStyle', 'fourthStyle');
    pageStyle.add('fourthStyle');
}