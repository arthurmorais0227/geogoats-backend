# GeoGoats — Projeto Integrador (SENAI + SESI) **BACK-END**

![Status do Projeto](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)

## Sobre o Projeto

Este projeto é fruto do **Projeto Integrador Final** do curso **Técnico em Desenvolvimento de Sistemas (SENAI/SESI Valinhos)**. Trata-se de um **Portal Educacional Web de Geografia** voltado ao Ensino Médio, que reúne conteúdos educativos, notícias, dicas de estudo, informações sobre carreiras e estágios, simulados interativos e vídeos educativos — todos relacionados à disciplina de Geografia.

O portal foi concebido para resolver a fragmentação e a desatualização das informações sobre Geografia disponíveis para alunos do Ensino Médio, oferecendo um ambiente único, dinâmico e confiável que fortalece o aprendizado, o interesse pela disciplina e a preparação dos alunos para vestibulares e para o mundo do trabalho.

A aplicação é moderna, responsiva e integrada a um banco de dados **PostgreSQL**, com **painel administrativo protegido por autenticação via Clerk** para gerenciamento de notícias (CRUD completo). O projeto é versionado no **GitHub** (repositórios de Front-end e Back-end), testado com **Cypress** e publicado em produção.

### Objetivo Principal

Desenvolver e publicar um Portal Educacional de Geografia completo, funcional e responsivo, que centralize notícias, conteúdos educativos, dicas de estudo, informações sobre carreiras e estágios, simulados interativos e vídeos, demonstrando o domínio técnico da equipe nas tecnologias estudadas.

### Público-Alvo

Alunos do Ensino Médio (especialmente da rede SESI/SENAI), professores de Geografia e demais interessados em geografia, geologia e áreas correlatas. O portal também atende estudantes em preparação para vestibulares e para o mercado de trabalho.

---

## Tecnologias Utilizadas

### Backend
- **Runtime:** Node.js
- **Arquitetura:** API REST / Route Handlers (Next.js)
- **ORM:** Prisma
- **Banco de Dados:** PostgreSQL
- **Autenticação:** Clerk

### Frontend
- **Framework:** Next.js 16 (App Router, estrutura `src/`)
- **Biblioteca de UI:** React (JavaScript — sem TypeScript)
- **Estilização:** Tailwind CSS / CSS Modules
- **Notificações:** React Toastify
- **Requisições HTTP:** Axios / Fetch
- **Testes E2E:** Cypress

### Deploy
- **Front-end:** Vercel *(pendente)*
- **Back-end:** Render *(pendente)*
- **Banco de Dados:** Neon / Supabase *(pendente)*

---

## Nossa Equipe

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/lisboathecoder" title="Gustavo Lisboa">
        <img src="https://github.com/lisboathecoder.png" width="100px;" alt="Foto do Gustavo Lisboa no GitHub"/><br>
        <sub>
          <b>Gustavo Lisboa</b><br>
          <i>Product Owner · Gerente de Projeto · Dev Back-End</i>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Jvsilvagomes" title="João Victor">
        <img src="https://github.com/Jvsilvagomes.png" width="100px;" alt="Foto do João Victor"/><br>
        <sub>
          <b>João Victor</b><br>
          <i>Dev · Designer de Back-End</i>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/arthurmorais0227" title="Arthur Morais">
        <img src="https://github.com/arthurmorais0227.png" width="100px;" alt="Foto do Arthur Morais"/><br>
        <sub>
          <b>Arthur Morais</b><br>
          <i>Dev Front-End · Dev Back-End</i>
        </sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/Rafael-1108" title="Rafael Mendes">
        <img src="https://github.com/Rafael-1108.png" width="100px;" alt="Foto do Rafael Mendes"/><br>
        <sub>
          <b>Rafael Mendes</b><br>
          <i>Dev · Analista de Qualidade</i>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#" title="Fabio Henrique">
        <img src="https://github.com/Fabiox7778.png" width="100px;" alt="Foto de Fabio Henrique"/><br>
        <sub>
          <b>Fabio Henrique</b><br>
          <i>Scrum Master · Dev Front-End</i>
        </sub>
      </a>
    </td>
  </tr>
