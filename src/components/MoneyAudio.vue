<script setup lang="ts">
import playMoney from "../money.ts";

import src from "/audio/money1.ogg";
</script>

<template>
    <div id="audio">
        <button v-on:click="playMoney()">💲</button>
        <audio :src="src"></audio>
    </div>
</template>
