/*
 * Copyright (C) 2015, 2024 Green Screens Ltd.
 */

import DDSGlobal from './dds/DDSGlobal.mjs';

/**
 * A module initializing Facelift, injecting proper elements
 * and interoperate them.
 * 
 * @module facelift/FaceliftEngine
 */

export default class FaceliftEngine extends HTMLElement {

    static {
        customElements.define('facelift-engine', FaceliftEngine);
        Object.seal(FaceliftEngine);
    }
}