import { createModalForm } from '../common/modal-form.js';

const consultBtns = document.querySelectorAll('.consult-btn');

[...consultBtns].forEach((elem) => {
  elem.addEventListener('click', () => {
    createModalForm(["Имя", "Фамилия", "Email", "Дополнительная информация"], 'Оставьте свои данные');
  })
})