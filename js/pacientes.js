document.querySelectorAll('.expand-btn').forEach(button => {
    button.addEventListener('click', function () {
        const parent = this.closest('.patient-item');
        parent.classList.toggle('open');
    });
});

document.getElementById('searchBar').addEventListener('input', function () {
    const searchText = this.value.toLowerCase();
    const patients = document.querySelectorAll('.patient-item');

    patients.forEach(patient => {
        const name = patient.querySelector('.expand-btn').textContent.toLowerCase();
        if (name.includes(searchText)) {
            patient.style.display = 'block';
        } else {
            patient.style.display = 'none';
        }
    });
});
