<h1 align="center">
<a href="http://kabum-clone-five.vercel.app/">
  <img src="https://res.cloudinary.com/dtz06cfki/image/upload/v1658323016/capa_bhvp5z.jpg" alt="Kabum" />
</a>
</h1>

<p align="center">
  Este projeto foi desenvolvido para o teste de Front-end do KaBuM! Você pode testar em <a href="https://kabum-clone-five.vercel.app" target="_blank">Kabum Clone</a>.
</p>

<p align="center">
  <img src="https://res.cloudinary.com/dtz06cfki/image/upload/v1658323149/mockup_isk9ug.png" alt="Mockup Kabum" />
</p>

## 💻 Projeto

- Os dados foram consumidos de uma [mockAPI](https://mockapi.io/)
- Layout base do projeto: [Figma-base](https://www.figma.com/file/XQ1KqEcyYtdw0GRcu4MkPf/kabum-home?node-id=0%3A1)
  - Para construir o responsivo foi criado um rascunho no [Figma](https://www.figma.com/file/fFqF4S10zZvJZqjqlcIXaR/Kabum-Home-(Rascunho)?node-id=0%3A1)
- Os componentes da aplicação foram documentados e testados com [Storybook](http://kabum-storybook.vercel.app/)
- As etapas de desenvolvimento seguiram um template de TodoList do [Notion](https://silken-message-5cf.notion.site/f6fbdfef9b654d1395f1d274c379674f?v=7ef50b80b1024434829c06a2415cf0a0)

## ✨ Tecnologias

Foram utilizadas as seguintes tecnologias:

<a href="https://nextjs.org">
  <img width="60" title="NextJs" src="https://res.cloudinary.com/dtz06cfki/image/upload/v1658221602/kabum/next_s4ls0i.png" alt="Next Logo">
</a> &nbsp;  &nbsp; 


<a href="https://www.typescriptlang.org">
  <img width="60" title="Typescript" src="https://res.cloudinary.com/dtz06cfki/image/upload/v1658221602/kabum/ts_pscmln.png" alt="Typescript Logo" >
</a> &nbsp;  &nbsp; 


<a href="https://styled-components.com">
  <img width="60" title="Styled Components" src="https://res.cloudinary.com/dtz06cfki/image/upload/v1658221602/kabum/styled_ohdgkt.png" alt="Styled Components Logo" >
</a> &nbsp;  &nbsp; 

<a href="https://storybook.js.org/">
  <img  width="60" title="Storybook" alt="Storybook Logo" src="https://res.cloudinary.com/dtz06cfki/image/upload/v1658221602/kabum/storybook_r43i14.png">
</a> &nbsp; 

<a href="https://axios-http.com/ptbr/docs/intro">
  <img  width="60" title="Axios" alt="Axios Logo" src="https://res.cloudinary.com/dtz06cfki/image/upload/v1658221602/kabum/axios_ldoetw.png">
</a> &nbsp; 

<a href="https://eslint.org">
  <img  width="60" title="Eslint" alt="Eslint Logo" src="https://res.cloudinary.com/dtz06cfki/image/upload/v1658221602/kabum/eslint_bkagnj.png">
</a> &nbsp; 

<a href="https://prettier.io/">
  <img  width="60" title="Prettier" alt="Prettier Logo" src="https://res.cloudinary.com/dtz06cfki/image/upload/v1658221602/kabum/prettier_cp4meu.png">
</a> &nbsp; 

<a href="https://www.nvaccess.org/">
  <img  width="60" title="NVDA" alt="NVDA Logo" src="https://res.cloudinary.com/dtz06cfki/image/upload/v1658221602/kabum/nvda_ynxehz.png">
</a> &nbsp; 

<a href="https://cloudinary.com/">
  <img  width="60" title="Cloudinary" alt="Cloudinary Logo" src="https://res.cloudinary.com/dtz06cfki/image/upload/v1658222900/kabum/cloudinary_xu3sy0.png">
</a> &nbsp; 


## 🚀 Como executar

### Clonando o projeto
```bash
$ git clone https://github.com/eduardofiorito/kabum-clone.git
```
### Entrando no diretório
```bash
$ cd kabum-clone
```
### Instalando as dependências
```bash
$ yarn
# ou
$ npm install
```
### Executando o projeto
```bash
$ yarn dev
# ou
$ npm run dev
# O servidor é inicializado em  <http://localhost:3000>
```

## ⚙️ Comandos

- `dev`: executa a aplicação em `localhost:3000`
- `build`: cria a versão de produção
- `start`: inicia um servidor simples com o código de produção pós build
- `lint`: executa o linter em todos os componentes e páginas
- `storybook`: executa o storybook no `localhost:6006`
- `build-storybook`: cria o build do storybook
- `typecheck`:  verifica as tipagens do TS


## 📱 Responsivo

- O projeto foi construído pensando em vários tamanhos de dispositivos;
- No componente Banner foram utilizados os atributos `srcSet` e `sizes`, visando ter um tamanho de imagem adequado para breakpoints inferiores. Tendo impacto positivo no desempenho, por carregar imagens menores em telas mobile;

<p align="center">
  <img src="https://res.cloudinary.com/dtz06cfki/image/upload/v1658324715/responsivo_m9eoc7.jpg" alt="Responsivo" />
</p>

## 📖 Storybook
- O Storybook permite a visualização e teste de todos os componentes, com suas respectivas variações (tema claro ou escuro, tamanho de tela para mobile, tablet, fullscreen, etc).
- Você pode testar em [Storybook Kabum](https://kabum-storybook.vercel.app/)

## 📊 Testes

### ☢️ Google Lighthouse

- Os elementos `[aria-hidden="true"]` contêm descendentes focalizáveis
  - O React slick por padrão apresenta esse problema, mas isso não interferiu a navegação entre os elementos do carrossel
- As cores de primeiro e segundo plano não têm uma taxa de contraste suficiente
  - A cor de background `#FF6500` não tem o contraste suficiente de  4.5:1 do WCAG. Uma alternativa seria criar um tema dark/alto contraste, onde essa cor teria melhor legibilidade.

<p align="center">
  <img src="https://res.cloudinary.com/dtz06cfki/image/upload/v1658228080/kabum/lighthouse_dd2xa0.png" alt="Teste Lighthouse" />
</p>

### 🌳 Accessibility tree
<p align="center">
  <img src="https://res.cloudinary.com/dtz06cfki/image/upload/v1658228404/tree_hrx0rt.png" alt=""/>
</p>

### ⌨️ Navegação por teclado
<p align="center">
  Botão de navegação para o conteúdo principal
</p>
<p align="center">
  <img src="https://res.cloudinary.com/dtz06cfki/image/upload/v1658229036/kabum/image_69_doxe6u.jpg" alt=""/>
</p>

<p align="center">
  Foco no botão de abrir o menu lateral
</p>
<p align="center">
  <img src="https://res.cloudinary.com/dtz06cfki/image/upload/v1658229036/kabum/image_72_mvuarr.jpg" alt=""/>
</p>

<p align="center">
  Navegação no menu lateral
</p>
<p align="center">
  <img src="https://res.cloudinary.com/dtz06cfki/image/upload/v1658229218/kabum/image_71_o3cyvy.jpg" alt=""/>
</p>

<p align="center">
  Navegação no Dropdown
</p>

<p align="center">
  <img src="https://res.cloudinary.com/dtz06cfki/image/upload/v1658229036/kabum/image_70_q2xytp.jpg" alt=""/>
</p>


<p align="center">
  Navegação no carrossel de produtos
</p>

<p align="center">
  <img src="https://res.cloudinary.com/dtz06cfki/image/upload/v1658229036/kabum/image_73_nsdki7.jpg" alt=""/>
</p>

### 🖥️ Leitor de tela (NVDA)

<p align="center">
  <img src="https://res.cloudinary.com/dtz06cfki/image/upload/v1658229873/kabum/nvda_j86r5n.png" alt=""/>
</p>
<p align="center">
  Texto narrado pelo NVDA no produto
</p>

### 🔎 SEO

- Foi criado um componente Meta para passar as meta-tags dinâmicas, como: meta-descrição, open-graph, twitter, etc... Dentro da criação do Template da página.
- As tags não dinâmicas foram inseridas diretamente no `_document.tsx`

<p align="center">
  <img src="https://res.cloudinary.com/dtz06cfki/image/upload/v1658231057/kabum/seo_qbxrit.png" alt="SEO"/>
</p>
<p align="center">
  Teste de SEO com Google Lighthouse
</p>
