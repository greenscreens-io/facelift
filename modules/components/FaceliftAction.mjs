
/*
 * Copyright (C) 2015, 2024 Green Screens Ltd.
 */

import FaceliftElement from '../base/FaceliftElement.mjs';

/**
 * Component representing clickable button.
 * Action send click event on specific terminal location,
 * or send terminal key with optionally populate a field.
 * 
 * @module components/FaceliftAction
 */
export default class FaceliftAction extends FaceliftElement {

    
    static {
        customElements.define('facelift-action', FaceliftAction);
        Object.seal(FaceliftAction);
    }
}