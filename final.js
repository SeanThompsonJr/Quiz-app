const scoreEle = document.querySelector('#scoreTxt');
scoreTxt = localStorage.getItem('scoreTxt')
scoreEle.innerText = scoreTxt

doneBtn = document.querySelector('#done-btn')
doneBtn.addEventListener('click', () =>{
    doneBtn.setAttribute('href', 'index.html')
    localStorage.removeItem('scoreTxt')
})