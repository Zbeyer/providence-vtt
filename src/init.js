import zLog from './zlog.js';
import configureNewDamages from './modules/newDamageTypes.js';
import configureNewCurrency from './modules/newCurrency.js';
import configureNewConditions from './modules/newConditions.js';

// import providenceHooks from './zhooks.js';

zLog('zLog loaded...');

Hooks.on("init", function () {
    zLog('foundry init');
});

Hooks.once('setup', () => {
    zLog('foundry setup');
    configureNewDamages();
    configureNewConditions();
    // configureNewCurrency();
});

Hooks.once('ready', () => {
    zLog('foundry ready');
});