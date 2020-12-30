const mongoose = require('mongoose')

const FAC_COMPOSITE_SCHEMA = new mongoose.Schema({
    FAC: {
        ACTIVITY: {
            type: String,
            default: ""
        },
        BE_NUMBER: {
            type: String,
            default: ""
        },
        CATEGORY: {
            type: String,
            default: ""
        },
        CC: {
            type: String,
            default: ""
        },
        CLASS_LVL: {
            type: String,
            default: ""
        },
        CONDITION: {
            type: String,
            default: ""
        },
        COORD_BASIS: {
            type: String,
            default: ""
        },
        COORD_DATUM: {
            type: String,
            default: ""
        },
        CODE_DERIV: {
            type: String,
            default: ""
        },
        DOMAIN_LVL: {
            type: String,
            default: ""
        },
        EVAL: {
            type: String,
            default: ""
        },
        GRAPHIC_CC: {
            type: String,
            default: ""
        },
        GRAPHIC_ED_NUM: {
            type: String,
            default: ""
        },
        GRAPHIC_SCALE: {
            type: String,
            default: ""
        },
        GRAPHIC_SERIES: {
            type: String,
            default: ""
        },
        LAST_CHG_USERID: {
            type: String,
            default: ""
        },
        OPER_STATUS: {
            type: String,
            default: ""
        },
        OSUFFIX: {
            type: String,
            default: ""
        },
        PROD_LVL_CAP: {
            type: String,
            default: ""
        },
        RECORD_STATUS: {
            type: String,
            default: ""
        },
        RES_PROD: {
            type: String,
            default: ""
        },
        COORD: {
            type: String,
            default: ""
        },
        FAC_NAME: {
            type: String,
            default: ""
        },
        GRAPHIC_AGENCY: {
            type: String,
            default: ""
        },
        GRAPHIC_ED_DATE: {
            type: String,
            default: ""
        },
        GRAPHIC_SHEET: {
            type: String,
            default: ""
        },
        REVIEW_DATE: {
            type: String,
            default: ""
        },
        GRAPHIC_SERIES: {
            type: String,
            default: ""
        },
        AFFILIATION: {
            type: String,
            default: ""
        },
        ALLEGIANCE: {
            type: String,
            default: ""
        },
        CODEWORD: {
            type: String,
            default: ""
        },
        CONTROL_MARK: {
            type: String,
            default: ""
        },
        CPFL: {
            type: String,
            default: ""
        },
        DECLASS_ON: {
            type: String,
            default: ""
        },
        ELEVATION_MSL: {
            type: String,
            default: ""
        },
        ELEVATION_MSL_UM: {
            type: String,
            default: ""
        },
        FPA: {
            type: String,
            default: ""
        },
        RELATIVE_RANKING: {
            type: String,
            default: ""
        },
        RELEASE_MARK: {
            type: String,
            default: ""
        },
        TDI: {
            type: String,
            default: ""
        },
        WAC: {
            type: String,
            default: ""
        },
        COORD_DATETIME: {
            type: String,
            default: ""
        },
        DATETIME_LAST_INFO: {
            type: String,
            default: ""
        },
        DECLASS_ON_DATE: {
            type: String,
            default: ""
        },
        MAX_DEMO_USE: {
            type: String,
            default: ""
        },
        SYMBOL_CODE: {
            type: String,
            default: ""
        },
        SITE_ORIGINATOR: {
            type: String,
            default: ""
        },
        MIL_GRID: {
            type: String,
            default: ""
        },
        MIL_GRID_SYS: {
            type: String,
            default: ""
        },
        FAC_SK: {
            type: String,
            default: ""
        },
        default: {
            type: {String}
        }
    },
    FAC_TRAIT: {
        CLASS_LVL:{
            type: String,
            default: ""
        },
        DOMAIN_LVL: {
            type: String,
            default:""
        },
        EVAL: {
            type: String,
            default:""
        },
        FAC_TRAIT: {
            type: String,
            default:""
        },
        LAST_CHG_USERID: {
            type: String,
            default:""
        },
        PROD_LVL_CAP: {
            type: String,
            default:""
        },
        RECORD_STATUS: {
            type: String,
            default:""
        },
        RES_PROD: {
            type: String,
            default:""
        },
        TRAIT_EVAL: {
            type: String,
            default:""
        },
        REVIEW_DATE: {
            type: String,
            default:""
        },
        CODEWORD: {
            type: String,
            default:""
        },
        CONTROL_MARK: {
            type: String,
            default:""
        },
        DECLASS_ON: {
            type: String,
            default:""
        },
        FPA: {
            type: String,
            default:""
        },
        RELEASE_MARK: {
            type: String,
            default:""
        },
        DATETIME_LAST_INFO: {
            type: String,
            default:""
        },
        DECLASS_ON_DATE: {
            type: String,
            default:""
        },
        SITE_ORIGINATOR: {
            type: String,
            default:""
        },
        RELIDO: {
            type: String,
            default:""
        },
        FAC_SK: {
            type: String,
            default:""
        },
        FAC_TRAIT_SK: {
            type: String,
            default:""
        },
    },
    subscribed: {
        type: String,
        required: true
    },
    updatedOn: {
        type: Date,
        required: true,
        default: Date.now
    }
})

// The .model() function allows use to interact directly with the db using the above ^^ schema
module.exports = mongoose.model('FacComposite', FAC_COMPOSITE_SCHEMA)