const dropZone1 = document.getElementById('dropZone');
const dropZone2 = document.getElementById('dropZone2');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropZone1.addEventListener(eventName, preventDefaults, false);
  dropZone2.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

['dragenter', 'dragover'].forEach(eventName => {
  dropZone1.addEventListener(eventName, highlight, false);
  dropZone2.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
  dropZone1.addEventListener(eventName, unhighlight, false);
  dropZone2.addEventListener(eventName, unhighlight, false);
});

function highlight() {
  dropZone1.classList.add('border-primary');
  dropZone2.classList.add('border-primary');
}

function unhighlight() {
  dropZone1.classList.remove('border-primary');
  dropZone2.classList.remove('border-primary');
}
function clearFile(inputId) {
    document.getElementById(inputId).value = ''; // Clear file input
}
dropZone1.addEventListener('drop', handleDrop1, false);
dropZone2.addEventListener('drop', handleDrop2, false);

function handleDrop1(e) {
  const dt = e.dataTransfer;
  const files = dt.files;
  console.log('dropped');
  
  document.getElementById('pdf1').files = files;
  document.getElementById('uploadConfirmation').style.display = 'block';
  document.getElementById('clear1').style.display='block'
}

function handleDrop2(e) {
  const dt = e.dataTransfer;
  const files = dt.files;
  document.getElementById('pdf2').files = files;
  document.getElementById('uploadConfirmation').style.display = 'block';
  document.getElementById('clear2').style.display='block'
}