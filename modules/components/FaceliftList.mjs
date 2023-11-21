
/*
 * Copyright (C) 2015, 2024 Green Screens Ltd.
 */

import FaceliftElement from '../base/FaceliftElement.mjs';

/**
 * Component representing editable list box
 * Has ability to export screen JSON data for selection list rendering
 * 
 * @module components/FaceliftList
 */
export default class FaceliftList extends FaceliftElement {

    
    static {
        customElements.define('facelift-list', FaceliftList);
        Object.seal(FaceliftList);
    }
}