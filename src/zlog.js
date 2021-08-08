let ZB_MODULE_NAME = "PROVIDENCE";
let ZB_LOG_LEVEL = "DEBUG";
let ZB_WHO_AM_I = "Zbeyer";
let ZB_ASCII_ART = `

██████╗ ██████╗  ██████╗ ██╗   ██╗██╗██████╗ ███████╗███╗   ██╗ ██████╗███████╗ 
██╔══██╗██╔══██╗██╔═══██╗██║   ██║██║██╔══██╗██╔════╝████╗  ██║██╔════╝██╔════╝ 
██████╔╝██████╔╝██║   ██║██║   ██║██║██║  ██║█████╗  ██╔██╗ ██║██║     █████╗   
██╔═══╝ ██╔══██╗██║   ██║╚██╗ ██╔╝██║██║  ██║██╔══╝  ██║╚██╗██║██║     ██╔══╝   
██║     ██║  ██║╚██████╔╝ ╚████╔╝ ██║██████╔╝███████╗██║ ╚████║╚██████╗███████╗ 
╚═╝     ╚═╝  ╚═╝ ╚═════╝   ╚═══╝  ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═══╝ ╚═════╝╚══════╝ 
                                                                                                                      
`;
let DEFAULT_LOG_MESSAGE = `${ZB_MODULE_NAME} ${ZB_LOG_LEVEL}\n\t${ZB_WHO_AM_I}\n`;

/**
 ██████╗ ██████╗  ██████╗ ██╗   ██╗██╗██████╗ ███████╗███╗   ██╗ ██████╗███████╗
 ██╔══██╗██╔══██╗██╔═══██╗██║   ██║██║██╔══██╗██╔════╝████╗  ██║██╔════╝██╔════╝
 ██████╔╝██████╔╝██║   ██║██║   ██║██║██║  ██║█████╗  ██╔██╗ ██║██║     █████╗
 ██╔═══╝ ██╔══██╗██║   ██║╚██╗ ██╔╝██║██║  ██║██╔══╝  ██║╚██╗██║██║     ██╔══╝
 ██║     ██║  ██║╚██████╔╝ ╚████╔╝ ██║██████╔╝███████╗██║ ╚████║╚██████╗███████╗
 ╚═╝     ╚═╝  ╚═╝ ╚═════╝   ╚═══╝  ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═══╝ ╚═════╝╚══════╝
 **/



// https://github.com/League-of-Foundry-Developers/foundryvtt-forien-quest-log/blob/master/src/control/FQLHooks.js
let zLog = function (...data) {
    if (ZB_LOG_LEVEL !== "DEBUG") return;
    // let caller = JSON.stringify(arguments, 0, '\t')

    data[0] = DEFAULT_LOG_MESSAGE + data[0];

    // data.push('caller' + caller);
    // data.splice(0,0,
    console.log(...data);
}

zLog(ZB_ASCII_ART);

export default zLog;
