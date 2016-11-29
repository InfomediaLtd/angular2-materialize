export function CustomEvent ( type, detail = undefined, params = { bubbles: false, cancelable: false } ) {
    var event = document.createEvent( 'CustomEvent' );
    event.initCustomEvent( type, params.bubbles, params.cancelable, detail );
    return event;
}
if ("Event" in window) {
    CustomEvent.prototype = (window as any).Event.prototype;
}

