var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
    appName: String,
    disableHook: Boolean,
    disableJS: Boolean,
    disableResource: Boolean,
    createTime: { type: Date, default: Date.now },
    updateTime: { type: Date, default: Date.now },
    appKey: Schema.Types.ObjectId,
    id: Schema.Types.ObjectId,
    state: String,
    userId: String,

    alarmJsState:{ type: Boolean, default: false },
    alarmJsLimit:Number,
    alarmJsTimes:Number,
    alarmJsEmail:String,

    alarmApiState:{ type: Boolean, default: false },
    alarmApiLimit:Number,
    alarmApiTimes:Number,
    alarmApiEmail:String,

    alarmPerfState:{ type: Boolean, default: false },
    alarmPerfLimit:Number,
    alarmPerfTimes:Number,
    alarmPerfEmail:String,
});

module.exports = mongoose.model('SiteDataInfo', schema);