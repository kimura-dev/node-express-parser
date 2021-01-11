const createGMI = require('./createGMI');
const createADDS = require('./createADDS');
const handleIncomingFile = require('./handleIncomingFile');

async function completeConversionProcess(addsInputFile, gmiOutputDir, addsOutputDir){
    let turns = 0;
    // let ADDS;
    // while(turns < 2){
    //     turns++;
        try {
            const xamlStr =  await handleIncomingFile(addsInputFile, `${gmiOutputDir}FAC_UPDATE_NEW_xaml.txt`);
            const GMI = await createGMI(`${gmiOutputDir}FAC_UPDATE_NEW_xaml.txt`,`${gmiOutputDir}COMPLETE_GMI_UPDATE.txt`);
            ADDS = await createADDS(`${gmiOutputDir}COMPLETE_GMI_UPDATE.txt`, `${addsOutputDir}COMPLETE_GMI_UPDATE.xml`);
            // return ADDS
        } catch (error) {
            console.error(error.message)
        }
    // }
    return ADDS;
}

module.exports = completeConversionProcess