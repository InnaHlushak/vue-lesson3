<template>
    <div class="wrapper">
        <h1>Доманнє завдання 3</h1>
        <Hello />
        <InputsContainer />
        <Favorites />
    </div>
</template>

<script>
    import Hello from './components/Hello.vue'
    import InputsContainer from './components/InputsContainer.vue'

    export default {
        name: 'App',
        components: {
            Hello,
            InputsContainer, 
        }
    }
</script>

<style scoped>
    .wrapper {
        border: 1px solid #0df886;
        padding: 0 20px;
        background: black;
        color:white;
    }

    .wrapper h1{
        color: green;
    }

</style>
