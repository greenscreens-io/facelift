
/*
 * Copyright (C) 2015, 2024 Green Screens Ltd.
 */

import FaceliftElement from './FaceliftElement.mjs';

/**
 * Component for extracting and converting screen data as lists or key-value pairs.
 * Used by other components such as Combo or List.
 * 
 * @module components/FaceliftMutator
 */
export default class FaceliftMutator extends FaceliftElement {

    
    static {
        customElements.define('facelift-mutator', FaceliftMutator);
        Object.seal(FaceliftMutator);
    }
}