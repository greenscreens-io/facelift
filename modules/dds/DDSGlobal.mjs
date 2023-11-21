/*
 * Copyright (C) 2015, 2024 Green Screens Ltd.
 */

/**
 * A module keeping DDS templates and active screen data
 * @module facelift/DDSGlobal
 */
class DDSGlobal  {

    static instance = null;
    #screen = null;
    #data = null;
    #cache = {};

    /**
     * Rae 5250 dispaly exported data
     */
    get screen() {
        return this.#screen || {};
    }

    set screen(o) {
        this.#screen = o;
    }

    /**
     * Data converted from screen data
     */
    get data() {
        return this.#data || {};
    }

    set data(o) {
        this.#data = o;
    }

    /**
     * Store prepared dds-data template
     * @param {string} system 
     * @param {string} partition 
     * @param {string} library 
     * @param {string} object 
     * @param {string} name 
     * @param {DOM} template 
     */
    storeTemplate(system, partition, library, object, name, template) {
        this.#buildTree(system, partition, library, object, name,  template);
        return template;
    }

    /**
     * Load previously stored template
     * @param {string} system 
     * @param {string} partition 
     * @param {string} library 
     * @param {string} object 
     * @param {string} name 
     * @returns {DOM}
     */
    loadTemplate(system, partition, library, object, name) {
        return this.#cache[system]?.[partition]?.[library]?.[object]?.[name];
    }

    /**
     * Helper to recursively create object nodes
     * @param  {...any} keys 
     * @returns 
     */
    #buildTree(...keys) {
        let o = this.#cache;
        keys.forEach(v => {if(o[v]) {o = o[v]} else {o[v]={};o = o[v]}});
        return o;
    }

    /**
     * Convert list of string values into single string.
     * Data is sorted and merged with underscore.
     * used to create tempalte name from currently used records
     * @param {Array|String} records 
     * @returns 
     */
    toName(records) {
        if (typeof records === 'string' ) records = records.split(',');
        return records.map(v => v.replace('*', '#')).sort().join('_');
    }

    static {
        DDSGlobal.instance  = new DDSGlobal();
        Object.seal(DDSGlobal);
    }
}

export default DDSGlobal.instance;