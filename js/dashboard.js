window.onload=function(){
var u=localStorage.getItem('username')||'Player';
var r=localStorage.getItem('rank')||'Epic';
var match=localStorage.getItem('totalMatch')||'0';
var wr=localStorage.getItem('winRate')||'0';
var heroFav=localStorage.getItem('heroFav')||'-';
document.querySelector('.welcome-bar h2').innerHTML='Selamat datang, <span>'+u+'</span>';
document.querySelector('.welcome-bar p').innerHTML='Rank kamu saat ini: <strong>'+r+'</strong>';
var cards=document.querySelectorAll('.stat-info h3');
if(cards[0]) cards[0].textContent=match;
if(cards[1]) cards[1].textContent=wr+'%';
if(cards[2]) cards[2].textContent=heroFav;
}
