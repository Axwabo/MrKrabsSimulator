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
}

#splash section {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    color: red;
    text-shadow: 0 0 10px black, 0 0 20px black;
}

#splash h1, h2 {
    margin: 0;
    text-align: center;
}

#splash video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
