import type { Location } from "./location.ts";

const characters: Partial<Record<Location, string>> = {
    "Dining Hall": "barnacles",
    "Kitchen": "spongeLaugh"
};

export function replay(element: HTMLAudioElement | null) {
    if (!element)
        return;
    element.currentTime = 0;
    void element.play();
}

export function playMoney() {
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

export function playSad() {
    replay(document.querySelector("audio#sad"));
}

export function playCharacter(location: Location) {
    const id = characters[location];
    if (id)
        replay(document.querySelector(`audio#${id}`));
}

export function playKrabs() {
    replay(document.querySelector("audio#krabsLaugh"));
}
