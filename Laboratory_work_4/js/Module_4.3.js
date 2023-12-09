const visibleInput = document.querySelector('#visible-input');
const hiddenInput = document.querySelector('#hidden-input');
const or = document.querySelector('#or');
const dropZone = document.querySelector('#drop-zone');
const text = document.querySelector('#text');
const downloadBtn = document.querySelector('#download-btn');
const downloadLink = document.querySelector('#download-link');
let isFileSaved = true;

function readFile(file) {
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
        visibleInput.style.display = 'none';
        or.style.display = 'none';
        dropZone.style.display = 'none';
        text.innerText = reader.result;
        text.style.display = 'block';
        downloadBtn.style.display = 'block';
    }
}

visibleInput.addEventListener('click', () => {
    hiddenInput.click();
});

hiddenInput.addEventListener('change', () => {
    let file = hiddenInput.files[0];
    readFile(file);
});

dropZone.addEventListener('dragover', (e) => { e.preventDefault(); });

dropZone.addEventListener('dragenter', () => { dropZone.classList.add('hovered'); });

dropZone.addEventListener('dragleave', () => { dropZone.classList.remove('hovered'); });

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    let file = e.dataTransfer.files[0];
    readFile(file);
});

text.addEventListener('input', () => {
    isFileSaved = false;
})

downloadBtn.addEventListener('click', () => {
    let file = new File([text.innerText], 'modified.txt');
    downloadLink.href = URL.createObjectURL(file);
    downloadLink.click();
    isFileSaved = true;
});

window.addEventListener('beforeunload', (e) => {
    if (!isFileSaved) { e.preventDefault(); }
});