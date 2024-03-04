# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Arquitetura e Tecnologias

O projeto será desenvolvido utilizando as seguintes tecnologias:

- Front-End: A interface do usuario será desenvolvida utilizando (HTML, CSS e React.......)
- Back-End: Todo o aparato de back-end será desenvolvido em (React, C#, MySQL.......)

As tecnologias escolhidas foram as mais adequadas para atender os requisitos do projeto, que são:

- Facilidade de uso: Descrever....
- Acessibilidade: Descrever....
- Eficiencia: Descrever....

o	Descreva brevemente a arquitetura definida para o projeto e as tecnologias a serem utilizadas. Sugere-se a criação de um diagrama de componentes da solução.

## Project Model Canvas

Colocar a imagem do modelo construído apresentando a proposta de solução.

> **Links Úteis**:
> Disponíveis em material de apoio do projeto

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-000| A aplicação deverá apresentar o endereço, telefone e e-mail de contato da barbearia.| MÉDIA | 
|RF-000| A aplicação deve abrir um menu durante o agendamento para selecionar o (os) horário(s) e os serviço (os) disponíveis. | ALTA |
|RF-000| A aplicação deve permitir a avaliação do serviço. | MÉDIA |
|RF-000| A aplicação deve permitir que o cliente faça mais de um agendamento. | MÉDIA |
|RF-000| A aplicação deve ter uma funcionalidade de login para seus usuários (Dono de barbearia e clientes) | ALTA |
|RF-000| A aplicação deve permitir que o cliente faça o cancelamento antecipado ou alteração do serviço agendado. | ALTA |
|RF-000| A aplicação deve permitir que o dono da barbearia faça o cancelamento a qualquer momento ou alteração do serviço agendado. | ALTA |
|RF-000| A aplicação deverá permitir o agendamento em um intervalo minimo de 1 hora para o publico externo| ALTA |
|RF-000| A aplicação deverá permitir a manutenção dos horários disponiveis para atendimento| ALTA |
|RF-000| A aplicação deverá permitir o agendamento sem intervalo minimo apenas ao dono do estabelecimento (Venda Balcão)| ALTA |
|RF-000| A aplicação deverá apresentar tela com o histórico do cliente | ALTA |
|RF-000| A aplicação deverá permitir o envio de e-mails e alertas| MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-000| O sistema deverá funcionar nos principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge).| ALTA | 
|RNF-000| O site deverá ser responsivo permitindo a visualização em um celular de forma adequada. |  BAIXA | 
|RNF-000| O site deverá ter bom nível de contraste entre os elementos da tela em conformidade com a identidade visual da marca.|  MÉDIA | 
|RNF-000| O site deve ser publicado em um ambiente acessível publicamente na Internet.|  BAIXA |
|RNF-000| O sistema deve estar de acordo com a Lei Geral de Proteção de Dados (LGPD).|  ALTA |
|RNF-000| O sistema deve ser implementado em uma linguagem para aplicação Web.|  BAIXA |
|RNF-000| O sistema deve estar disponível pelo menos 99% das 24 horas do dia, nos 07 dias da semana.|  ALTA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-00| O projeto deverá ser entregue até o final do semestre |
|RE-00| A equipe não pode subcontratar o desenvolvimento do trabalho.       |
|RE-00| O aplicativo deve se restringir às tecnologias propostas pelo curso.|
|RE-00| A aplicação deve se restringir às tecnologias básicas da Web de FrontEnd e Backend|



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
