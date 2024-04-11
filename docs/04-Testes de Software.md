# Planos de Testes de Software

## FRONT END: MOBILE
 
 ### 1 - Login/Cadastro
  
**1.1 - Verificar se o cadastro email já cadastrado na plataforma**
   - Obejetivo: Verificar se o metodo create da API está funcionando de forma correta
   - Passos: Acessar o Rest Test e preencher os campos solicitados 
   - Criterio: Retorno do código 200 e caso o email já estejá cadastrado, uma mensagem de alerta será exibido

**1.2 - Verificar se cadastro está sendo realizado sem nenhum problema**
   - Obejetivo: Ter certeza que todos os dados estão sendo enviado de maneira corrreta
   - Passos: Acessar o Rest Test e preencher os campos solicitados
   - Criterio: Retorno do código 200 e mensagem do cadastro do usuário e token com sucesso

**1.3 - Verificar se o  sistema deixa somente usuario cadastrados entrar na plataforma**
   - Obejetivo: Verificar se o sistema deixa somente usuários cadastrados logar
   - Passos: Acessar o Rest Test e preencher os campos solicitados, digitar um usuário/senha incorretamente
   - Criterio: Retorno do código 200 e caso o usuário/senha esteja incorreto/não exista, o sistema deve barrar o login, exibindo mensagem de alerta

## 
# Evidências de Testes de Software

## API
### 01 - Login/Cadastro 
 **1.1 - Email já cadastrado**

 ![](img/api/api_post_000.png)

 **1.2 - Cadastro**

 ![](img/api/api_post_002.png)

 **1.3 - Rejeitar login user não cadastrado**

 ![](img/api/api_post_003.png)

 **1.3.1 - Login de user cadastrado**

 ![](img/api/api_post_003.png)
