/*
  COMO ADICIONAR OU EDITAR PRODUTOS:
  1. Copie um bloco de produto abaixo.
  2. Troque nome, categoria, imagem e link.
  3. Coloque as fotos dentro da pasta assets.
  4. Use caminhos como "assets/produto-01.jpg".
  DICA: o link deve ser seu link completo de afiliado (começando com https://).
*/

const products = [
  {
    name: "Kit com 3 regatas americanas",
    category: "Moda",
    image: "assets/produto-01.jpg",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Vestido vermelho curto",
    category: "Moda feminina",
    image: "assets/produto-02.jpg",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Achadinho para o dia a dia",
    category: "Achadinhos",
    image: "assets/produto-03.jpg",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Produto favorito",
    category: "Casa e utilidades",
    image: "assets/produto-04.jpg",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Mais um achadinho",
    category: "Beleza",
    image: "assets/produto-05.jpg",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Oferta que vale conferir",
    category: "Ofertas",
    image: "assets/produto-06.jpg",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  }
];

const grid = document.getElementById("product-grid");
const count = document.getElementById("item-count");

function renderProducts() {
  grid.innerHTML = "";
  count.textContent = `${products.length} ${products.length === 1 ? "item" : "itens"}`;

  products.forEach((product) => {
    const card = document.createElement("a");
    card.className = "product-card";
    card.href = product.link;
    card.target = "_blank";
    card.rel = "noopener noreferrer sponsored";
    card.setAttribute("aria-label", `Ver ${product.name}`);

    const imageWrap = document.createElement("div");
    imageWrap.className = "product-image-wrap";

    const img = document.createElement("img");
    img.className = "product-image";
    img.src = product.image;
    img.alt = product.name;
    img.loading = "lazy";
    img.onerror = () => {
      img.src = "assets/placeholder.svg";
    };

    const info = document.createElement("div");
    info.className = "product-info";

    const category = document.createElement("span");
    category.className = "product-category";
    category.textContent = product.category;

    const name = document.createElement("span");
    name.className = "product-name";
    name.textContent = product.name;

    const cta = document.createElement("span");
    cta.className = "product-cta";
    cta.innerHTML = 'Ver produto <span aria-hidden="true">↗</span>';

    imageWrap.appendChild(img);
    info.append(category, name, cta);
    card.append(imageWrap, info);
    grid.appendChild(card);
  });
}

renderProducts();
