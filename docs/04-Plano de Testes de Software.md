# Planos de Testes de Software

## APLICATIVO MOBILE (FRONT/BACK END)

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

## API

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

##### **1.4 - Refresh de token para usuários logados**

- Objetivo: Garantir que o sistema atualize o token de usuários logados.
- Passos: Acessar o Rest Test e preencher os campos solicitados, digitar um token válido na rota refresh.
- Critério: Retorno do código 200.

##### **1.5 - Bloquear acesso a usuário com token expirado**

- Objetivo: Garantir que o sistema bloqueie acesso de tokens expirados.
- Passos: Acessar o Rest Test e preencher os campos solicitados, digitar um token não válido.
- Critério: Retorno do código 200 com a mensagem de "dados inválidos".

##### **1.6 - Logout de usuário**

- Objetivo: Fazer logout do usuário e invalidar o token de acesso.
- Passos: Acessar o Rest Test e preencher os campos solicitados, digitar um token válido.
- Critério: Retorno do código 200 com a mensagem de "logout".

##### **1.7 - Requisição de informações de usuário**

- Objetivo: Enviar as informações do usuário.
- Passos: Acessar o Rest Test e preencher os campos solicitados, digitar um token válido.
- Critério: Retorno do código 200 com a mensagem do usuário cadastrado.

##### **1.8 - Requisição de informações de favoritos do usuário**

- Objetivo: Enviar as informações de barbeiros favoritos do usuário.
- Passos: Acessar o Rest Test e preencher os campos solicitados, digitar um token válido.
- Critério: Retorno do código 200 com a mensagem de "verdadeiro".

##### **1.9 - Favoritar um barbeiro**

- Objetivo: Enviar as informações ao favoritar um barbeiro no acesso do usuário.
- Passos: Acessar o Rest Test e preencher os campos solicitados, digitar um token válido.
- Critério: Retorno do código 200 com a mensagem de "verdadeiro".

##### **1.10 - Confirmação de barbeiro favoritado**

- Objetivo: Enviar as informações da lista de favoritos após flag de favorito no acesso do usuário.
- Passos: Acessar o Rest Test e preencher os campos solicitados, digitar um token válido.
- Critério: Retorno do código 200 com a mensagem da lista do barbeiro favoritado.

##### **1.11 - Rota para agendamento de serviço com barbeiro**

- Objetivo: Enviar se o barbeiro atende na data.
- Passos: Acessar o Rest Test e preencher os campos solicitados, digitar um token válido.
- Critério: Retorno do código 200 com a mensagem se o barbeiro selecionado atende na data informada.

##### **1.12 - Disponibilidade de datas para agendamento de serviço com barbeiro**

- Objetivo: Enviar se o barbeiro atende no horário.
- Passos: Acessar o Rest Test e preencher os campos solicitados, digitar um token válido.
- Critério: Retorno do código 200 com a mensagem se o barbeiro selecionado atende no horário informada.


##### **1.13 - Confirmação de agendamento de serviço com barbeiro**

- Objetivo: Verificar se o agendamento foi registrado com o barbeiro registrado.
- Passos: Acessar o Rest Test e preencher os campos solicitados, digitar um token válido.
- Critério: Retorno do código 200 com a mensagem da data, hota, serviço e valor do agendamento.

##### **1.14 - Listagem de barbeiros**

- Objetivo: Requisitar listagem de todos os barbeiros cadastrados.
- Passos: Acessar o Rest Test e preencher os campos solicitados, digitar um token válido.
- Critério: Retorno do código 200 com a lista dos barbeiros cadastrados no sistema.