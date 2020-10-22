<template>
<div class="mt-auto">
    <CurrentWeather />
    <Forecast />
</div>
</template>

<script lang="ts">
import {
    defineComponent
} from "vue";

import CurrentWeather from "../components/CurrentWeather.vue";

export default defineComponent({
    components: {
        CurrentWeather
    }
});
</script>
