export function createModal({ title, address, imageUrl, text, listItems }) {
  const container = document.createElement("div");
  container.classList.add("modal-overlay");

  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.id = 'filial-modal';

  const modalList = document.createElement('ol');
  modalList.classList.add('modal-list');
  listItems.forEach(item => {
      const listItem = document.createElement('li');
      listItem.classList.add('modal-list-item');
      listItem.textContent = item;
      modalList.appendChild(listItem);
  });

  modal.innerHTML = `
      <svg class="close-btn" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" r="23.5" stroke="#7197CC"/>
<path d="M22.7879 24L19.1513 20.3635L20.3635 19.1513L24.0001 22.7878L27.6366 19.1513L28.8488 20.3635L25.2122 24L28.8488 27.6365L27.6366 28.8487L24.0001 25.2122L20.3635 28.8487L19.1513 27.6365L22.7879 24Z" fill="#0B56A6"/>
</svg>
     <h5 class="modal-title">Филиал</h5>
     <h5 class="modal-title">${title}</h5>
     <p class="modal-address caption">${address}</p>
    <img src="${imageUrl}" alt="Filial" class="modal-image">
     <p class="modal-text">${text}</p>
  `;

  

  modal.appendChild(modalList);
  container.appendChild(modal);

  document.body.appendChild(container);

  document.body.classList.add('active');

  document.querySelector(".close-btn").addEventListener("click", () => {
    container.remove();
    document.body.classList.remove('active');
  });
  container.addEventListener("click", e => {
    if (e.target === container) {
      container.remove();
      document.body.classList.remove('active');
    }
  });
}
