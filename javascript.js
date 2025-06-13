// Data for categories and products with colores disponibles
const data = {
  "Ropa Deportiva": [
    { name: "Traje Deportivo Barca Infantil", desc: "Mes que un Club", desc: "Precio: C$280", img: "barca.png" },
    { name: "Camiseta Brazil", desc: "Un poco de zamba en tu estilo.", desc: "Precio: C$380", img: "brasil.png" },
    { name: "Traje Deportivo Real Madrid Infantil", desc: "Hala Madrid", desc: "Precio: C$280", img: "real-madrid.png" }
  ],
  "Gorras": [
  { name: "Gorra Snapback", desc: "Gorra ajustable con diseño moderno.", img: "gorra.png"},
  ],
  "Pantalones": [
    { name: "Pantalón Cargo Mujer", desc: "Con múltiples bolsillos útiles.", desc: "C$700", img: "cargo.png" },
    { name: "Pantalón Vestir Hombre", desc: "Casual y elegante para el día a día.", desc: "C$700", img: "pantalon-vestir.png" },
    { name: "Pantalon Jeans", desc: "Ideal para el dia a dia", desc: "C$700", img: "pantalon-vestir2.png"},
    { name: "Pantalón Vestir Hombre", desc: "Cómodo para actividades al aire libre.", desc: "C$550", img: "pantalon-vestir3.png" },
    { name: "Pantalón Jeans", desc: "Para actividades diarias.", desc: "C$550", img: "pantalon-vestir4.png" }
  ],
  "Camisas": [
    { name: "Camisas Pyscho Bunny", desc: "Perfecta para uso diario y trabajo.", colors: ["ffffff", "#010000", "#cd0e0e", "#0104c6"], desc: "Precio: C$380", img: "camisas-sports.png" },
    { name: "Camisas Sport Pyscho Bunny", desc: "Ideal para ocasiones formales.", colors: ["ffffff", "#010000", "#cd0e0e", "#0104c6", "#e276ae"], desc: "Precio: C$520", img: "camisas-formales.png" },
    { name: "Camisa de Manga Corta Animada", desc: "Ligera y cómoda para el verano.", desc: "Precio: C$500", img: "animada.png" },
    { name: "Camisa de Manga Corta Animada", desc: "Ligera y cómoda para el verano.", desc: "Precio: C$500", img: "animada2.png" },
    { name: "Camisa de Manga Corta Infantil", desc: "Ligera y cómoda para tu bebé.", desc: "Precio: C$150", img: "camisas-infantiles.png" },
    { name: "Camisa Sport Jhonny Cotton", desc: "Ligeras y cómodas para tus actividades.", colors: ["ffffff", "#010000", "#cd0e0e", "#0104c6"], desc: "Precio: C$550", img: "jonny-camisasport.png" },
    { name: "Camisetas Vineyard Vines", desc: "Para climas frescos y elegantes.", colors: ["ffffff", "#010000", "#cd0e0e", "#0104c6", " #d05749"], desc: "Precio: C$380", img: "camiseta.png" },
    //{ name: "Camisas Sports de Cuello", desc: "Ligera y cómoda para el verano.", colors: ["ffffff", "#070660", "#cf2222", "#e57998"], img: "formal4.png" },
   // { name: "Camisa Sport", desc: "Ligera y cómoda para tus actividades.", img: "sport.png" },
    //{ name: "Camisa Casual", desc: "Perfecta para uso diario y trabajo.", colors:["#ffffff", "#cf2222"], img: "sport3.png" },
    { name: "Crop Top", desc: "Perfectos para uso diario.", colors:["#000000", "#cf2222", "#a98986"], desc: "Precio: C$280", img: "top2.png" },
    { name: "Crop Top", desc: "Ideal para eventos especiales.", colors: ["#FFFFFF","#000000", "#cf2222"], desc: "Precio: C$280", img: "top3.png"},
    { name: "Top Casual", desc: "Perfecto para uso diario.", desc: "Precio: C$280", img: "top5.png" }
  ],
  "Ropa Interior": [
    { name: "Boxer Leopoldo", desc: "Cómodo para usu diario", colors: ["#4f8ee8", "#d74e54", "#050683"], desc: "Precio: C$140", img: "boxer.png" },
    { name: "Boxer Wear Wolf", desc: "Suave y ligero.", colors: ["#4f8ee8", "##050683", "#000000"], desc: "Precio: C$140", img: "boxer2.png" },
    { name: "Boxer Calvin Klein", desc: "Diseño fresco.", colors: ["#050683", "#e84f1a"], desc: "Precio: C$160", img: "boxer3.png" },
    { name: "Boxer Tommy Hilfiger", desc: "Diseño fresco.", colors: ["#050683", "#ffffff", "#d74e54"], desc: "Precio: C$160", img: "boxer4.png" },
    { name: "Boxer Everfit", desc: "Diseño unico.", colors: ["#fe0a1d", "#050683", "#1c8155"], desc: "Precio: C$160", img: "boxer5.png" },
    { name: "Boxer Tommy Hilfiger", desc: "Perfecto para uso diario.", colors: ["#050683", "#d74e54", "#1c8155"], desc: "Precio: C$160", img: "boxer6.png" },
    { name: "Boxer Calvin Klein", desc: "Diseño fresco.", colors: ["#050683", "#d74e54"], desc: "Precio: C$160", img: "boxer7.png" },
    { name: "Calcetines Nike & Tommy Hilfiger", desc: "Suaves y ligeras.", desc: "Precio: C$30 (Par)", img: "calcetas.png" }
  ],
  "Chaquetas & Sueteres": [
    { name: "Chaqueta Jeans", desc: "Elegante y resistente.", desc: "Precio: C$650", img: "chaqueta.png" },
    { name: "Chaqueta Jeans", desc: "Protección contra el sol asegurada.", desc: "Precio: C$650", img: "chaqueta2.png" },
    { name: "Suéter Vineyard Vines", desc: "Comodidad casual.", colors: ["#FFFFFF", "#000000", "#060756", "#d05749", "#890425"], desc: "Precio: C$450", img: "sueter2.png" }
  ],
  "Shorts": [
    { name: "Shorts Casual", desc: "Perfecto para el verano.", colors: [" #968662 ", " #8e9aab", " #15191c "], img: "short2.png" },
    //{ name: "Shorts de Playa", desc: "Ideal para la playa y piscina.", img: "short.png" },
    { name: "Shorts Veraneros Impermeables Polo", desc: "Para tus actividades deportivas.", colors: [" #a1abb6 ", " #a55c24"], desc: "Precio: C$320", img: "short3.png" },
    { name: "Shorts Veraneros Impermeables Jhonny Cotton", desc: "Perfecto para el verano.", colors: ["rgb(255, 255, 255) ", "rgb(0, 0, 0) "], desc: "Precio: C$450", img: "short4.png" },
    { name: "Shorts Estampado", desc: "Ideales para una salidita", desc: "Precio: C$280", img: "pablo.png" },
    { name: "Shorts Estampado", desc: "Ideales para una salidita", desc: "Precio: C$280", img: "cancer.png"},
    //{ name: "Shortds Formales Cargo", desc: "Para tu cita", colors: ["#000000", "#0a5b98"], img: "Shorts"}
  ],
  "Accesorios":[
  { name: "Cartera Prada", desc: "Para tu seguridad monetaria", img: "cartera.png"}
  ],
  "Body's": [
    { name: "Body Victoria's Secret", desc: "Ideal para tu dia a dia.", desc: "Precio: C$700", img: "body.jpg" },
    { name: "Body Victoria's Secret", desc: "Perfecto para el verano.", desc: "Precio: C$700", img: "body2.jpg" }
  ]
};

