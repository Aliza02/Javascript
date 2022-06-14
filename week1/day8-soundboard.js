const sounds=['alarm','suspense','sweep'];
sounds.forEach(sound=>{
    const btn=document.createElement('button');
    btn.classList.add('btn');
    btn.innerHTML=sound;

    document.getElementById('buttons').appendChild(btn);
})