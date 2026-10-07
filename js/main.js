document.addEventListener('DOMContentLoaded', () => {
    // Navigasi Mobile (Hamburger)
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Logika Filter Kamar Kost
    const btnSearch = document.getElementById('btn-search');
    const filterTipe = document.getElementById('filter-tipe');
    const filterGender = document.getElementById('filter-gender');
    const kamarCards = document.querySelectorAll('.kamar-card');

    btnSearch.addEventListener('click', () => {
        const tipeVal = filterTipe.value;
        const genderVal = filterGender.value;

        kamarCards.forEach(card => {
            const cardTipe = card.getAttribute('data-tipe');
            const cardGender = card.getAttribute('data-gender');

            const matchTipe = (tipeVal === 'all' || cardTipe === tipeVal);
            const matchGender = (genderVal === 'all' || cardGender === genderVal);

            if (matchTipe && matchGender) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});