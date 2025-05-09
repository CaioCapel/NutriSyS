
  const cards = document.querySelectorAll(".card");
  const cardsPerPage = 9;
  let currentPage = 1;

  function showPage(page) {
    const start = (page - 1) * cardsPerPage;
    const end = start + cardsPerPage;

    cards.forEach((card, index) => {
      card.style.display = index >= start && index < end ? "block" : "none";
    });

    document.getElementById("page-number").textContent = `Página ${page}`;
    document.getElementById("prev-btn").disabled = page === 1;
    document.getElementById("next-btn").disabled = end >= cards.length;
  }

  function changePage(direction) {
    const totalPages = Math.ceil(cards.length / cardsPerPage);
    currentPage += direction;

    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;

    showPage(currentPage);
  }

  document.addEventListener("DOMContentLoaded", () => {
    showPage(currentPage);
  });
