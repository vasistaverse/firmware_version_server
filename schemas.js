const mongoose = require('mongoose');

const dataModeSchema = new mongoose.Schema(
    {
        manualDataMode:{
            is_functional: Boolean,
            comments: String
        },
        offlineDataMode:{
            is_functional: Boolean,
            comments: String
        },
        eventDataMode:{
            frameNumber:{
                is_functional: Boolean,
                comments: String
            },
            alertNotationByte: {
                is_functional: Boolean,
                comments: String
            },
            GyroAcceleVar_Data: {
                is_functional: Boolean,
                comments: String
            }

        }
    }
)

const alertSchema = new mongoose.Schema(
    {
        breakDetection:{
            is_functional: Boolean,
            comments: String
        },
        minorCrash: {
            is_functional: Boolean,
            comments: String
        },
        MajorCrash: {
            is_functional: Boolean,
            comments: String
        },
        batteryStatus: {
            is_functional: Boolean,
            comments: String
        },
        SOS: {
            is_functional: Boolean,
            comments: String
        },
        SOS_Acknoledgement:{
            is_functional: Boolean,
            comments: String
        }
    }
)

const configurationSchema = new mongoose.Schema(
    {
        readConfiguration:{
            is_functional: Boolean,
            comments: String
        }
    }
)

const writeConfigurationSchema = new mongoose.Schema(
    {
        majorCrashThreshold:{
            is_functional: Boolean,
            comments: String
        },
        minorCrashThreshold:{
            is_functional: Boolean,
            comments: String
        },
        axisConfiguration: {
            is_functional: Boolean,
            comments: String
        },
        axisDirection: {
            is_functional: Boolean,
            comments: String
        },
        breakFeature: {
            is_functional: Boolean,
            comments: String
        },
        breakCount: {
            is_functional: Boolean,
            comments: String
        },
        breakingThreshold: {
            is_functional: Boolean,
            comments: String
        },
        deviceNameConfiguration: {
            is_functional: Boolean,
            comments: String
        }
    }
);

const connectionSchema = new mongoose.Schema(
    {
        raiseToWake: {
            is_functional: Boolean,
            comments: String
        },
        deviceName: {
            is_functional: Boolean,
            comments: String
        },
        connection: {
            is_functional: Boolean,
            comments: String
        },
        disconnection: {
            is_functional: Boolean,
            comments: String
        },
        sleepMode: {
            is_functional: Boolean,
            comments: String
        }
    }
);
const ledIndicationSchema = new mongoose.Schema(
    {
        highBattery: {
            is_functional: Boolean,
            comments: String
        },
        mediumBattery: {
            is_functional: Boolean,
            comments: String
        },
        lowBattery: {
            is_functional: Boolean,
            comments: String
        },
        whileCharging: {
            is_functional: Boolean,
            comments: String
        },
        firmWareUpgrade: {
            is_functional: Boolean,
            comments: String
        },
        SOS: {
            is_functional: Boolean,
            comments: String
        },
        majorCrash: {
            is_functional: Boolean,
            comments: String
        },
        minorCrash: {
            is_functional: Boolean,
            comments: String
        }
    }
);

const otherModesSchema = new mongoose.Schema(
    {
        factoryMode: {
            is_functional: Boolean,
            comments: String
        },
        OADMode: {
            is_functional: Boolean,
            comments: String
        }
    }
);

const versionDbSchema = new mongoose.Schema(
    {
        versionNo: Number,
        firmWareReleaseDate: Date,
        testerName: String,
        testingDate: Date,
        dataMode: dataModeSchema,
        alerts: alertSchema,
        configuration: configurationSchema,
        writeConfiguration: writeConfigurationSchema,
        connections: connectionSchema,
        LED_indication: ledIndicationSchema,
        Other_modes: otherModesSchema
    }
)

const versionDbModel = mongoose.model('Version', versionDbSchema);

module.exports = versionDbModel;
