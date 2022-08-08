let $textArea = document.querySelector('textarea'),
  $count = document.getElementById('count'),
  $maxLength = $textArea.getAttribute('maxlength')


$textArea.addEventListener('input', function () {
  $count.innerHTML = $maxLength - $textArea.value.length;
  if($count.innerHTML == 0){
    $count.classList.add('end')
  } else {
    $count.classList.remove('end')
  }
})
