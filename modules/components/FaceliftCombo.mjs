
/*
 * Copyright (C) 2015, 2024 Green Screens Ltd.
 */

import FaceliftElement from '../base/FaceliftElement.mjs';

/**
 * Component representing selectable combo box
 * Has ability to export screen JSON data for selection list rendering
 * 
 * @module components/FaceliftCombo
 */
export default class FaceliftCombo extends FaceliftElement {

    
    static {
        customElements.define('facelift-combo', FaceliftCombo);
        Object.seal(FaceliftCombo);
    }
}