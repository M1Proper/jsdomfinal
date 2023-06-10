const jsonData = {
    products: [
      {
        name: "Casio",
        price: 10,
        img: "img/img1.png",
        description: "Хорошие часы, проверенные временем"
      },
      {
        name: "IWC",
        price: 25000,
        img: "img/img2.jpeg",
        description: "Часы для людей без границ!"
      }
    ]
  };

  const generateProductHTML = (product, index) => {
    return `
      <div class="product">
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Цена: $${product.price}</p>
        <p class="product-description">${product.description}</p>
        <a class="buy-button" href="product.html?index=${index}">Купить</a>
      </div>
    `;
  };

  const generatePageHTML = (jsonData) => {
    const productsHTML = jsonData.products
      .map((product, index) => generateProductHTML(product, index))
      .join("");
    return productsHTML;
  };

  const productsContainer = document.getElementById("products-container");
  const renderedProducts = generatePageHTML(jsonData);
  productsContainer.innerHTML = renderedProducts;

  var images = document.querySelectorAll('img');
  images.forEach(function(img) {
      img.addEventListener('mouseover', function() {
          this.style.transform = 'scale(1.1)';
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
  var key = new Array();
  key['a'] = "contact.html";
  function getKey(keyStroke) {
   isNetscape = (document.layers);
   eventChooser = (isNetscape) ? keyStroke.which : event.keyCode;
   which = String.fromCharCode(eventChooser).toLowerCase();
   for (var i in key) if (which == i) window.location = key[i];
  }
  document.onkeypress = getKey;