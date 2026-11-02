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
    name: "Tênis Feminino Premium",
    category: "Sapatos Femininos",
    image: "assets/tenis.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Óculos Oval Vintage MIU",
    category: "Acessórios de Moda",
    image: "assets/oculos.jpg",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Sandália Crocs Bayaband",
    category: "Crocs",
    image: "assets/crocs.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Bolsa VS",
    category: "Acessórios de Moda",
    image: "assets/bolsa.png", 
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Garrafa Térmica Premium",
    category: "Garrafas de Água e Acessórios",
    image: "assets/garrafa.png",
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
    name: "Tablet Apple iPad",
    category: "Eletrônicos",
    image: "assets/iphone6s.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Tênis Puma Park Lifestyle",
    category: "Pulseiras e Braceletes",
    image: "assets/puma.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Swarovski Gold",
    category: "Acessórios de Moda",
    image: "assets/swarovski.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Coleção Anéis",
    category: "Anéis",
    image: "assets/aneis.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Bolsa LV",
    category: "Bolsas Femininas",
    image: "assets/bolsalv.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Chaveiro Victoria Secret",
    category: "Chaveiros",
    image: "assets/chaveiro.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Kit 4 Quadros Decorativos",
    category: "Decoração",
    image: "assets/quadros.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "MiuMiu Rasteira ",
    category: "Sandálias e Chinelos",
    image: "assets/rasteira.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Conjunto Moletom ",
    category: "Conjuntos",
    image: "assets/conjunto1.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Sandália Melissa Cross M-Lover",
    category: "Sandálias e Chinelos",
    image: "assets/melissa.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Tênis Casual Air",
    category: "Tênis",
    image: "assets/nikeair.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Kit Blow Girl",
    category: "Beleza",
    image: "assets/blow.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Babuche Papete Queen",
    category: "Sandálias",
    image: "assets/maquin.png",
    link: "https://SEU-LINK-DE-AFILIADO-AQUI"
  },
  {
    name: "Bolsa Feminina Elegante V Lux",
    category: "Bolsas",
    image: "assets/COACH.png",
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
