<template>
    <div id="splash">
        <video src="/hello.webm" autoplay onclick="!this.playing && this.play();"></video>
        <section>
            <h1>Mr. Krabs Simulator</h1>
            <h2>MONEY!!</h2>
        </section>
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
}

#splash section {
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
    z-index: -1;
}
</style>
