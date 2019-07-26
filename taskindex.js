const input1 = document.getElementById('input1');
const reload = document.getElementById('reset');
var random = ['Times','Hiragino Kaku Gothic Std','arial black'
,'Impact','arial unicode ms','serif','monospace','fantasy'
,'cursive','Comic Sans MS'];
const btn = document.getElementById('random');
reload.addEventListener('click',()=>{
    document.getElementById('input1').style.fontFamily = "null";
});
btn.addEventListener('click',()=>{
    var randomdata = random[Math.floor(Math.random()* random.length)];
    document.getElementById('input1').style.fontFamily = randomdata;
})
