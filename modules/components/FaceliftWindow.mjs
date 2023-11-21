
/*
 * Copyright (C) 2015, 2024 Green Screens Ltd.
 */

import FaceliftElement from '../base/FaceliftElement.mjs';

/**
 * Component representing DDS Window.
 * Displays as web dialog
 * 
 * @module components/FaceliftWindow
 */
export default class FaceliftWindow extends FaceliftElement {

    
    static {
        customElements.define('facelift-window', FaceliftWindow);
        Object.seal(FaceliftWindow);
    }
}