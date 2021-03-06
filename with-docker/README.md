Essa configuração, permite abrir o Vue UI e através dele é possível criar um projeto, instalar plugins, excutar no modo desenvolvimento e buildar todo o projeto, sem a necessidade do uso do terminal. Para isso, basta executar o comando abaixo na pasta raíz do arquivo `docker-compose.yml`:
```bash
docker-compose up
```

 No entanto, caso seja necessário utilizar algum comando do node (`npm` ou `npx`, por exemplo), recomendo adicionar esse **alias** no seu `.bashrc`.
```text
alias node='docker run --rm -v $(pwd):/app -w /app node:latest'
```

E, dentro da pasta do projeto chamar a instrução desejada colocando a palavra `node` antes da instrução. No exemplo abaixo, eu realizei um build do meu projeto Vue, então para verificar que o build aconteceu perfeitamente vou simular um servidor utilizando o `npx`. Dessa forma, dentro da pasta **dist** (localizada dentro do meu projeto Vue), executei a instrução abaixo:
```bash
node npx http-server
```

Obviamente, esse **alias** pode ser estendível para qualquer outra instrução, como `node npm install`, por exemplo. Então, para facilitar, você pode adicionar outro **alias** no `bashrc` de forma exclusiva. Abaixo, realizei o procedimento para o **npm**:
```text
alias npm='docker run --rm -v $(pwd):/app -w /app node:latest npm'
```

Aí, ao reiniciar o terminal, basta chamar o `npm` que os pacotes serão adicionados, servidor executados, etc, por exemplo. Caso queria adicionar algum pacote em uma versão específica ao seu projeto, com esse alias, no **terminal** ficará assim:
```bash
npm i vue-router@3.0.2
```
