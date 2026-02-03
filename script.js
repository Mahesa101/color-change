const tombolUBah= document.getElementById('tUbahWarna');

// const body = document.getElementsByTagName('body')[0];
//karena khusu buat body karena body punya document.body jadi tidak perlu di ambil

tombolUBah.onclick = function(){
    //document.body.style.backgroundColor = 'lightblue'
    //document.body.setAttribute('class','biru-muda')
    document.body.classList.toggle('biru-muda')
}


const tRandomW = document.createElement('button');
const teksTbaru =document.createTextNode('Acak Warna');
tRandomW.appendChild(teksTbaru);

tRandomW.setAttribute('type','button');
tombolUBah.after(tRandomW);

tRandomW.addEventListener('click', function(){
    const r = Math.round(Math.random() *255 + 1);
    const g = Math.round(Math.random() *255 + 1);
    const b = Math.round(Math.random() *255 + 1);

    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
});


const sMerah = document.querySelector('input[name =sMerah]')
const sHijau = document.querySelector('input[name =sHijau]')
const sBiru = document.querySelector('input[name =sBiru]')

sMerah.addEventListener('input',function(){
    const r = sMerah.value
    const g = sHijau.value
    const b = sBiru.value
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
})

sHijau.addEventListener('input',function(){
    const r = sMerah.value
    const g = sHijau.value
    const b = sBiru.value
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
})

sBiru.addEventListener('input',function(){
    const r = sMerah.value
    const g = sHijau.value
    const b = sBiru.value
    document.body.style.backgroundColor ='rgb('+r+','+g+','+b+')'
})

document.body.addEventListener('mousemove',function(event){

   const xPos = Math.round((event.clientX / window.innerWidth) *255);
   const  yPos = Math.round((event.clientY / window.innerHeight) *255);

   document.body.style.backgroundColor = 'rgb('+xPos+','+yPos+',100)'
})