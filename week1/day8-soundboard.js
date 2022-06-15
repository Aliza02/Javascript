const sounds=['sweep','suspense','alarm'];
sounds.forEach(sound=>{
    const btn=document.createElement('button');
    btn.classList.add('btn');
    btn.innerHTML=sound;

    btn.addEventListener('click',()=>{
        stopsongs();
        document.getElementById(sound).play();
    })

    document.getElementById('buttons').appendChild(btn);
})
function stopsongs()
{
    sounds.forEach(sound=>{
        const song=document.getElementById(sound);
        song.pause();
        song.currentTime=0;
    })
}