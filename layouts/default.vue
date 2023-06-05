<script setup lang="ts">
import { RouterView } from 'vue-router';
const title = ref("Viện khoa học và Sức khoẻ cộng đồng");
useHead({
  meta: [{ content: title }],
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - Viện khoa học và sức khoẻ cộng đồng`
      : "Trang chủ - Viện khoa học và sức khoẻ cộng đồng";
  },
});
</script>

<template>
    <v-locale-provider >
        <v-app>
            <LayoutFullMain/>
            <v-main>
                <v-container fluid class="page-wrapper">
                    <div class="maxWidth">
                        <RouterView />
                    </div>
                </v-container>
            </v-main>
        </v-app>
    </v-locale-provider>
</template>
