
/*
 * Copyright (C) 2015, 2024 Green Screens Ltd.
 */

import FaceliftElement from '../base/FaceliftElement.mjs';

/**
 * Component representing DDS subfile
 * Render interactive table with screen data as records
 * 
 * @module components/FaceliftSubfile
 */
export default class FaceliftSubfile extends FaceliftElement {

    
    static {
        customElements.define('facelift-subfile', FaceliftSubfile);
        Object.seal(FaceliftSubfile);
    }
}