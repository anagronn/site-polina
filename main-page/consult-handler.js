import { createModalForm } from '../scripts/common.js'; 

const consultBtn = document.querySelector('.hero-btn');

consultBtn.addEventListener('click', () => {
  createModalForm("Имя", "Фамилия", "Email");
})