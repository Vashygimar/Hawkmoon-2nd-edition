import HawkmoonItemSheet from "./sheets/hawkmoonitem-sheet.js";
import HawkmoonActorSheet from "./sheets/hawkmoonactor-sheet.js";

Hooks.once("init", () => {
    console.log("Hawkmoon-2nd-edition-custom | Initialisation du système hawkmoon 2nd edition (custom)");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("Hawkmoon-2nd-edition-custom", HawkmoonItemSheet, { makeDefault: true });

    Actor.unregisterSheet("core", Actorsheet);
    Actor.registerSheet("Hawkmoon-2nd-edition-custom", HawkmoonActorSheet, { makeDefault: true });
})