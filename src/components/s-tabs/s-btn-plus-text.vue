<template>
    <v-btn v-bind="$attrs" v-on="$listeners"
        class="mx-0" small flat style="min-width: auto; text-transform: none;">
        <slot>Add</slot> <v-icon class="ml-1" :small="$attrs.small">fa-plus-circle</v-icon>
    </v-btn>
</template>
