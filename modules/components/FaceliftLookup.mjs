
/*
 * Copyright (C) 2015, 2024 Green Screens Ltd.
 */

import FaceliftElement from '../base/FaceliftElement.mjs';

/**
 * Component representing windowd popup box for data selection
  * 
 * @module components/FaceliftLookup
 */
export default class FaceliftLookup extends FaceliftElement {

    
    static {
        customElements.define('facelift-lookup', FaceliftLookup);
        Object.seal(FaceliftLookup);
    }
}