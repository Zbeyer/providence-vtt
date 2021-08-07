let insertCustomCurrency = function () {
    //Zbeyer this doesn't work but it might be conflicting with another module. Whatever...

    let customData = {
        'bcn': "bacon"
    };

    Object.keys(customData).forEach(function (key) {
        let value = customData[key];
        // Define Sanity as an ability
        CONFIG.DND5E.currencies[key] = value;
    });
    console.log('CONFIG.DND5E.currencies: %o', CONFIG.DND5E.currencies);
};

export {
    insertCustomCurrency
}