const categoriesContainer = document.querySelector('.categories-container');
const productsContainer = document.querySelector('.products-container');

let activeCategory = null;

function createCategoryCard(name) {
  const div = document.createElement('div');
  div.classList.add('category-card');
  div.setAttribute('tabindex', '0');
  div.setAttribute('role', 'button');
  div.setAttribute('aria-pressed', 'false');
  div.textContent = name;

  div.addEventListener('click', () => activateCategory(name, div));
  div.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      activateCategory(name, div);
    }
  });

  return div;
}

function activateCategory(name, element) {
  if (activeCategory === name) {
    activeCategory = null;
    element.classList.remove('active');
    element.setAttribute('aria-pressed', 'false');
    clearProducts();
  } else {
    const prevActive = document.querySelector('.category-card.active');
    if (prevActive) {
      prevActive.classList.remove('active');
      prevActive.setAttribute('aria-pressed', 'false');
    }

    activeCategory = name;
    element.classList.add('active');
    element.setAttribute('aria-pressed', 'true');

    productsContainer.innerHTML = '<p class="loading">Cargando productos...</p>';
    setTimeout(() => {
      showProducts(name);
      document.getElementById("productos").scrollIntoView({ behavior: "smooth" });
    }, 300);
  }
}

function openWhatsApp(productName) {
  const phoneNumber = "50557926508"; // Reemplaza con tu número real
  const textMessage = encodeURIComponent(`Hola, estoy interesado en el producto: ${productName}`);
  const url = `https://wa.me/${phoneNumber}?text=${textMessage}`;
  window.open(url, '_blank');
}

