let percent = document.querySelector('.percent');
let progress = document.querySelector('.progress');
let progressBar = document.querySelector('.progress-bar');

let count = 4;
let per = 16;

const loading = setInterval(animate, 50);

function animate() {
    if (count === 100 && per === 400){
        clearInterval(loading);
        percent.textContent = 'Error';
        percent.style.color = 'red'
        progressBar.style.display = 'none';
    } else {
        per = per + 4;
        count = count + 1;
        progress.style.width = per + 'px';
        percent.textContent = count + '%';
    }
}