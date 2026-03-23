class EventEmitter {

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
     constructor() {
    this.events = new Map();
}

subscribe(eventName, callback) {
    if (this.events.has(eventName)) {
        this.events.get(eventName).push(callback);
    } else this.events.set(eventName, [callback]);
    return {
        unsubscribe: () => {
            const newCallbackArray = this.events
                .get(eventName)
                .filter((c) => c !== callback);

            this.events.set(eventName, newCallbackArray);
        }
    };
}

/**
 * @param {string} eventName
 * @param {Array} args
 * @return {Array}
 */
emit(eventName, args = []) {
    if (!this.events.has(eventName)) return [];

    const callbacks = this.events.get(eventName);
    const result = callbacks.map((c) => c(...args))

    return result;
}
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */