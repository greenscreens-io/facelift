
/*
 * Copyright (C) 2015, 2024 Green Screens Ltd.
 */

import FaceliftElement from '../base/FaceliftElement.mjs';

/**
 * Component representing termianl input field.
 * 
 * @module components/FaceliftField
 */
export default class FaceliftField extends FaceliftElement {

    
    static {
        customElements.define('facelift-field', FaceliftField);
        Object.seal(FaceliftField);
    }
}