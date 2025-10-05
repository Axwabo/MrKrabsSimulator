const characterSelectors: Record<string, string> = {
    "Mr. Krabs": "#mrKrabs",
    "Squidward": "#diningHall .character",
    "SpongeBob": "#kitchen .character"
};

export default function jump(character: string) {
    const selector = characterSelectors[character];
    if (!selector)
        return;
    const element = document.querySelector(selector);
    if (!element)
        return;
    element.getAnimations()[0]?.cancel();
    element.animate([ { translate: "0 0" }, { translate: "0 -0.5rem" } ], {
        duration: 200,
        iterations: 2,
        direction: "alternate"
    });
}
