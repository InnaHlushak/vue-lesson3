<template>
    <div class="container">
        <h3>You can easily find and view photos or videos</h3>
        <p v-bind:hidden= "selected != ''"> Choose a method of searching:</p>
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
        <inputCountContainer v-if="selected === 'Search in a random way'"/>
        <inputDateContainer v-else-if="selected === 'Search by date'"/>
        <inputPeriodContainer v-else-if="selected === 'Search by time period'"/>
    </div>
</template>

<script>
import inputCountContainer from './InputCountContainer.vue';
import inputDateContainer from './inputDateContainer.vue';
import inputPeriodContainer from './inputPeriodContainer.vue';

export default {
    name: 'InputsContainer',
    components: {
        inputCountContainer,
        inputDateContainer,
        inputPeriodContainer
    },
    data() {
        return  {
            selected: '',
            hidden: ''
        }
    }
}
</script>


