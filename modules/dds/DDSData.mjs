/*
 * Copyright (C) 2015, 2024 Green Screens Ltd.
 */

import DDSGlobal from './DDSGlobal.mjs';

/**
 * A module loading DDS partials and converting them into a tree structure
 * then extracting data from screen data
 * @module facelift/DDSData
 */
export default class DDSData extends HTMLElement {
    
    #parser = new DOMParser();

    /**
     * Create escaped template name based on provided list of used records
     */
    get templateName() {
        return DDSGlobal.toName(this.dataset.records);        
    }

    /**
     * Get DOM dds-data template from cache if exist
     */
    get template() {
        const me = this;
        const o = me.dataset;
        const name = DDSGlobal.toName(o.records);
        return DDSGlobal.loadTemplate(o.system, o.partition, o.library, o.object, name);
    }

    /**
     * Get template root url
     */
    get url() {
        const me = this;
        const o = me.dataset;
        const isRest = o.rest == true;
        const origin = `${o.url || location.origin}`
        const src = isRest ? `/${o.system}/${o.partition}/${o.library}/${o.object}/${o.templateName}` : '/';
        const url = isRest ? new URL(src, origin) : new URL(origin);
        if (!isRest) {
            url.searchParams.append('system', o.system);
            url.searchParams.append('partition', o.partition);
            url.searchParams.append('library', o.library);
            url.searchParams.append('object', o.object);
            url.searchParams.append('template', o.templateName);    
        }
        return url;
    }

    /**
     * Use "this" element provided attribute data to prepare 
     * template from partials and JSON data from screen data
     */
    async workflow() {
        const me = this;
        if (!me.template) {
            const xml = await me.load();
            const template = me.preprocess(xml);
            me.save(template);
        }
        DDSGlobal.data = me.extract();
        return me.template;
    }

    /**
     * Load partials from server
     */
    async load() {
        const me = this;
        const res = await fetch(me.url);
        return await res.text();
    }

    /**
     * Store data template created from partials
     * @param {DOM} template 
     */
    save(template) {
        const me = this;
        const o = me.dataset;
        const name = DDSGlobal.toName(o.records);
        DDSGlobal.saveTemplate(o.system, o.partition, o.library, o.object, name, template);
    }

    /**
     * Restructure set of DSPF DDS partials
     * Received XML document is concatenation of DDS DSP record formats
     * Document is parsed into the DOM and then reorganized in tree structure
     * window->sfctl->sfl or sfctl->sfl or record
     */
    preprocess(template) {
        const me = this;
        const dom = me.#parser.parseFromString(template, 'text/xml');
        const root = root.documentElement;

        const win = Array.from(root.querySelectorAll('dds-window'));                
        win.forEach(el => {
            const cl = dom.createElement('dds-subfile-control');
            el.appendChild(cl);
            Array.from(el.attributes).forEach(a => cl.setAttribute(a.name, a.value));
        });
        
        const sfl = Array.from(root.querySelectorAll('dds-subfile'));
        sfl.forEach(el => {
            const p = root.querySelector(`dds-subfile-control[name="${el.getAttribute('sfctl')}"]`);
            if (p) p.appendChild(el);
        });

        return root;
    }

    /**
     * Extract data from screen data based on dds-data template
     * This engine detects window/sfctl offsets, subfile size and sfctl ofsets
     */
    extract() {
        const me = this;
        const dom = me.template;
        const scr = DDSGlobal.screen;

    }



    static {
        customElements.define('dds-data', DDSData);
        Object.seal(DDSData);
    }
}