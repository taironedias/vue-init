Estou utilizando o Docker para criar o projeto Vue e fazer os estudos, logo, a instrução recomendada no curso é criar um `package.json` e chamar o `npx` para o `json-server`. Porém, isso não funciona, uma vez que o pacote **json-server** precisa de autorização para escrita e um volume criado, isso pois o comando `npm` também é utilizado pelo Docker (não tenho instalado na minha máquina).

Dessa forma, foi necessário _Dockerized JSON Server_ para continuar com os estudos. Então, utilizei uma estrutura já criada e disponibilizada no Docker Hub do "williamyeh".

Inicialmente, faço um pull caso a imagem ainda não exista no meu pc:

```bash
docker pull williamyeh/json-server
```

Em seguinda, criei um **shell script** (`script.sh`) para que não fique verboso chamar sempre a instrução do container. Então, para executar:

1. Abro o terminal e acesso a pasta do projeto e por fim essa pasta do README, ou seja, `cd db/`;
1. Apenas na priemira vez, concedo permissão para o `script.sh`, através da instrução: `chmod +x script.sh`;
1. Por fim, executo o script no terminal pelo comando: `./script.sh`

Só com isso, o pacote **json-server** deverá ser iniciado com sucesso.
