import { createModalForm } from '../common/modal-form.js'; 

const consultBtn = document.querySelector('.hero-btn');

consultBtn.addEventListener('click', () => {
  createModalForm(["Имя", "Фамилия", "Email", "Дополнительная информация"], 'Оставьте свои данные');
})