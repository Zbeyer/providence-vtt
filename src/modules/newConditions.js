let insertCustomConditions = function () {
    // Kyle this is where you define custom names
    let customData = [
        'Dazed',
        'Sleeping',
        'Muted',
        'Gagged',
        'Semi-Transparent',
        'Frenzied',
        'Raged',
        'Hasted',
        'Slowed',
        'Enlarged',
        'Shrunken',
        'Confused',
        'Enfeebled',
        'Insomatic',
        'Dysentry',
        'Voidrent',
        'Outertouched',
        'Exiled',
        'Soul-Trapped',
        'Atomized'
    ];

    customData.forEach(function (val)
    {
        let key = val.replace(/[\. ,:-]+/g, "-").toLowerCase().trim();
        CONFIG.DND5E.conditionTypes[key] = val;
    });
}

export default insertCustomConditions;