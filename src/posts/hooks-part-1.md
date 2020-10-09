---
title: "React Hooks - useState e useContext"
date: 2019-01-10
weight: 78
week: 18
day: 2
---

## O que vamos aprender?

Existem dois jeitos de se criar um componente React. Você pode definir uma classe que estende `React.Component` ou você pode definir uma função que retorna o que é renderizado.

Qual é a diferença entre essas duas formas? A classe te dá *muito mais ferramentas*, mas é mais complicada de se criar. Você pode definir estados, acessar contextos, usar métodos de ciclo de vida de componente etc. Mas você precisa, também, fazer _bind_ nas funções que não forem _arrow functions_ e que deseja passar como _callbacks_ para outros componentes, além de ser necessário definir um construtor, caso você utilize estado ou métodos de ciclo de vida. Dessa forma, na hora de separar lógica em vários componentes e reutilizá-la, a complexidade da aplicação tende a aumentar muito rápido.

Assim sendo, por vezes seria ótimo fazer algo _mais simples_, como um componente funcional, mas *utilizando estados, contextos e tudo o mais*. Pois bem! Os _React Hooks_ vêm pra resolver esses problemas! Com eles, fazer componentes complexos é *mais simples*, *mais rápido* e fica *mais fácil de compartilhar e agrupar suas lógicas.*

---

### Você será capaz de:

* Utilizar o _React Hook_ useState;

* Utilizar o _React Hook_ useContext.

---

## Por que isso é importante?

_React Hooks_ são uma das mais modernas formas de se trabalhar lógicas complexas em componentes React. Eles têm adoção crescente na comunidade, resolvem problemas que a criação de componentes com classes traz e facilitam muito a vida de quem quer criar componentes, muitas vezes, mais simples. Eles são uma ferramenta fundamental para quem desenvolve ter em seu portfólio!

---

## Conteúdos

###### Tempo sugerido para realização: 80 minutos

Vamos começar assistindo a um vídeo:

{{< yt id="t8KFxNTCtrs" >}}

Achou interessante? Curioso? Confuso? Pois é! Os _React Hooks_ vêm pra substituir os componentes que criamos como **classes**: sem ter construtores, sem ter métodos de lifecycle e sem perder nada que as classes nos dão. Mas isso está muito abstrato, certo?

Como assim? Quais são as desvantagens de usarmos os componentes como classes (como você esteve usando até o momento)? Bem, o primeiro passo ao querer aprender alguma coisa é entender _pra quê essa coisa serve_. Ou: _que problema os React Hooks resolvem?_

Para entendermos isso, vamos dar um passo pra trás. Leia o texto abaixo ou assista ao vídeo em inglês no começo da página:

- {{< extlink text="Why React Hooks?" href="https://tylermcginnis.com/why-react-hooks/" >}}

Achou interessante?! Já está _um pouco_ mais clara a motivação para se usar React Hooks? Se não está, não se preocupe, pois vamos deixar mais claro ainda lendo esse outro texto. **Atenção: pode pular, por ora, o subtópico _useEffect_. Todo o restante, pode ler.**

- {{< extlink text="React Hooks: Como utilizar, motivações e exemplos práticos" href="https://blog.rocketseat.com.br/react-hooks/">}}

Agora, leia mais esse pequeno texto mostrando como fazer um componente funcional com uso de estado e contexto com _React Hooks_:

- {{< extlink text="Using useContext and useState hooks as a store" href="https://dev.to/nazmifeeroz/using-usecontext-and-usestate-hooks-as-a-store-mnm">}}

E aí? Aposto que a mão está coçando pra experimentar fazer uns componentes funcionais usando hooks, certo? Pois é pra já! Lembra-se do trabalho _Arte com pixels?_ Então! Vamos refazê-lo _agora_ com React e React Hooks!

Como assim?! É só acompanhar o artigo abaixo e ir escrevendo o código junto com ele.

Vá acompanhando e **digite por conta própria** todo o código que envolver os _React Hooks_! Acredite, isso ajuda muito a fixar as coisas.

- {{< extlink text="Simple Painter in ReactJS — useContext, useState" href="https://medium.com/@anMagpie/simple-painter-in-reactjs-usecontext-usestate-2f7c1dfc898d">}}

---

## Vamos fazer juntos!

###### Tempo sugerido para realização: 80 minutos

Vamos fixar o conhecimento acerca de _React Hooks_ refatorando um componente de classe para funcional.

Aula ao vivo! Vamos para o Slack, onde o link estará disponível.

---

## Exercícios

###### Tempo sugerido para realização: 140 minutos

{{< versioning-your-code >}}

### Instruções para realização dos exercícios

**Exercício 1**: Refaça o [exercício 1]({{< ref "/front-end/react/context-api" >}}) substituindo toda a lógica de classes para a lógica de _React Hooks_, deixando todos os componentes funcionais.

**Exercício 2**: Refaça o [exercício 2]({{< ref "/front-end/react/context-api" >}}), como fez no exercício anterior, substituindo toda a lógica de classes para a lógica de _React Hooks_, deixando todos os componentes funcionais.

### Bônus

**Exercício 3**: Agora, refaça [esse exercício]({{< ref "/front-end/react/tests/rtl-queries-events-async" >}}), também substituindo toda a lógica de classes para a lógica de _React Hooks_, deixando todos os componentes funcionais. Aproveite que ele possui testes e veja como é prático refatorar uma aplicação que já foi testada! E lembre-se: os bônus daquele exercício contam como bônus aqui também!

---

## Recursos adicionais (opcional)

* {{< extlink text="React Hooks Introduction, by Renan Lopes" href="https://www.youtube.com/watch?v=0pxd1DtockM" >}}

* {{< extlink text="React Hooks useContext, by Renan Lopes" href="https://www.youtube.com/watch?v=dbU-ZwDOCaE" >}}

* {{< extlink text="From Class Components to Function Components" href="https://www.robinwieruch.de/react-hooks-migration" >}}

* {{< extlink text="API de Referência dos Hooks" href="https://pt-br.reactjs.org/docs/hooks-reference.html" >}}

---

## Próximo

{{< next-btn >}}
