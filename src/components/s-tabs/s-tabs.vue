<template>

    <v-card
        :style="{ borderColor, background }"
    >
        <v-responsive>
            <!--
                Put the tabs and the buttons on the same row.
            -->
            <v-layout  justify-start>

                <slot name="beforeTabs" />

                <!-- 
                    The width of 200px is a Vuetify tabs hack, which ensures
                    that the tabs bar does not overflow the column width and push 
                    the add button out of reach. Max-width will not work, because 
                    it will actually set the width, whereas width is just a 
                    suggestion to flex-box.
                -->
                <v-flex style="width: 200px;" class="px-0">
                    <v-tabs 
                        :value="value"
                        v-bind="$attrs"
                        v-on="$listeners"
                        :slider-color="sliderColor"
                        class="full-tabs"
                        show-arrows
                    >
                        <slot v-bind="{tabs}">
                            <s-tab
                                v-for="(item, index) in tabs"
                                :key="index"
                                :close="closeTab && tabs.length>1"
                                @close="$emit('close-tab', item)"
                            >
                                <v-tooltip bottom>
                                    <span slot="activator" class="clip">
                                        {{ item.title || 'Editor' }} {{ item.id ? item.id : null}}
                                    </span>
                                    <span>{{item.title || "Editor"}}</span>
                                </v-tooltip>
                            </s-tab>
                        </slot>
                    </v-tabs>
                </v-flex>

                <v-flex v-if="$slots.afterTabs || addButton" shrink class="pl-0">
                    <slot name="afterTabs"/>

                    <s-btn-plus
                        small
                        class="mr-1"
                        @click="$emit('add-tab')"
                    />

                </v-flex>

            </v-layout>

        </v-responsive>
    </v-card>

</template>

<script>
import STab from './s-tab'
import SBtnPlus from './s-btn-plus'
import SBtnPlusText from './s-btn-plus-text'

export default {
    props: {
        value: Number,
        sliderColor: { type: String, default: 'primary' },
        borderColor: { type: String, default: 'rgb(238, 238, 238)' },
        background: { type: String, default: 'white' },
        tabs: { type: Array, default: () => null }
    },

    data() {
        return {
            closeTab: !!this.$listeners['close-tab'],
            addButton: !!this.$listeners['add-tab']
        }
    },

    components: { STab, SBtnPlus, SBtnPlusText }
}
</script>

<style scoped lang="scss">
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

.clip {
    max-width: 9ch;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
