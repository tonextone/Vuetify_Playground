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
                        <v-list-tile v-for="i in 30" @click :key="i">
                            Item {{ i }}
                        </v-list-tile>
                    </v-list>
                </v-navigation-drawer>
            </v-flex>

            <v-flex>
                <v-container fluid fill-height grid-list-lg class="py-2 pl-3 pr-0">
                    
                    <v-layout :column="$vuetify.breakpoint.xsOnly">
                        
                        <!--  
                            database-overview

                            The database overview pane can be hidden by clicking the list icon
                            on the editor tab pane.

                            We also set the height and width based on the breakpoint. This could be
                            done with pure CSS media queries, but vuetify provides us the means to 
                            do it right here with JS.
                        -->
                        <v-flex
                            shrink
                            v-show="showDatabaseOverview"
                            :style="{
                                minWidth: '250px',
                                maxWidth: $vuetify.breakpoint.smAndUp ? '250px': undefined,
                                maxHeight: $vuetify.breakpoint.xsOnly ? '250px':'100%',
                                height: $vuetify.breakpoint.xsOnly ? '250px':'100%'
                            }"
                        >
                            <v-card style="height: 100%">
                                <v-card-text>
                                    <v-layout>
                                        <v-flex>Database Overview</v-flex>
                                        <v-btn small icon class="ma-0" @click="showDatabaseOverview=false">
                                            <v-icon small>close</v-icon>
                                        </v-btn>
                                    </v-layout>
                                </v-card-text>
                            </v-card>
                        </v-flex>

                        
                        <!--  
                            tabbed-editor
                            tabbed-results
                        -->
                        <v-flex>
                            <v-layout column>

                                <!-- Tab Bar -->
                                <v-flex>
                                    <v-card>
                                        <v-responsive>
                                            
                                            <!--  
                                                We put the tabs and the buttons on the same row.
                                            -->
                                            <v-layout  justify-start>

                                                <!-- 
                                                    Show database-overview button
                                                -->
                                                <v-flex shrink>
                                                    <v-btn icon small 
                                                        v-if="!showDatabaseOverview"
                                                        @click="showDatabaseOverview=!showDatabaseOverview"
                                                        class="mr-0"
                                                        title="Show Database Overview"
                                                    >
                                                        <v-icon>view_list</v-icon>
                                                    </v-btn>
                                                </v-flex>
                                                
                                                <!-- 
                                                    The width of 200px is a Vuetify tabs hack, which ensures
                                                    that the tabs bar does not overflow the column width and push 
                                                    the add button out of reach. Max-width will not work, because 
                                                    it will actually set the width, whereas width is just a 
                                                    suggestion to flex-box.
                                                -->
                                                <v-flex style="width: 200px;" class="px-0">
                                                    <v-tabs class="full-tabs" 
                                                        v-model="showTab" 
                                                        show-arrows
                                                    >
                                                        <v-tab v-for="(tab, index) in tabs" :key="index">{{ tab }}</v-tab>
                                                    </v-tabs>
                                                </v-flex>

                                                <v-flex shrink>
                                                    <v-btn icon small 
                                                        Xclick="tabs.push(`Editor ${tabs.length+1}`); showTab=tabs.length-1"
                                                        @click="tabs.push(`Editor ${tabs.length+1}`)"
                                                        class="ml-0">
                                                        <v-icon>add</v-icon>
                                                    </v-btn>
                                                </v-flex>
                                                
                                            </v-layout>
                                        </v-responsive>
                                    </v-card>
                                </v-flex>

                                <!-- Editor -->
                                <v-flex>
                                    <v-card>
                                        <v-card-text>
                                            <v-textarea box hide-details></v-textarea>
                                        </v-card-text>
                                    </v-card>
                                </v-flex>

                                <!-- Results -->
                                <v-flex>
                                    <v-card>
                                        <v-card-text>
                                            <p>Results</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptatum cupiditate porro veritatis cum aspernatur ea repellendus neque laboriosam aut eligendi modi atque, error rerum ab molestiae dolorum autem vitae!</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptatum cupiditate porro veritatis cum aspernatur ea repellendus neque laboriosam aut eligendi modi atque, error rerum ab molestiae dolorum autem vitae!</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptatum cupiditate porro veritatis cum aspernatur ea repellendus neque laboriosam aut eligendi modi atque, error rerum ab molestiae dolorum autem vitae!</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptatum cupiditate porro veritatis cum aspernatur ea repellendus neque laboriosam aut eligendi modi atque, error rerum ab molestiae dolorum autem vitae!</p>
                                        </v-card-text>
                                    </v-card>
                                </v-flex>

                            </v-layout>

                        </v-flex>
                    </v-layout>
                </v-container>
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
export default {
    data() {
        return {
            showDrawer: true,
            mini: true,
            showResults: false,
            showTab: 1,
            showDatabaseOverview: true,
            tabs: ['Editor 1', 'ade 2', 'Editor 3'],
            // tabs: [ 'Editor 1', 'ade 2', 'Editor 3', 'xxx 4', 'yyy 5', 'this is tab 6', 'alfslkja', 'woiutoe' ],
            text: 'The editor goes here in all its glory',
        }
    }
}
</script>

<style lang="scss" scoped>
.full-tabs /deep/ {
    .v-tabs__slider {
        height: 40px;
        opacity: 1;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
    }
    .v-tabs__container {
        height: 40px;
    }

    .v-tabs__item--active.v-tabs__item {
        z-index: 1;
        color: white;
        .v-icon {
            color: white;
        }
    }
}
</style>
