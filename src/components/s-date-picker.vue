<template>
    <v-menu
        :close-on-content-click="false"
        offset-y

        v-model="showPicker"

        nudge-right="40"
        nudge-top="20"
        full-width
        min-width="290"
    >
        <v-text-field
            slot="activator"

            :value="formattedDate"

            v-bind="$attrs"
            Xv-on="Object.assign({}, ...$listeners, { input: '' })"
            v-on="$listeners"

            readonly
            single-line
            :outline="outline"
            :prepend-inner-icon="prependInnerIcon"
        />

        <v-date-picker
            v-bind="$attrs"
            v-on="$listeners"

            :first-day-of-week="firstDayOfWeek"
            :no-title="noTitle"
            @input="showPicker = false"

        />
    </v-menu>
</template>

<script>
/**
 * Provides a readonly v-text-field combined with a drop-down v-date-picker, all in one.
 *
 * @module common/components/s-date-picker
 *
 * @param {Boolean} [outline=true] See v-text-field
 * @param {Boolean} [noTitle=true] See v-text-field
 * @param {String} [prependInnerIcon=event] See v-text-field
 * @param {Number} [firstDayOfWeek=1 (monday)]
 * @param {String} value - The input date string
 * @param {String} [format=undefined] - The date will be formatted using "dayjs" according to this string
 * @param {Function} [formatDate=undefined] - The date will be formatted using this function, if supplied
 */
import day from 'dayjs'

export default {
    props: {
        value: String,
        outline: { type: Boolean, default: true },
        noTitle: { type: Boolean, default: true },
        prependInnerIcon: { type: String, default: 'event' },
        firstDayOfWeek: { type: Number, default: 1 },
        formatDate: Function,
        format: String
    },

    data() {
        return {
            showPicker: false
        }
    },

    computed: {
        formattedDate() {
            let date = this.value
            if (!date) return date

            if (this.formatDate) date = this.formatDate(date)
            if (this.format && date) date = day(this.value).format(this.format)

            return date
        }
    }
}
</script>

<style scoped lang="scss">
// Remove the ellipsis from the time pickers, because it just wastes space
.pick-time,
.pick-date {
    .input-group--text-field input {
        text-overflow: unset;
    }
}
</style>
