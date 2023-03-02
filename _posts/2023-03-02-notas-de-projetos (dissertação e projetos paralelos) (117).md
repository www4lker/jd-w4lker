---
tags:
  - projetos
  - pesquisa
  - interesses-de-pesquisa
  - disserte
  - interessesgerais
  - interessesdepesquisa
  - promptgpt3
  - wiredetal
title: BERT
---
# BERT
criado em: 00:13 2022-08-17

##### Relacionado
- palavras-chave:  
- Notas:
- [[ELO]]
- [[gpt3]]
- [[gpt3 por ele mesmo]]
- 
---
# computadores estão aprendendo a ler — mas eles ainda não são assim tão espertos
[fonte](https://www.wired.com/story/computers-are-learning-to-read-but-theyre-still-not-so-smart/)
- existe um teste desenhado para saber se computadores realmente entendiam o que liam. Era 2017 e Sam Bowman era o idealizador.
- GLUE era o teste, uma bateria de nove tarefas relacionadas à interpretação.
- as máquinas deram xabú. apesar do que eram capazes de gerar, a exemplo do [[gpt3]], elas não eram capazes de aprender nada substancias sobre a linguagem em si.
- Logo surgiria o BERT da Google, que iria muito melhor nos testes. e partir dali, sistemas de terceiros que incorporariam o BERT iriam todos tirar notas cada vez melhores.
- mas a dúvida persiste: essas máquinas estão interpretando melhor ou apenas ficaram melhor em hackear o sistema?
- entra em jogo a teoria da sala chinesa. essa teoria do John [[SEARLE, JOHN]] procura entender como uma IA poderia entender ou não uma coisa, pois mesmo uma pessoa que não sabe chines, de posse das ferramentas que a ajudam a juntar palavras e sentenças para ler e responder uma pergunta em chines de fora, pode se passar por um falante de chinês.
- em se tratando de linguagem natural, ferramentas para ajudar são impossíveis pois a linguagem é muito complexa. A solução que encontraram foi usando o **pré treino** (*pretrainning*).
- esses pré-treinos foram evoluindo cada vez mais, até que encontrarem uma solução chamada *language modeling.* modelagem de linguagem.
- basicamente eles fizeram a maquina ler imensas quantidades de texto — como verbetes da wikipedia, e depois pediram que **adivinhasse** a próxima palavra de uma determinada sentença — o equivalente a dar à pessoa da **sala chinesa** a liberdade de inventar suas proprias regras a partir das mensagens em chines que vinham de fora. 
- o interessante dessa abordagem de pre treino é que a maquina parece adquirir uma intuição melhor da sintaxe de uma linguagem. Também é possivel fazer um ajuste fino e fazer com que essa modelagem se ajuste a tarefas mais específicas, porque agora ela entende o básico.
- BERT é uma muito precisa forma de pretreinar uma rede neural. Com ela, qualquer um pode evoluir a rede neural de forma a criar linguagem natural onde antes havia apenas 0 e 1; e se baseia em três princípios fundamentais: um pretreino de modelagem de linguagem profundo, atenção e bidirecionalidade.
- essa parte do pretreino ja foi explicada.  a parte da atenção se refere a capacidade de entender qual a enfase se deve dar a uma determinada sentença. Usa de aplicações de linguística para analisar a sentença de múltiplas formas — dando assim uma entendimento melhor do contexto em que a sentença está inserida. 
- a bidirecionalidade é a mesma ideia de atenção aplicada com mais um uso — a maquina lê uma sentença do início para o fim e do fim para início, e se treina para adivinhar uma palavras aleatoriamente ocultada — de modo que ela se condiciona a tirar o maximo de informação de um subconjunto de palavras para preencher a palavra que falta.
- mas a dúvida ainda persiste, apesar dos bons resultados nos testes de intepretação — e se a IA esta fazendo certo, mas pelos motivos errados?
- um determinado teste — tarefa do arrazoamemento da compreensão (*argument reasoning comprehension task*) acabou sendo um problema para o BERT responder depois que foram compreendidas que sua interpretação de texto se baseava em identificação superficial de padrao — basicamente ela imitava ao inves de interpretar. Sua capacidade de responder era mais ou menos a de um chute às cegas.
- ainda assim não se descredita tudo o que BERT construiu. Apenas se pede um pouco mais de ceticismo uma vez que muitas vezes o que a maquina faz é usar de pistas falsas (spurious cues) para chegar à interpretação correta. Uma das soluções para isso é criar testes melhores e mais sofisticados. Outra talvez seja aceitar que nunca teremos máquinas capazes de interpretar perfeitamente. 
- Mais do que colocar em xeque a capacidade das máquinas, coloca em questão a capacidade do próprio teste e dos testadores. e talvez até mesmo da capacidade de intepretação em si. Muitos destes testes são difíceis para humanos mesmos — e talvez ainda não tenhamos ido muito longe no nosso entendimento da linguagem e da sua relação com o mundo.