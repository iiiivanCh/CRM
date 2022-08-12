"use strict"

const nameForm = document.querySelector('.top__title');
const numberID = document.querySelector('.top__btn');
// const form = document.querySelector('form');
const coupleDiscount = document.querySelector('.edit__couple');
const totalProduct = document.querySelector('.modal__total-number');

let serverData = [
  {
    "id": 253842678,
    "title": "Смартфон Xiaomi 11T 8/128GB",
    "price": 27000,
    "description": "Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.",
    "category": "mobile-phone",
    "discont": false,
    "count": 3,
    "units": "шт",
    "images": {
      "small": "img/smrtxiaomi11t-m.jpg",
      "big": "img/smrtxiaomi11t-b.jpg"
    }
  },
  {
    "id": 296378448,
    "title": "Радиоуправляемый автомобиль Cheetan",
    "price": 4000,
    "description": "Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет",
    "category": "toys",
    "discont": 5,
    "count": 1,
    "units": "шт",
    "images": {
      "small": "img/cheetancar-m.jpg",
      "big": "img/cheetancar-b.jpg"
    }
  },
  {
    "id": 215796548,
    "title": "ТВ приставка MECOOL KI",
    "price": 12400,
    "description": "Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D",
    "category": "tv-box",
    "discont": 15,
    "count": 4,
    "units": "шт",
    "images": {
      "small": "img/tvboxmecool-m.jpg",
      "big": "img/tvboxmecool-b.jpg"
    }
  },
  {
    "id": 246258248,
    "title": "Витая пара PROConnect 01-0043-3-25",
    "price": 22,
    "description": "Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.",
    "category": "cables",
    "discont": false,
    "count": 420,
    "units": "v",
    "images": {
      "small": "img/lan_proconnect43-3-25.jpg",
      "big": "img/lan_proconnect43-3-25-b.jpg"
    }
  }
]

const createRow = ({
  id,
  title,
  price,
  category,
  count,
  units,
  images,
}) => `
<tr class="table__tbody-tr">
  <td class="table__td table__td--one">${id}</td>
  <td class="table__td">${title}</td>
  <td class="table__td">${category}</td>
  <td class="table__td table__td--four">${units}</td>
  <td class="table__td table__td--five">${count}</td>
  <td class="table__td table__td--six">${price}</td>
  <td class="table__td table__td--seven">${price * count}</td>
  <td class="table__td table__td--eight">
  <button type="button" class="${images ? `img` : `no-img`}"></button>
  </td>
  <td class="table__td table__td--nine">
  <button type="button" class="edit-button"></button>
  </td>
  <td class="table__td table__td--ten">
  <button type="button" class="basket"></button>
  </td>
</tr>
`;

const renderGoods = (data) => {
  let table = document.querySelector('.table__tbody');
  data.map((item) => {
    return table.insertAdjacentHTML('afterbegin', createRow(item));
  });
}
renderGoods(serverData);

const modalOpen = document.querySelector('.table-top__modal');
const modal = document.querySelector('.modal');

modalOpen.addEventListener('click', () => {
  modal.classList.add('modal--active');
});

const modalWindow = document.querySelector('.modal__window');

modal.addEventListener('click', e => {
  if (e.target === modal || e.target.classList.contains('modal__close')) {
    modal.classList.remove('modal--active');
  }
});


const tBody = document.querySelector('.table__tbody');

tBody.addEventListener('click', e => {
  if (e.target.closest('.basket')) {
    const delRow = e.target.closest('.table__tbody-tr');
    const tdID = delRow.querySelector('.table__td--one').innerHTML;
    serverData = serverData.filter(item => item.id !== Number(tdID));
    console.log(serverData);
    delRow.remove();
  }
});

const editCheckbox = document.querySelector('.edit__checkbox');
const editInputDiscount = document.querySelector('.edit__input-discount');

editCheckbox.addEventListener('click', e => {
  e.target.checked ? editInputDiscount.disabled = false :
    editInputDiscount.disabled = true;
})