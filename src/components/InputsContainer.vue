<template>
    <div class="container">
        <h3>You can easily find and view photos or videos</h3>
        <p :hidden="!!selected"> Choose a method of searching:</p>
        <div>
            <v-select 
                label="Select"
                :items="[
                    'Search in a random way', 
                    'Search by date', 
                    'Search by time period', 
                ]"
                variant="outlined"
                v-model="selected"
            ></v-select>
        </div>
        <InputCountContainer v-if="selected === 'Search in a random way'"/>
        <InputDateContainer v-else-if="selected === 'Search by date'"/>
        <InputPeriodContainer v-else-if="selected === 'Search by time period'"/>
    </div>
</template>

<script>
    import InputCountContainer from './InputCountContainer.vue';
    import InputDateContainer from './inputDateContainer.vue';
    import InputPeriodContainer from './inputPeriodContainer.vue';

    export default {
        name: 'InputsContainer',
        components: {
            InputCountContainer,
            InputDateContainer,
            InputPeriodContainer,
        },
        data() {
            return  {
                selected: '',
                hidden: '',
            }
        }
    }
</script>


