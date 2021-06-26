Como estou utilizando o Docker para criar o projeto Vue e fazer os estudos, logo, a instrução do `package.json` para ser executada chamando o `cd db/ && npm start` não irá funcionar, pois o pacote **json-server** precisa de autorização para escrita e um volume criado, isso pois o comando npm também é utilizado pelo Docker (não tenho instalado no pc).

Dessa forma, foi necessário _Dockerized JSON Server_ para continuar com os estudos. Então, utilizei uma estrutura já criada e disponibilizada no Docker Hub do "williamyeh".

Inicialmente, faço um pull caso a imagem ainda não exista no meu pc:

```bash
docker pull williamyeh/json-server
```

Em seguinda, entro dentro da pasta onde está o arquivo `db.json` (que nesse caso, é essa mesma pasta do README.md) e executo o comando abaixo:

```bash
docker run -p 3000:3000 -v `pwd`:/data williamyeh/json-server --watch db.json
```

Onde:

- `-p 3000:3000`: especifico a porta na qual o `json-server` será executado e a qual está configurado na imagem, respectivamente;

- `-v `pwd`:/data`: estou montando o volume dentro do container da imagem do **json-serve** pegando o meu `db.json` e adicionando dentro da pasta do imagem `/data`. Por isso, que é importante ao chamar essa instrução está dentro da pasta onde existe o arquivo `db.json`.

- `williamyeh/json-server`: estou informando qual imagem vou utilizar para que o docker execute.

- `--watch`: informo para o **json-server** que essa execução desejo ficar escultando as alterações no arquivo `db.json`.

- `db.json`: informo o arquivo que deve ser utilizado pelo **json-server**.

Mais informações: https://hub.docker.com/r/williamyeh/json-server/
