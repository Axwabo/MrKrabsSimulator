<script setup lang="ts">
import one from "/audio/money1.ogg";
import two from "/audio/money2.ogg";
import three from "/audio/money3.ogg";
import four from "/audio/money4.ogg";
</script>

<template>
    <div id="audio">
        <audio :src="one"></audio>
        <audio :src="two"></audio>
        <audio :src="three"></audio>
        <audio :src="four"></audio>
    </div>
</template>
