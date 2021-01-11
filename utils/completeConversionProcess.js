const createGMI = require('./createGMI');
const createADDS = require('./createADDS');
const handleIncomingFile = require('./handleIncomingFile');

function completeConversionProcess(addsInputFile, gmiOutputDir, addsOutputDir){
    try {
        const xamlStr = handleIncomingFile(addsInputFile, `${gmiOutputDir}FAC_UPDATE_NEW_xaml.txt`);
        const GMI = createGMI(`${gmiOutputDir}FAC_UPDATE_NEW_xaml.txt`,`${gmiOutputDir}COMPLETE_GMI_UPDATE.txt`);
        const ADDS = createADDS(`${gmiOutputDir}COMPLETE_GMI_UPDATE.txt`, `${addsOutputDir}COMPLETE_GMI_UPDATE.xml`);
        return ADDS
    } catch (error) {
        console.error(error.message)
    }
}

module.exports = completeConversionProcess