<template>

    <div>

        <v-toolbar 
            flat clipped-left
            color="white" style="border-bottom: 1px solid #eee !important;">
            <v-toolbar-side-icon @click="mini = !mini"></v-toolbar-side-icon>
            <h1>ACME</h1>
        </v-toolbar>

        <v-layout>
            <v-flex shrink>
                <v-navigation-drawer
                    clipped permanent
                    v-model="showDrawer"
                    :mini-variant="mini"
                    width="254"
                    style="overflow-y: auto;"
                >
                    <v-list>
                        <v-list-tile v-for="i in 15" @click :key="i">
                            Item {{ i }}
                        </v-list-tile>
                    </v-list>
                </v-navigation-drawer>
            </v-flex>

            <v-flex>
                <sql-editor />
            </v-flex>
            
        </v-layout>

        <v-footer 
            inset
            color="white" 
            style="border-top: 1px solid #eee !important;"
        >This is the footer
        </v-footer>

    </div>    
</template>

<script>
import SqlEditor from './sql-editor.vue'

export default {
    components: {
        SqlEditor
    },

    data() {
        return {
            showDrawer: true,
            mini: true,
        }
    }
}
</script>
