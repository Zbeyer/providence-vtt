Hooks.once('setup', () => {
    // Thank reddit: https://www.reddit.com/r/FoundryVTT/comments/iy1dv7/custom_damage/
    console.log('P5e | Initializing');

    // debug learning / logging
    console.log('zbeyer: CONFIG.DND5E.damageTypes: %o', CONFIG.DND5E.damageTypes);
    console.log('zbeyer: CONFIG.DND5E.attributes: %o', CONFIG.DND5E.attributes);
    console.log('zbeyer: CONFIG.DND5E: %o', CONFIG.DND5E);

    // ZBEYER reading how to do
    // const abl = this.data.data.abilities;
    // let abl = this.data._source.data.abilities;

    CONFIG.DND5E.damageTypes['magnetic'] = 'Magnetic';
    CONFIG.DND5E.damageTypes['bacon'] = 'Bacon';
    CONFIG.DND5E.damageTypes['meat'] = 'Meat';
    CONFIG.DND5E.damageTypes['Bile'] = 'Bile';

    CONFIG.DND5E.abilityAbbreviations['aur'] = 'aur';
    CONFIG.DND5E.abilities['aur'] = 'Aura';

    // CONFIG.DND5E.hitDieTypes.push('d20');
    //
    // CONFIG.DND5E.currencies['pd'] = 'P5EEXTRA.CurrencyPD';
    //
    // CONFIG.DND5E.conditionTypes['asleep'] = "P5EEXTRA.ConAsleep";
    // CONFIG.DND5E.conditionTypes['burned'] = "P5EEXTRA.ConBurned";
    // CONFIG.DND5E.conditionTypes['confused'] = "P5EEXTRA.ConConfused";
    // CONFIG.DND5E.conditionTypes['flinched'] = "P5EEXTRA.ConFlinched";
    // CONFIG.DND5E.conditionTypes['frozen'] = "P5EEXTRA.ConFrozen";

});
