/**
 * MerakiDashboardAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Source1
 */
class Source1 extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.port = this.constructor.getValue(obj.port);
        this.cidr = this.constructor.getValue(obj.cidr);
        this.network = this.constructor.getValue(obj.network);
        this.vlan = this.constructor.getValue(obj.vlan);
        this.host = this.constructor.getValue(obj.host);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'port', realName: 'port' },
            { name: 'cidr', realName: 'cidr' },
            { name: 'network', realName: 'network' },
            { name: 'vlan', realName: 'vlan' },
            { name: 'host', realName: 'host' },
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

module.exports = Source1;
