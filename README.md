# Sancin Beauty — Landing Page

Landing page moderna, responsiva e de alta performance desenvolvida para a clínica **Sancin Beauty** (Estética, Sobrancelhas e Bem-Estar).

## 🚀 Tecnologias

- **React 19** + **TypeScript**
- **Vite 6** (Build ultra-rápido)
- **Tailwind CSS v4** (Design refinado e responsivo)
- **Motion** (Microinterações suaves)
- **Lucide Icons** (Ícones elegantes)

---

## 🛠️ Como rodar localmente

1. Clone o repositório:
```bash
git clone <URL_DO_REPOSITORIO>
cd sancin-beauty
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Para gerar o build de produção:
```bash
npm run build
```

---

## 📦 Como fazer Deploy via GitHub e Vercel

### Passo 1: Subir para o GitHub

Se você ainda não iniciou o repositório git localmente:

```bash
git init
git add .
git commit -m "feat: landing page Sancin Beauty pronta para deploy"
git branch -M main
git remote add origin https://github.com/<seu-usuario>/<nome-do-repositorio>.git
git push -u origin main
```

*(Nota: O arquivo `.gitignore` já está configurado para não enviar pastas temporárias como `node_modules` e `dist`)*.

### Passo 2: Publicar na Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login com sua conta do GitHub.
2. Clique em **"Add New..."** > **"Project"**.
3. Selecione o repositório do projeto importado do GitHub.
4. A Vercel detectará automaticamente as configurações:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Clique em **Deploy**.
6. Em menos de 1 minuto, sua landing page estará online com certificado SSL automático e CDN global.

---

## 📁 Estrutura do Projeto

- `src/assets/` — Imagens locais, fotos de procedimentos, antes/depois e o logo da marca.
- `src/components/site/` — Componentes modulares (Hero, Serviços, Comparador Antes/Depois, Depoimentos, FAQ, Logo).
- `src/routes/index.tsx` — Página principal da Landing Page.
- `public/` — Favicon, logos estáticos e arquivo robots.
- `vercel.json` — Configuração para roteamento SPA sem erro 404.
