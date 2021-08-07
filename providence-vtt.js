console.log('hello world: providence-vtt');
import {insertCustomDamage} from './modules/newDamageTypes.js';
import {insertCustomConditions} from './modules/newConditions.js';
import {insertCustomCurrency} from './modules/newCurrency.js';
import {insertProvidenceAttributes, attActionSheet, attEntitySheet} from './modules/newAttributes.js';
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
// https://flaviocopes.com/es-modules/

// Setting to always show resources
Hooks.on("init", function () {

});

Hooks.once('setup', () => {
    insertCustomDamage();
    // insertCustomConditions();
    // insertCustomCurrency();
    insertProvidenceAttributes();
});


Hooks.on(
    "renderEntitySheetConfig",
    /**@param {EntitySheetConfig} entity
     * @param {JQuery} html*/
    function (entity, html) {
        // attEntitySheet({entity: entity, html: html});
    }
);

Hooks.on(
"renderActorSheet",
/** @param dndSheet {ActorSheet} @param html {JQuery} */ function (dndSheet, html) {
    // attActionSheet({dndSheet: dndSheet, html: html});
});