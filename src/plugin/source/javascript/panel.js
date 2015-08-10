define([
    'kb_widgetBases_baseWidget',
], function (BaseWidget) {
    'use strict';
    return Object.create(BaseWidget, {
        onAttach: {
            value: function (container) {
                container.innerHTML = 'Hello, KBase. I am a plugin';
            }
        }
    });
});
