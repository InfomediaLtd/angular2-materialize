export function CustomEvent ( type, params = { bubbles: false, cancelable: false, detail: undefined } ) {
    var event = document.createEvent( 'CustomEvent' );
    event.initCustomEvent( type, params.bubbles, params.cancelable, params.detail );
    return event;
}
if ("Event" in window) {
    CustomEvent.prototype = (window as any).Event.prototype;
}

