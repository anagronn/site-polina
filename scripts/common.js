export function createModalForm(...labels) {
  const modal = document.createElement("div");
  modal.classList.add("modal-overlay");
  modal.innerHTML = `
    <div class="modal">
      <span class="close-btn">&times;</span>
      <form class="modal-form">
        ${labels.map(label => createInputField(label)).join('')}
        <button type="submit">Отправить</button>
      </form>
    </div>
  `;

  document.body.appendChild(modal);
  document.querySelector(".close-btn").addEventListener("click", () => modal.remove());
  modal.addEventListener("click", e => e.target === modal && modal.remove());
}

function createInputField(label) {
  let inputElement;

  if (label === "Email") {
    inputElement = `<input type="email" name="${label}" required>`;
  } else if (label === "Вид транспорта" || label === "Город") {
    inputElement = `<select name="${label}"><option>Выберите...</option></select>`;
  } else if (label === "Срок эксплуатации") {
    inputElement = `<input type="number" name="${label}" required>`;
  } else if (label === "Документы") {
    inputElement = `<input type="file" name="${label}">`;
  } else if (label === "Дополнительная информация") {
    inputElement = `<textarea name="${label}" rows="4"></textarea>`;
  } else {
    inputElement = `<input type="text" name="${label}" required>`;
  }

  return `<label>${label}${inputElement}</label>`;
}