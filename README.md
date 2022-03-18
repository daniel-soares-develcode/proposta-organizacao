# Proposta de reorganização do PLACOM

Nós temos um problema: a falta de padrões. Criar um novo padrão, no entanto, pode piorar nossa situação. Mesmo assim segue o que acho que pode nos ajudar...

## Sugestão 1

Hoje a gente não tem muito critério na hora de criar uma nova página/tela. Minha primeira sugestão é que agrupemos essas telas dentro de pastas como o nome da rota principal.

Isso vai facilitar que as telas sejam achadas mais mais facilmente.

## Sugestão 2

A estrutura tradicional de pastas com `Components` e `Containers` mostrou seus limites, temos uma aplicação grande demais, com páginas e componentes demais.

Minha segunda sugestão é que deixemos a pasta `Components` principal apenas para componentes compartilháveis e deixemos os componentes que pertencem apenas a um módulo ou a uma tela/página mais próximos de onde são usados. É um padrão que vemos ser usado por outras aplicações grandes.

## Sugestão 3

Evitar exportar telas e componentes como `default`. Isso confunde o `auto import` do VS Code e acaba gerando bagunça quando precisamos renomear um componente/tela.

## Sugestão 4

Centralizar os exports de cada módulo num único `index.js` só porque acho que fica mais bonito hahaha mas também porque facilita saber a que domínio uma tela pertence.

## Sugestão de ação

Talvez seja problemático fazer reorganizar da aplicação de uma só vez, então sugiro que façamos aos poucos. Por exemplo, estou mexendo nas de `acesso loja`, posso aproveitar e já organizar todo esse módulo.
