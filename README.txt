LANDING PAGE DE AFILIADOS - TIKTOK

ESTRUTURA
- index.html       estrutura da página
- style.css        cores, fontes e layout responsivo
- script.js        lista de produtos e respectivos links
- assets/          fotos de perfil e produtos

COMO PERSONALIZAR
1. Abra a pasta no VS Code.
2. Coloque sua foto de perfil em assets e nomeie como perfil.jpg.
3. No index.html, troque:
   src="assets/perfil.svg"
   por:
   src="assets/perfil.jpg"
4. Coloque as fotos dos produtos dentro de assets:
   produto-01.jpg, produto-02.jpg, etc.
   (Pode usar .png ou .webp, mas atualize o nome no script.js.)
5. Abra script.js e, em cada produto, altere:
   - name: nome do produto
   - category: categoria
   - image: caminho da foto
   - link: seu link de afiliado
6. Para adicionar mais produtos, copie um objeto inteiro dentro da lista products,
   respeitando as vírgulas entre os objetos.

TESTAR LOCALMENTE
- No VS Code, instale a extensão "Live Server".
- Clique com o botão direito em index.html e escolha "Open with Live Server".
- Teste os cartões no celular e no computador.

PUBLICAR NA VERCEL
Opção simples:
1. Crie uma conta em vercel.com e entre.
2. Envie o projeto para um repositório GitHub.
3. Na Vercel, clique em Add New > Project.
4. Importe o repositório.
5. Como é um site estático, não precisa configurar framework nem build command.
   Deixe o Output Directory vazio ou como "." se a Vercel solicitar.
6. Clique em Deploy.
7. Copie o endereço gerado e coloque na bio do TikTok.

IMPORTANTE
- Os links de exemplo não funcionam: substitua todos pelos seus links reais.
- Use fotos que você tem autorização para publicar.
- A página informa que alguns links podem ser de afiliado.
- Não apague a pasta assets: ela contém as imagens usadas pela página.
