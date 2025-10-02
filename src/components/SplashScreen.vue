<script setup lang="ts">
const emit = defineEmits([ "play" ]);
</script>

<template>
    <div id="splash">
        <video src="/hello.webm" autoplay onclick="this.paused && this.play();"></video>
        <section>
            <h1>Mr. Krabs Simulator</h1>
            <h2>MONEY!!</h2>
        </section>
        <button v-on:click="emit('play')">Play</button>
    </div>
</template>

<style scoped>
#splash {
    width: 100vw;
    height: 100vh;
    height: 100svh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
}

#splash section {
    z-index: 1;
    color: red;
    text-shadow: 0 0 10px black, 0 0 20px black;
    font-size: 2em;
    -webkit-text-stroke: 3px black;
}

#splash h1, h2 {
    margin: 0;
    text-align: center;
}

#splash video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

#splash button {
    z-index: 1;
    font-size: 2rem;
}
</style>
