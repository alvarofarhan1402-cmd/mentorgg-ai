function saveProfile(){
var u=document.getElementById('editUsername').value;
var h=document.getElementById('editHero').value;
var r=document.getElementById('editRank').value;
var match=document.getElementById('editMatch').value;
var wr=document.getElementById('editWinRate').value;
var heroFav=document.getElementById('editHeroFav').value;
if(!u){alert('Username tidak boleh kosong!');return;}
var lastChange=localStorage.getItem('lastUsernameChange');
var oldUsername=localStorage.getItem('username');
if(lastChange && u!==oldUsername){var diff=(new Date()-new Date(lastChange))/(1000*60*60*24);if(diff<7){var sisa=Math.ceil(7-diff);alert('Bisa ganti username lagi dalam '+sisa+' hari!');return;}}
if(u!==oldUsername){localStorage.setItem('lastUsernameChange',new Date().toISOString());}
localStorage.setItem('username',u);
localStorage.setItem('role',h);
localStorage.setItem('rank',r);
localStorage.setItem('totalMatch',match);
localStorage.setItem('winRate',wr);
localStorage.setItem('heroFav',heroFav);
document.getElementById('profileUsername').textContent=u;
document.getElementById('profileRank').textContent=r;
document.getElementById('profileAvatar').textContent=u[0].toUpperCase();
alert('Profile berhasil disimpan!');}
window.onload=function(){
var u=localStorage.getItem('username')||'Player';
var h=localStorage.getItem('role')||'Marksman';
var r=localStorage.getItem('rank')||'Epic';
var match=localStorage.getItem('totalMatch')||'0';
var wr=localStorage.getItem('winRate')||'0';
var heroFav=localStorage.getItem('heroFav')||'-';
document.getElementById('profileUsername').textContent=u;
document.getElementById('profileRank').textContent=r;
document.getElementById('profileAvatar').textContent=u[0].toUpperCase();
document.getElementById('editUsername').value=u;
document.getElementById('editHero').value=h;
document.getElementById('editRank').value=r;
document.getElementById('editMatch').value=match;
document.getElementById('editWinRate').value=wr;
document.getElementById('editHeroFav').value=heroFav;
}
