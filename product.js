fetch("data/guitars.json")
  .then((res) => res.json())
  .then((guitars) => {
    const container = document.getElementById("product-list");
    guitars.forEach((guitar) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${guitar.image}" alt="${guitar.name}">
        <h3>${guitar.name}</h3>
        <p>${guitar.type}</p>
        <strong>${guitar.price}</strong>
        <button>View Details</button>
      `;
      container.appendChild(card);
    });
  });