# Clara Martins — landing page de nutrição

Modelo demonstrativo em React, JavaScript, Vite, Tailwind CSS e Lucide. Layout responsivo em azul, creme e branco. Perfil e conteúdo fictícios; fotos ilustrativas do Unsplash salvas em `public/images/`. As fontes Google Fonts dependem de internet, com fontes alternativas locais.

## Executar

```sh
npm install
npm run dev
```

`npm run build` gera `dist/`. `npm run preview` serve a versão de produção.

## Personalizar

- Em `src/config.js`, altere o nome, `whatsappNumber` (país + DDD + número, apenas dígitos) e a mensagem inicial. Todos os botões utilizam essa configuração. Sem número, abrem um aviso de demonstração; com número, abrem `wa.me` em outra aba.
- Edite textos em `src/components/` e fotos em `src/data/photos.js`. Cada seção tem `index.jsx` e `style.module.css`. Substitua a apresentação fictícia, o nome na assinatura, os metadados de `index.html` e as informações profissionais antes do uso real.
- Estilos globais ficam em `src/style.css`; estilos e responsividade de cada seção ficam no respectivo `style.module.css`.
- Não são coletados dados nem enviados formulários. Não há agenda ou backend; o contato é pelo WhatsApp.

O menu mobile, as perguntas expansíveis e a janela de demonstração funcionam por teclado. As animações respeitam a preferência por movimento reduzido.
