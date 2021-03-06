/**
 * MerakiDashboardAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of CreateNetworkSwitchAccessPolicy
 */
class CreateNetworkSwitchAccessPolicy extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.name = this.constructor.getValue(obj.name);
        this.radiusServers = this.constructor.getValue(obj.radiusServers);
        this.radiusTestingEnabled = this.constructor.getValue(obj.radiusTestingEnabled);
        this.radiusCoaSupportEnabled = this.constructor.getValue(obj.radiusCoaSupportEnabled);
        this.radiusAccountingEnabled = this.constructor.getValue(obj.radiusAccountingEnabled);
        this.radiusAccountingServers = this.constructor.getValue(obj.radiusAccountingServers);
        this.radiusGroupAttribute = this.constructor.getValue(obj.radiusGroupAttribute);
        this.hostMode = this.constructor.getValue(obj.hostMode);
        this.accessPolicyType = this.constructor.getValue(obj.accessPolicyType);
        this.increaseAccessSpeed = this.constructor.getValue(obj.increaseAccessSpeed);
        this.guestVlanId = this.constructor.getValue(obj.guestVlanId);
        this.voiceVlanClients = this.constructor.getValue(obj.voiceVlanClients);
        this.urlRedirectWalledGardenEnabled =
          this.constructor.getValue(obj.urlRedirectWalledGardenEnabled);
        this.urlRedirectWalledGardenRanges =
          this.constructor.getValue(obj.urlRedirectWalledGardenRanges);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'name', realName: 'name' },
            { name: 'radiusServers', realName: 'radiusServers', array: true, type: 'RadiusServer' },
            { name: 'radiusTestingEnabled', realName: 'radiusTestingEnabled' },
            { name: 'radiusCoaSupportEnabled', realName: 'radiusCoaSupportEnabled' },
            { name: 'radiusAccountingEnabled', realName: 'radiusAccountingEnabled' },
            {
                name: 'radiusAccountingServers',
                realName: 'radiusAccountingServers',
                array: true,
                type: 'RadiusAccountingServer',
            },
            { name: 'radiusGroupAttribute', realName: 'radiusGroupAttribute' },
            { name: 'hostMode', realName: 'hostMode' },
            { name: 'accessPolicyType', realName: 'accessPolicyType' },
            { name: 'increaseAccessSpeed', realName: 'increaseAccessSpeed' },
            { name: 'guestVlanId', realName: 'guestVlanId' },
            { name: 'voiceVlanClients', realName: 'voiceVlanClients' },
            { name: 'urlRedirectWalledGardenEnabled', realName: 'urlRedirectWalledGardenEnabled' },
            {
                name: 'urlRedirectWalledGardenRanges',
                realName: 'urlRedirectWalledGardenRanges',
                array: true,
            },
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

module.exports = CreateNetworkSwitchAccessPolicy;
