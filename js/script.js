'use strict';
const hexBtn = document.querySelector('.hex_btn');
const hexClose = document.querySelector('.hex_default');
let code = document.querySelector(".code");
let hexBg = document.querySelector(".hex_code");
hexBtn.addEventListener('click', ()=>{
    function changecolor(){
        let hexColors = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E'];
        let hexNum = '';
        
        for(let i = 0; i < 6;i++){
            let hexIndex =  Math.floor(Math.random() * hexColors.length);
            hexNum += hexColors[hexIndex];
        }
        code.innerHTML = hexNum;
        hexBg.style.background = '#' + hexNum;
    }
    changecolor();
});
hexClose.addEventListener('click',()=>{
    code.innerHTML = "000000";
    hexBg.style.background = '#' + "fff";
});