<template>
    <!--  
        tabbed-editor
    -->
    <div>

        <!-- Tab Bar -->
        <v-flex>
            <s-tabs
                v-model="editorIndex"
                slider-color="primary"
                @input="$emit('tab-change', sqlEditorList[editorIndex])"
                :tabs="tabs" 
                @add-tab="addEditor({ title: `Editor ${tabs.length+1}`}); editorIndex=tabs.length-1"
                @close-tab="removeEditor($event.id)"
            >
                <slot name="beforeTabs" slot="beforeTabs" />
                <slot name="afterTabs" slot="afterTabs" />
            </s-tabs>


        </v-flex>

        <!-- Editor -->
        <v-flex>
            <v-card>
                <v-card-text>
                    <v-textarea box hide-details :value="text"></v-textarea>
                </v-card-text>
            </v-card>
        </v-flex>
    </div>
</template>

<script>
import STabs from '@/components/s-tabs'

export default {
    props: {
    },

    components: {
        STabs
    },

    data() {
        return {
            editorIndex: 1,
            tabs: [{ title: 'Editor 1'}, { title: 'ade 2' }, { title: 'Editor 3' }],
            // tabs: [ { title: 'Editor 1'}, { title: 'ade 2'}, { title: 'Editor 3'}, { title: 'xxx 4'}, { title: 'yyy 5'}, { title: 'this is tab 6'}, { title: 'alfslkja'}, { title: 'woiutoe' } ],
            text: 'The editor goes here in all its glory',
        }
    },

    methods: {
        addEditor(editor) {
            this.tabs.push({ ...editor, title: `Editor ${this.tabs.length+1}` })
        },

        removeEditor(id) {
            console.log(id)
            this.tabs = this.tabs.filter( tab => tab.id !== id )
        }
    }
  
}
</script>

