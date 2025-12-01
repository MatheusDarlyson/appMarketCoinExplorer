# 🚀 CryptoTracker

Aplicativo mobile desenvolvido em **React Native + Expo** para listar criptomoedas em tempo real, exibir detalhes individuais e permitir atualização dinâmica dos dados do mercado.

Este projeto faz parte de um desafio técnico cujo objetivo é consumir uma **API pública de criptomoedas**, mostrar listagens, preços, variações e permitir navegação entre telas.

---

## 🧩 Funcionalidades

* ✔️ **Listagem** das principais criptomoedas do mercado
* ✔️ Exibição de **preço atual, variação percentual** e imagem do ativo
* ✔️ **Tela de detalhes** para cada moeda
* ✔️ **Atualização dinâmica** via API
* ✔️ **Loading states** e tratamento de erros
* ✔️ Arquitetura organizada em **hooks, services, screens e components**

---

## 🏗️ Arquitetura do Projeto
```
CryptoTracker/
│
├── src/
│   ├── api/
│   │   └── coinsApi.ts
│   ├── hooks/
│   │   └── useFetchCoins.ts
│   ├── screens/
│   │   ├── HomeScreen.tsx
│   │   └── DetailsScreen.tsx
│   ├── components/
│   │   └── CoinItem.tsx
│   ├── navigation/
│   │   └── AppNavigator.tsx
│   ├── types/
│   │   └── index.ts
│   └── theme/
│       └── colors.ts
│
├── App.tsx
├── package.json
└── README.md
```
---

## 🔌 Tecnologias Utilizadas

* **React Native** (Expo)
* **Typescript**
* **React Navigation**
* **Axios** (requisições HTTP)
* **Expo CLI**
* API pública de criptomoedas (**CoinGecko**)

---

## ⚙️ Instalação e Execução

1️⃣ **Clone o repositório**

```bash
git clone [https://github.com/seu-usuario/CryptoTracker.git](https://github.com/seu-usuario/CryptoTracker.git)
cd CryptoTracker 
```

2️⃣ **Instale as dependências**
npm install
# ou
yarn

3️⃣ Execute o projeto
npx expo start

🌐 API Utilizada
A API usada para buscar os dados de mercado é a CoinGecko API:

https://api.coingecko.com/api/v3/coins/markets

Parâmetros utilizados:

vs_currency

order

per_page

page

sparkline

price_change_percentage

🎨 Design
Paleta de cores simples, limpa e moderna:

Fundo escuro

Cards claros

Destaque visual para variação de preço (verde / vermelho)

🧠 Conceitos Trabalhados
Custom Hooks (useFetchCoins)

Componentização inteligente (CoinItem)

Navegação entre telas (React Navigation)

Consumo de API externa

Tratamento de erros e estado de carregamento

Arquitetura escalável para apps reais
