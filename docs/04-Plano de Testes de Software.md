# Planos de Testes de Software

## FRONT END: API

### 1 - Login/Cadastro

#### **1.1 - Verificar se o email informado ao se cadastrar no sistema é existente**

- Objetivo: Garantir que o metodo create da API está funcionando da forma correta.
- Passos: Acessar o Rest Test e preencher os campos solicitados.
- Critério: Retorno do código 200 e caso o email tenha sido cadastrado anteriormente, uma mensagem de alerta será exibida.

#### **1.2 - Verificar se o cadastro é realizado corretamente no sistema**

- Objetivo: Garantir que todos os dados foram informados da maneira correta.
- Passos: Acessar o Rest Test e preencher os campos solicitados.
- Critério: Retorno do código 200 e mensagem do cadastro do usuário e token com sucesso.

#### **1.3 - Verificar se o  sistema permite somente usuários cadastrados autenticarem na plataforma**

- Objetivo: Garantir que o sistema permita somente usuários cadastrados realizarem acesso ao sistema.
- Passos: Acessar o Rest Test e preencher os campos solicitados, digitar um usuário/senha incorretamente.
- Critério: Retorno do código 200 e caso o usuário ou senha estejam incorretos ou não existam, o acesso ao sistema deverá ser bloqueado, exibindo uma mensagem de alerta.

## FRONT END: MOBILE

### 2 - Login/Cadastro

#### **2.1 - Verificar se a exbição da tela de login está correta**

- Objetivo: Garantir que os campos para login sejam exibidos de maneira correta.
- Passos: Após realizar acesso ao sistema, de forma local, navegar até a tela correspondente ao login.
- Critério: Exibição correta dos campos de e-mail, senha e do botão "login".

#### **2.1.1 - Verificar se a exbição da tela de login verifica os dados inseridos**

- Objetivo: Garantir que os campos para login sejam preenchidos de maneira correta.
- Passos: Após realizar acesso ao sistema, de forma local, navegar até a tela correspondente ao login.
- Critério: Exibição mensagem validando os campos de e-mail e senha e retornar erro se não atender ao critério minimo.

#### **2.2 - Verificar se a tela de cadastro está sendo exibida sem nenhum problema**

- Objetivo: Garantir que os campos dos dados de cadastro estão sendo exibidos de maneira correta.
- Passos: Após realizar acesso ao sistema, de forma local, navegar até a tela correspondente ao cadastro.
- Critério: Exibição dos campos de cadastro e do botão "cadastrar".

#### **2.2.1 - Verificar se a tela de cadastro verifica os dados inseridos**

- Objetivo: Garantir que os campos para cadastro sejam preenchidos de maneira correta.
- Passos: Após realizar acesso ao sistema, de forma local, navegar até a tela correspondente ao cadastro.
- Critério: Exibição mensagem validando os campos de nome usuario, e-mail e senha e retornar erro se não atender ao critério minimo.

#### **2.3 - Verificar se a tela de Perfil está sendo exibida corretamente**

- Objetivo: Garantir que sistema faça exibição dos perfis após o login.
- Passos: Após realizar acesso ao sistema, de forma local, navegar até a pagina com os perfis dos profissionais.
- Critério: Exibição das informações correspondentes aos profissionais.

#### **2.4 - Verificar se a tela do barbeiro está retornando os serviços e valores corretamente**

- Objetivo: Garantir que o sistema retornará corretamente os serviços, os valores, a data e o horario desejados para o agendamento.
- Passos: Após realizar acesso ao sistema, de forma local, navegar até a pagina do perfil, selecionar o serviço, a data e o horario desejados.
- Critério: Exibição dos dados corretos selecionados para o agendamento.

### 3 Agendamento de serviços

#### **3.1 - Verificar se é possível realizar o agendamento de um seriço**

- Objetivo: Garantir que a funcionalidade de cadastro de serviço é feita de maneira correta.
- Passos:
    1) Realizar acesso ao sistema de forma local,
    2) Clicar em "Iniciar Agendamento",
    3) Selecionar o profissional desejado,
	4) Selecionar a data e horário desejados e clicar em "Finalizar agendamento,
    5) Aguardar o retorno da mensagem de confirmação.
- Critério: Fazer a escolha dos dados necessários para realizar o agendmento do serviço e retorno de mensagem confirmando o agendamento.
