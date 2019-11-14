<template>

    <v-container 
        fluid fill-height grid-list-md 
        class="pr-0" 
        style="padding-left: 10px; padding-top: 5px;"
    >
        
        <v-layout :column="$vuetify.breakpoint.smAndDown">
            
            <!-- 
                database-overview  
            -->
            <v-flex
                shrink
                v-show="showDatabaseOverview"
                :style="{
                    minWidth: '250px',
                    maxWidth: $vuetify.breakpoint.mdAndUp ? '250px': undefined,
                    maxHeight: $vuetify.breakpoint.smAndDown ? '250px':'100%',
                    height: $vuetify.breakpoint.smAndDown ? '250px':'100%'
                }"
            >
                <database-overview @hide="showDatabaseOverview=false" />
            </v-flex>


            <!-- 
                editor and results 
            -->
            <v-flex>
                <v-layout column>

                    <tabbed-editor 
                        @add-tab=""
                        ref="tabbedEditor"
                        :code-mirror-options="codeMirrorOptions"
                        @execute="handleExecute"
                        @tab-change="handleTabChange"
                    >
                        <!-- Show-database-overview button -->
                        <v-flex shrink class="pr-0"
                            slot="beforeTabs"
                            v-if="!showDatabaseOverview"
                        >
                            <v-btn icon small 
                                @click="showDatabaseOverview=true"
                                class="mr-0"
                                title="Show Database Overview"
                            >
                                <v-icon>list</v-icon>
                            </v-btn>
                        </v-flex>
                    </tabbed-editor>

                    <!--  
                        tabbed-results
                    -->
                    <v-flex>
                        <tabbed-results />
                    </v-flex>

                </v-layout>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import DatabaseOverview from './database-overview.vue'
import TabbedEditor from './tabbed-editor.vue'
import TabbedResults from './tabbed-results.vue'

export default {
    components: {
        DatabaseOverview,
        TabbedEditor,
        TabbedResults
    },
    
    data() {
        return {
            showDatabaseOverview: true,
            codeMirrorOptions: {}
        }
    },

    methods: {
        handleExecute() {

        },

        handleTabChange() {

        }
    }
}
</script>
