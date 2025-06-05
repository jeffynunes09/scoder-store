# 🛍 Scoder Store - Carrinho de Compras

Este é um projeto de aplicação de carrinho de compras simples, que consome dados da [Fake Store API](https://fakestoreapi.com/). Ele permite listar produtos, adicionar e remover itens do carrinho, visualizar o total da compra e simular uma finalização de pedido.
[Link do projeto ](https://scoder-store.vercel.app/)

---

## 📋 Funcionalidades

- 🔍 **Listagem de Produtos**  
  A aplicação consome dados da **Fake Store API** para exibir uma lista de produtos com informações como imagem, título, descrição e preço.

- ➕➖ **Adicionar / Remover do Carrinho**  
  O usuário pode adicionar um ou mais produtos ao carrinho e também removê-los individualmente.

- 🧾 **Visualização do Carrinho e Total**  
  É possível visualizar todos os itens adicionados ao carrinho, juntamente com o valor total da compra.

- ✅ **Simulação de Compra**  
  Ao clicar em "Finalizar Compra", uma simulação de pedido é realizada, apenas para fins demonstrativos (sem conexão com métodos reais de pagamento).

---

## 🧰 Tecnologias Utilizadas

- **[React](https://reactjs.org/)** com [Vite](https://vitejs.dev/): Framework e bundler para construção da interface SPA.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utilizado para estilização rápida com classes utilitárias.
- **Context API do React**: Usado para o gerenciamento global de estado do carrinho de compras.
- **[React Hook Form](https://react-hook-form.com/)** + [Zod](https://zod.dev/): Para validação de formulários de maneira simples e robusta.
- **TypeScript**: Tipagem estática para maior segurança e manutenção do código.

---

## ▶️ Executando o Projeto Localmente

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
Instale as dependências:

bash
Copiar
Editar
npm install
Inicie o servidor de desenvolvimento:

bash
Copiar
Editar
npm run dev
Acesse em seu navegador:
👉 http://localhost:5173 (ou porta informada no terminal)

🗂 Estrutura do Projeto (Exemplo)
bash
Copiar
Editar
src/
├── components/        # Componentes reutilizáveis como ProductCard, CartModal
├── context/           # Contexto do carrinho
├── pages/             # Páginas principais: Home, Checkout
├── services/          # Conexão com API (Fake Store API)
├── types/             # Tipagens TypeScript
├── utils/             # Funções auxiliares
├── App.tsx            # Componente principal
└── main.tsx           # Ponto de entrada da aplicação
📦 API Utilizada
Fake Store API
Endpoint: https://fakestoreapi.com/products

Exemplo de resposta:

json
Copiar
Editar
{
  "id": 1,
  "title": "Produto Exemplo",
  "price": 29.99,
  "description": "Descrição do produto",
  "category": "categoria",
  "image": "url-da-imagem"
}
📌 Melhorias Futuras
🧾 Integração com API de pagamento real (ex: Stripe)

👤 Cadastro e login de usuários

📱 Layout responsivo aprimorado para dispositivos móveis

🛒 Persistência do carrinho via localStorage

👨‍💻 Autor
Nome: [Seu Nome Aqui]

GitHub: https://github.com/seu-usuario

LinkedIn: [Seu Perfil no LinkedIn]
