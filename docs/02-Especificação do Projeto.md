# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Arquitetura e Tecnologias

O projeto será desenvolvido utilizando as seguintes tecnologias:

- Front-End: A interface do usuario será desenvolvida utilizando CSS, ReactJS
- Back-End: Todo o aparato de back-end será desenvolvido em React Native

As tecnologias escolhidas foram as mais adequadas para atender os requisitos do projeto, que são:

- Facilidade de uso: Dos clientes atuais e futuros do negócio
- Acessibilidade: Maior base instalada de usuários
- Eficiencia: Publicação em loja de aplicativos, podendo efetuar um agendamento a qualquer momento.

o	Descreva brevemente a arquitetura definida para o projeto e as tecnologias a serem utilizadas. Sugere-se a criação de um diagrama de componentes da solução.

## Project Model Canvas

Colocar a imagem do modelo construído apresentando a proposta de solução.

> **Links Úteis**:
> Disponíveis em material de apoio do projeto

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.
Foi utilizado a técnica de priorização da Matriz MoSCOW.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| A aplicação deverá permitir o cadastro de usuários (Cliente e Admin).| ALTA | 
|RF-002| A aplicação deve ter opção de login para seus usuários, mediante a senha, com acessos diferenciados entre Cliente e Admin. | ALTA |
|RF-003| A aplicação deve exibir um botão "Agendamento" na <i>landing page</i> para acesso da função de seleção de data, horários e serviços disponíveis. | ALTA |
|RF-004| A aplicação deverá permitir que o Admin faça o cancelamento, edição ou alteração dos agendamentos. | ALTA |
|RF-005| A aplicação deve permitir que o Cliente faça mais de um agendamento ou agendamento recorrente. | MÉDIA |
|RF-006| A aplicação deve permitir que o Cliente faça o cancelamento ou alteração do serviço agendado. | ALTA |
|RF-007| A aplicação deve permitir a avaliação dos serviços realizados pelo Cliente. | MÉDIA |
|RF-008| A aplicação deverá permitir o agendamento de serviços para o Cliente, somente com uma antecedência minima de 1 hora. | MÉDIA |
|RF-009| A aplicação deverá enviar um alerta de confirmação do serviço agendado. | BAIXA |
|RF-010| A aplicação deverá emitir um relatório por período com o valor total dos serviços executados. | BAIXA |

<img src="./img/MoSCoW Method.jpg">

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-000| A aplicação deverá ser responsiva permitindo a visualização em um smartphone de forma adequada. |  ALTA | 
|RNF-000| A aplicação deve ser publicada em loja de aplicativos para smartphones.|  ALTA |
|RNF-000| A aplicação deve estar de acordo com a Lei Geral de Proteção de Dados (LGPD).|  ALTA |
|RNF-000| A aplicação deverá ter bom nível de contraste entre os elementos da tela em conformidade com a identidade visual da marca.|  MÉDIA |
|RNF-000| A aplicação deverá ter índice de diposnibildiade superior a 99%.|  MÉDIA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-001| O projeto deverá ser entregue até o dia 10-JUN-24. |
|RE-002| A equipe não poderá subcontratar o desenvolvimento do trabalho.       |
|RE-003| A aplicação terá como foco dispositivos com sistema operacional Android.|



## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

## Modelo ER (Projeto Conceitual)

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.

Sugestão de ferramentas para geração deste artefato: LucidChart e Draw.io.

A referência abaixo irá auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

## Projeto da Base de Dados

O projeto da base de dados corresponde à representação das entidades e relacionamentos identificadas no Modelo ER, no formato de tabelas, com colunas e chaves primárias/estrangeiras necessárias para representar corretamente as restrições de integridade.
