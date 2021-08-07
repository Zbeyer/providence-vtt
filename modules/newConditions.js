let insertCustomConditions = function () {
    // Kyle this is where you define custom names
    let customData = [
        'Flinchy',
    ];

    customData.forEach(function (val)
    {
        let key = val.replace(/[\. ,:-]+/g, "-").toLowerCase().trim();
        CONFIG.DND5E.conditionTypes[key] = val;
    });
}

export {
    insertCustomConditions
}