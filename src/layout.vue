<template>
    <v-app>
        <v-content>
            <v-container fluid>
                <v-tabs>
                    <v-tab>Tabs</v-tab>
                    <v-tab-item><my-tabs /></v-tab-item>

                    <v-tab>Datepicker</v-tab>
                    <v-tab-item><date-picker /></v-tab-item>

                    <v-tab>Dialog</v-tab>
                    <v-tab-item><my-dialog /></v-tab-item>
                </v-tabs>
                
            </v-container>
        </v-content>
    </v-app>
</template>

<script>

export default {
    components: {
        MyDialog: () => import('./features/dialog.vue'),
        MyTabs: () => import('./features/tabs'),
        DatePicker: () => import('./features/date-picker.vue')
    },
}
</script>

<style>
.b1, [b1] {
    border: 1px dashed red;
}

.h-100 {
    height: 100%;
}
.w-100 {
    width: 100%;
}

::-webkit-scrollbar { display: none; }

.v-btn, .v-tabs__item {
    text-transform: none !important;
}

</style>
