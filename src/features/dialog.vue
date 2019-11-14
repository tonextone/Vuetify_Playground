<template>
    <div style="position: relative;">
        <v-text-field 
            label="text"
            :maxlength="3"

        />

        <hr>
        
        <v-btn @click="menu = !menu">
            click me
        </v-btn>
        <v-dialog
            v-model="menu"
            hide-overlay
        >
            <v-card>
                <v-card-text>
                    <h1>Hello World</h1>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menu: false,
        }
    },
}
</script>
