<template>
    <v-menu
        offset-y
        :close-on-content-click="false"
        :disabled="disabled"
        v-model="menuOpen"
        ref="menu"
        :return-value.sync="date",
    >
        <v-text-field
            v-bind="$attrs"
            v-on="$listeners"
            slot="activator"
        ></v-text-field>
        
        <v-date-picker
            v-model="date"
            Xv-bind="Object.assign({}, $attrs, $props)"
            v-bind="$props"
            @change="autosave && $emit('input', date)"
            :readonly="false"
        >
            <v-layout v-if="actions">
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="menuOpen=false">
                    Cancel
                </v-btn>
                <v-btn
                    flat
                    color="primary"
                    @click="$refs.menu.save(date); $emit('input', date);"
                >OK
                </v-btn>
            </v-layout>
        </v-date-picker>
    </v-menu>
</template>

<script>
export default {
    props: {
        value: String,
        noTitle: Boolean,
        actions: Boolean,
        label: String,
        required: Boolean,
        autosave: Boolean,
        hideDetails: Boolean,
        clearable: Boolean,
        readonly: { type: Boolean, default: true },
        rules: Array,
        disabled: Boolean,
        allowedDates: [Array, Object, Function],
        min: String,
        max: String,
        transition: String
    },
    data() {
        return {
            date: this.value,
            menuOpen: false
        }
    },
    watch: {
        value(nv) {
            this.date = nv
        }
    }
}
</script>

<style scoped lang="scss">
// Remove the ellipsis from the time pickers, because it just wastes space
.pick-time,
.pick-date {
    .input-group--text-field input {
        text-overflow: unset;
    }
}
</style>
