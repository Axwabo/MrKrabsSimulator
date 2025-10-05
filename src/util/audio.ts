import { type Location, locationIDs } from "./location.ts";

export function replay(element: HTMLAudioElement | null) {
    if (!element)
        return;
    element.currentTime = 0;
    void element.play();
}

export function playMoney() {
    const container = document.getElementById("audio")!;
    const sources = new Set<string>();
    const playbacks: HTMLAudioElement[] = [];
    let count = 0;
    for (const e of container.querySelectorAll("audio")) {
        sources.add(e.src);
        count++;
        if (e.paused)
            playbacks.push(e);
    }
    if (count >= 50)
        return;
    if (playbacks.length) {
        void playbacks[Math.floor(Math.random() * playbacks.length)].play();
        return;
    }
    if (!sources.size)
        return;
    const sourceList = Array.from(sources);
    const audio = document.createElement("audio");
    audio.src = sourceList[Math.floor(Math.random() * sourceList.length)];
    audio.autoplay = true;
    container.append(audio);
}

export function playSad() {
    replay(document.querySelector("audio#sad"));
}

export function playCharacter(location: Location) {
    const id = locationIDs[location];
    if (id)
        replay(document.querySelector(`#${id} audio.locational`));
}

export function playKrabs() {
    replay(document.querySelector("audio#krabsLaugh"));
}
