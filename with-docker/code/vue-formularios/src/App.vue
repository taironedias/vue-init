<template>
  <div id="app">
    
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Formulários no Vue</h1>
        <p class="lead">Treinando a manipulação de formulários</p>
      </div>
    </div>

    <div class="container sb-5">

      <div class="row">

        <!-- formulario -->
        <div class="col-sm-6">

          <h3>Preencha abaixo</h3>

          <form>

            <div class="form-group">
              <label>Nome:</label>
              <input
                type="text"
                class="form-control"
                placeholder="Seu nome"
                v-model.trim="dev.name">
            </div>

            <div class="form-group">
              <label>Endereço de email:</label>
              <input
                type="email"
                class="form-control"
                placeholder="Seu email"
                v-model.lazy.trim="dev.email">
                <!-- o modificador lazy tem o comportamento de change. Ou seja, só quando tirar o foto do input que o valor será atribuído à propriedade -->
                <!-- podemos também encadear os modificadores, como é feito acima com lazy e trim -->
            </div>

            <div class="form-group">
              <label>Idade:</label>
              <input
                type="number"
                class="form-control"
                placeholder="Sua idade"
                v-model.number="dev.age">
            </div>

            <div class="form-group">

              <p>Gênero:</p>

              <div class="form-check form-check-inline">
                <input
                  type="radio"
                  class="form-check-input"
                  value="Masculino"
                  v-model="dev.genre">
                <label class="form-check-label">Masculino</label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  type="radio"
                  class="form-check-input"
                  value="Feminino"
                  v-model="dev.genre">
                <label class="form-check-label">Feminino</label>
              </div>

            </div>

            <div class="form-group">
              <label>Ocupação:</label>
              <select class="form-control" placeholder="Seu email">
                <option>Selecione uma opção...</option>
              </select>
            </div>  

            <div class="form-group">

              <p>Tecnologias:</p>

              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="JavaScript"
                  v-model="dev.stacks">
                <label class="form-check-label">JavaScript</label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="Vue JS"
                  v-model="dev.stacks">
                <label class="form-check-label">Vue JS</label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="Vuex"
                  v-model="dev.stacks">
                <label class="form-check-label">Vuex</label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="Vue Router"
                  v-model="dev.stacks">
                <label class="form-check-label">Vue Router</label>
              </div>

            </div>      

            <div class="form-group">
              <label>Resumo de perfil:</label>
              <textarea
                class="form-control"
                placeholder="Conte-nos um pouco sobre você..."
                v-model.trim="dev.bio">
              </textarea>
            </div>

            <div class="form-group">

              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  v-model="dev.newsletter"
                  :true-value="'Sim'"
                  :false-value="'Não'">
                <label class="form-check-label">Receber notificações por email</label>
              </div>

            </div>

            <button class="btn btn-secondary">Resetar</button>
            <button class="btn btn-success">Enviar</button>

          </form>

        </div>

        <!-- saida -->
        <div class="col-sm-6">

          <h3>Saída</h3>

          <div class="card">

            <div class="card-header">Dados</div>

            <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Nome:</strong> {{dev.name}}</li>
              <li class="list-group-item"><strong>Email:</strong>  {{dev.email}}</li>
              <li class="list-group-item"><strong>Idade:</strong> {{dev.age}}</li>
              <li class="list-group-item"><strong>Gênero:</strong> {{dev.genre}}</li>
              <li class="list-group-item"><strong>Ocupação:</strong> </li>
              <li class="list-group-item">
                <strong>Tecnologias:</strong>
                <ul>
                  <li
                    v-for="(stack, index) in dev.stacks.sort()"
                    :key="index">
                      {{ stack }}
                  </li>
                </ul>
              </li>
              <li class="list-group-item">
                <strong>Biografia:</strong>
                <!-- O Bootstrap já adiciona uma estilização para o elemnto pre -->
                <pre>{{ dev.bio }}</pre>
                <!-- Porém, caso queira aplicar a quebras de linhas sem utilizar essa estilização do Bootstrap segue a estilização abaixo: -->
                <!-- <div style="white-space: pre;">{{ dev.bio }}</div> -->
              </li>
              <li class="list-group-item"><strong>Receber notificações?</strong> {{ dev.newsletter }} </li>
            </ul>

            <div class="card-header">Model</div>

            <div class="card-body">
              <pre><code>{{  dev }}</code></pre>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      dev: {
        name: '',
        email: '',
        age: 0,
        genre: 'Masculino',
        stacks: [],
        bio: 'Sou um dev!',
        newsletter: 'Sim'
      }
    }
  }
}
</script>

<style scoped>
  .btn {
    margin-right: 5px;
  }
  .sb-5 {
    margin-bottom: 3rem;
  }
</style>