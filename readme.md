# 🔖 Projeto DevPlace

> Projeto voltado aos profissionais que queiram fazer freelancer, podendo ter acesso a projetos via app e web!

## 🙌 Mão na massa

> Você pode realizar o clone deste repositório ou baixar o arquivo .zip

### 💻 Clone este repositório:

````
git remote add origin https://github.com/huriellopes/dev-place.git
````
Para baixar o zip: [https://github.com/huriellopes/dev-place/archive/master.zip](https://github.com/huriellopes/dev-place/archive/master.zip)

## ⚡ Executando o projeto

### Na raiz do projeto, execute o comando:

````
yarn ou npm install
````

### Configure o .env, para isso execute o comando:

````
copy .env.example .env ou cp .env.example .env
````

> Em seguinda configure as variavéis de ambiente de banco de dados, lembrando de configurar o docker-compose também!

## 🚀 Rodando o servidor

> Obs.: Esse passo, so rode caso for utilizar local, sem docker!

### Para rodar o script, execute o comando:

````
yarn dev:server
````

> Caso vá usar o docker, rode o seguinte comando para subir os containers!

````
docker-compose up -d
````

## Licença

Este projeto está sob a licença MIT. Veja aqui [LICENSE](LICENSE) para mais detalhes.
