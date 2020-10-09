---
title: "React Hooks - useEffect e Hooks customizados"
date: 2020-01-28
weight: 79
week: 18
day: 3
---

## O que vamos aprender?

Hoje você vai continuar a aprender **React Hooks**! Na última aula, você estudou o `useState` e o `useContext`. Pois bem. A proposta dos `hooks` é, lembre-se, trazer a componentes funcionais tudo o que componentes de classe fornecem. Para isso, um passo importante é ter as funcionalidades providas pelos _Lifecycle methods_: `componentDidMount`, `componentWillUnmount`, `componentDidUpdate`. Para esses três comportamentos, temos um único hook: o `useEffect`!

Além disso, na aula de hoje, você vai ver o básico sobre criar seus próprios hooks personalizados - o que vai te permitir deixar seu código mais limpo e legível e usar hooks diversos disponibilizados online por outras pessoas.

---

### Você será capaz de:

* Utilizar o _React Hook_ `useEffect`;

* Criar Hooks customizados.

---

## Por que isso é importante?

De posse do conhecimento acerca do `useEffect` e dos Hooks customizados, você terá em mãos as ferramentas para criar componentes funcionais com tudo que os componentes de classe têm. Seu código ficará mais legível, mais sucinto e mais fácil de se entender, e o caminho para o domínio completo dos React Hooks estará aberto.

---

## Conteúdos

###### Tempo sugerido para realização: 80 minutos

Primeiro, para estudarmos o `useEffect`, vamos assistir a este vídeo:

{{< yt id="jcc9T-5inrk" >}}

Achou interessante?! Pois bem. Vamos fixar com a leitura do texto abaixo. **Atenção! Não precisa ler da seção 'Fetch data with useEffect' em diante.**

- {{< extlink text="React Hooks: How to use useEffect()" href="https://medium.com/javascript-in-plain-english/react-hooks-how-to-use-useeffect-ecea3e90d84f">}}

Em resumo:

- O `useEffect` executa, quando disparado, a função que recebe como primeiro parâmetro;
- Se não receber um segundo parâmetro, ele executa a função sempre que o componente é renderizado;
- Se receber um array vazio como segundo parâmetro, ele executa a função somente quando o componente é montado;
- Quando ele recebe um array com valores dentro, sempre que **algum** desses valores é alterado, a função é executada;
- Se ele retorna uma função, essa função é executada quando o componente é desmontado e **também** antes da próxima renderização.

Para fixar, faça um componente funcional React com as seguintes funcionalidades:

- A cada 10 segundos ele gera e exibe na tela um número aleatório de 1 a 100;
- Se o número for múltiplo de 3 ou 5, uma mensagem "Acerto" é exibida na tela;
- A mensagem de acerto é removida 4 segundos depois de ser exibida;
- O timer é removido quando o componente é desmontado.

Agora, vamos ver como podemos fazer um Hook Customizado!

{{< yt id="V889MSVKk5Y" >}}

Quer entender melhor o poder dos Hooks customizados? Leia este artigo!

- {{< extlink text="Writing Your Own Custom React Hooks" href="https://blog.bitsrc.io/writing-your-own-custom-hooks-4fbcf77e112e">}}

Agora é hora de sentir o poder dos Hooks customizados na pele! Faça uma _Todo list_ simples usando o custom hook `useArray`, como sugerido no artigo acima.

---

## Vamos fazer juntos!

###### Tempo sugerido para realização: 80 minutos

Vamos para a aula ao vivo! O link estará disponível no Slack.

---

## Exercícios

###### Tempo sugerido para realização: 140 minutos

{{< versioning-your-code >}}

### Agora, a prática:

**Exercício 1** Refaça o exercício sobre o Reddit do dia {{< extlink text="18.1" href="/front-end/react/context-api">}} utilizando Hooks. Transforme todos os componentes de classe em componentes funcionais.

**Exercício 2** Faça os exercícios 1, 2 e 3 deste repositório: {{< extlink text="kentcdodds/learn-react-hooks" href="https://github.com/kentcdodds/learn-react-hooks/tree/master/src/exercise" >}}. Os enunciados estão nos arquivos `.md`

### Bônus

**Exercício 3** Nesse exercício você vai construir uma aplicação de _News Feed_. Ela funcionará da seguinte forma:

- Ao abrir a página, uma requisição deve ser feita para a {{< extlink text="news API" href="https://newsapi.org/" >}}.

- Na parte superior da tela, deve haver um input em que seja possível filtrar o assunto das notícias. Quando uma nova requisição for feita, deve ser utilizado o texto presente no input. Caso o input esteja em branco, a requisição deve ser feita sem filtro.

- A API possui {{< extlink text="dois endpoints" href="https://newsapi.org/docs/endpoints" >}}: _top headlines_ e _everything_. Adicione, ao lado do input onde se pode filtrar as notícias por assunto, dois _radio buttons_, um para cada endpoint. Uma das opções já deve vir selecionada por default. A requisição deve ser feita para o endpoint relacionado ao input selecionado. Deve haver um texto na tela indicando de qual endpoint são as notícas exibidas.

- Em intervalos regulares de tempo, a página deve se atualizar sozinha. Enquanto uma nova requisição estiver sendo feita, a página deve exibir algum indicativo de que será atualizada, mas as notícias anteriores não devem desaparecer.

- Deve haver um botão na página para interromper o _feed_ de notícias. Quando clicado, as notícias devem desaparecer, e as requisições para API, cessar. Ao clicar de novo no botão, as atualizações devem reiniciar.

- Cada notícia deve exibir seu título, autor, descrição, fonte, data de publicação, URL da notícia original e a imagem da notícia.

- Use Hooks e Context API para construir o seu _News Feed_. Ou seja, *não* utilize componentes de classe. Utilize os Hooks do React que você tem aprendeu nos últimos dias para gerenciar e compartilhar estado, fazer requisições, manipular o DOM manualmente etc.

- A API requer um token para ser utilizada. Você precisará se cadastrar para obter um token. O cadastro é gratuito. Leia {{< extlink text="a documentação" href="https://newsapi.org/docs/authentication" >}} para entender como utilizar seu token para se autenticar na API.

**Atenção**: Não é uma boa prática deixar tokens, senhas e outras informações sensíveis escritas diretamente no código, onde ficarão expostas para **qualquer um que tiver acesso**. Uma solução é colocar esse tipo de informação em variáveis de ambiente. Leia {{< extlink text="este artigo" href="https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html" >}} para aprender como trabalhar com variáveis de ambiente em Node.js.

---

## Recursos adicionais (opcional)

- {{< extlink text="useHooks - Easy to understand React Hook recipes by Gabe Ragland" href="https://usehooks.com/">}}

- {{< extlink text="Using the Effect Hook" href="https://pt-br.reactjs.org/docs/hooks-effect.html">}}

- {{< extlink text="10 React Hooks you Should Have in Your Toolbox" href="https://blog.bitsrc.io/10-react-custom-hooks-you-should-have-in-your-toolbox-aa27d3f5564d">}}

---

## Próximo

{{< next-btn >}}
