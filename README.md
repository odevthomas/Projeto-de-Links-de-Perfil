# Projeto de Links de Perfil (React, TypeScript, Vite)

Este projeto foi criado utilizando **React**, **TypeScript** e **Vite**. Ele exibe uma seção de perfil com informações pessoais, links sociais e habilidades, incluindo animações interativas usando a biblioteca **Framer Motion** e ícones da biblioteca **Lucide React**.

## Visão Geral

Este projeto tem como objetivo apresentar um componente de perfil personalizável, onde você pode adicionar informações como nome, título, bio, links sociais e habilidades técnicas. O design é responsivo e utiliza **Tailwind CSS** para estilização.

## Tecnologias Usadas

- **React**: Biblioteca JavaScript para a construção da interface do usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Vite**: Ferramenta de build que melhora a experiência de desenvolvimento com carregamento rápido.
- **Framer Motion**: Biblioteca para animações de alta performance no React.
- **Lucide React**: Conjunto de ícones para uso em React.
- **Tailwind CSS**: Framework CSS utilitário para criar interfaces responsivas e customizáveis rapidamente.

## Como Rodar o Projeto

### 1. Clonar o repositório

Primeiro, clone o repositório para sua máquina local.

```bash
git clone https://github.com/SEU_USUARIO/projeto-links-perfil.git
```

### 2. Instalar as dependências

Navegue até o diretório do projeto e instale as dependências.

```bash
cd projeto-links-perfil
npm install
```

### 3. Rodar o servidor de desenvolvimento

Agora, inicie o servidor de desenvolvimento para visualizar o projeto em seu navegador.

```bash
npm run dev
```

O servidor será iniciado no endereço `http://localhost:3000` (ou outro, dependendo da sua configuração). Abra o navegador e veja o componente de perfil em funcionamento!

## Estrutura do Projeto

O projeto tem a seguinte estrutura de arquivos:

```bash
/projeto-links-perfil
├── /src
│   ├── /assets
│   │   └── logo.png            # Imagem do perfil
│   ├── /components
│   │   └── ProfileSection.tsx  # Componente principal
│   ├── /styles
│   │   └── tailwind.css        # Arquivo de configuração do Tailwind
│   ├── App.tsx                 # Componente raiz do React
│   ├── main.tsx                # Arquivo de entrada do Vite
│   └── index.css               # Estilos globais
├── index.html                  # HTML principal
├── package.json                # Dependências do projeto
├── tsconfig.json               # Configuração do TypeScript
└── vite.config.ts              # Configuração do Vite
```

## Personalizando o Componente

O componente `ProfileSection` pode ser facilmente personalizado:

- **Nome**: Modifique o valor da prop `name` para alterar o nome exibido.
- **Título**: Altere a prop `title` para personalizar o título profissional.
- **Bio**: Altere a prop `bio` para atualizar a descrição.
- **Avatar**: Altere a prop `avatarUrl` para usar uma nova imagem de perfil.
- **Links Sociais**: Personalize os links do LinkedIn, GitHub e Twitter através da prop `socialLinks`.
- **Habilidades**: Adicione ou remova habilidades modificando a prop `skills`.

Exemplo de uso:

```tsx
<ProfileSection
  name="João da Silva"
  title="Desenvolvedor Frontend"
  bio="Apaixonado por criar interfaces rápidas e eficientes."
  avatarUrl="/assets/avatar.png"
  socialLinks={{
    linkedin: "https://linkedin.com/in/joaodasilva",
    github: "https://github.com/joaodasilva",
    twitter: "https://twitter.com/joaodasilva"
  }}
  skills={["React", "TypeScript", "CSS"]}
/>
```

## Contribuindo

Se você deseja contribuir para este projeto, fique à vontade para abrir um **Pull Request** ou **Issue**. Todo tipo de contribuição é bem-vinda!

1. Faça um fork deste repositório.
2. Crie uma branch para a sua feature (`git checkout -b minha-feature`).
3. Faça as modificações e commite com uma mensagem explicativa (`git commit -m 'Adiciona nova funcionalidade'`).
4. Envie para o repositório remoto (`git push origin minha-feature`).
5. Abra um **Pull Request**.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
