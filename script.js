function showSection(id) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}