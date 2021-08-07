import Actor5e from "/systems/dnd5e/module/actor/entity.js";
import {DND5E} from '/systems/dnd5e/module/config.js';

let newAbilities = {
    'san': "Sanity",
    'aur': "Aura",
}

// Zbeyer this does all the work we need in the data layer, but doesn't affect the UI yet...
let insertProvidenceAttributes = function () {

    const prep = Actor5e.prototype.prepareBaseData;

    Object.keys(newAbilities).forEach(function (key) {
        let value = newAbilities[key];

        // Define Sanity as an ability
        DND5E.abilities[value] = value;
        DND5E.abilityAbbreviations[key] = key;

        CONFIG.DND5E.abilities[value] = value;
        CONFIG.DND5E.abilityAbbreviations[key] = key;
    });

    return;

    function extendActorData() {

        // ZBeyer: TODO: figure out the data model being employed here and clean this up!!

        // https://discord.com/channels/170995199584108546/670336046164213761/873141196850085928
        let source = this.data._source.data.abilities;
        let abl = this.data._source.data.abilities;

        Object.keys(newAbilities).forEach(function (key) {
            // abl["san"] = abl["san"] || {value: 10, proficient: 0};
            source[key] = source[key] || {value: 10, proficient: 0}
            abl[key] = abl[key] || {value: 10, proficient: 0}
        });

        return prep.call(this);
    }

    Actor5e.prototype.prepareBaseData = extendActorData;
}

// Read more at https://github.com/ardittristan/5eSheet-resourcesPlus/blob/master/addresources.js
let attEntitySheet = function (params) {
    let entity = params.entity;
    let html = params.html;

    console.log('attEntitySheet params: %o', params);

    // Zbeyer turned this off for now.
    // Need to do more reading.
    return;


    if (!entity?.object?.data?.type !== "character") return;
    html.height("auto");

    // add element to config screen
    $(`
        <div class="form-group">
            <label>Zack is awesome</label>
<!--            <input type="number" id="resourceCount" min="0" max="20" size="2" value="${entity?.object?.data?.data?.resources?.count?.value}">-->
<!--            <p class="notes">Set the max resource count</p>-->
        </div>
    `).insertAfter(html.find(".form-group:last-of-type"));

    // // handle submit
    // html.find("button[type=submit]").on("click", (e) => {
    //     const oldValue = entity?.object?.data?.data?.resources?.count?.value;
    //     const newValue = $(e.target.form).find("input#resourceCount").val();
    //     if (oldValue !== undefined) {
    //         entity.object.data.data.resources.count.value = newValue;
    //         if (oldValue !== newValue) {
    //             entity.object.sheet.render(false);
    //         }
    //     }
    // });
};

let attActionSheet = function (params) {
    console.log('attActionSheet params: %o', params);

    // Zbeyer turned this off for now.
    // Need to do more reading.
    return;


    let dndSheet = params.dndSheet;
    let html = params.html;
    // console.log('attActionSheet params: %o', params);
    if (dndSheet.constructor.name == "MonsterBlock5e" || dndSheet.actor.data.type !== "character") return;
    let list = html[0].querySelectorAll(".ability-scores");
    let classes = "ability-scores";

    Object.keys(newAbilities).forEach(function (key) {
        let value = newAbilities[key];
        $(`
        <li class="ability proficient" data-ability="${key}">
        <h4 class="ability-name box-title rollable">${value}</h4>
                    <input class="ability-score" name="data.abilities.${key}.value" type="number" value="17" placeholder="10">
                    <div class="ability-modifiers flexrow">
                        <span class="ability-mod" title="Modifier">+ZB</span>
                        <input type="hidden" name="data.abilities.${key}.proficient" value="1" data-dtype="Number">
                        <a class="proficiency-toggle ability-proficiency" title="Proficiency"><i class="fas fa-check"></i></a>
                        <span class="ability-save" title="Saving Throw">+8</span>
                    </div>
                </li>
        `).appendTo(html.find(".ability-scores"));

    });


};

export {
    insertProvidenceAttributes,
    attEntitySheet,
    attActionSheet
}