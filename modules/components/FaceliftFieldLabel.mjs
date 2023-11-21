
/*
 * Copyright (C) 2015, 2024 Green Screens Ltd.
 */

import FaceliftElement from '../base/FaceliftElement.mjs';

/**
 * Component representing composite Field + label.
 * 
 * @module components/FaceliftFieldLabel
 */
export default class FaceliftFieldLabel extends FaceliftElement {

    
    static {
        customElements.define('facelift-action', FaceliftFieldLabel);
        Object.seal(FaceliftFieldLabel);
    }
}