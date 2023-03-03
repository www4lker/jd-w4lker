---
tags:
  - projetos
  - pesquisa
  - interesses-de-pesquisa
  - disserte
  - interessesgerais
  - interessesdepesquisa
  - meta
  - promptgpt3
  - wiredetal
title: 131220221704
---

# 131220221704

## criado em: 17:04 2022-12-13

### Relacionado

- palavras-chave:    
- notas: 
- [[gpt3]]
- [[131220222119]]
- [[chatgpt]]
- [[chat gpt ajudou a complementar esse texto]]
- [[5 coisas sobre filosofia da tecnologia]]
---

# ChatGPT, Galactica, and the Progress Trap

## When large language models fall short, the consequences can be serious. Why is it so hard to acknowledge that?

>The hype around AI chatbots such as ChatGPT and Galactica distracts from their actual harms, according to a Wired article. Despite their seemingly extraordinary capabilities, large language models (LLMs) such as these are unreliable, perpetuate societal stereotypes and encode sensitive personal information from the training data. Previous deployments of LLMs, such as Google's BERT, have also provided dangerously inaccurate answers to user queries. Furthermore, the vulnerability of LLMs to simple typos and misspellings in prompts means that they are unreliable for high-stakes use. It is the responsibility of the developers of LLMs to address these issues, the article says.

#### text:

the release of large language models like ChatGPT (a question-answering chatbot) and Galactica (a tool for scientific writing) has revived an old conversation about what these models can do. Their capabilities have been presented as extraordinary, mind-blowing, autonomous; fascinated evangelists have claimed that these models contain “humanity’s scientific knowledge,” are approaching artificial general intelligence (AGI), and even resemble consciousness. However, such hype is not much more than a distraction from the actual harm perpetuated by these systems. People get hurt from the very practical ways such models fall short in deployment, and these failures are the result of their builders’ choices—decisions we must hold them accountable for. 

Among the most celebrated AI deployments is that of BERT—one of the first large language models developed by Google—to improve the company’s search engine results. However, when a user searched how to handle a seizure, they received answers promoting things they should not do—including being told inappropriately to “hold the person down” and “put something in the person’s mouth.” Anyone following the directives Google provided would thus be instructed to do exactly the opposite of what a medical professional would recommend, potentially resulting in death. 

The Google seizure error makes sense, given that one of the known vulnerabilities of LLMs is their failure to handle negation, as Allyson Ettinger demonstrated years ago with a simple study. When asked to complete a short sentence, the model would answer 100 percent correctly for affirmative statements (“a robin is …”) and 100 percent incorrectly for negative statements (“a robin is not ...”). In fact, it became clear that the models could not actually distinguish between the two scenarios and provided the exact same responses (using nouns such as “bird”) in both cases. Negation remains an issue today and is one of the rare linguistic skills to not improve as the models increase in size and complexity. Such errors reflect broader concerns linguists have raised about how such artificial language models effectively operate via a trick mirror—learning the form of the English language without possessing any of the inherent linguistic capabilities that would demonstrate actual understanding. 

Additionally, the creators of such models confess to the difficulty of addressing inappropriate responses that “do not accurately reflect the contents of authoritative external sources.” Galactica and ChatGPT have generated, for example, a “scientific paper” on the benefits of eating crushed glass (Galactica) and a text on “how crushed porcelain added to breast milk can support the infant digestive system” (ChatGPT). In fact, Stack Overflow had to temporarily ban the use of ChatGPT-generated answers as it became evident that the LLM generates convincing but wrong responses to coding questions.  

Several of the potential and realized harms of these models have been exhaustively studied. For instance, these models are known to have serious issues with robustness. The sensitivity of the models to simple typos and misspellings in the prompts and the differences in responses caused by even a simple rewording of the same question make them unreliable for high-stakes use, such as translation in medical settings or content moderation, especially for those with marginalized identities. This is in addition to a slew of now well-documented roadblocks to safe and effective deployment—such as how the models memorize sensitive personal information from the training data, or the societal stereotypes they encode. At least one lawsuit has been filed, claiming harm caused by the practice of training on proprietary and licensed data. Dishearteningly, many of these “recently” flagged issues are actually failure modes we’ve documented before—the problematic prejudices being spewed by the models today were seen as early as 2016, when Tay the chatbot was released, and again in 2019 with GTP-2. As models get larger over time, it becomes increasingly difficult to document the details of the data involved and justify their environmental cost. 

And asymmetries of blame and praise persist. Model builders and tech evangelists alike attribute impressive and seemingly flawless output to a mythically autonomous model, a supposed technological marvel. The human decision-making involved in model development is erased, and a model’s feats are observed as independent of the design and implementation choices of its engineers. But without naming and recognizing the engineering choices that contribute to the outcomes of these models, it’s almost impossible to acknowledge the related responsibilities. As a result, both functional failures and discriminatory outcomes are also framed as devoid of engineering choices—blamed on society at large or supposedly “naturally occurring” datasets, factors the companies developing these models claim they have little control over. But the fact is they do have control, and none of the models we are seeing now are inevitable. It would have been entirely feasible to make different choices that resulted in the development and release of entirely different models. 

When no one is found to be at fault, it’s easy to dismiss criticism as baseless and vilify it as “negativism,” “anti-progress,” and “anti-innovation.” Following Galactica’s shutdown on November 17, Yann LeCun, Meta’s chief AI scientist, responded—“Galactica demo is offline for now. It’s no longer possible to have some fun by casually misusing it. Happy?” In another thread, he insinuates agreement with the assertion that “this is why we can’t have nice things.” But healthy skepticism, criticism, and caution are not attacks, “misuse,” or “abuse” of models, but rather essential to the process of improving performance. The critique stems from a desire to hold powerful actors—who repeatedly ignore their responsibilities—accountable and is deeply rooted in hopes for a future in which such technologies can exist without harming the communities most at risk. 

Overall, this recurring pattern of lackadaisical approaches to model release—and the defensive responses to critical feedback—is deeply concerning. Opening models up to be prompted by a diverse set of users and poking at the model with as wide a range of queries as possible is crucial to identifying the vulnerabilities and limitations of such models. It is also a prerequisite to improving these models for more meaningful mainstream applications. 

Although the choices of those with privilege have created these systems, for some reason it seems to be the job of the marginalized to “fix” them. In response to ChatGPT’s racist and misogynist output, OpenAI CEO Sam Altman appealed to the community of users to help improve the model. Such crowdsourced audits, especially when solicited, are not new modes of accountability—engaging in such feedback constitutes labor, albeit uncompensated labor. People at the margins of society who are disproportionately impacted by these systems are experts at vetting them, due to their lived experience. Not coincidentally, crucial contributions that demonstrate the failure of these large language models and ways to mitigate the problems are often made by scholars of color—many of them Black women—and junior scholars who are underfunded and working in relatively precarious conditions. The weight falls on them to not only provide this feedback, but to take on tasks the model builders themselves should be handling before release, such as documenting, analyzing, and carefully curating data.

For us, critique is service. We critique because we care. And if these powerful companies cannot release systems that meet the expectations of those most likely to be harmed by them, then their products are not ready to serve these communities and do not deserve widespread release.
