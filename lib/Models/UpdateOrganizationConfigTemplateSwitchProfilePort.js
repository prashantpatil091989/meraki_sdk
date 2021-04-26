/**
 * MerakiDashboardAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateOrganizationConfigTemplateSwitchProfilePort
 */
class UpdateOrganizationConfigTemplateSwitchProfilePort extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.name = this.constructor.getValue(obj.name);
        this.tags = this.constructor.getValue(obj.tags);
        this.enabled = this.constructor.getValue(obj.enabled);
        this.type = this.constructor.getValue(obj.type);
        this.vlan = this.constructor.getValue(obj.vlan);
        this.voiceVlan = this.constructor.getValue(obj.voiceVlan);
        this.allowedVlans = this.constructor.getValue(obj.allowedVlans);
        this.poeEnabled = this.constructor.getValue(obj.poeEnabled);
        this.isolationEnabled = this.constructor.getValue(obj.isolationEnabled);
        this.rstpEnabled = this.constructor.getValue(obj.rstpEnabled);
        this.stpGuard = this.constructor.getValue(obj.stpGuard);
        this.linkNegotiation = this.constructor.getValue(obj.linkNegotiation);
        this.portScheduleId = this.constructor.getValue(obj.portScheduleId);
        this.udld = this.constructor.getValue(obj.udld);
        this.accessPolicyType = this.constructor.getValue(obj.accessPolicyType);
        this.accessPolicyNumber = this.constructor.getValue(obj.accessPolicyNumber);
        this.macAllowList = this.constructor.getValue(obj.macAllowList);
        this.stickyMacAllowList = this.constructor.getValue(obj.stickyMacAllowList);
        this.stickyMacAllowListLimit = this.constructor.getValue(obj.stickyMacAllowListLimit);
        this.stormControlEnabled = this.constructor.getValue(obj.stormControlEnabled);
        this.flexibleStackingEnabled = this.constructor.getValue(obj.flexibleStackingEnabled);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'name', realName: 'name' },
            { name: 'tags', realName: 'tags', array: true },
            { name: 'enabled', realName: 'enabled' },
            { name: 'type', realName: 'type' },
            { name: 'vlan', realName: 'vlan' },
            { name: 'voiceVlan', realName: 'voiceVlan' },
            { name: 'allowedVlans', realName: 'allowedVlans' },
            { name: 'poeEnabled', realName: 'poeEnabled' },
            { name: 'isolationEnabled', realName: 'isolationEnabled' },
            { name: 'rstpEnabled', realName: 'rstpEnabled' },
            { name: 'stpGuard', realName: 'stpGuard' },
            { name: 'linkNegotiation', realName: 'linkNegotiation' },
            { name: 'portScheduleId', realName: 'portScheduleId' },
            { name: 'udld', realName: 'udld' },
            { name: 'accessPolicyType', realName: 'accessPolicyType' },
            { name: 'accessPolicyNumber', realName: 'accessPolicyNumber' },
            { name: 'macAllowList', realName: 'macAllowList', array: true },
            { name: 'stickyMacAllowList', realName: 'stickyMacAllowList', array: true },
            { name: 'stickyMacAllowListLimit', realName: 'stickyMacAllowListLimit' },
            { name: 'stormControlEnabled', realName: 'stormControlEnabled' },
            { name: 'flexibleStackingEnabled', realName: 'flexibleStackingEnabled' },
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

module.exports = UpdateOrganizationConfigTemplateSwitchProfilePort;