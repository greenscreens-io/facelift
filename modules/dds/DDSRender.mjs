/*
 * Copyright (C) 2015, 2024 Green Screens Ltd.
 */

import DDSGlobal from './DDSGlobal.mjs';

/**
 * A module loading DDS template or renders one
 * then injects it into DOM
 * @module facelift/DDSRender
 */
export default class DDSRender extends HTMLElement {

    static {
        customElements.define('dds-render', DDSRender);
        Object.seal(DDSRender);
    }
}
