import { createModalForm } from '../common/modal-form.js';

const rentBtns = document.querySelectorAll('.rent-btn');

[...rentBtns].forEach((elem) => {
  elem.addEventListener('click', () => {
    createModalForm(["Имя", "Фамилия", "Email", "Вид техники", "Город", "Срок эксплуатации", "Дополнительная информация"], 'Аренда техники');
  })
})