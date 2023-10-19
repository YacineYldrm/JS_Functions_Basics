//#################################
// 
//            classList
// 
//#################################

//-----------------------
// 
//    Level 1_1 & 2_1
// 
//-----------------------

const styleHeadline = document.body.querySelector('#main_headline');
const styleList = document.body.querySelector('#bucketList');

function changeStyle()
{
    styleHeadline.classList.remove('headlineStyle2');
    styleList.classList.remove('listStyle2');
    styleHeadline.classList.add('headlineStyle');
    styleList.classList.add('listStyle');
}

function changeStyle2()
{
    styleHeadline.classList.remove('headlineStyle');
    styleList.classList.remove('listStyle');
    styleHeadline.classList.add('headlineStyle2')
    styleList.classList.add('listStyle2')
}

function toggleStyle()
{
    styleList.classList.toggle('listStyle1')
    styleHeadline.classList.toggle('headlineStyle1')
    styleHeadline.classList.toggle('headlineStyle2')
    styleList.classList.toggle('listStyle2')
}