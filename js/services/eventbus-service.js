'use strict';

const eventBus = new Vue();
const CROSS_ITEM = 'CROSS_ITEM';
const NEW_NOTE = 'NEW_NOTE';
const STATUS_CHANGED = 'STATUS_CHANGED'
const TOGGLE_EMAIL = 'TOGGLE_EMAIL'

export default {
    eventBus,
    CROSS_ITEM,
    NEW_NOTE,
    STATUS_CHANGED,
    TOGGLE_EMAIL
}