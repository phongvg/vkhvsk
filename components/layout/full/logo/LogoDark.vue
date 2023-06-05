<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const primary = ref('rgb(var(--v-theme-primary))');
const secondary = ref('rgb(var(--v-theme-secondary))');
</script>
<template>
    <div class="logo">
        <NuxtLink to='/'>
            <img
                src="../../../../public/images/logos/vbdsb.png"
                alt=""
                class="float-left margin-fleche"
                width="300"
            />  
        </NuxtLink>
    </div>
</template>

