let insertCustomDamage = function () {
    // Kyle this is where you define custom names
    let customData = [
        'Magnetic',
        'Charge',
        'Negative Chroma',
        'Outerburn'
    ];

    customData.forEach(function (val)
    {
        let key = val.replace(/[\. ,:-]+/g, "-").toLowerCase().trim();
        CONFIG.DND5E.damageTypes[key] = val;
        CONFIG.DND5E.damageResistanceTypes[key] = val;
    });
}

export {
    insertCustomDamage
}