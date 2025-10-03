export default function playMoney() {
    const container = document.getElementById("audio")!;
    let src = "";
    let count = 0;
    for (const e of container.querySelectorAll("audio")) {
        src ||= e.src;
        count++;
        if (!e.paused)
            continue;
        void e.play();
        return;
    }
    if (count >= 50)
        return;
    const audio = document.createElement("audio");
    audio.src = src;
    audio.autoplay = true;
    container.append(audio);
}
