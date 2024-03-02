# Rocketseat

## <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="20" /> Formação React

### Ignite Timer

Projeto criado com [Vite](https://vitejs.dev/), utilizando o [React](https://react.dev/) com [TypeScript](https://www.typescriptlang.org/).
Se trata de um Pomodoro, um timer para tarefas que o usuário desejar trabalhar. Ele pode inserir o nome da tarefa/projeto e em quanto tempo ele vai trabalhar nisso, indo de 5 a 60 minutos. Além disso, o usuário pode ter acesso ao histórico, onde ele verá tarefas concluídos, em andamento ou interrompidas

---

#### 📚 Estudos

##### Módulo 1

No primeiro módulo de estudos, cria-se a estrutura e design da aplicação, dando ênfase na utilização do [styled-components](https://styled-components.com/) para a estilização do projeto e como podemos utilizar a ferramenta para criação de temas, tipagens e estilos globais. Além disso, nesse módulo aprende-se como podemos utilizar o [ESLint](https://eslint.org/) para a padronização do código

##### Módulo 2

No segundo módulo aprende-se sobre o [React Router DOM](https://reactrouter.com/en/main) para as rotas da nossa aplicação. Nesse módulo, a ênfase vai em como podemos utilizar a ferramenta não só para as rotas, mas também para definição de Layouts padrões da nossa aplicação

##### Módulo 3
No módulo 3, aprende-se sobre o controlamento de formulários, ou seja, como podemos controlar as informações de um formulário para a manipulação dos mesmos. E para trabalhar com formulários, utiliza-se o [React Hook Form](https://react-hook-form.com/) para o controlamento do formulário e o [zod](https://zod.dev/) para as validações do formulário e integração com o TypeScript para a codificação

##### Módulo 4
No módulo 4, criam-se as funcionalidades da nossa aplicação, tais como o início de uma nova tarefa, a exibição do tempo com o 'countdown' e interromper uma tarefa que está ativa. Para isso, nós utilizamos um conceito do React chamado [useEffect](https://react.dev/reference/react/useEffect), onde podemos fazer o monitoramento de variáveis da aplicação e, a partir da mudança dessas variáveis, manipular a nossa aplicação React. Além disso, enfrentamos um dos problemas mais comuns do React, o Prop Drilling

##### Módulo 5
Para resolver o problema do Prop Drilling do módulo anterior, no módulo 5 aprende-se o conceito de [Context](https://react.dev/learn/passing-data-deeply-with-context). Com isso, cria-se o contexto referente à variáveis que são utilizadas por mais de um componente e até entre rotas e utilizamos o [FormProvider](https://react-hook-form.com/docs/formprovider), um contexto do React Hook Form para utilizarmos as variáveis do [useForm](https://react-hook-form.com/docs/useform) nos componentes dentro do formulário. Como funcionalidade principal da aplicação, cria-se a listagem dos ciclos e formatação de data com o [date-fns](https://date-fns.org/)

##### Módulo 6
No último módulo desse projeto, aprende-se sobre o conceito de [Reducers](https://react.dev/learn/extracting-state-logic-into-a-reducer) no React e como podemos utilizar um Reducer para manipular informações mais complexas, onde o conceito de Estados pode não ser o suficiente. Nesse módulo, nós realizamos o refinamento do código, separando as funcionalidades principais (criar ciclo, interromper ciclo e listagem de ciclos) com o uso dos Reducers. Além disso, utilizamos o [immer](https://immerjs.github.io/immer/) uma biblioteca que é utilizada para trabalhar e manipular com dados imutaveis, como os de Estados e Reducers. E, para finalizar a aplicação, realizamos as operações para salvar os ciclos no [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

#### 📝 Requisitos

Para que o projeto funcione da sua máquina, em servidor local, você precisa ter instalado na sua máquina:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)

---

#### ⚙ Configuração e Passo a Passo

Após ter instalado o **Node.js** e o **Git** em sua máquina, basta clonar o repositório, instalar as dependências e abrir o servidor localmente:
```bash
# 1º Passo: Clone o projeto
git clone https://github.com/Gustavo-Nasc/react-training-rocketseat

# 2º Passo: Abrir a pasta do Ignite Feed
cd ignite-timer/

# 3º Passo: Instalar todas as dependências
# Originalmente, utiliza-se o NPM, mas pode optar pelo Yarn, PNPM etc.
npm install

# 4º Passo: Iniciar o servidor
npm run dev

# Aplicação será inicializada na url http://localhost:5173
```