
/*
 * Copyright (C) 2015, 2024 Green Screens Ltd.
 */

import FaceliftElement from '../base/FaceliftElement.mjs';

/**
 * Component representing constant text on terminal screen.
 * 
 * @module components/FaceliftText
 */
export default class FaceliftText extends FaceliftElement {

    
    static {
        customElements.define('facelift-text', FaceliftText);
        Object.seal(FaceliftText);
    }
}