/**
 * MerakiDashboardAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateNetworkSettings
 */
class UpdateNetworkSettings extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.localStatusPageEnabled = this.constructor.getValue(obj.localStatusPageEnabled);
        this.remoteStatusPageEnabled = this.constructor.getValue(obj.remoteStatusPageEnabled);
        this.secureConnect = this.constructor.getValue(obj.secureConnect);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'localStatusPageEnabled', realName: 'localStatusPageEnabled' },
            { name: 'remoteStatusPageEnabled', realName: 'remoteStatusPageEnabled' },
            { name: 'secureConnect', realName: 'secureConnect', type: 'SecureConnect' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = UpdateNetworkSettings;
