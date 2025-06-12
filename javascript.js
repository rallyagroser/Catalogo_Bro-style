 // Data for categories and products with colores disponibles
    // Colors are hex codes or CSS color names
    const data = {
      "Calzados": [
        { name: "Zapatos Deportivos", desc: "Cómodos para correr y caminar.", colors: ["#FF5722", "#795548", "#607D8B"] },
        { name: "Botas de Cuero", desc: "Botas resistentes para clima frío.", colors: ["#6D4C41", "#3E2723", "#FFEB3B"] },
        { name: "Sandalias Verano", desc: "Sandalias frescas y ligeras.", colors: ["#FF9800", "#FFC107", "#FFEB3B"] },
        { name: "Sandalias Verano", desc: "Sandalias frescas y ligeras.", colors: ["#FF9800", "#FFC107", "#FFEB3B"] }
    ],
      "Gorras": [
        { name: "Gorra Snapback", desc: "Gorra ajustable con diseño moderno.", colors: ["#3F51B5", "#009688", "#00BCD4"] },
        { name: "Gorra Trucker", desc: "Gorra con malla para ventilación.", colors: ["#9C27B0", "#E91E63", "#673AB7"] },
        { name: "Gorra Beanie", desc: "Gorra para clima frío y casual.", colors: ["#795548", "#607D8B", "#212121"] }
      ],
      "Pantalones": [
        { name: "Pantalón Cargo", desc: "Con múltiples bolsillos útiles.", colors: ["#8BC34A", "#CDDC39", "#689F38"] },
        { name: "Pantalón Chino", desc: "Casual y elegante para el día a día.", colors: ["#FFC107", "#FFEB3B", "#FF9800"] },
        { name: "Shorts Veraniegos", desc: "Cortos perfectos para el verano.", colors: ["#AED581", "#81C784", "#4CAF50"] }
      ],
      "Camisas": [
        { name: "Camisa Casual", desc: "Perfecta para uso diario y trabajo.", colors: ["#2196F3", "#64B5F6", "#BBDEFB"] },
        { name: "Camisa Formal", desc: "Ideal para ocasiones formales.", colors: ["#455A64", "#78909C", "#90A4AE"] },
        { name: "Camisa de Manga Larga", desc: "Para climas frescos y elegantes.", colors: ["#E91E63", "#F06292", "#F8BBD0"] }
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
        // Deselect
        activeCategory = null;
        element.classList.remove('active');
        element.setAttribute('aria-pressed', 'false');
        clearProducts();
      } else {
        // Remove previous active
        const prevActive = document.querySelector('.category-card.active');
        if (prevActive) {
          prevActive.classList.remove('active');
          prevActive.setAttribute('aria-pressed', 'false');
        }

        activeCategory = name;
        element.classList.add('active');
        element.setAttribute('aria-pressed', 'true');

        showProducts(name);// Mostrar animación de carga
        productsContainer.innerHTML = '<p class="loading">Cargando productos...</p>';
        setTimeout(() => {
        showProducts(name);
        document.getElementById("productos").scrollIntoView({ behavior: "smooth" });
        }, 300);

      }
    }

    

    function openWhatsApp(productName) {
      const phoneNumber = "YOUR_PHONE_NUMBER_HERE"; // Reemplaza con tu número sin signos ni espacios, ej: 521234567890
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

            const prodImg = document.createElement('div');
            prodImg.classList.add('product-image');
            prodImg.textContent = "🛍️";

            const prodName = document.createElement('div');
            prodName.classList.add('product-name');
            prodName.textContent = prod.name;

            const prodDesc = document.createElement('div');
            prodDesc.classList.add('product-desc');
            prodDesc.textContent = prod.desc;

            // Colors available
            const colorsContainer = document.createElement('div');
            colorsContainer.classList.add('color-options');
            prod.colors.forEach(color => {
              const dot = document.createElement('div');
              dot.classList.add('color-dot');
              dot.title = color;
              dot.setAttribute('aria-label', `Color disponible: ${color}`);
              dot.style.backgroundColor = color;
              colorsContainer.appendChild(dot);
            });

            // WhatsApp button
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