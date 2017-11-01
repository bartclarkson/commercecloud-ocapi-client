/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/* eslint-disable dot-notation */
/**
 * Shop API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 17.8
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient'

/**
* The Sort model module.
* @module models/Sort
* @version 17.8
*/
export default class Sort {
    /**
    * Constructs a new <code>Sort</code>.
    * Document representing a sort request.
    * @alias module:models/Sort
    * @class
    */
    constructor() {
        /**
        * The name of the field to sort on.
        * @member {String} field
        */
        this.field = undefined

        /**
        * The sort order to be applied when sorting. When omitted, the default sort order (ASC) is used.
        * @member {module:models/Sort.SortOrderEnum} sort_order
        */
        this.sort_order = undefined
    }

    /**
    * Constructs a <code>Sort</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/Sort} obj Optional instance to populate.
    * @return {module:models/Sort} The populated <code>Sort</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Sort()

            if (data.hasOwnProperty('field')) {
                obj['field'] = ApiClient.convertToType(data['field'], 'String')
            }
            if (data.hasOwnProperty('sort_order')) {
                obj['sort_order'] = ApiClient.convertToType(data['sort_order'], 'String')
            }
        }

        return obj
    }
}

/**
* Allowed values for the <code>sort_order</code> property.
* @enum {String}
* @readonly
*/
Sort.SortOrderEnum = {

    /**
     * value: "asc"
     * @const
     */
    asc: 'asc',

    /**
     * value: "desc"
     * @const
     */
    desc: 'desc'
}