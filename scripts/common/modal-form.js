export function createModalForm(labels, title) {
  const modal = document.createElement("div");
  modal.classList.add("modal-overlay");
  modal.innerHTML = `
    <div class="modal">
      <svg class="close-btn" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" r="23.5" stroke="#7197CC"/>
<path d="M22.7879 24L19.1513 20.3635L20.3635 19.1513L24.0001 22.7878L27.6366 19.1513L28.8488 20.3635L25.2122 24L28.8488 27.6365L27.6366 28.8487L24.0001 25.2122L20.3635 28.8487L19.1513 27.6365L22.7879 24Z" fill="#0B56A6"/>
</svg>
      <form class="modal-form">
      <h5>${title}</h5>
        ${labels.map(label => createInputField(label)).join('')}
        <button class='submit-btn' type="submit">Отправить</button>
      </form>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.classList.add('active');

  document.querySelector(".close-btn").addEventListener("click", () => {
    modal.remove();
    document.body.classList.remove('active');
  });
  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.remove();
      document.body.classList.remove('active');
    }
  });
}

function createInputField(label) {
  let inputElement;
  if (label === "Email") {
    inputElement = `<input type="email" name="${label}" required>`;
  } else if (label === "Вид техники") {
    inputElement = `<select class="form-select" name="${label}">
    <option>все виды</option>
    <option>подъемник</option>
    <option>самосвал</option>
    <option>лебедка</option>
    <option>кран</option>
    <option>бурильно-крановая</option>
    <option>экскаватор</option>
    <option>трактор</option></select>`;
  } else if (label === "Город") {
    inputElement = `<select class="form-select" name="${label}">
    <option>все города</option>
    <option>Минск</option>
    <option>Витебск</option>
    <option>Гомель</option>
    <option>Брест</option>
    <option>Молодечно</option>
    <option>Могилев</option>
    <option>Гродно</option></select>`;
  } else if (label === "Срок эксплуатации") {
    inputElement = `<input type="number" name="${label}" required>`;
  } else if (label === "Документы") {
    inputElement = `<input type="file" name="${label}">`;
  } else if (label === "Дополнительная информация") {
    inputElement = `<textarea name="${label}" rows="4"></textarea>`;
  } else {
    inputElement = `<input type="text" name="${label}" required>`;
  }
  return `<div class = "modal-item"><label>${label}</label>${inputElement}</div>`;
}