</table>

---

## Repositórios

| Camada | Repositório |
| --- | --- |
| **Back-end** | [github.com/arthurmorais0227/geogoats-backend](https://github.com/arthurmorais0227/geogoats-backend) |
| **Front-end** | [github.com/arthurmorais0227/geogoats-frontend](https://github.com/arthurmorais0227/geogoats-frontend) |

---

## Como Executar o Projeto Localmente

### Pré-requisitos

- **Node.js** instalado (versão LTS recomendada)
- **PostgreSQL** configurado (local ou serviço em nuvem — Neon/Supabase)
- Conta no **Clerk** configurada (chaves de API)
- **Git** instalado

### Passo a passo

1. **Clonar os repositórios**

   ```bash
   # Back-end
   git clone https://github.com/arthurmorais0227/geogoats-backend

   # Front-end
   git clone https://github.com/arthurmorais0227/geogoats-frontend
   ```

2. **Configurar o Back-end**

   ```bash
   cd geogoats-backend
   npm install
   # Configure suas variáveis de ambiente no arquivo .env
   # Ex.: DATABASE_URL, CLERK_SECRET_KEY, CLERK_PUBLISHABLE_KEY
   npx prisma migrate dev
   npm run dev
   ```

3. **Configurar o Front-end**

   ```bash
   cd ../geogoats-frontend
   npm install
   # Configure suas variáveis de ambiente no arquivo .env.local
   # Ex.: NEXT_PUBLIC_API_URL, NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY, CLERK_SECRET_KEY
   npm run dev
   ```

4. **Acessar a aplicação**

   Abra o navegador em [http://localhost:3000](http://localhost:3000) (ou a porta indicada pelo Next.js).

### Variáveis de Ambiente (exemplo)

```env
# Back-end (.env)
DATABASE_URL="postgresql://usuario:senha@host:5432/geogoats"
CLERK_SECRET_KEY="sk_test_..."
CLERK_PUBLISHABLE_KEY="pk_test_..."

# Front-end (.env.local)
NEXT_PUBLIC_API_URL="http://localhost:3001"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."
```

> ⚠️ **Atenção:** nunca commite o arquivo `.env` no repositório. Utilize `.gitignore` e mantenha as credenciais seguras (RNF03 / RN01.1).

---

## Como Testar Online

> ⏳ **Deploy em andamento.** As URLs de produção (Vercel) e de API (Render) serão publicadas nesta seção assim que os deploys forem concluídos.

Quando disponíveis:

1. **Front-end (Vercel):** acesso público ao portal.
2. **Back-end (Render):** endpoints da API REST — recomendamos o uso do **Postman** para explorar os recursos.

---

## Testes Automatizados (Cypress)

O projeto contempla o **teste E2E obrigatório** com Cypress, cobrindo o fluxo completo:

1. Acesso ao portal e navegação até a página de login administrativo.
2. Login com Clerk (conta administrativa de teste).
3. Acesso ao painel administrativo protegido.
4. Cadastro de uma nova notícia via formulário.
5. Validação da persistência real no PostgreSQL via Prisma.
6. Consulta pública da notícia cadastrada.
7. Validação do detalhamento (título, imagem, data e conteúdo).

> **Regra:** o teste **não utiliza mocks** para simular o sucesso do cadastro — comprova a integração real entre Front-end, Back-end, Prisma e PostgreSQL (RN05.1).

Para executar localmente:

```bash
cd geogoats-frontend
npx cypress open
# ou
npx cypress run
```

---

<p align="center">
  <b>🎓 Projeto Integrador Final — Técnico em Desenvolvimento de Sistemas</b><br>
  SESI/SENAI Valinhos · 2026 <br>
  <i>Docentes: Thiago Ferreira · Marcelo Carboni · Guilherme Menna</i>
</p>