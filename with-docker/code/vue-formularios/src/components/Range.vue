<template>
    <div>
        <label>{{ customLabel }}</label>
        <input
            :class="inputClass"
            type="range"
            v-bind="$attrs"
            :value="value"
            @input="updateAmount">
    </div>
</template>

<script>
export default {
    inheritAttrs: true,
    props: {
        label: [String],
        value: [Number, String],
        inputClass: [String, Object, Array]
    },
    data() {
        return {
            amountCurrent: this.value || this.$attrs.min
        }
    },
    computed: {
        customLabel() {
            let amountFormatter = parseFloat(this.amountCurrent).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
            return `${this.label} (${amountFormatter})`
        }
    },
    methods: {
        updateAmount(event) {
            const amount = event.target.value;
            this.$emit('input', amount)
            this.amountCurrent = amount
        }
    }
}
</script>