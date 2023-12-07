const labels = document.querySelectorAll('.form-control label');

labels.forEach(function (label) {
  label.innerHTML = label.innerText
    .split('') // split into array
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 55}ms">
        ${letter}</span>`
    ) // array
    .join(''); // string
});
