let insertCustomDamage = function () {
    // Kyle this is where you define custom names
    let customData = [
        'Magnetic',
        'Charge',
        'Aural',
        'Mental',
        'Maledictive',
        'Afflictive',
        'Void',
        'Outerblaze',
        'Astral',
        'Hexa',
        'Entropic',
        'Demi'
    ];

    customData.forEach(function (val)
    {
        let key = val.replace(/[\. ,:-]+/g, "-").toLowerCase().trim();
        CONFIG.DND5E.damageTypes[key] = val;
        CONFIG.DND5E.damageResistanceTypes[key] = val;
    });
};

export default insertCustomDamage;