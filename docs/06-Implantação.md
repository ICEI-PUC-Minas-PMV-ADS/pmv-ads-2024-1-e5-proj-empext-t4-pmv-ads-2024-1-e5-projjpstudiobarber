# Implantação do Software
## Etapas do Processo de Desenvolvimento de Software
![alt text](img/Etapas-do-DS.png)

### 1.	Requisitos do Cliente
1.1 Identificação, análise das necessidades e o problema do cliente.
1.2 Compilação de informações e definição das condições e referências para a execução do software.
### 2.	Especificações Técnicas
2.1 Criação de histórias de usuário que descrevem as necessidades de negócio.
2.2 Definição dos Requisitos Funcionais e Não-Funcionais.
### 3.	Processo
3.1 Divisão dos requisitos em sprints de desenvolvimento.
3.2 Início da codificação, criação da estrutura lógica do software.
3.2 Desenvolvimento dividido em front-end (interface), back-end (lógica de negócios) e database (bando de dados)
### 4.	Teste
4.1 Testes realizados em ambiente específico para verificar se o software cumpre os requisitos.
4.2 Simulação de diversos cenários para evitar problemas na publicação.
### 5.	Review
5.1 Apresentação feita pelo time de desenvolvimento para garantir a qualidade do produto.

5.2 Análise para confirmar se o produto atende às necessidades do cliente.

5.3 Correções realizadas se necessário, antes da publicação.

5.4 Implementação/Publicação

5.5 Publicação do software após a garantia de que ele alcançou os resultados esperados.

5.6 Integração e adaptação do cliente ao software, com possíveis treinamentos ou tutoriais disponibilizados.

# Utilização das Tecnologias no Desenvolvimento de Software

1. **Laravel para API**

Definição das endpoints da API e suas funcionalidades nas user stories, como "ao enviar uma requisição POST para `/usuarios`, deve criar um novo usuário".
   - **Processo**: 
     - **Backend**: Desenvolvimento da lógica de negócios utilizando Laravel, um framework PHP conhecido por sua simplicidade e eficiência no desenvolvimento de APIs. Laravel facilita a implementação de autenticação, autorização e gerenciamento de recursos.

2. **MySQL para Banco de Dados**

Descrição das estruturas de tabelas e esquemas de banco de dados, como "o banco de dados deve ter uma tabela de usuários com campos para nome, email e senha".
   - **Processo**: 
     - **Backend**: Implementação do banco de dados utilizando MySQL, uma das bases de dados relacionais mais populares e robustas. Criação de tabelas, relações e consultas necessárias para suportar a aplicação.

3. **React Native para Front e Back End**

Detalhamento das interações de usuário e lógica de negócio, como "ao clicar no botão de login, deve autenticar o usuário via API e navegar para a tela principal".
   - **Processo**: 
     - **Front-end**: Desenvolvimento da interface de usuário em React Native, que permite criar aplicativos móveis nativos para Android a partir de uma única base de código JavaScript.
     - **Backend**: Utilização de funcionalidades backend simples, como gerenciamento de estado e lógica de negócios leve diretamente no React Native, com operações mais complexas delegadas para a API Laravel.
   - **Teste**: Testes unitários e de integração para verificar a funcionalidade e usabilidade do aplicativo em dispositivos móveis.
   - **Implementação/Publicação**: Publicação do aplicativo nas lojas de aplicativos (Google Play), incluindo documentação e tutoriais para os usuários finais.

### Fluxo de Desenvolvimento Integrado
1. **Requisitos do Cliente**: Definição de requisitos abrangendo API, banco de dados e interface do aplicativo.
2. **Especificações Técnicas**: Documentação detalhada que cobre endpoints da API, esquemas de banco de dados e interações de usuário.
3. **Processo**:
   - Desenvolvimento de API com Laravel.
   - Configuração do banco de dados MySQL.
   - Criação da interface e lógica de front-end com React Native.
4. **Teste**: Verificação integrada das funcionalidades API, banco de dados e interface do usuário.
5. **Review**: Avaliação completa do sistema para garantir coesão e funcionamento conforme esperado.
6. **Implementação/Publicação**: Implementação coordenada de API, banco de dados e aplicativo móvel em seus respectivos ambientes de produção.

