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
    name: "Airpods",
    category: "Eletrônicos",
    image: "assets/airpods.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Tênis Casual ",
    category: "Tênis",
    image: "assets/samba.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Copo Térmico Garrafa - Stanley",
    category: "Copos",
    image: "assets/stanley.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Mini JBL Original",
    category: "Eletrônicos",
    image: "assets/jbl.png", 
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Poedagar Digital",
    category: "Acessórios de Grife",
    image: "assets/poedagar.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Tablet Apple iPad",
    category: "Tablets",
    image: "assets/Ipad.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Tênis Vans Knu Skool",
    category: "Tenis",
    image: "assets/vans.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Apple Watch Original",
    category: "Eletrônicos",
    image: "assets/apple.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Bolsa Just Do It - NIKE",
    category: "Bolsas",
    image: "assets/bolsa.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "RL bear Bordadas",
    category: "Camisas e moletons",
    image: "assets/bear.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Camisa Polo ",
    category: "Camisa e Moletons",
    image: "assets/camisapolo.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Polo Ralph Lauren",
    category: "Camisas e Moletons",
    image: "assets/polomoletom.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Polo Listrada",
    category: "Camisas e Moletons",
    image: "assets/pololistrada.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Boné Polo Original",
    category: "bonés",
    image: "assets/polobone.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Console Portatil 6,3 POLEG ",
    category: "Eletrônicos",
    image: "assets/console.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "SmartWatch",
    category: "Eletrônicos",
    image: "assets/smartwatch.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Calça Jeans Reta",
    category: "Calças",
    image: "assets/calçareta.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Calça Jeans Cargo",
    category: "Calças",
    image: "assets/calçajeans.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Pods Max Fone de Ouvido",
    category: "Eletrônicos",
    image: "assets/pods.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Birken Couro Ecológico",
    category: "Sandálias",
    image: "assets/birken.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Chinelo As 2.0",
    category: "Chinelos ",
    image: "assets/chineloas.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Suéter Ralph Lauren",
    category: "Suéters",
    image: "assets/sueter.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Blusão Polo Linho",
    category: "Blusas",
    image: "assets/linho.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Polo Angels",
    category: "Camisas ",
    image: "assets/poloangels.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Moleton cdg",
    category: "Moletons ",
    image: "assets/moletoncdg.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Tenis Unisex Clean White",
    category: "Tênis",
    image: "assets/nikeair.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Calça Balão Jeans",
    category: "Calças",
    image: "assets/calçabalao.png",
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
