const jsonData = {
    products: [
      {
        name: "Casio",
        price: 10,
        img: "img/img1.png",
        description: "Если вы решили купить «какие-то» часы Casio, то наверняка сразу стремитесь получить информацию об отзывах от настоящих владельцев. Как бы решение понятное, но что делать если часов больше тысячи? Нет, не так — больше десяти тысяч? В 90% случаев отзывы пишут недовольные владельцы, а как же тогда дела у довольных? У Casio очень, очень много часов разных поколений и стилей. Неужели отзыв “хорошие часы за свои деньги” сыграет решающую роль в финальном выборе? Вот и мы так считаем. На каждый товар найдётся свой покупатель и удовлетоворение от покупки у каждого свое."
      },
      {
        name: "IWC",
        price: 25000,
        img: "img/img2.jpeg",
        description: "Что касается механизмов, то IWC никогда не была лидером в области инноваций, в отличие от других швейцарских производителей в высшем эшелоне. Но после того, как в 1985 году был выпущен вечный календарь Да Винчи, на мануфактуре в Шаффхаузене все начало меняться. «Grande Complication», еще более сложный «Il Destriero Scafusia» и «Doppelchronograph» с модулем, разработанным Хабрингом в 1990-х годах, были яркими примерами мастерства бренда в области механизмов."
      }
    ]
  };
  const urlParams = new URLSearchParams(window.location.search);
  const index = urlParams.get('index');

  const product = jsonData.products[index];

  const generateProductDetailsHTML = (product) => {
    return `
      <div class="product-details">
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Цена: $${product.price}</p>
        <p class="product-description">${product.description}</p>
      </div>
    `;
  };

  const productContainer = document.createElement("div");
  productContainer.innerHTML = generateProductDetailsHTML(product);
  document.body.appendChild(productContainer);

  var images = document.querySelectorAll('img');
  images.forEach(function(img) {
      img.addEventListener('mouseover', function() {
          this.style.transform = 'scale(1.5)';
      });

      img.addEventListener('mouseout', function() {
          this.style.transform = 'scale(1)';
      });
  });

  function disableSelectCopy(e) {
      var pressedKey = String.fromCharCode(e.keyCode).toLowerCase();
      if ((e.ctrlKey && (pressedKey == "c" || pressedKey == "x" || pressedKey == "v" || pressedKey == "a" || pressedKey == "u")) ||  e.keyCode == 123) {
          alert("copy/paste disallow")
          return false;
      }
  }
  document.onkeydown = disableSelectCopy;

  document.addEventListener('DOMContentLoaded', function() {
    var body = document.body;
    body.style.animation = 'fadeIn 1s';
    body.style.opacity = 1;
  });