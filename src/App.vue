<template>
<main class="flex flex-col min-h-screen w-full max-w-6xl mx-auto p-6">
    <router-view />
</main>
</template>

<style lang="scss">
:root {
    --global-background-color: #efefef;
}

html {
    transition: background 1500ms ease-out;
    background: var(--global-background-color);
}
</style>
