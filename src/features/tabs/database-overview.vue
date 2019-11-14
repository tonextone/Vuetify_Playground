<!--  
    database-overview

    The database overview pane can be hidden by clicking the list icon
    on the editor tab pane.

    We also set the height and width based on the breakpoint. This could be
    done with pure CSS media queries, but vuetify provides us the means to 
    do it right here with JS.
-->
<template>
    <v-card style="height: 100%">
        <v-card-text>
            <v-layout>
                <v-flex>Database Overview</v-flex>
                <v-btn small icon class="ma-0" @click="$emit('hide')">
                    <v-icon small>close</v-icon>
                </v-btn>
            </v-layout>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
  
}
</script>
