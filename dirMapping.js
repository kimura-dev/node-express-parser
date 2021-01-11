const path = require('path');

const DIR_MAPPING = {
    ADDS_INPUT_FILE : path.join(`${__dirname}/xml-to-xaml/input/ADDS_AMS_INPUT/Composities/FACUpdate-F.xml`),
    GMI_OUTPUT_DIR : path.join(`${__dirname}/xml-to-xaml/output/GMI_MIDB_OUTPUT/Composites/`),
    ADDS_OUTPUT_DIR: path.join(`${__dirname}/xaml-to-xml/output/`),
}

module.exports = DIR_MAPPING