function showProducts(category) {
  productsContainer.style.opacity = '0';

  setTimeout(() => {
    productsContainer.innerHTML = '';

    const prods = data[category];
    if (!prods || prods.length === 0) {
      const noProductsMsg = document.createElement('p');
      noProductsMsg.textContent = 'No hay productos en esta categoría.';
      noProductsMsg.style.color = '#666';
      noProductsMsg.style.fontStyle = 'italic';
      productsContainer.appendChild(noProductsMsg);
    } else {
      prods.forEach(prod => {
        const prodCard = document.createElement('div');
        prodCard.classList.add('product-card');
        prodCard.setAttribute('role', 'listitem');

        const prodImg = document.createElement('img');
        prodImg.classList.add('product-image');
        if (prod.img) {
          prodImg.loading = 'lazy';
          prodImg.src = `img/${prod.img}`;
          prodImg.alt = prod.name;
        } else {
          prodImg.src = 'img/placeholder.png'; // Opcional: imagen genérica si falta
          prodImg.alt = 'Imagen no disponible';
        }

        const prodName = document.createElement('div');
        prodName.classList.add('product-name');
        prodName.textContent = prod.name;

        const prodDesc = document.createElement('div');
        prodDesc.classList.add('product-desc');
        prodDesc.textContent = prod.desc;

        const colorsContainer = document.createElement('div');
        colorsContainer.classList.add('color-options');
        if (prod.colors) {
          prod.colors.forEach(color => {
            const dot = document.createElement('div');
            dot.classList.add('color-dot');
            dot.title = color;
            dot.setAttribute('aria-label', `Color disponible: ${color}`);
            dot.style.backgroundColor = color;
            colorsContainer.appendChild(dot);
          });
        }

        const whatsappBtn = document.createElement('button');
        whatsappBtn.classList.add('whatsapp-button');
        whatsappBtn.setAttribute('aria-label', `Contactar por WhatsApp para producto ${prod.name}`);
        whatsappBtn.innerHTML = `<span class="whatsapp-icon">📱</span> WhatsApp`;
        whatsappBtn.addEventListener('click', () => openWhatsApp(prod.name));

        prodCard.appendChild(prodImg);
        prodCard.appendChild(prodName);
        prodCard.appendChild(prodDesc);
        prodCard.appendChild(colorsContainer);
        prodCard.appendChild(whatsappBtn);

        productsContainer.appendChild(prodCard);
      });
    }
    productsContainer.style.opacity = '1';
  }, 250);
}

function clearProducts() {
  productsContainer.style.opacity = '0';
  setTimeout(() => {
    productsContainer.innerHTML = '';
    productsContainer.style.opacity = '1';
  }, 250);
}

// Inicializar categorías
Object.keys(data).forEach(cat => {
  const card = createCategoryCard(cat);
  categoriesContainer.appendChild(card);
});
// Después de inicializar categorías, agregá:
activateCategory('Ropa Deportiva', document.querySelector('.category-card'));

