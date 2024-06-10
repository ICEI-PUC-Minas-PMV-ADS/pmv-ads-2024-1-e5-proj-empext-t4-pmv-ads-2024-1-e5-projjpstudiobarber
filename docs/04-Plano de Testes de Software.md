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

#### **2.5 - Verificar se a funcionalidade de favoritar o barbeiro está funcionando corretamente**

- Objetivo: Garantir que o sistema realizará a inclusão no banco de dados da seleção do barbeiro como favorito para o usuario.
- Passos: Após realizar acesso ao sistema, de forma local, navegar até a pagina do perfil, selecionar o icone do coração para favoritar o barbeiro.
- Critério: Exibição do botão relativo ao favoritos preenchido para ativo e em branco para inativo.

#### **2.6 - Verificar se a tela de favoritos está retornando os barbeiros favoritados corretamente**

- Objetivo: Garantir que o sistema retornará corretamente os barbeiros selecionados como favoritos.
- Passos: Após realizar acesso ao sistema, de forma local, navegar até a pagina dos favoritos e visualizar se o barbeiro selecionado anteriormente consta na tela.
- Critério: Exibição dos dados corretos selecionados para os barbeiros favoritos.

#### **2.7 - Verificar se a tela de agendamento está retornando os serviços e valores corretamente e concluindo o agendamento**

- Objetivo: Garantir que o sistema retornará corretamente os serviços, os valores, a data e o horario desejados para o agendamento e permita a conclusão do agendamento.
- Passos: Após realizar acesso ao sistema, de forma local, navegar até a pagina do agendamento, selecionar o barbeiro e serviço, a data e o horario desejados. Confirme o agendamento e aguarde a mensagem de exito ou erro.
- Critério: Exibição dos dados corretos selecionados para o agendamento e conclusão do mesmo com mensagem com o resultado da operação.

#### **2.8 - Verificar se a tela de historico apresenta os agendamentos realizados pelo cliente**

- Objetivo: Garantir que o sistema retornará corretamente os agendamentos realizados pelo cliente.
- Passos: Após realizar acesso ao sistema, de forma local, navegar até a pagina do historico e visualizar se carregou corretamente o historicos e os detalhes dos agendamentos.
- Critério: Exibição dos dados corretos sobre agendamentos realizados pelo cliente logado.