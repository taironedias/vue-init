<template>
    <li class="list-group-item">
        <span>{{ filmeTituloConcat }}</span>
        <button class="btn btn-success float-right">Selecionar</button>
    </li>
</template>

<script>
export default {
    props: {
        filmeTitulo: {
            type: String,               // Especifica a tipagem da props
            // required: true,             // Informa que a props deve ser obrigatoria ao utilizar o component
            // default: 'Titulo padrão'    // Define um valor padrão caso o valor da props não seja passada, mas essa forma é valida apenas para tipos primitivos String, Number e Boolean. Obviamente se utilizar o required não faz sentido utilizar o default e, vice-versa.
            // Para outros tipos não primitivos (e também os tipos primitivos), o default deve ser uma função retornando o tipo, por exemplo:
            default() {
                // return ['retorna o array', 'etc']
                return 'Vingadores'
            },
            validator(value) {
                return value.includes('Marvel')
            }
            /**NOTA: dentro das funções default e validator não temos acesso as propriedades, pois elas são carregadas pelo Vue antes do lifecycle created */
        }
    },
    computed: {
        filmeTituloConcat() {
            return `Titulo: ${this.filmeTitulo}`
        }
    },
    created() {
        console.log(typeof this.filmeTitulo);
    }
}
</script>