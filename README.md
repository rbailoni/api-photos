# atividade de api com express

Criar uma api que tem por objetivo, permitir ao usuário

- upload de uma imagem, setando categoria, e tags
- endpoint para pesquisar imagems por tags, ou categoria

Tecnicamente, deve ter:
- crud de categorias
- crud de imagem
- servir arquivos estaticos
- api com autenticacao por token


Steps:



1. criar um repos no git
2. criar uma server com express, que da listen em uma prota
3. criar um config, multi environment
4. criar um middleware para arquivos estaticos
5. criar um router, que ouve no sufix /api
6. receber dados em multipart, urlencoded, ou json
7. autenticacao da api em jsonwebtoken
8. criar controllers
  * auth
  * categories
  * image