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

#### **2.2 - Verificar se a tela de cadastro está sendo exibida sem nenhum problema**

- Objetivo: Garantir que os campos dos dados de cadastro estão sendo exibidos de maneira correta.
- Passos: Após realizar acesso ao sistema, de forma local, navegar até a tela correspondente ao cadastro.
- Critério: Exibição dos campos de cadastro e do botão "cadastrar".

#### **2.3 - Verificar se a tela de Perfil está sendo exibida corretamente**

- Objetivo: Garantir que sistema faça exibição dos perfis após o login.
- Passos: Após realizar acesso ao sistema, de forma local, navegar até a pagina com os perfis dos profissionais.
- Critério: Exibição das informações correspondentes aos profissionais.

#### **2.4 - Verificar se a tela do barbeiro está retornando os serviços e valores corretamente**

- Objetivo: Garantir que o sistema retornará corretamente os serviços, os valores, a data e o horario desejados para o agendamento.
- Passos: Após realizar acesso ao sistema, de forma local, navegar até a pagina do perfil, selecionar o serviço, a data e o horario desejados.
- Critério: Exibição dos dados corretos selecionados para o agendamento.

### 3 - Agendamento

#### **3.1 - Verificar se o modal de agendamento está mostrando a data e os horários disponíveis**

- Objetivo: Verificar se o modal de agendamento exibe corretamente as datas e horários disponíveis, permitindo ao usuário selecionar apenas as opções que estão realmente disponíveis.
- Passos: Abrir o modal de agendamento, clicando em agendar. Verificar se todas as datas disponíveis são mostradas no seletor de datas. Tentar selecionar uma data não disponível e verificar se a seleção é bloqueada.
- Critério: Todas as datas disponíveis devem ser visíveis no modal. Ao tentar selecionar uma data não disponível, a seleção deve ser impedida. Após selecionar uma data disponível, os horários correspondentes devem ser exibidos.

#### **3.2 - Verificar se o sistema retorna a mensagem de confirmação do agendamento**

- Objetivo: O sistema deve exibir corretamente a mensagem de confirmação após o agendamento ser concluído com sucesso.
- Passos: Realizar um agendamento válido no modal de agendamento. Confirmar o agendamento. Verificar se uma mensagem de confirmação é exibida na interface do usuário.
- Critério: Após confirmar o agendamento, o sistema deve exibir uma mensagem clara e visível confirmando que o agendamento foi realizado com sucesso.

#### **3.3 - Verificar se o agendamento realizado consta registrado na tela de agendamentos**

- Objetivo: O agendamento realizado deve ser exibido corretamente na tela de agendamentos, incluindo as informações do prestador, data, horário, valor e serviço.
- Passos: Realizar um agendamento válido no modal de agendamento. Acessar a tela de agendamentos para verificar se o agendamento está registrado. Verificar se todas as informações do agendamento (prestador, data, horário, valor e serviço) estão presentes e corretas no card correspondente.
- Critério: Na tela de agendamentos, o agendamento realizado deve ser claramente visível e identificável por meio de um card. O card do agendamento deve conter todas as informações relevantes, como o nome do prestador, a data e horário do agendamento, o valor do serviço e o tipo de serviço agendado. As informações devem estar corretas e atualizadas conforme o agendamento realizado.
