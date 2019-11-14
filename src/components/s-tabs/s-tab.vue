<template>
    <v-tab
        v-bind="$attrs"
        v-on="$listeners"
        class="s-tab"
    >
        <v-icon
            small
            v-if="icon"
            class="mr-1"
        >{{ icon }}
        </v-icon>

        <slot></slot>

        <v-icon
            small
            v-if="close"
            style="margin-right: -8px;"
            class="ml-2 show-hover"
            @click.stop="$emit('close')"
        >close
        </v-icon>
    </v-tab>
</template>

<script>
export default {
    props: {
        close: Boolean,
        icon: String
    }
}
</script>

<style
    lang="scss"
    scoped
>
.s-tab /deep/ .show-hover {
    opacity: 0.3;
}
.s-tab /deep/ .v-tabs__item:hover .show-hover {
    opacity: 1;
}
</style>
