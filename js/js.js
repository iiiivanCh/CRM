"use strict"


const serverData = [
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

const createRow = (arrayObject) => {
  let counter = 0;
  let objectTh = [];
  let tableTh = [];
  const table = document.querySelector('table');
  const tableTr = document.createElement('tr');
  table.append(tableTr);
  for (let key in arrayObject) {
    if (typeof (arrayObject[key]) === 'object') {
      for (let i in arrayObject[key]) {
        counter++;
      }
    }
    else {
      counter++;
    }
  }
  for (let i = 0; i < counter; i++) {
    const tableTrTd = document.createElement('td');
    tableTrTd.innerText = 'не знаю как подставить, чтобы из массива randerGoods вставилось, не понимаю описанную логbre в задании';
    tableTr.append(tableTrTd);
    // console.log(tableTr);
  }

  // console.log(tableTr);
  return tableTr;
}

const renderGoods = (arrayObjects) => {
  const newTr = arrayObjects.map((i, key) => {
    let checkingElementsFirst = Object.values(arrayObjects[key]);
    let newNestedAr = [];
    let newArrItem = [];
    const checkingElementsSecond = checkingElementsFirst.map((item) => {
      if (typeof (item) === 'object') {
        newNestedAr = Object.values(item);
        newArrItem.push(...newNestedAr);
      } else {
        newArrItem.push(item);
      }
    });
    return newArrItem;
  });
  return newTr;
}


const newRow = () => {
  const a = renderGoods(serverData);
  const b = a.map((item) => createRow(item));
  console.log(a);
  console.log(b);
}

newRow();
// createRow(serverData[0]);

// console.log(renderGoods(serverData));