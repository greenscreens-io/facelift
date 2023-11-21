
/*
 * Copyright (C) 2015, 2024 Green Screens Ltd.
 */

import FaceliftElement from '../base/FaceliftElement.mjs';

/**
 * Component for extracting and converting screen data as lists or key-value pairs.
 * Used by other components such as Combo or List.
 * 
 * @module components/FaceliftSplitter
 */
export default class FaceliftSplitter extends FaceliftElement {

    
    static {
        customElements.define('facelift-splitter', FaceliftSplitter);
        Object.seal(FaceliftSplitter);
    }
}