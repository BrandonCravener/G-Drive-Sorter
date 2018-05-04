(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/zone.js/dist/zone.js":
/*!*******************************************!*\
  !*** ./node_modules/zone.js/dist/zone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
(function (global, factory) {
	 true ? factory() :
	undefined;
}(this, (function () { 'use strict';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Zone$1 = (function (global) {
    var FUNCTION = 'function';
    var performance = global['performance'];
    function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
    }
    function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
    }
    mark('Zone');
    if (global['Zone']) {
        throw new Error('Zone already loaded.');
    }
    var Zone = /** @class */ (function () {
        function Zone(parent, zoneSpec) {
            this._properties = null;
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate =
                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }
        Zone.assertZonePatched = function () {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                    'has been overwritten.\n' +
                    'Most likely cause is that a Promise polyfill has been loaded ' +
                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                    'If you must load one, do so before loading zone.js.)');
            }
        };
        Object.defineProperty(Zone, "root", {
            get: function () {
                var zone = Zone.current;
                while (zone.parent) {
                    zone = zone.parent;
                }
                return zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "current", {
            get: function () {
                return _currentZoneFrame.zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "currentTask", {
            get: function () {
                return _currentTask;
            },
            enumerable: true,
            configurable: true
        });
        Zone.__load_patch = function (name, fn) {
            if (patches.hasOwnProperty(name)) {
                throw Error('Already loaded patch: ' + name);
            }
            else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
            }
        };
        Object.defineProperty(Zone.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Zone.prototype.get = function (key) {
            var zone = this.getZoneWith(key);
            if (zone)
                return zone._properties[key];
        };
        Zone.prototype.getZoneWith = function (key) {
            var current = this;
            while (current) {
                if (current._properties.hasOwnProperty(key)) {
                    return current;
                }
                current = current._parent;
            }
            return null;
        };
        Zone.prototype.fork = function (zoneSpec) {
            if (!zoneSpec)
                throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
        };
        Zone.prototype.wrap = function (callback, source) {
            if (typeof callback !== FUNCTION) {
                throw new Error('Expecting function got: ' + callback);
            }
            var _callback = this._zoneDelegate.intercept(this, callback, source);
            var zone = this;
            return function () {
                return zone.runGuarded(_callback, this, arguments, source);
            };
        };
        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = undefined; }
            if (applyArgs === void 0) { applyArgs = null; }
            if (source === void 0) { source = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = null; }
            if (applyArgs === void 0) { applyArgs = null; }
            if (source === void 0) { source = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
            if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            }
            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return
            // we have to define an variable here, if not
            // typescript compiler will complain below
            var isNotScheduled = task.state === notScheduled;
            if (isNotScheduled && task.type === eventTask) {
                return;
            }
            var reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            var previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                    task.cancelFn = null;
                }
                try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                        reEntryGuard && task._transitionTo(scheduled, running);
                    }
                    else {
                        task.runCount = 0;
                        this._updateTaskCount(task, -1);
                        reEntryGuard &&
                            task._transitionTo(notScheduled, running, notScheduled);
                    }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
            }
        };
        Zone.prototype.scheduleTask = function (task) {
            if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;
                while (newZone) {
                    if (newZone === task.zone) {
                        throw Error("can not reschedule task to " + this
                            .name + " which is descendants of the original zone " + task.zone.name);
                    }
                    newZone = newZone.parent;
                }
            }
            task._transitionTo(scheduling, notScheduled);
            var zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;
            try {
                task = this._zoneDelegate.scheduleTask(this, task);
            }
            catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled);
                // TODO: @JiaLiPassion, should we check the result from handleError?
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
            }
            if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
            }
            return task;
        };
        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, null));
        };
        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.cancelTask = function (task) {
            if (task.zone != this)
                throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            task._transitionTo(canceling, scheduled, running);
            try {
                this._zoneDelegate.cancelTask(this, task);
            }
            catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            this._updateTaskCount(task, -1);
            task._transitionTo(notScheduled, canceling);
            task.runCount = 0;
            return task;
        };
        Zone.prototype._updateTaskCount = function (task, count) {
            var zoneDelegates = task._zoneDelegates;
            if (count == -1) {
                task._zoneDelegates = null;
            }
            for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
            }
        };
        Zone.__symbol__ = __symbol__;
        return Zone;
    }());
    var DELEGATE_ZS = {
        name: '',
        onHasTask: function (delegate, _, target, hasTaskState) {
            return delegate.hasTask(target, hasTaskState);
        },
        onScheduleTask: function (delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
        },
        onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) { return delegate.invokeTask(target, task, applyThis, applyArgs); },
        onCancelTask: function (delegate, _, target, task) {
            return delegate.cancelTask(target, task);
        }
    };
    var ZoneDelegate = /** @class */ (function () {
        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
            this._interceptZS =
                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt =
                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone =
                zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt =
                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
            this._handleErrorZS =
                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt =
                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone =
                zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
            this._scheduleTaskZS =
                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt =
                zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone =
                zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
            this._invokeTaskZS =
                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt =
                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone =
                zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
            this._cancelTaskZS =
                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt =
                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone =
                zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
            if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;
                if (!zoneSpec.onScheduleTask) {
                    this._scheduleTaskZS = DELEGATE_ZS;
                    this._scheduleTaskDlgt = parentDelegate;
                    this._scheduleTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onInvokeTask) {
                    this._invokeTaskZS = DELEGATE_ZS;
                    this._invokeTaskDlgt = parentDelegate;
                    this._invokeTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onCancelTask) {
                    this._cancelTaskZS = DELEGATE_ZS;
                    this._cancelTaskDlgt = parentDelegate;
                    this._cancelTaskCurrZone = this.zone;
                }
            }
        }
        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                new Zone(targetZone, zoneSpec);
        };
        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
            return this._interceptZS ?
                this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                callback;
        };
        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ?
                this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.handleError = function (targetZone, error) {
            return this._handleErrorZS ?
                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                true;
        };
        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
            var returnTask = task;
            if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                    returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                }
                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                if (!returnTask)
                    returnTask = task;
            }
            else {
                if (task.scheduleFn) {
                    task.scheduleFn(task);
                }
                else if (task.type == microTask) {
                    scheduleMicroTask(task);
                }
                else {
                    throw new Error('Task is missing scheduleFn.');
                }
            }
            return returnTask;
        };
        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ?
                this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                task.callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
            var value;
            if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            }
            else {
                if (!task.cancelFn) {
                    throw Error('Task is not cancelable');
                }
                value = task.cancelFn(task);
            }
            return value;
        };
        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
                return this._hasTaskZS &&
                    this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            }
            catch (err) {
                this.handleError(targetZone, err);
            }
        };
        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
            var counts = this._taskCounts;
            var prev = counts[type];
            var next = counts[type] = prev + count;
            if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
            }
            if (prev == 0 || next == 0) {
                var isEmpty = {
                    microTask: counts['microTask'] > 0,
                    macroTask: counts['macroTask'] > 0,
                    eventTask: counts['eventTask'] > 0,
                    change: type
                };
                this.hasTask(this.zone, isEmpty);
            }
        };
        return ZoneDelegate;
    }());
    var ZoneTask = /** @class */ (function () {
        function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            this._zone = null;
            this.runCount = 0;
            this._zoneDelegates = null;
            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;
            this.callback = callback;
            var self = this;
            // TODO: @JiaLiPassion options should have interface
            if (type === eventTask && options && options.useG) {
                this.invoke = ZoneTask.invokeTask;
            }
            else {
                this.invoke = function () {
                    return ZoneTask.invokeTask.call(global, self, this, arguments);
                };
            }
        }
        ZoneTask.invokeTask = function (task, target, args) {
            if (!task) {
                task = this;
            }
            _numberOfNestedTaskFrames++;
            try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
            }
            finally {
                if (_numberOfNestedTaskFrames == 1) {
                    drainMicroTaskQueue();
                }
                _numberOfNestedTaskFrames--;
            }
        };
        Object.defineProperty(ZoneTask.prototype, "zone", {
            get: function () {
                return this._zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ZoneTask.prototype, "state", {
            get: function () {
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        ZoneTask.prototype.cancelScheduleRequest = function () {
            this._transitionTo(notScheduled, scheduling);
        };
        ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;
                if (toState == notScheduled) {
                    this._zoneDelegates = null;
                }
            }
            else {
                throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ?
                    ' or \'' + fromState2 + '\'' :
                    '') + ", was '" + this._state + "'.");
            }
        };
        ZoneTask.prototype.toString = function () {
            if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId;
            }
            else {
                return Object.prototype.toString.call(this);
            }
        };
        // add toJSON method to prevent cyclic error when
        // call JSON.stringify(zoneTask)
        ZoneTask.prototype.toJSON = function () {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            };
        };
        return ZoneTask;
    }());
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var symbolSetTimeout = __symbol__('setTimeout');
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    var nativeMicroTaskQueuePromise;
    function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
                if (global[symbolPromise]) {
                    nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                }
            }
            if (nativeMicroTaskQueuePromise) {
                nativeMicroTaskQueuePromise[symbolThen](drainMicroTaskQueue);
            }
            else {
                global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
        }
        task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;
            while (_microTaskQueue.length) {
                var queue = _microTaskQueue;
                _microTaskQueue = [];
                for (var i = 0; i < queue.length; i++) {
                    var task = queue[i];
                    try {
                        task.zone.runTask(task, null, null);
                    }
                    catch (error) {
                        _api.onUnhandledError(error);
                    }
                }
            }
            _api.microtaskDrainDone();
            _isDrainingMicrotaskQueue = false;
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var NO_ZONE = { name: 'NO ZONE' };
    var notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
    var microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
    var patches = {};
    var _api = {
        symbol: __symbol__,
        currentZoneFrame: function () { return _currentZoneFrame; },
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: function () { return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')]; },
        patchEventTarget: function () { return []; },
        patchOnProperties: noop,
        patchMethod: function () { return noop; },
        bindArguments: function () { return null; },
        setNativePromise: function (NativePromise) {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === FUNCTION) {
                nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
        },
    };
    var _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
    var _currentTask = null;
    var _numberOfNestedTaskFrames = 0;
    function noop() { }
    function __symbol__(name) {
        return '__zone_symbol__' + name;
    }
    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ObjectDefineProperty = Object.defineProperty;
    function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    var __symbol__ = api.symbol;
    var _uncaughtPromiseErrors = [];
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var creationTrace = '__creationTrace__';
    api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
            var rejection = e && e.rejection;
            if (rejection) {
                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            }
            else {
                console.error(e);
            }
        }
    };
    api.microtaskDrainDone = function () {
        while (_uncaughtPromiseErrors.length) {
            var _loop_1 = function () {
                var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(function () {
                        throw uncaughtPromiseError;
                    });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            };
            while (_uncaughtPromiseErrors.length) {
                _loop_1();
            }
        }
    };
    var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
            if (handler && typeof handler === 'function') {
                handler.call(this, e);
            }
        }
        catch (err) {
        }
    }
    function isThenable(value) {
        return value && value.then;
    }
    function forwardResolution(value) {
        return value;
    }
    function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
    }
    var symbolState = __symbol__('state');
    var symbolValue = __symbol__('value');
    var symbolFinally = __symbol__('finally');
    var symbolParentPromiseValue = __symbol__('parentPromiseValue');
    var symbolParentPromiseState = __symbol__('parentPromiseState');
    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return function (v) {
            try {
                resolvePromise(promise, state, v);
            }
            catch (err) {
                resolvePromise(promise, false, err);
            }
            // Do not return value or you will break the Promise spec.
        };
    }
    var once = function () {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function () {
                if (wasCalled) {
                    return;
                }
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    var TYPE_ERROR = 'Promise resolved with itself';
    var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        var onceWrapper = once();
        if (promise === value) {
            throw new TypeError(TYPE_ERROR);
        }
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;
            try {
                if (typeof value === 'object' || typeof value === 'function') {
                    then = value && value.then;
                }
            }
            catch (err) {
                onceWrapper(function () {
                    resolvePromise(promise, false, err);
                })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            }
            else if (state !== REJECTED && typeof then === 'function') {
                try {
                    then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                }
                catch (err) {
                    onceWrapper(function () {
                        resolvePromise(promise, false, err);
                    })();
                }
            }
            else {
                promise[symbolState] = state;
                var queue = promise[symbolValue];
                promise[symbolValue] = value;
                if (promise[symbolFinally] === symbolFinally) {
                    // the promise is generated by Promise.prototype.finally          
                    if (state === RESOLVED) {
                        // the state is resolved, should ignore the value
                        // and use parent promise value
                        promise[symbolState] = promise[symbolParentPromiseState];
                        promise[symbolValue] = promise[symbolParentPromiseValue];
                    }
                }
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    // check if longStackTraceZone is here
                    var trace = Zone.currentTask && Zone.currentTask.data &&
                        Zone.currentTask.data[creationTrace];
                    if (trace) {
                        // only keep the long stack trace into error when in longStackTraceZone
                        ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                    }
                }
                for (var i = 0; i < queue.length;) {
                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                }
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    try {
                        // try to print more readable error log
                        throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                            (value && value.stack ? '\n' + value.stack : ''));
                    }
                    catch (err) {
                        var error_1 = err;
                        error_1.rejection = value;
                        error_1.promise = promise;
                        error_1.zone = Zone.current;
                        error_1.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(error_1);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                var handler = Zone[REJECTION_HANDLED_HANDLER];
                if (handler && typeof handler === 'function') {
                    handler.call(this, { rejection: promise[symbolValue], promise: promise });
                }
            }
            catch (err) {
            }
            promise[symbolState] = REJECTED;
            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                if (promise === _uncaughtPromiseErrors[i].promise) {
                    _uncaughtPromiseErrors.splice(i, 1);
                }
            }
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var promiseState = promise[symbolState];
        var delegate = promiseState ?
            (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
            (typeof onRejected === 'function') ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
            try {
                var parentPromiseValue = promise[symbolValue];
                var isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];
                if (isFinallyPromise) {
                    // if the promise is generated from finally call, keep parent promise's state and value
                    chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                    chainPromise[symbolParentPromiseState] = promiseState;
                }
                // should not pass value to finally callback
                var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
                resolvePromise(chainPromise, true, value);
            }
            catch (error) {
                // if error occurs, should always return this error
                resolvePromise(chainPromise, false, error);
            }
        }, chainPromise);
    }
    var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
    var ZoneAwarePromise = /** @class */ (function () {
        function ZoneAwarePromise(executor) {
            var promise = this;
            if (!(promise instanceof ZoneAwarePromise)) {
                throw new Error('Must be an instanceof Promise.');
            }
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            }
            catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        ZoneAwarePromise.toString = function () {
            return ZONE_AWARE_PROMISE_TO_STRING;
        };
        ZoneAwarePromise.resolve = function (value) {
            return resolvePromise(new this(null), RESOLVED, value);
        };
        ZoneAwarePromise.reject = function (error) {
            return resolvePromise(new this(null), REJECTED, error);
        };
        ZoneAwarePromise.race = function (values) {
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            function onResolve(value) {
                promise && (promise = null || resolve(value));
            }
            function onReject(error) {
                promise && (promise = null || reject(error));
            }
            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                var value = values_1[_i];
                if (!isThenable(value)) {
                    value = this.resolve(value);
                }
                value.then(onResolve, onReject);
            }
            return promise;
        };
        ZoneAwarePromise.all = function (values) {
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            var count = 0;
            var resolvedValues = [];
            for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
                var value = values_2[_i];
                if (!isThenable(value)) {
                    value = this.resolve(value);
                }
                value.then((function (index) { return function (value) {
                    resolvedValues[index] = value;
                    count--;
                    if (!count) {
                        resolve(resolvedValues);
                    }
                }; })(count), reject);
                count++;
            }
            if (!count)
                resolve(resolvedValues);
            return promise;
        };
        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
            var chainPromise = new this.constructor(null);
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }
            return chainPromise;
        };
        ZoneAwarePromise.prototype.catch = function (onRejected) {
            return this.then(null, onRejected);
        };
        ZoneAwarePromise.prototype.finally = function (onFinally) {
            var chainPromise = new this.constructor(null);
            chainPromise[symbolFinally] = symbolFinally;
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }
            return chainPromise;
        };
        return ZoneAwarePromise;
    }());
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[symbolPromise] = global['Promise'];
    var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
    var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
    if (!desc || desc.configurable) {
        desc && delete desc.writable;
        desc && delete desc.value;
        if (!desc) {
            desc = { configurable: true, enumerable: true };
        }
        desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
        };
        desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
                // if the NewNativePromise is ZoneAwarePromise
                // save to global
                global[ZONE_AWARE_PROMISE] = NewNativePromise;
            }
            else {
                // if the NewNativePromise is not ZoneAwarePromise
                // for example: after load zone.js, some library just
                // set es6-promise to global, if we set it to global
                // directly, assertZonePatched will fail and angular
                // will not loaded, so we just set the NewNativePromise
                // to global[symbolPromise], so the result is just like
                // we load ES6 Promise before zone.js
                global[symbolPromise] = NewNativePromise;
                if (!NewNativePromise.prototype[symbolThen]) {
                    patchThen(NewNativePromise);
                }
                api.setNativePromise(NewNativePromise);
            }
        };
        ObjectDefineProperty(global, 'Promise', desc);
    }
    global['Promise'] = ZoneAwarePromise;
    var symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
        if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
        }
        var originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function (onResolve, onReject) {
            var _this = this;
            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
                originalThen.call(_this, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    function zoneify(fn) {
        return function () {
            var resultPromise = fn.apply(this, arguments);
            if (resultPromise instanceof ZoneAwarePromise) {
                return resultPromise;
            }
            var ctor = resultPromise.constructor;
            if (!ctor[symbolThenPatched]) {
                patchThen(ctor);
            }
            return resultPromise;
        };
    }
    if (NativePromise) {
        patchThen(NativePromise);
        var fetch_1 = global['fetch'];
        if (typeof fetch_1 == 'function') {
            global['fetch'] = zoneify(fetch_1);
        }
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
var ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
var ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
var ObjectCreate = Object.create;
/** Array.prototype.slice */
var ArraySlice = Array.prototype.slice;
/** addEventListener string const */
var ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
var TRUE_STR = 'true';
/** false string const */
var FALSE_STR = 'false';
/** __zone_symbol__ string const */
var ZONE_SYMBOL_PREFIX = '__zone_symbol__';
function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
var zoneSymbol = Zone.__symbol__;
var isWindowExists = typeof window !== 'undefined';
var internalWindow = isWindowExists ? window : undefined;
var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
var REMOVE_ATTRIBUTE = 'removeAttribute';
var NULL_ON_PROP_VALUE = [null];
function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
    }
    return args;
}
function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];
    var _loop_1 = function (i) {
        var name_1 = fnNames[i];
        var delegate = prototype[name_1];
        if (delegate) {
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);
            if (!isPropertyWritable(prototypeDesc)) {
                return "continue";
            }
            prototype[name_1] = (function (delegate) {
                var patched = function () {
                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
                };
                attachOriginToPatched(patched, delegate);
                return patched;
            })(delegate);
        }
    };
    for (var i = 0; i < fnNames.length; i++) {
        _loop_1(i);
    }
}
function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
        return true;
    }
    if (propertyDesc.writable === false) {
        return false;
    }
    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]');
var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isMix = typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
    !!(isWindowExists && internalWindow['HTMLElement']);
var zoneSymbolEventNames = {};
var wrapFn = function (event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
        return;
    }
    var eventNameSymbol = zoneSymbolEventNames[event.type];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    }
    var target = this || event.target || _global;
    var listener = target[eventNameSymbol];
    var result = listener && listener.apply(this, arguments);
    if (result != undefined && !result) {
        event.preventDefault();
    }
    return result;
};
function patchProperty(obj, prop, prototype) {
    var desc = ObjectGetOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) {
            desc = { enumerable: true, configurable: true };
        }
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) {
        return;
    }
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    var originalDescGet = desc.get;
    var originalDescSet = desc.set;
    // substr(2) cuz 'onclick' -> 'click', etc
    var eventName = prop.substr(2);
    var eventNameSymbol = zoneSymbolEventNames[eventName];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    }
    desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return;
        }
        var previousValue = target[eventNameSymbol];
        if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
        }
        // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet
        if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
        }
        if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
        }
        else {
            target[eventNameSymbol] = null;
        }
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return null;
        }
        var listener = target[eventNameSymbol];
        if (listener) {
            return listener;
        }
        else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.call(this);
            if (value) {
                desc.set.call(this, value);
                if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                    target.removeAttribute(prop);
                }
                return value;
            }
        }
        return null;
    };
    ObjectDefineProperty(obj, prop, desc);
}
function patchOnProperties(obj, properties, prototype) {
    if (properties) {
        for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
        }
    }
    else {
        var onProperties = [];
        for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
                onProperties.push(prop);
            }
        }
        for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
        }
    }
}
var originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
    var OriginalClass = _global[className];
    if (!OriginalClass)
        return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function () {
        var a = bindArguments(arguments, className);
        switch (a.length) {
            case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;
            case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;
            case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;
            case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;
            case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;
            default:
                throw new Error('Arg list too long.');
        }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    var instance = new OriginalClass(function () { });
    var prop;
    for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
            continue;
        (function (prop) {
            if (typeof instance[prop] === 'function') {
                _global[className].prototype[prop] = function () {
                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                };
            }
            else {
                ObjectDefineProperty(_global[className].prototype, prop, {
                    set: function (fn) {
                        if (typeof fn === 'function') {
                            this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                            // keep callback in wrapped function so we can
                            // use it in Function.prototype.toString to return
                            // the native one.
                            attachOriginToPatched(this[originalInstanceKey][prop], fn);
                        }
                        else {
                            this[originalInstanceKey][prop] = fn;
                        }
                    },
                    get: function () {
                        return this[originalInstanceKey][prop];
                    }
                });
            }
        }(prop));
    }
    for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
        }
    }
}
function patchMethod(target, name, patchFn) {
    var proto = target;
    while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
    }
    var delegateName = zoneSymbol(name);
    var delegate;
    if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name];
        // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
        var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
            var patchDelegate_1 = patchFn(delegate, delegateName, name);
            proto[name] = function () {
                return patchDelegate_1(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
        }
    }
    return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
    var setNative = null;
    function scheduleTask(task) {
        var data = task.data;
        data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
    }
    setNative = patchMethod(obj, funcName, function (delegate) { return function (self, args) {
        var meta = metaCreator(self, args);
        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask, null);
        }
        else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
        }
    }; });
}

function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
}
var isDetectedIEOrEdge = false;
var ieOrEdge = false;
function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
        return ieOrEdge;
    }
    isDetectedIEOrEdge = true;
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
        }
        return ieOrEdge;
    }
    catch (error) {
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', function (global) {
    // patch Func.prototype.toString to let them look like native
    var originalFunctionToString = Function.prototype.toString;
    var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    var PROMISE_SYMBOL = zoneSymbol('Promise');
    var ERROR_SYMBOL = zoneSymbol('Error');
    var newFunctionToString = function toString() {
        if (typeof this === 'function') {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
            if (originalDelegate) {
                if (typeof originalDelegate === 'function') {
                    return originalFunctionToString.apply(this[ORIGINAL_DELEGATE_SYMBOL], arguments);
                }
                else {
                    return Object.prototype.toString.call(originalDelegate);
                }
            }
            if (this === Promise) {
                var nativePromise = global[PROMISE_SYMBOL];
                if (nativePromise) {
                    return originalFunctionToString.apply(nativePromise, arguments);
                }
            }
            if (this === Error) {
                var nativeError = global[ERROR_SYMBOL];
                if (nativeError) {
                    return originalFunctionToString.apply(nativeError, arguments);
                }
            }
        }
        return originalFunctionToString.apply(this, arguments);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    // patch Object.prototype.toString to let them look like native
    var originalObjectToString = Object.prototype.toString;
    var PROMISE_OBJECT_TO_STRING = '[object Promise]';
    Object.prototype.toString = function () {
        if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
        }
        return originalObjectToString.apply(this, arguments);
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
// an identifier to tell ZoneTask do not create a new invoke closure
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
};
var zoneSymbolEventNames$1 = {};
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
var IMMEDIATE_PROPAGATION_SYMBOL = ('__zone_symbol__propagationStopped');
function patchEventTarget(_global, apis, patchOptions) {
    var ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
    var REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
    var LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
    var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    var PREPEND_EVENT_LISTENER = 'prependListener';
    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
    var invokeTask = function (task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
            return;
        }
        var delegate = task.callback;
        if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) { return delegate.handleEvent(event); };
            task.originalDelegate = delegate;
        }
        // invoke static task.invoke
        task.invoke(task, target, [event]);
        var options = task.options;
        if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
            target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = false
    var globalZoneAwareCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    var globalZoneAwareCaptureCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
            return false;
        }
        var useGlobalCallback = true;
        if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
        }
        var validateHandler = patchOptions && patchOptions.vh;
        var checkDuplicate = true;
        if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
        }
        var returnTarget = false;
        if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
        }
        var proto = obj;
        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
        }
        if (!proto) {
            return false;
        }
        if (proto[zoneSymbolAddEventListener]) {
            return false;
        }
        // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data
        var taskData = {};
        var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
            proto[REMOVE_EVENT_LISTENER];
        var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
            proto[LISTENERS_EVENT_LISTENER];
        var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        var nativePrependEventListener;
        if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                proto[patchOptions.prepend];
        }
        var customScheduleGlobal = function () {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
                return;
            }
            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };
        var customCancelGlobal = function (task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
                var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                var symbolEventName = void 0;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = symbolEventName && task.target[symbolEventName];
                if (existingTasks) {
                    for (var i = 0; i < existingTasks.length; i++) {
                        var existingTask = existingTasks[i];
                        if (existingTask === task) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            task.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                task.allRemoved = true;
                                task.target[symbolEventName] = null;
                            }
                            break;
                        }
                    }
                }
            }
            // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return
            if (!task.allRemoved) {
                return;
            }
            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };
        var customScheduleNonGlobal = function (task) {
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customSchedulePrepend = function (task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customCancelNonGlobal = function (task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };
        var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        var compareTaskCallbackVsDelegate = function (task, delegate) {
            var typeOfDelegate = typeof delegate;
            return (typeOfDelegate === 'function' && task.callback === delegate) ||
                (typeOfDelegate === 'object' && task.originalDelegate === delegate);
        };
        var compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
        var blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];
        var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
            if (returnTarget === void 0) { returnTarget = false; }
            if (prepend === void 0) { prepend = false; }
            return function () {
                var target = this || _global;
                var delegate = arguments[1];
                if (!delegate) {
                    return nativeListener.apply(this, arguments);
                }
                // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke
                var isHandleEvent = false;
                if (typeof delegate !== 'function') {
                    if (!delegate.handleEvent) {
                        return nativeListener.apply(this, arguments);
                    }
                    isHandleEvent = true;
                }
                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                    return;
                }
                var eventName = arguments[0];
                var options = arguments[2];
                if (blackListedEvents) {
                    // check black list
                    for (var i = 0; i < blackListedEvents.length; i++) {
                        if (eventName === blackListedEvents[i]) {
                            return nativeListener.apply(this, arguments);
                        }
                    }
                }
                var capture;
                var once = false;
                if (options === undefined) {
                    capture = false;
                }
                else if (options === true) {
                    capture = true;
                }
                else if (options === false) {
                    capture = false;
                }
                else {
                    capture = options ? !!options.capture : false;
                    once = options ? !!options.once : false;
                }
                var zone = Zone.current;
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                var symbolEventName;
                if (!symbolEventNames) {
                    // the code is duplicate, but I just want to get some better performance
                    var falseEventName = eventName + FALSE_STR;
                    var trueEventName = eventName + TRUE_STR;
                    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                    zoneSymbolEventNames$1[eventName] = {};
                    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
                    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                    symbolEventName = capture ? symbolCapture : symbol;
                }
                else {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = target[symbolEventName];
                var isExisting = false;
                if (existingTasks) {
                    // already have task registered
                    isExisting = true;
                    if (checkDuplicate) {
                        for (var i = 0; i < existingTasks.length; i++) {
                            if (compare(existingTasks[i], delegate)) {
                                // same callback, same capture, same event name, just return
                                return;
                            }
                        }
                    }
                }
                else {
                    existingTasks = target[symbolEventName] = [];
                }
                var source;
                var constructorName = target.constructor['name'];
                var targetSource = globalSources[constructorName];
                if (targetSource) {
                    source = targetSource[eventName];
                }
                if (!source) {
                    source = constructorName + addSource + eventName;
                }
                // do not create a new object as task.data to pass those things
                // just use the global shared one
                taskData.options = options;
                if (once) {
                    // if addEventListener with once options, we don't pass it to
                    // native addEventListener, instead we keep the once setting
                    // and handle ourselves.
                    taskData.options.once = false;
                }
                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : null;
                // keep taskData into data to allow onScheduleEventTask to access the task information
                if (data) {
                    data.taskData = taskData;
                }
                var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                // should clear taskData.target to avoid memory leak
                // issue, https://github.com/angular/angular/issues/20442
                taskData.target = null;
                // need to clear up taskData because it is a global object
                if (data) {
                    data.taskData = null;
                }
                // have to save those information to task in case
                // application may call task.zone.cancelTask() directly
                if (once) {
                    options.once = true;
                }
                task.options = options;
                task.target = target;
                task.capture = capture;
                task.eventName = eventName;
                if (isHandleEvent) {
                    // save original delegate for compare to check duplicate
                    task.originalDelegate = delegate;
                }
                if (!prepend) {
                    existingTasks.push(task);
                }
                else {
                    existingTasks.unshift(task);
                }
                if (returnTarget) {
                    return target;
                }
            };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
        if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }
        proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var options = arguments[2];
            var capture;
            if (options === undefined) {
                capture = false;
            }
            else if (options === true) {
                capture = true;
            }
            else if (options === false) {
                capture = false;
            }
            else {
                capture = options ? !!options.capture : false;
            }
            var delegate = arguments[1];
            if (!delegate) {
                return nativeRemoveEventListener.apply(this, arguments);
            }
            if (validateHandler &&
                !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                return;
            }
            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;
            if (symbolEventNames) {
                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }
            var existingTasks = symbolEventName && target[symbolEventName];
            if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                    var existingTask = existingTasks[i];
                    if (compare(existingTask, delegate)) {
                        existingTasks.splice(i, 1);
                        // set isRemoved to data for faster invokeTask check
                        existingTask.isRemoved = true;
                        if (existingTasks.length === 0) {
                            // all tasks for the eventName + capture have gone,
                            // remove globalZoneAwareCallback and remove the task cache from target
                            existingTask.allRemoved = true;
                            target[symbolEventName] = null;
                        }
                        existingTask.zone.cancelTask(existingTask);
                        if (returnTarget) {
                            return target;
                        }
                        return;
                    }
                }
            }
            // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.
            return nativeRemoveEventListener.apply(this, arguments);
        };
        proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var listeners = [];
            var tasks = findEventTasks(target, eventName);
            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
            }
            return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            if (!eventName) {
                var keys = Object.keys(target);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    var evtName = match && match[1];
                    // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed
                    if (evtName && evtName !== 'removeListener') {
                        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                    }
                }
                // remove removeListener listener finally
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            }
            else {
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                if (symbolEventNames) {
                    var symbolEventName = symbolEventNames[FALSE_STR];
                    var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    var tasks = target[symbolEventName];
                    var captureTasks = target[symbolCaptureEventName];
                    if (tasks) {
                        var removeTasks = tasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                    if (captureTasks) {
                        var removeTasks = captureTasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                }
            }
            if (returnTarget) {
                return this;
            }
        };
        // for native toString patch
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }
        if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }
        return true;
    }
    var results = [];
    for (var i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }
    return results;
}
function findEventTasks(target, eventName) {
    var foundTasks = [];
    for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];
        if (evtName && (!eventName || evtName === eventName)) {
            var tasks = target[prop];
            if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                    foundTasks.push(tasks[i]);
                }
            }
        }
    }
    return foundTasks;
}
function patchEventPrototype(global, api) {
    var Event = global['Event'];
    if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) { return function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
            // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not
            delegate && delegate.apply(self, args);
        }; });
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};
    function scheduleTask(task) {
        var data = task.data;
        function timer() {
            try {
                task.invoke.apply(this, arguments);
            }
            finally {
                // issue-934, task will be cancelled
                // even it is a periodic task such as
                // setInterval
                if (!(task.data && task.data.isPeriodic)) {
                    if (typeof data.handleId === 'number') {
                        // in non-nodejs env, we remove timerId
                        // from local cache
                        delete tasksByHandleId[data.handleId];
                    }
                    else if (data.handleId) {
                        // Node returns complex objects as handleIds
                        // we remove task reference from timer object
                        data.handleId[taskSymbol] = null;
                    }
                }
            }
        }
        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        return task;
    }
    function clearTask(task) {
        return clearNative(task.data.handleId);
    }
    setNative =
        patchMethod(window, setName, function (delegate) { return function (self, args) {
            if (typeof args[0] === 'function') {
                var options = {
                    handleId: null,
                    isPeriodic: nameSuffix === 'Interval',
                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 : null,
                    args: args
                };
                var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                if (!task) {
                    return task;
                }
                // Node.js must additionally support the ref and unref functions.
                var handle = task.data.handleId;
                if (typeof handle === 'number') {
                    // for non nodejs env, we save handleId: task
                    // mapping in local cache for clearTimeout
                    tasksByHandleId[handle] = task;
                }
                else if (handle) {
                    // for nodejs env, we save task
                    // reference in timerId Object for clearTimeout
                    handle[taskSymbol] = task;
                }
                // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                    typeof handle.unref === 'function') {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                }
                if (typeof handle === 'number' || handle) {
                    return handle;
                }
                return task;
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(window, args);
            }
        }; });
    clearNative =
        patchMethod(window, cancelName, function (delegate) { return function (self, args) {
            var id = args[0];
            var task;
            if (typeof id === 'number') {
                // non nodejs env.
                task = tasksByHandleId[id];
            }
            else {
                // nodejs env.
                task = id && id[taskSymbol];
                // other environments.
                if (!task) {
                    task = id;
                }
            }
            if (task && typeof task.type === 'string') {
                if (task.state !== 'notScheduled' &&
                    (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                    if (typeof id === 'number') {
                        delete tasksByHandleId[id];
                    }
                    else if (id) {
                        id[taskSymbol] = null;
                    }
                    // Do not cancel already canceled functions
                    task.zone.cancelTask(task);
                }
            }
            else {
                // cause an error by calling it directly.
                delegate.apply(window, args);
            }
        }; });
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/*
 * This is necessary for Chrome and Chrome mobile, to enable
 * things like redefining `createdCallback` on an element.
 */
var _defineProperty = Object[zoneSymbol('defineProperty')] = Object.defineProperty;
var _getOwnPropertyDescriptor = Object[zoneSymbol('getOwnPropertyDescriptor')] =
    Object.getOwnPropertyDescriptor;
var _create = Object.create;
var unconfigurablesKey = zoneSymbol('unconfigurables');
function propertyPatch() {
    Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }
        var originalConfigurableFlag = desc.configurable;
        if (prop !== 'prototype') {
            desc = rewriteDescriptor(obj, prop, desc);
        }
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };
    Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
            Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
    };
    Object.create = function (obj, proto) {
        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
            Object.keys(proto).forEach(function (prop) {
                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
            });
        }
        return _create(obj, proto);
    };
    Object.getOwnPropertyDescriptor = function (obj, prop) {
        var desc = _getOwnPropertyDescriptor(obj, prop);
        if (isUnconfigurable(obj, prop)) {
            desc.configurable = false;
        }
        return desc;
    };
}
function _redefineProperty(obj, prop, desc) {
    var originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
}
function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
}
function rewriteDescriptor(obj, prop, desc) {
    // issue-927, if the desc is frozen, don't try to change the desc
    if (!Object.isFrozen(desc)) {
        desc.configurable = true;
    }
    if (!desc.configurable) {
        // issue-927, if the obj is frozen, don't try to set the desc to obj
        if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
        }
        if (obj[unconfigurablesKey]) {
            obj[unconfigurablesKey][prop] = true;
        }
    }
    return desc;
}
function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
        return _defineProperty(obj, prop, desc);
    }
    catch (error) {
        if (desc.configurable) {
            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
            // retry with the original flag value
            if (typeof originalConfigurableFlag == 'undefined') {
                delete desc.configurable;
            }
            else {
                desc.configurable = originalConfigurableFlag;
            }
            try {
                return _defineProperty(obj, prop, desc);
            }
            catch (error) {
                var descJson = null;
                try {
                    descJson = JSON.stringify(desc);
                }
                catch (error) {
                    descJson = desc.toString();
                }
                console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
            }
        }
        else {
            throw error;
        }
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// we have to patch the instance since the proto is non-configurable
function apply(api, _global) {
    var WS = _global.WebSocket;
    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
    // On older Chrome, no need since EventTarget was already patched
    if (!_global.EventTarget) {
        patchEventTarget(_global, [WS.prototype]);
    }
    _global.WebSocket = function (x, y) {
        var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
        var proxySocket;
        var proxySocketProto;
        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
        var onmessageDesc = ObjectGetOwnPropertyDescriptor(socket, 'onmessage');
        if (onmessageDesc && onmessageDesc.configurable === false) {
            proxySocket = ObjectCreate(socket);
            // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
            // but proxySocket not, so we will keep socket as prototype and pass it to
            // patchOnProperties method
            proxySocketProto = socket;
            [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
                proxySocket[propName] = function () {
                    var args = ArraySlice.call(arguments);
                    if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
                        var eventName = args.length > 0 ? args[0] : undefined;
                        if (eventName) {
                            var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);
                            socket[propertySymbol] = proxySocket[propertySymbol];
                        }
                    }
                    return socket[propName].apply(socket, args);
                };
            });
        }
        else {
            // we can patch the real socket
            proxySocket = socket;
        }
        patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
        return proxySocket;
    };
    var globalWebSocket = _global['WebSocket'];
    for (var prop in WS) {
        globalWebSocket[prop] = WS[prop];
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
var globalEventHandlersEventNames = [
    'abort',
    'animationcancel',
    'animationend',
    'animationiteration',
    'auxclick',
    'beforeinput',
    'blur',
    'cancel',
    'canplay',
    'canplaythrough',
    'change',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'cuechange',
    'click',
    'close',
    'contextmenu',
    'curechange',
    'dblclick',
    'drag',
    'dragend',
    'dragenter',
    'dragexit',
    'dragleave',
    'dragover',
    'drop',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'focus',
    'focusin',
    'focusout',
    'gotpointercapture',
    'input',
    'invalid',
    'keydown',
    'keypress',
    'keyup',
    'load',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'lostpointercapture',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'mousewheel',
    'orientationchange',
    'pause',
    'play',
    'playing',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerlockchange',
    'mozpointerlockchange',
    'webkitpointerlockerchange',
    'pointerlockerror',
    'mozpointerlockerror',
    'webkitpointerlockerror',
    'pointermove',
    'pointout',
    'pointerover',
    'pointerup',
    'progress',
    'ratechange',
    'reset',
    'resize',
    'scroll',
    'seeked',
    'seeking',
    'select',
    'selectionchange',
    'selectstart',
    'show',
    'sort',
    'stalled',
    'submit',
    'suspend',
    'timeupdate',
    'volumechange',
    'touchcancel',
    'touchmove',
    'touchstart',
    'touchend',
    'transitioncancel',
    'transitionend',
    'waiting',
    'wheel'
];
var documentEventNames = [
    'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'fullscreenchange',
    'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
    'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
    'visibilitychange'
];
var windowEventNames = [
    'absolutedeviceorientation',
    'afterinput',
    'afterprint',
    'appinstalled',
    'beforeinstallprompt',
    'beforeprint',
    'beforeunload',
    'devicelight',
    'devicemotion',
    'deviceorientation',
    'deviceorientationabsolute',
    'deviceproximity',
    'hashchange',
    'languagechange',
    'message',
    'mozbeforepaint',
    'offline',
    'online',
    'paint',
    'pageshow',
    'pagehide',
    'popstate',
    'rejectionhandled',
    'storage',
    'unhandledrejection',
    'unload',
    'userproximity',
    'vrdisplyconnected',
    'vrdisplaydisconnected',
    'vrdisplaypresentchange'
];
var htmlElementEventNames = [
    'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
    'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
    'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
];
var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
var ieElementEventNames = [
    'activate',
    'afterupdate',
    'ariarequest',
    'beforeactivate',
    'beforedeactivate',
    'beforeeditfocus',
    'beforeupdate',
    'cellchange',
    'controlselect',
    'dataavailable',
    'datasetchanged',
    'datasetcomplete',
    'errorupdate',
    'filterchange',
    'layoutcomplete',
    'losecapture',
    'move',
    'moveend',
    'movestart',
    'propertychange',
    'resizeend',
    'resizestart',
    'rowenter',
    'rowexit',
    'rowsdelete',
    'rowsinserted',
    'command',
    'compassneedscalibration',
    'deactivate',
    'help',
    'mscontentzoom',
    'msmanipulationstatechanged',
    'msgesturechange',
    'msgesturedoubletap',
    'msgestureend',
    'msgesturehold',
    'msgesturestart',
    'msgesturetap',
    'msgotpointercapture',
    'msinertiastart',
    'mslostpointercapture',
    'mspointercancel',
    'mspointerdown',
    'mspointerenter',
    'mspointerhover',
    'mspointerleave',
    'mspointermove',
    'mspointerout',
    'mspointerover',
    'mspointerup',
    'pointerout',
    'mssitemodejumplistitemremoved',
    'msthumbnailclick',
    'stop',
    'storagecommit'
];
var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
var formEventNames = ['autocomplete', 'autocompleteerror'];
var detailEventNames = ['toggle'];
var frameEventNames = ['load'];
var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
var marqueeEventNames = ['bounce', 'finish', 'start'];
var XMLHttpRequestEventNames = [
    'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
    'readystatechange'
];
var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
var websocketEventNames = ['close', 'error', 'open', 'message'];
var workerEventNames = ['error', 'message'];
var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties) {
        return onProperties;
    }
    var tip = ignoreProperties.filter(function (ip) { return ip.target === target; });
    if (!tip || tip.length === 0) {
        return onProperties;
    }
    var targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(function (op) { return targetIgnoreProperties.indexOf(op) === -1; });
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
        return;
    }
    var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
}
function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
        return;
    }
    var supportsWebSocket = typeof WebSocket !== 'undefined';
    if (canPatchViaPropertyDescriptor()) {
        var ignoreProperties = _global.__Zone_ignore_on_properties;
        // for browsers that we can patch the descriptor:  Chrome & Firefox
        if (isBrowser) {
            var internalWindow = window;
            // in IE/Edge, onProp not exist in window object, but in WindowPrototype
            // so we need to pass WindowPrototype to check onProp exist or not
            patchFilteredProperties(internalWindow, eventNames.concat(['messageerror']), ignoreProperties, ObjectGetPrototypeOf(internalWindow));
            patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
            if (typeof internalWindow['SVGElement'] !== 'undefined') {
                patchFilteredProperties(internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
            }
            patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
            patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
            patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
            var HTMLMarqueeElement_1 = internalWindow['HTMLMarqueeElement'];
            if (HTMLMarqueeElement_1) {
                patchFilteredProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames, ignoreProperties);
            }
            var Worker_1 = internalWindow['Worker'];
            if (Worker_1) {
                patchFilteredProperties(Worker_1.prototype, workerEventNames, ignoreProperties);
            }
        }
        patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
        var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];
        if (XMLHttpRequestEventTarget) {
            patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }
        if (typeof IDBIndex !== 'undefined') {
            patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
        }
        if (supportsWebSocket) {
            patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
        }
    }
    else {
        // Safari, Android browsers (Jelly Bean)
        patchViaCapturingAllTheEvents();
        patchClass('XMLHttpRequest');
        if (supportsWebSocket) {
            apply(api, _global);
        }
    }
}
function canPatchViaPropertyDescriptor() {
    if ((isBrowser || isMix) && !ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
        typeof Element !== 'undefined') {
        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
        // IDL interface attributes are not configurable
        var desc = ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
        if (desc && !desc.configurable)
            return false;
    }
    var ON_READY_STATE_CHANGE = 'onreadystatechange';
    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    var xhrDesc = ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE);
    // add enumerable and configurable here because in opera
    // by default XMLHttpRequest.prototype.onreadystatechange is undefined
    // without adding enumerable and configurable will cause onreadystatechange
    // non-configurable
    // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
    // we should set a real desc instead a fake one
    if (xhrDesc) {
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return true;
            }
        });
        var req = new XMLHttpRequest();
        var result = !!req.onreadystatechange;
        // restore original desc
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
        return result;
    }
    else {
        var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = zoneSymbol('fake');
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
            },
            set: function (value) {
                this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
            }
        });
        var req = new XMLHttpRequest();
        var detectFunc = function () { };
        req.onreadystatechange = detectFunc;
        var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
        req.onreadystatechange = null;
        return result;
    }
}
var unboundKey = zoneSymbol('unbound');
// Whenever any eventListener fires, we check the eventListener target and all parents
// for `onwhatever` properties and replace them with zone-bound functions
// - Chrome (for now)
function patchViaCapturingAllTheEvents() {
    var _loop_1 = function (i) {
        var property = eventNames[i];
        var onproperty = 'on' + property;
        self.addEventListener(property, function (event) {
            var elt = event.target, bound, source;
            if (elt) {
                source = elt.constructor['name'] + '.' + onproperty;
            }
            else {
                source = 'unknown.' + onproperty;
            }
            while (elt) {
                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                    bound = wrapWithCurrentZone(elt[onproperty], source);
                    bound[unboundKey] = elt[onproperty];
                    elt[onproperty] = bound;
                }
                elt = elt.parentElement;
            }
        }, true);
    };
    for (var i = 0; i < eventNames.length; i++) {
        _loop_1(i);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'
        .split(',');
    var EVENT_TARGET = 'EventTarget';
    var apis = [];
    var isWtf = _global['wtf'];
    var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');
    if (isWtf) {
        // Workaround for: https://github.com/google/tracing-framework/issues/555
        apis = WTF_ISSUE_555_ARRAY.map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
    }
    else if (_global[EVENT_TARGET]) {
        apis.push(EVENT_TARGET);
    }
    else {
        // Note: EventTarget is not available in all browsers,
        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
        apis = NO_EVENT_TARGET;
    }
    var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
    var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
    var ieOrEdge = isIEOrEdge();
    var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
    var FUNCTION_WRAPPER = '[object FunctionWrapper]';
    var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames$1[eventName] = {};
        zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
    }
    //  predefine all task.source string
    for (var i = 0; i < WTF_ISSUE_555.length; i++) {
        var target = WTF_ISSUE_555_ARRAY[i];
        var targets = globalSources[target] = {};
        for (var j = 0; j < eventNames.length; j++) {
            var eventName = eventNames[j];
            targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
        }
    }
    var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
        if (!isDisableIECheck && ieOrEdge) {
            if (isEnableCrossContextCheck) {
                try {
                    var testString = delegate.toString();
                    if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                        nativeDelegate.apply(target, args);
                        return false;
                    }
                }
                catch (error) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
            else {
                var testString = delegate.toString();
                if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
        }
        else if (isEnableCrossContextCheck) {
            try {
                delegate.toString();
            }
            catch (error) {
                nativeDelegate.apply(target, args);
                return false;
            }
        }
        return true;
    };
    var apiTypes = [];
    for (var i = 0; i < apis.length; i++) {
        var type = _global[apis[i]];
        apiTypes.push(type && type.prototype);
    }
    // vh is validateHandler to check event handler
    // is valid or not(for security check)
    patchEventTarget(_global, apiTypes, { vh: checkIEAndCrossContext });
    api.patchEventTarget = patchEventTarget;
    return true;
}
function patchEvent(global, api) {
    patchEventPrototype(global, api);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function registerElementPatch(_global) {
    if ((!isBrowser && !isMix) || !('registerElement' in _global.document)) {
        return;
    }
    var _registerElement = document.registerElement;
    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
    document.registerElement = function (name, opts) {
        if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
                var source = 'Document.registerElement::' + callback;
                var prototype = opts.prototype;
                if (prototype.hasOwnProperty(callback)) {
                    var descriptor = ObjectGetOwnPropertyDescriptor(prototype, callback);
                    if (descriptor && descriptor.value) {
                        descriptor.value = wrapWithCurrentZone(descriptor.value, source);
                        _redefineProperty(opts.prototype, callback, descriptor);
                    }
                    else {
                        prototype[callback] = wrapWithCurrentZone(prototype[callback], source);
                    }
                }
                else if (prototype[callback]) {
                    prototype[callback] = wrapWithCurrentZone(prototype[callback], source);
                }
            });
        }
        return _registerElement.call(document, name, opts);
    };
    attachOriginToPatched(document.registerElement, _registerElement);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
Zone.__load_patch('util', function (global, Zone, api) {
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
});
Zone.__load_patch('timers', function (global) {
    var set = 'set';
    var clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', function (global) {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', function (global, Zone) {
    var blockingMethods = ['alert', 'prompt', 'confirm'];
    for (var i = 0; i < blockingMethods.length; i++) {
        var name_1 = blockingMethods[i];
        patchMethod(global, name_1, function (delegate, symbol, name) {
            return function (s, args) {
                return Zone.current.run(delegate, global, args, name);
            };
        });
    }
});
Zone.__load_patch('EventTarget', function (global, Zone, api) {
    // load blackListEvents from global
    var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
    }
    patchEvent(global, api);
    eventTargetPatch(global, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
    }
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
    patchClass('IntersectionObserver');
    patchClass('FileReader');
});
Zone.__load_patch('on_property', function (global, Zone, api) {
    propertyDescriptorPatch(api, global);
    propertyPatch();
    registerElementPatch(global);
});
Zone.__load_patch('canvas', function (global) {
    var HTMLCanvasElement = global['HTMLCanvasElement'];
    if (typeof HTMLCanvasElement !== 'undefined' && HTMLCanvasElement.prototype &&
        HTMLCanvasElement.prototype.toBlob) {
        patchMacroTask(HTMLCanvasElement.prototype, 'toBlob', function (self, args) {
            return { name: 'HTMLCanvasElement.toBlob', target: self, cbIdx: 0, args: args };
        });
    }
});
Zone.__load_patch('XHR', function (global, Zone) {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    var XHR_TASK = zoneSymbol('xhrTask');
    var XHR_SYNC = zoneSymbol('xhrSync');
    var XHR_LISTENER = zoneSymbol('xhrListener');
    var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    var XHR_URL = zoneSymbol('xhrURL');
    function patchXHR(window) {
        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        function findPendingTask(target) {
            return target[XHR_TASK];
        }
        var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        if (!oriAddListener) {
            var XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];
            if (XMLHttpRequestEventTarget) {
                var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
                oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
        }
        var READY_STATE_CHANGE = 'readystatechange';
        var SCHEDULED = 'scheduled';
        function scheduleTask(task) {
            XMLHttpRequest[XHR_SCHEDULED] = false;
            var data = task.data;
            var target = data.target;
            // remove existing event listener
            var listener = target[XHR_LISTENER];
            if (!oriAddListener) {
                oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
            if (listener) {
                oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }
            var newListener = target[XHR_LISTENER] = function () {
                if (target.readyState === target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && XMLHttpRequest[XHR_SCHEDULED] && task.state === SCHEDULED) {
                        task.invoke();
                    }
                }
            };
            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];
            if (!storedTask) {
                target[XHR_TASK] = task;
            }
            sendNative.apply(target, data.args);
            XMLHttpRequest[XHR_SCHEDULED] = true;
            return task;
        }
        function placeholderCallback() { }
        function clearTask(task) {
            var data = task.data;
            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.
            data.aborted = true;
            return abortNative.apply(data.target, data.args);
        }
        var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () { return function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
        }; });
        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () { return function (self, args) {
            if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
            }
            else {
                var options = {
                    target: self,
                    url: self[XHR_URL],
                    isPeriodic: false,
                    delay: null,
                    args: args,
                    aborted: false
                };
                return scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
            }
        }; });
        var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () { return function (self) {
            var task = findPendingTask(self);
            if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || (task.data && task.data.aborted)) {
                    return;
                }
                task.zone.cancelTask(task);
            }
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
        }; });
    }
});
Zone.__load_patch('geolocation', function (global) {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
});
Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
        return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
                // windows has added unhandledrejection event listener
                // trigger the event listener
                var PromiseRejectionEvent = global['PromiseRejectionEvent'];
                if (PromiseRejectionEvent) {
                    var evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                    eventTask.invoke(evt);
                }
            });
        };
    }
    if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
            findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] =
            findPromiseRejectionHandler('rejectionhandled');
    }
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

})));


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/animations.ts":
/*!***************************!*\
  !*** ./src/animations.ts ***!
  \***************************/
/*! exports provided: routerAnimation, fabAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerAnimation", function() { return routerAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fabAnimation", function() { return fabAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeOutIn = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'fixed',
        width: '100%'
    }), {
        optional: true
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0
        }))
    ], {
        optional: true
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s 0.5s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
    })), {
        optional: true
    })
];
var slideLeft = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'fixed',
        width: '100%'
    }), {
        optional: false
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(100%)'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(0%)'
            }))
        ], {
            optional: false
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(0%)'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(-100%)'
            }))
        ], {
            optional: false
        })
    ])
];
var slideRight = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'fixed',
        width: '100%'
    }), {
        optional: false
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(-100%)'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(0%)'
            }))
        ], {
            optional: false
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(0%)'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(100%)'
            }))
        ], {
            optional: false
        })
    ])
];
/**
* Animation for switching between routes
*/
var routerAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
    // Landing transitions
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => landing', fadeOutIn),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('landing => appHome', fadeOutIn),
    // Tabs transitions
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('appHome => appConfig', slideLeft),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('appConfig => appHome', slideRight),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('appHome => appSettings', slideLeft),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('appSettings => appHome', slideRight),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('appConfig => appSettings', slideLeft),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('appSettings => appConfig', slideRight),
]);
var fabAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('createConfigFABState', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(0)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(1)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.1s')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('active => inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.1s')),
]);


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <div></div>\n    <div>\n      <img class=\"toolbar-logo\" src=\"assets/images/icon.png\" alt=\"G-Drive Sorter Logo\">\n    </div>\n    <div>\n      <mat-menu #appMenu=\"matMenu\">\n        <button mat-menu-item (click)=\"signOut()\">Sign Out</button>\n      </mat-menu>\n      <button *ngIf=\"authenticated\" mat-icon-button [matMenuTriggerFor]=\"appMenu\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <button *ngIf=\"!authenticated\" mat-button (click)=\"signIn()\">\n        Sign In\n      </button>\n    </div>\n  </mat-toolbar-row>\n  <mat-toolbar-row *ngIf=\"authenticated\">\n    <nav mat-tab-nav-bar color=\"accent\">\n      <a mat-tab-link\n         *ngFor=\"let link of tabLinks\"\n         [routerLink]=\"link.path\"\n         routerLinkActive #rla=\"routerLinkActive\"\n         [active]=\"rlaSafe&&rla.isActive\">\n        {{ link.label }}\n      </a>\n    </nav>\n  </mat-toolbar-row>\n</mat-toolbar>\n<div [@routerTransition]=\"getRouteState(route)\">\n  <router-outlet #route=\"outlet\"></router-outlet>\n</div>\n<button class=\"new-config-button\" matTooltip=\"Create Config\" matTooltipPosition=\"left\" mat-fab \n color=\"accent\" [@createConfigFABState]=\"createConfigButtonState\" (click)=\"openConfigModalFunc()\">\n  <mat-icon aria-label=\"Create new config button.\">add</mat-icon>\n</button>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar > mat-toolbar-row:first-child {\n  justify-content: center; }\n\nmat-toolbar > mat-toolbar-row:first-child > div {\n  flex: 1; }\n\nmat-toolbar > mat-toolbar-row:first-child > div:nth-child(2) {\n  text-align: center; }\n\nmat-toolbar > mat-toolbar-row:first-child > div:nth-child(3) {\n  text-align: right; }\n\n.toolbar-logo {\n  width: 65px; }\n\nnav.mat-tab-nav-bar {\n  width: 100%; }\n\n::ng-deep .mat-tab-links {\n  display: flex; }\n\n.mat-tab-link {\n  flex: 1 1 auto; }\n\n.new-config-button {\n  right: 20px;\n  bottom: 20px;\n  position: fixed; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations */ "./src/animations.ts");
/* harmony import */ var _services_google_google_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/google/google.service */ "./src/app/services/google/google.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Base application component.
 *
 * @export
 * @class AppComponent
 * @implements {AfterViewInit}
 */
var AppComponent = /** @class */ (function () {
    /**
     * Creates an instance of AppComponent.
     * @param {GoogleService} google Declare the Google Service as google
     * @param {Router} router Declare the Router as router
     * @param {NgZone} zone  Declare NgZone as zon
     * @memberof AppComponent
     */
    function AppComponent(google, router, zone) {
        var _this = this;
        this.google = google;
        this.router = router;
        this.zone = zone;
        this.openConfigModal = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.rlaSafe = false;
        this.createConfigButtonState = 'inactive';
        this.openConfigModal$ = this.openConfigModal.asObservable();
        this.tabLinks = [
            {
                path: 'app/home',
                label: 'Home'
            },
            {
                path: 'app/config',
                label: 'Configuration'
            },
            {
                path: 'app/settings',
                label: 'Settings'
            }
        ];
        var googleInitInterval = setInterval(function () {
            if (window['gapi']) {
                _this.google.init({
                    apiKey: 'AIzaSyB-yE9IXT29Vl_eAU7bzvzv5Qe17flfpzM',
                    clientId: '362606538820-om1dhhvv5d9npas7jj02mbtvi5mjksmo.apps.googleusercontent.com',
                    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
                    scope: 'https://www.googleapis.com/auth/drive'
                }, function () {
                    console.debug('Google initalized.');
                });
                _this.google.authState$.subscribe(function (state) {
                    _this.authenticated = state;
                    if (state) {
                        _this.zone.run(function () {
                            _this.router.navigate(['/app/home']);
                        });
                    }
                    else {
                        _this.zone.run(function () {
                            _this.router.navigate(['/']);
                        });
                    }
                });
                clearInterval(googleInitInterval);
            }
        }, 250);
    }
    /**
     * Called after the view is initalized.
     *
     * @memberof AppComponent
     */
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.rlaSafe = true;
        // Listen for route changes
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                if (event.url === '/app/config') {
                    _this.createConfigButtonState = 'active';
                }
                else {
                    _this.createConfigButtonState = 'inactive';
                }
            }
        });
    };
    AppComponent.prototype.signOut = function () {
        this.google.signOut();
    };
    AppComponent.prototype.signIn = function () {
        this.google.signIn();
    };
    AppComponent.prototype.openConfigModalFunc = function () {
        this.openConfigModal.next(true);
    };
    /**
     * Gets the current route information.
     *
     * @param {any} outlet The route
     * @returns
     * @memberof AppComponent
     */
    AppComponent.prototype.getRouteState = function (outlet) {
        return outlet.activatedRouteData.state;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            providers: [_services_google_google_service__WEBPACK_IMPORTED_MODULE_3__["GoogleService"]],
            animations: [
                _animations__WEBPACK_IMPORTED_MODULE_2__["routerAnimation"],
                _animations__WEBPACK_IMPORTED_MODULE_2__["fabAnimation"]
            ]
        }),
        __metadata("design:paramtypes", [_services_google_google_service__WEBPACK_IMPORTED_MODULE_3__["GoogleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _modules_authenticated_authenticated_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/authenticated/authenticated.module */ "./src/app/modules/authenticated/authenticated.module.ts");
/* harmony import */ var _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth/auth-guard.service */ "./src/app/services/auth/auth-guard.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _modules_config_config_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/config/config.module */ "./src/app/modules/config/config.module.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _services_google_google_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/google/google.service */ "./src/app/services/google/google.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_parallax__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-parallax */ "./node_modules/ngx-parallax/dist/bundle.js");
/* harmony import */ var ngx_parallax__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ngx_parallax__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_auth_unauthenticated_unauthenticated_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/auth/unauthenticated/unauthenticated.component */ "./src/app/components/auth/unauthenticated/unauthenticated.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_16__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_auth_unauthenticated_unauthenticated_component__WEBPACK_IMPORTED_MODULE_19__["UnauthenticatedComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
                ngx_parallax__WEBPACK_IMPORTED_MODULE_17__["ParallaxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_4__["appRoutes"]),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__["AngularFireAuthModule"],
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestoreModule"],
                _modules_config_config_module__WEBPACK_IMPORTED_MODULE_9__["ConfigModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _modules_authenticated_authenticated_module__WEBPACK_IMPORTED_MODULE_5__["AuthenticatedModule"].forRoot(),
                angularfire2__WEBPACK_IMPORTED_MODULE_1__["AngularFireModule"].initializeApp(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].firebase),
            ],
            providers: [_services_google_google_service__WEBPACK_IMPORTED_MODULE_11__["GoogleService"], _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"], _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["PreventAuthGuardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth/auth-guard.service */ "./src/app/services/auth/auth-guard.service.ts");
/* harmony import */ var _components_tabs_config_config_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/tabs/config/config.component */ "./src/app/components/tabs/config/config.component.ts");
/* harmony import */ var _components_shared_edit_config_page_edit_config_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/shared/edit-config-page/edit-config-page.component */ "./src/app/components/shared/edit-config-page/edit-config-page.component.ts");
/* harmony import */ var _components_tabs_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tabs/home/home.component */ "./src/app/components/tabs/home/home.component.ts");
/* harmony import */ var _components_shared_new_config_page_new_config_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/shared/new-config-page/new-config-page.component */ "./src/app/components/shared/new-config-page/new-config-page.component.ts");
/* harmony import */ var _components_tabs_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tabs/settings/settings.component */ "./src/app/components/tabs/settings/settings.component.ts");
/* harmony import */ var _components_auth_unauthenticated_unauthenticated_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/auth/unauthenticated/unauthenticated.component */ "./src/app/components/auth/unauthenticated/unauthenticated.component.ts");







var appRoutes = [
    {
        path: '',
        component: _components_auth_unauthenticated_unauthenticated_component__WEBPACK_IMPORTED_MODULE_6__["UnauthenticatedComponent"],
        canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["PreventAuthGuardService"]],
        data: {
            state: 'landing'
        }
    },
    {
        path: 'app/home',
        component: _components_tabs_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]],
        data: {
            state: 'appHome'
        }
    },
    {
        path: 'app/config',
        component: _components_tabs_config_config_component__WEBPACK_IMPORTED_MODULE_1__["ConfigComponent"],
        canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]],
        data: {
            state: 'appConfig'
        }
    },
    {
        path: 'app/settings',
        component: _components_tabs_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"],
        canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]],
        data: {
            state: 'appSettings'
        }
    },
    {
        path: 'app/config/create',
        component: _components_shared_new_config_page_new_config_page_component__WEBPACK_IMPORTED_MODULE_4__["NewConfigPageComponent"],
        canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]],
        data: {
            state: 'appConfigCreate'
        }
    },
    {
        path: 'app/config/edit',
        component: _components_shared_edit_config_page_edit_config_page_component__WEBPACK_IMPORTED_MODULE_2__["EditConfigPageComponent"],
        canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]],
        data: {
            state: 'appConfigEdit'
        }
    },
    {
        path: '**',
        redirectTo: ''
    }
];


/***/ }),

/***/ "./src/app/classes/config-builder.ts":
/*!*******************************************!*\
  !*** ./src/app/classes/config-builder.ts ***!
  \*******************************************/
/*! exports provided: ConfigBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigBuilder", function() { return ConfigBuilder; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

var ConfigBuilder = /** @class */ (function () {
    function ConfigBuilder() {
    }
    ConfigBuilder.generateNewConfig = function (configName, firstGroupName, sourceFolder, destinationFolder, firstGroupRule) {
        var configHolder = {
            name: configName,
            groups: [{
                    id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
                    name: firstGroupName,
                    source: sourceFolder,
                    destination: destinationFolder,
                    rules: [firstGroupRule]
                }],
            id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])()
        };
        return configHolder;
    };
    ConfigBuilder.addGroup = function (config, newGroupName, newGroupDestination, newGroupSource, firstGroupRule) {
        var localConfig = config;
        localConfig.groups.push({
            id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
            name: newGroupName,
            source: newGroupSource,
            destination: newGroupDestination,
            rules: [firstGroupRule]
        });
        return localConfig;
    };
    ConfigBuilder.verifyConfig = function (config) {
        var valid = true;
        // Check if config has name and groups
        if (!config.name || !config.groups || (config.name.length <= 0)) {
            valid = false;
        }
        config.groups.forEach(function (group) {
            if (!group.destination.folderID || !group.id ||
                !group.source.folderID ||
                !group.name || !group.rules ||
                (group.name.length <= 0)) {
                valid = false;
            }
            group.rules.forEach(function (rule) {
                if (!rule.classifier || !rule.constraint ||
                    !rule.data || !rule.id || !rule.name ||
                    (rule.name.length <= 0)) {
                    valid = false;
                }
            });
        });
        return valid;
    };
    return ConfigBuilder;
}());



/***/ }),

/***/ "./src/app/components/auth/unauthenticated/unauthenticated.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/auth/unauthenticated/unauthenticated.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div parallax>\n  <div class=\"parallax-overlay\">\n    <h1>G-Drive Sorter</h1>\n    <h3>An organized Google Drive™ has never been easier</h3>\n    <h5>Work in progress, the app currently has minimal functionality please wait until full release.</h5>\n    <button (click)=\"login()\" mat-raised-button color=\"accent\">Get Organized</button>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"usage-points row\">\n    <div class=\"col-4 col-12-sm\">\n      <h1 class=\"center\"><i class=\"teal-text large material-icons\">view_list</i></h1>\n      <h2 class=\"center\"><b>Effectively Sort Files</b></h2>\n      <p>Sorting your drive only requires a quick visit to this website. And we do the rest of the work for you!</p>\n    </div>\n    <div class=\"col-4 col-12-sm\">\n      <h1 class=\"center\"><i class=\"teal-text large material-icons\">accessibility</i></h1>\n      <h2 class=\"center\"><b>Simplistic Use</b></h2>\n      <p>Preset configurations and a simplistic user interface makes the G-Drive sorter suitable for all Google Drive users.</p>\n    </div>\n    <div class=\"col-4 col-12-sm\">\n      <h1 class=\"center\"><i class=\"teal-text large material-icons\">art_track</i></h1>\n      <h2 class=\"center\"><b>Fully Customizable</b></h2>\n      <p>Fully customizable configurations that sorts all Google Drive files based on type, creation date, name, current owner, and much more.</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/auth/unauthenticated/unauthenticated.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/auth/unauthenticated/unauthenticated.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*[parallax] {\n  width: 100%;\n  height: 400px;\n  background-image: url('messy_files.jpg');\n  background-size: 100%; }\n\n.usage-points h1 i {\n  font-size: 80px; }\n\n.container {\n  width: 96%;\n  max-width: unset; }\n\n.usage-points p {\n  font-size: 1.5rem; }\n\n.parallax-overlay {\n  text-align: center;\n  padding-top: 90px; }\n\n.parallax-overlay > * {\n  color: white; }\n\n@media all and (max-width: 650px) {\n  *[parallax] {\n    background-size: cover; } }\n"

/***/ }),

/***/ "./src/app/components/auth/unauthenticated/unauthenticated.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/auth/unauthenticated/unauthenticated.component.ts ***!
  \******************************************************************************/
/*! exports provided: UnauthenticatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthenticatedComponent", function() { return UnauthenticatedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_google_google_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/google/google.service */ "./src/app/services/google/google.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Declare the component to be shown when the user isn't authenticated.
 *
 * @export
 * @class UnauthenticatedComponent
 */
var UnauthenticatedComponent = /** @class */ (function () {
    /**
     * Creates an instance of UnauthenticatedComponent.
     * @param {GoogleService} google Declare the Google Service as google.
     * @memberof UnauthenticatedComponent
     */
    function UnauthenticatedComponent(google) {
        this.google = google;
    }
    /**
     * Method to log the user in.
     *
     * @memberof UnauthenticatedComponent
     */
    UnauthenticatedComponent.prototype.login = function () {
        this.google.signIn();
    };
    UnauthenticatedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-unauthenticated',
            template: __webpack_require__(/*! ./unauthenticated.component.html */ "./src/app/components/auth/unauthenticated/unauthenticated.component.html"),
            styles: [__webpack_require__(/*! ./unauthenticated.component.scss */ "./src/app/components/auth/unauthenticated/unauthenticated.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_google_google_service__WEBPACK_IMPORTED_MODULE_1__["GoogleService"]])
    ], UnauthenticatedComponent);
    return UnauthenticatedComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/config-modal/config-modal.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/shared/config-modal/config-modal.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class.container]=\"isPage\">\n  <h3 mat-dialog-title *ngIf=\"!isPage\">Create New Config</h3>\n  <h3 *ngIf=\"isPage\">Create New Config</h3>\n  <div mat-dialog-content>\n    <form [formGroup]=\"newConfig\">\n      <mat-accordion>\n        <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Config Name\n            </mat-panel-title>\n            <mat-panel-description *ngIf=\"!isPage\">\n              The name of the new configuration.\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent>\n            <mat-form-field class=\"full-width\" [floatLabel]=\"newConfig.value.floatLabel\">\n              <mat-label>Name</mat-label>\n              <input matInput formControlName=\"newConfigNameControl\" required>\n              <mat-error>Please a config name!</mat-error>\n            </mat-form-field>\n            <mat-action-row>\n              <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n            </mat-action-row>\n          </ng-template>\n        </mat-expansion-panel>\n        <mat-expansion-panel [expanded]=\"step === 1\" [disabled]=\"!checkValidation(0)\" (opened)=\"setStep(1)\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Group Name\n            </mat-panel-title>\n            <mat-panel-description *ngIf=\"!isPage\">\n              The new configuration's inital group name.\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent>\n            <mat-form-field class=\"full-width\" [floatLabel]=\"newConfig.value.floatLabel\">\n              <mat-label>Group Name</mat-label>\n              <input matInput formControlName=\"newGroupNameControl\" required>\n              <mat-error>Please enter a inital group name!</mat-error>\n            </mat-form-field>\n            <mat-action-row>\n              <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n              <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n            </mat-action-row>\n          </ng-template>\n        </mat-expansion-panel>\n        <mat-expansion-panel [disabled]=\"!checkValidation(1)\" [expanded]=\"step === 2\" (opened)=\"setStep(2)\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Group Locations\n            </mat-panel-title>\n            <mat-panel-description *ngIf=\"!isPage\">\n              Where all files matching group rules will go.\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent>\n              <div class=\"full-width\">\n                <mat-form-field style=\"width: 70%;\">\n                  <input matInput type=\"text\" placeholder=\"From\" [value]=\"source.name\" disabled required/>\n                  <button mat-button matSuffix mat-icon-button aria-label=\"Pick From Folder\" [disabled]=\"folderButtonSourceDisabled\" (click)=\"openFolderPicker('source')\">\n                    <mat-icon>folder</mat-icon>\n                  </button>\n                </mat-form-field> \n                <mat-slide-toggle (change)=\"rootToggleChange($event, 'source')\">My Drive</mat-slide-toggle>\n              </div>\n              <div class=\"full-width\">\n                <mat-form-field style=\"width: 70%;\">\n                  <input matInput type=\"text\" placeholder=\"To\" [value]=\"destination.name\" disabled required/>\n                  <button mat-button matSuffix mat-icon-button aria-label=\"Pick To Folder\" [disabled]=\"folderButtonDestinationDisabled\" (click)=\"openFolderPicker('destination')\">\n                    <mat-icon>folder</mat-icon>\n                  </button>\n                </mat-form-field> \n                <mat-slide-toggle (change)=\"rootToggleChange($event, 'destination')\">My Drive</mat-slide-toggle>\n              </div>\n          </ng-template>\n          <mat-action-row>\n            <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n            <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n          </mat-action-row>\n        </mat-expansion-panel>\n        <mat-expansion-panel [class.overflow-limit]=\"!isPage\" [disabled]=\"!checkValidation(2)\" [expanded]=\"step === 3\" (opened)=\"setStep(3)\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              First Rule\n            </mat-panel-title>\n            <mat-panel-description *ngIf=\"!isPage\">\n              The new configuration's inital group's first rule.\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent>\n            <app-new-rule-stepper (valueChange)=\"stepperFinished($event)\"></app-new-rule-stepper>\n            <mat-action-row>\n              <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n            </mat-action-row>\n          </ng-template>\n        </mat-expansion-panel>\n      </mat-accordion>\n    </form>\n    <br>\n  <div mat-dialog-actions>\n    <button mat-button (click)=\"create()\" [disabled]=\"!finished\">Create</button>\n    <button mat-button (click)=\"close()\">Cancel</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/shared/config-modal/config-modal.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/shared/config-modal/config-modal.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overflow-limit {\n  max-height: 40vh;\n  overflow-y: auto; }\n\n.full-width {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/components/shared/config-modal/config-modal.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/shared/config-modal/config-modal.component.ts ***!
  \**************************************************************************/
/*! exports provided: ConfigModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigModalComponent", function() { return ConfigModalComponent; });
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/firebase/database.service */ "./src/app/services/firebase/database.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_google_google_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/google/google.service */ "./src/app/services/google/google.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ConfigModalComponent = /** @class */ (function () {
    function ConfigModalComponent(zone, router, formBuilder, google, database, firebase, firebaseAuth) {
        this.zone = zone;
        this.router = router;
        this.formBuilder = formBuilder;
        this.google = google;
        this.database = database;
        this.firebase = firebase;
        this.firebaseAuth = firebaseAuth;
        this._closeCommand = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.isPage = false;
        this.step = -1;
        this.finished = false;
        this.source = {
            folderID: undefined,
            name: null
        };
        this.destination = {
            folderID: undefined,
            name: null
        };
        this.folderButtonSourceDisabled = false;
        this.closeCommand = this._closeCommand.asObservable();
        this.folderButtonDestinationDisabled = false;
    }
    ConfigModalComponent.prototype.ngOnInit = function () {
        this.newConfig = this.formBuilder.group({
            floatLabel: 'auto',
            newConfigNameControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            newGroupNameControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    ConfigModalComponent.prototype.checkAllValidation = function () {
        var anyInvalid = false;
        for (var i = 0; i < 2; i++) {
            if (!this.checkValidation(i)) {
                anyInvalid = true;
            }
        }
        return !anyInvalid;
    };
    ConfigModalComponent.prototype.checkValidation = function (stepNumber) {
        switch (stepNumber) {
            case 0:
                return this.newConfig.get('newConfigNameControl').valid;
            case 1:
                return this.newConfig.get('newGroupNameControl').valid;
            case 2:
                if (this.source.folderID === undefined ||
                    this.destination.folderID === undefined) {
                    return false;
                }
                else {
                    return true;
                }
            case 3:
                return ((this.rule === undefined) ? false : true);
            default:
                return false;
        }
    };
    ConfigModalComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    ConfigModalComponent.prototype.openFolderPicker = function (folderType) {
        var _this = this;
        var folderPickedListener = this.google.folderPicked$.subscribe(function (pickedFolder) {
            if (folderType === 'destination') {
                _this.destination = {
                    name: pickedFolder.name,
                    folderID: pickedFolder.id
                };
            }
            else {
                _this.source = {
                    name: pickedFolder.name,
                    folderID: pickedFolder.id
                };
            }
            folderPickedListener.unsubscribe();
        }, function (err) {
            folderPickedListener.unsubscribe();
        });
        this.google.openFilePicker();
    };
    ConfigModalComponent.prototype.nextStep = function () {
        if (this.checkValidation(this.step)) {
            this.step++;
        }
    };
    ConfigModalComponent.prototype.prevStep = function () {
        this.step--;
    };
    ConfigModalComponent.prototype.stepperFinished = function (rule) {
        this.rule = rule;
        this.setStep(-1);
        this.finished = this.checkAllValidation();
    };
    ConfigModalComponent.prototype.rootToggleChange = function (event, folderType) {
        if (event.checked) {
            if (folderType === 'source') {
                this.folderButtonSourceDisabled = true;
            }
            else {
                this.folderButtonDestinationDisabled = true;
            }
            this[folderType].folderID = 'root';
            this[folderType].name = 'My Drive';
        }
        else {
            if (folderType === 'source') {
                this.folderButtonSourceDisabled = false;
            }
            else {
                this.folderButtonDestinationDisabled = false;
            }
            this[folderType].folderID = undefined;
            this[folderType].name = '';
        }
    };
    ConfigModalComponent.prototype.create = function () {
        if (this.checkAllValidation()) {
            this.database.createConfig(this.newConfig.get('newConfigNameControl').value, this.newConfig.get('newGroupNameControl').value, this.source, this.destination, this.rule);
            this._closeCommand.next(true);
        }
        else {
            this.finished = false;
        }
    };
    ConfigModalComponent.prototype.close = function () {
        this._closeCommand.next(true);
    };
    ConfigModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-config-modal',
            template: __webpack_require__(/*! ./config-modal.component.html */ "./src/app/components/shared/config-modal/config-modal.component.html"),
            styles: [__webpack_require__(/*! ./config-modal.component.scss */ "./src/app/components/shared/config-modal/config-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_google_google_service__WEBPACK_IMPORTED_MODULE_5__["GoogleService"],
            _services_firebase_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__["AngularFireAuth"]])
    ], ConfigModalComponent);
    return ConfigModalComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/edit-config-modal/edit-config-modal.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/shared/edit-config-modal/edit-config-modal.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class.container]=\"isPage\" *ngIf=\"configLoaded | async; else loadingConfig\">\n  <h3 mat-dialog-title *ngIf=\"!isPage\">Editing Config - {{ config.name | unNamed }}</h3>\n  <h3 *ngIf=\"isPage\">Editing Config - {{ config.name | unNamed }}</h3>\n  <div mat-dialog-content>\n    <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Config Name\" [(ngModel)]=\"config.name\" required>\n    </mat-form-field>\n    <h4>\n      Group's\n      <button mat-icon-button class=\"right\" color=\"primary\" matTooltip=\"Add Group\" (click)=\"addGroup()\">\n        <mat-icon aria-label=\"Add Group\">add</mat-icon>\n      </button>\n    </h4>\n    <div style=\"padding: 10px 16px;\" class=\"overflow-limit\">\n        <mat-expansion-panel  *ngFor=\"let group of config.groups\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              {{ group.name | unNamed }}\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent>\n            <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"Group Name\" [(ngModel)]=\"group.name\" required>\n            </mat-form-field>\n            <div class=\"full-width\">\n              <mat-form-field style=\"width: 70%;\">\n                <input matInput type=\"text\" [value]=\"group.source.name\" placeholder=\"From\" disabled required/>\n                <button mat-button matSuffix mat-icon-button aria-label=\"Pick Source Folder\" [disabled]=\"group.source.folderID === 'root'\" (click)=\"openFolderPicker(group.id, 'source')\">\n                  <mat-icon>folder</mat-icon>\n                </button>\n              </mat-form-field>\n              <mat-slide-toggle [checked]=\"group.source.folderID === 'root'\" (change)=\"rootToggleChange($event, 'source', group.id)\">My Drive</mat-slide-toggle>\n            </div>\n            <div class=\"full-width\">\n              <mat-form-field style=\"width: 70%;\">\n                <input matInput type=\"text\" [value]=\"group.destination.name\" placeholder=\"To\" disabled required/>\n                <button mat-button matSuffix mat-icon-button aria-label=\"Pick Destination Folder\" [disabled]=\"group.destination.folderID === 'root'\" (click)=\"openFolderPicker(group.id, 'destination')\">\n                  <mat-icon>folder</mat-icon>\n                </button>\n              </mat-form-field>\n              <mat-slide-toggle [checked]=\"group.destination.folderID === 'root'\" (change)=\"rootToggleChange($event, 'destination', group.id)\">My Drive</mat-slide-toggle> \n            </div>\n            <h5>\n              Rule's\n              <button mat-icon-button class=\"right\" color=\"accent\" matTooltip=\"Add Rule\" (click)=\"addRule(group.id)\">\n                <mat-icon aria-label=\"Add Rule\">add</mat-icon>\n              </button>\n            </h5>\n            <mat-expansion-panel [expanded]=\"editingRuleID === rule.id\" (opened)=\"editingRuleID = rule.id\" *ngFor=\"let rule of group.rules\">\n              <mat-expansion-panel-header>\n                <mat-panel-title>\n                  {{ rule.name | unNamed }}\n                </mat-panel-title>\n              </mat-expansion-panel-header>\n              <ng-template matExpansionPanelContent>\n                <app-new-rule-stepper (valueChange)=\"ruleChanged($event, rule.id, group.id)\" [reset]=\"true\" [inputRule]=\"rule\"></app-new-rule-stepper>\n                <mat-action-row>\n                  <button mat-button color=\"warn\" (click)=\"removeRule(group.id, rule.id)\" [disabled]=\"group.rules.length < 2\">Remove Rule</button>\n                </mat-action-row>\n              </ng-template>\n            </mat-expansion-panel>\n            <mat-action-row>\n              <button mat-button color=\"warn\" (click)=\"removeGroup(group.id)\" [disabled]=\"config.groups.length < 2\">Remove Group</button>\n            </mat-action-row>\n          </ng-template>\n        </mat-expansion-panel>            \n    </div>\n  </div>\n  <div mat-dialog-actions>\n    <button mat-button [disabled]=\"!valid\" (click)=\"done()\">Done</button>\n    <button mat-button (click)=\"close()\">Cancel</button>\n  </div>\n</div>\n<ng-template #loadingConfig>\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</ng-template>"

/***/ }),

/***/ "./src/app/components/shared/edit-config-modal/edit-config-modal.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/shared/edit-config-modal/edit-config-modal.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overflow-limit {\n  max-height: 40vh;\n  overflow-y: auto; }\n\n.full-width {\n  width: 100%; }\n\n.right {\n  float: right; }\n"

/***/ }),

/***/ "./src/app/components/shared/edit-config-modal/edit-config-modal.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/shared/edit-config-modal/edit-config-modal.component.ts ***!
  \************************************************************************************/
/*! exports provided: EditConfigModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditConfigModalComponent", function() { return EditConfigModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_config_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../classes/config-builder */ "./src/app/classes/config-builder.ts");
/* harmony import */ var _services_firebase_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/firebase/database.service */ "./src/app/services/firebase/database.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_google_google_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/google/google.service */ "./src/app/services/google/google.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EditConfigModalComponent = /** @class */ (function () {
    function EditConfigModalComponent(zone, router, google, snackBar, formBuilder, database) {
        this.zone = zone;
        this.router = router;
        this.google = google;
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.database = database;
        this._closeCommand = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.valid = true;
        this.closeCommand = this._closeCommand.asObservable();
    }
    EditConfigModalComponent.prototype.getGroupIndex = function (groupID) {
        return this.config.groups.findIndex(function (group) {
            return group.id === groupID;
        });
    };
    EditConfigModalComponent.prototype.getRuleIndex = function (groupID, ruleID) {
        return this.config.groups[this.getGroupIndex(groupID)]
            .rules.findIndex(function (rule) {
            return rule.id === ruleID;
        });
    };
    EditConfigModalComponent.prototype.verifyValidation = function () {
        return _classes_config_builder__WEBPACK_IMPORTED_MODULE_1__["ConfigBuilder"].verifyConfig(this.config);
    };
    EditConfigModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.database.editingConfig) {
            this.database.getConfig(this.database.editingConfig, function (data) {
                _this.config = data;
                _this.configLoaded = Promise.resolve(true);
            });
        }
    };
    EditConfigModalComponent.prototype.openFolderPicker = function (groupID, folderType) {
        var _this = this;
        var folderPickedListener = this.google.folderPicked$.subscribe(function (folder) {
            if (folderType === 'source') {
                _this.config.groups[_this.getGroupIndex(groupID)].source = {
                    name: folder.name,
                    folderID: folder.id
                };
            }
            else {
                _this.config.groups[_this.getGroupIndex(groupID)].destination = {
                    name: folder.name,
                    folderID: folder.id
                };
            }
            folderPickedListener.unsubscribe();
        }, function (cancelled) {
            if (cancelled) {
                folderPickedListener.unsubscribe();
            }
        });
        this.google.openFilePicker();
    };
    EditConfigModalComponent.prototype.addGroup = function () {
        var newConfigUUID = Object(uuid__WEBPACK_IMPORTED_MODULE_8__["v4"])();
        this.config.groups.push({
            id: newConfigUUID,
            destination: {
                name: ''
            },
            source: {
                name: ''
            },
            name: '',
            rules: []
        });
        this.addRule(newConfigUUID);
        this.valid = false;
    };
    EditConfigModalComponent.prototype.addRule = function (groupID) {
        var newRuleUUID = Object(uuid__WEBPACK_IMPORTED_MODULE_8__["v4"])();
        this.config.groups[this.getGroupIndex(groupID)].rules
            .push({
            id: newRuleUUID,
            name: ''
        });
        this.editingRuleID = newRuleUUID;
        this.valid = false;
    };
    EditConfigModalComponent.prototype.ruleChanged = function (newRule, ruleID, groupID) {
        this.config.groups[this.getGroupIndex(groupID)]
            .rules[this.getRuleIndex(groupID, ruleID)] = newRule;
        this.editingRuleID = '';
        this.valid = this.verifyValidation();
    };
    EditConfigModalComponent.prototype.done = function () {
        if (this.verifyValidation()) {
            this.database.updateConfig(this.config);
            this.close();
        }
        else {
            this.snackBar.open('Complete your edits!', 'OK', {
                duration: 5000
            });
        }
    };
    EditConfigModalComponent.prototype.removeGroup = function (groupID) {
        this.config.groups.splice(this.getGroupIndex(groupID), 1);
    };
    EditConfigModalComponent.prototype.removeRule = function (groupID, ruleID) {
        this.config.groups[this.getGroupIndex(groupID)]
            .rules.splice(this.getRuleIndex(groupID, ruleID), 1);
    };
    EditConfigModalComponent.prototype.rootToggleChange = function (event, folderType, groupID) {
        var groupIndex = this.getGroupIndex(groupID);
        if (event.checked) {
            this.config.groups[groupIndex][folderType] = {
                folderID: 'root',
                name: 'My Drive'
            };
        }
        else {
            this.config.groups[groupIndex][folderType] = {
                folderID: undefined,
                name: null
            };
        }
    };
    EditConfigModalComponent.prototype.close = function () {
        this._closeCommand.next(true);
    };
    EditConfigModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-config-modal',
            template: __webpack_require__(/*! ./edit-config-modal.component.html */ "./src/app/components/shared/edit-config-modal/edit-config-modal.component.html"),
            styles: [__webpack_require__(/*! ./edit-config-modal.component.scss */ "./src/app/components/shared/edit-config-modal/edit-config-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_google_google_service__WEBPACK_IMPORTED_MODULE_4__["GoogleService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_firebase_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]])
    ], EditConfigModalComponent);
    return EditConfigModalComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/edit-config-page/edit-config-page.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/shared/edit-config-page/edit-config-page.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EditConfigPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditConfigPageComponent", function() { return EditConfigPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _edit_config_modal_edit_config_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-config-modal/edit-config-modal.component */ "./src/app/components/shared/edit-config-modal/edit-config-modal.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var EditConfigPageComponent = /** @class */ (function (_super) {
    __extends(EditConfigPageComponent, _super);
    function EditConfigPageComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isPage = true;
        return _this;
    }
    EditConfigPageComponent.prototype.close = function () {
        var _this = this;
        this.zone.run(function () {
            _this.router.navigateByUrl('/app/config');
        });
    };
    EditConfigPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-config-page',
            template: __webpack_require__(/*! ../edit-config-modal/edit-config-modal.component.html */ "./src/app/components/shared/edit-config-modal/edit-config-modal.component.html"),
            styles: [__webpack_require__(/*! ../edit-config-modal/edit-config-modal.component.scss */ "./src/app/components/shared/edit-config-modal/edit-config-modal.component.scss")]
        })
    ], EditConfigPageComponent);
    return EditConfigPageComponent;
}(_edit_config_modal_edit_config_modal_component__WEBPACK_IMPORTED_MODULE_1__["EditConfigModalComponent"]));



/***/ }),

/***/ "./src/app/components/shared/new-config-page/new-config-page.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/shared/new-config-page/new-config-page.component.ts ***!
  \********************************************************************************/
/*! exports provided: NewConfigPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewConfigPageComponent", function() { return NewConfigPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_modal_config_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config-modal/config-modal.component */ "./src/app/components/shared/config-modal/config-modal.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NewConfigPageComponent = /** @class */ (function (_super) {
    __extends(NewConfigPageComponent, _super);
    function NewConfigPageComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isPage = true;
        return _this;
    }
    NewConfigPageComponent.prototype.close = function () {
        var _this = this;
        this.zone.run(function () {
            _this.router.navigateByUrl('/app/config');
        });
    };
    NewConfigPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-rule-page',
            template: __webpack_require__(/*! ../config-modal/config-modal.component.html */ "./src/app/components/shared/config-modal/config-modal.component.html"),
            styles: [__webpack_require__(/*! ../config-modal/config-modal.component.scss */ "./src/app/components/shared/config-modal/config-modal.component.scss")]
        })
    ], NewConfigPageComponent);
    return NewConfigPageComponent;
}(_config_modal_config_modal_component__WEBPACK_IMPORTED_MODULE_1__["ConfigModalComponent"]));



/***/ }),

/***/ "./src/app/components/shared/new-rule-stepper/new-rule-stepper.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/shared/new-rule-stepper/new-rule-stepper.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-vertical-stepper (selectionChange)=\"stepChanged($event)\" linear #stepper>\n  <mat-step label=\"Name\" [stepControl]=\"nameFormGroup\">\n    <form [formGroup]=\"nameFormGroup\">\n      <mat-form-field>\n          <input matInput placeholder=\"Rule Name\" formControlName=\"ruleName\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button type=\"button\" matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step label=\"Trait\" [stepControl]=\"classifierFormGroup\">\n    <form [formGroup]=\"classifierFormGroup\">\n      <mat-form-field>\n        <mat-select placeholder=\"Trait\" formControlName=\"classifierControl\" [(value)]=\"classifierSelectOption\">\n          <mat-option *ngFor=\"let classifier of classifiers\" [value]=\"classifier.value\">\n            {{ classifier.label }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <div>\n        <button mat-button type=\"button\" matStepperNext>Next</button>\n        <button mat-button type=\"button\" matStepperPrevious>Back</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step label=\"Limitation\" [stepControl]=\"constraintFormGroup\">\n    <form [formGroup]=\"constraintFormGroup\">\n      <mat-form-field>\n        <mat-select placeholder=\"Limitation\" formControlName=\"constraintControl\" [(value)]=\"constraintSelectOption\">\n          <mat-option *ngFor=\"let constraint of constriants\" [value]=\"constraint.value\">\n            {{ constraint.label }}\n          </mat-option>\n          <mat-option [disabled]=\"startEndWithDisabled\" value=\"startWith\">\n            Start's With\n          </mat-option>\n          <mat-option [disabled]=\"startEndWithDisabled\" value=\"endWith\">\n            End's With\n          </mat-option>\n          <mat-option [disabled]=\"betweenConstraintDisabled\" value=\"between\">\n            Between\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <div>\n        <button mat-button type=\"button\" matStepperNext>Next</button>\n        <button mat-button type=\"button\" matStepperPrevious>Back</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step label=\"Input\" [stepControl]=\"inputFieldGroup\">\n    <form [formGroup]=\"inputFieldGroup\">\n      <mat-grid-list cols=\"2\" rowHeight=\"2:1\" gutterSize=\"4px\">\n        <mat-grid-tile colspan=\"2\" *ngIf=\"classifierSelectOption === 'title'\">\n          <mat-form-field>\n            <input matInput placeholder=\"Title Text\" formControlName=\"titleTextControl\" [required]=\"classifierSelectOption === 'title'\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile colspan=\"2\" *ngIf=\"classifierSelectOption === 'owner'\">\n          <mat-form-field>\n            <input matInput placeholder=\"Owner Name\" formControlName=\"ownerTextControl\" [required]=\"classifierSelectOption === 'owner'\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile colspan=\"2\" *ngIf=\"classifierSelectOption === 'type'\">\n          <mat-form-field>\n            <mat-select placeholder=\"Drive File Type\" formControlName=\"fileTypeControl\" [required]=\"classifierSelectOption === 'type'\">\n              <mat-option *ngFor=\"let fileType of driveFileTypes\" [value]=\"fileType.value\">\n                {{ fileType.label }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile colspan=\"2\" *ngIf=\"datePickerSingleNeeded() === 1\">\n          <mat-form-field>\n            <input matInput [matDatepicker]=\"datePicker\" placeholder=\"Date\" formControlName=\"dateControl\" [required]=\"datePickerSingleNeeded() === 1\">\n            <mat-datepicker-toggle matSuffix [for]=\"datePicker\"></mat-datepicker-toggle>\n            <mat-datepicker #datePicker startView=\"month\"></mat-datepicker>\n          </mat-form-field>          \n        </mat-grid-tile>\n        <div *ngIf=\"datePickerSingleNeeded() === 2\">\n          <mat-grid-tile colspan=\"2\">\n            <mat-form-field>\n              <input matInput [matDatepicker]=\"datePickerBetweenFirst\" formControlName=\"firstDateControl\" placeholder=\"Starting Date\" [required]=\"datePickerSingleNeeded() === 2\">\n              <mat-datepicker-toggle matSuffix [for]=\"datePickerBetweenFirst\"></mat-datepicker-toggle>\n              <mat-datepicker #datePickerBetweenFirst startView=\"month\"></mat-datepicker>\n            </mat-form-field>          \n          </mat-grid-tile>\n          <mat-grid-tile colspan=\"2\">\n            <mat-form-field>\n              <input matInput [matDatepicker]=\"datePickerBetweenSecond\" formControlName=\"secondDateControl\" placeholder=\"Ending Date\" [required]=\"datePickerSingleNeeded() === 2\">\n              <mat-datepicker-toggle matSuffix [for]=\"datePickerBetweenSecond\"></mat-datepicker-toggle>\n              <mat-datepicker #datePickerBetweenSecond startView=\"month\"></mat-datepicker>\n            </mat-form-field>          \n          </mat-grid-tile>\n        </div>\n        <mat-grid-tile colspan=\"2\" *ngIf=\"classifierSelectOption === 'location'\">\n          <mat-form-field style=\"width: 100%;\">\n            <input matInput type=\"text\" placeholder=\"Location\" formControlName=\"folderLocationControl\" disabled [required]=\"classifierSelectOption === 'location'\"/>\n            <button mat-button matSuffix mat-icon-button aria-label=\"Pick Folder\" (click)=\"openFolderPicker()\">\n              <mat-icon>folder</mat-icon>\n            </button>\n          </mat-form-field>  \n        </mat-grid-tile>\n      </mat-grid-list>\n      <div>\n        <button mat-button type=\"button\" (click)=\"finished()\">Done</button>\n        <button mat-button type=\"button\" matStepperPrevious>Back</button>\n      </div>\n    </form>\n  </mat-step>\n</mat-vertical-stepper>"

/***/ }),

/***/ "./src/app/components/shared/new-rule-stepper/new-rule-stepper.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/shared/new-rule-stepper/new-rule-stepper.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/new-rule-stepper/new-rule-stepper.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/shared/new-rule-stepper/new-rule-stepper.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DEFAULT_VALUE_ACCESSOR, NewRuleStepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_VALUE_ACCESSOR", function() { return DEFAULT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRuleStepperComponent", function() { return NewRuleStepperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_google_google_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/google/google.service */ "./src/app/services/google/google.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DEFAULT_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NewRuleStepperComponent; }),
    multi: true
};
var NewRuleStepperComponent = /** @class */ (function () {
    function NewRuleStepperComponent(formBuilder, zone, router, google) {
        this.formBuilder = formBuilder;
        this.zone = zone;
        this.router = router;
        this.google = google;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.betweenConstraintDisabled = false;
        this.startEndWithDisabled = false;
        this.constriants = [
            {
                label: 'Include\'s',
                value: 'include'
            },
            {
                label: 'Exclude\'s',
                value: 'exclude'
            }
        ];
        this.classifiers = [
            {
                label: 'Title',
                value: 'title',
                inputFieldControl: 'titleTextControl',
                hideBetween: true,
                hideStartEnd: false
            },
            {
                label: 'Type',
                value: 'type',
                inputFieldControl: 'fileTypeControl',
                hideBetween: true,
                hideStartEnd: true
            },
            {
                label: 'Location',
                value: 'location',
                inputFieldControl: 'folderLocationControl',
                hideBetween: true,
                hideStartEnd: true
            },
            {
                label: 'Owner',
                value: 'owner',
                inputFieldControl: 'ownerTextControl',
                hideBetween: true,
                hideStartEnd: false
            },
            {
                label: 'Creation Date',
                value: 'creationDate',
                inputFieldControl: 'dateControl',
                hideBetween: false,
                hideStartEnd: true
            },
            {
                label: 'Last Opened',
                value: 'lastOpened',
                inputFieldControl: 'dateControl',
                hideBetween: false,
                hideStartEnd: true
            },
            {
                label: 'Last Modified',
                value: 'lastModified',
                inputFieldControl: 'dateControl',
                hideBetween: false,
                hideStartEnd: true
            }
        ];
        this.driveFileTypes = [
            {
                label: 'Sound File',
                value: 'application/vnd.google-apps.audio'
            },
            {
                label: 'Document',
                value: 'application/vnd.google-apps.document'
            },
            {
                label: 'Drawing',
                value: 'application/vnd.google-apps.drawing'
            },
            {
                label: 'Drive File',
                value: 'application/vnd.google-apps.file'
            },
            {
                label: 'Drive Folder',
                value: 'application/vnd.google-apps.folder'
            },
            {
                label: 'Forms',
                value: 'application/vnd.google-apps.form'
            },
            {
                label: 'Fusion Tables',
                value: 'application/vnd.google-apps.fusiontable'
            },
            {
                label: 'My Maps',
                value: 'application/vnd.google-apps.map'
            },
            {
                label: 'Image',
                value: 'application/vnd.google-apps.photo'
            },
            {
                label: 'Slide\'s',
                value: 'application/vnd.google-apps.presentation'
            },
            {
                label: 'App\'s Script',
                value: 'application/vnd.google-apps.script'
            },
            {
                label: 'Site\'s',
                value: 'application/vnd.google-apps.site'
            },
            {
                label: 'Sheet\'s',
                value: 'application/vnd.google-apps.spreadsheet'
            },
            {
                label: 'Video',
                value: 'application/vnd.google-apps.video'
            },
        ];
    }
    NewRuleStepperComponent.prototype.valueArrayToObject = function (array) {
        var searchableObject = {};
        array.forEach(function (value) {
            searchableObject[value['value']] = value;
        });
        return searchableObject;
    };
    NewRuleStepperComponent.prototype.checkIfBetweenDisabled = function (classifierValue) {
        return this
            .valueArrayToObject(this.classifiers)[classifierValue]
            .hideBetween;
    };
    NewRuleStepperComponent.prototype.checkIfStartEndDisabled = function (classifierValue) {
        return this
            .valueArrayToObject(this.classifiers)[classifierValue]
            .hideStartEnd;
    };
    NewRuleStepperComponent.prototype.getFieldControl = function (classifierValue) {
        return this
            .valueArrayToObject(this.classifiers)[classifierValue]
            .inputFieldControl;
    };
    NewRuleStepperComponent.prototype.ngOnInit = function () {
        this.nameFormGroup = this.formBuilder.group({
            ruleName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.classifierFormGroup = this.formBuilder.group({
            classifierControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.constraintFormGroup = this.formBuilder.group({
            constraintControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.inputFieldGroup = this.formBuilder.group({
            folderLocationControl: [{
                    value: null,
                    disabled: true
                }],
            secondDateControl: null,
            firstDateControl: null,
            titleTextControl: null,
            ownerTextControl: null,
            fileTypeControl: null,
            dateControl: null
        });
        if (this.inputRule && this.inputRule.data) {
            this.nameFormGroup.get('ruleName').setValue(this.inputRule.name);
            this.classifierSelectOption = this.inputRule.classifier;
            this.classifierFormGroup.get('classifierControl').setValue(this.inputRule.classifier);
            this.constraintSelectOption = this.inputRule.constraint;
            this.constraintFormGroup.get('constraintControl').setValue(this.inputRule.constraint);
            switch (this.getFieldControl(this.classifierSelectOption)) {
                case 'titleTextControl':
                    this.inputFieldGroup.get('titleTextControl')
                        .setValue(this.inputRule.data.title);
                    break;
                case 'fileTypeControl':
                    this.inputFieldGroup.get('fileTypeControl')
                        .setValue(this.inputRule.data.fileType);
                    break;
                case 'folderLocationControl':
                    this.pickedFolder = this.inputRule.data.folder;
                    break;
                case 'ownerTextControl':
                    this.inputFieldGroup.get('ownerTextControl')
                        .setValue(this.inputRule.data.owner);
                    break;
                case 'dateControl':
                    if (this.constraintSelectOption === 'between') {
                        this.inputFieldGroup.get('firstDateControl')
                            .setValue(this.inputRule.data.firstDate);
                        this.inputFieldGroup.get('secondDateControl')
                            .setValue(this.inputRule.data.secondDate);
                    }
                    else {
                        this.inputFieldGroup.get('dateControl')
                            .setValue(this.inputRule.data.date);
                    }
                    break;
            }
        }
    };
    NewRuleStepperComponent.prototype.finished = function () {
        var data = {};
        var ruleUUID;
        if (this.inputRule) {
            ruleUUID = this.inputRule.id;
        }
        else {
            ruleUUID = Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])();
        }
        switch (this.getFieldControl(this.classifierSelectOption)) {
            case 'titleTextControl':
                data['title'] = this.inputFieldGroup.get('titleTextControl').value;
                break;
            case 'fileTypeControl':
                data['fileType'] = this.inputFieldGroup.get('fileTypeControl').value;
                break;
            case 'folderLocationControl':
                data['folder'] = this.pickedFolder;
                break;
            case 'ownerTextControl':
                data['owner'] = this.inputFieldGroup.get('ownerTextControl').value;
                break;
            case 'dateControl':
                if (this.constraintSelectOption === 'between') {
                    data['firstDate'] = this.inputFieldGroup.get('firstDateControl').value;
                    data['secondDate'] = this.inputFieldGroup.get('secondDateControl').value;
                }
                else {
                    data['date'] = this.inputFieldGroup.get('dateControl').value;
                }
                break;
        }
        var val = {
            id: ruleUUID,
            classifier: this.classifierFormGroup.get('classifierControl').value,
            constraint: this.constraintFormGroup.get('constraintControl').value,
            data: data,
            name: this.nameFormGroup.get('ruleName').value
        };
        this.value = val;
        this.valueChange.emit(this.value);
    };
    /*
      Datepicker Need Codes:
        0 - No picker needed
        1 - Single picker needed
        2 - Double picker needed
    */
    NewRuleStepperComponent.prototype.datePickerSingleNeeded = function () {
        var classifierVal = this.classifierSelectOption;
        var constraintVal = this.constraintSelectOption;
        if (classifierVal === 'creationDate' ||
            classifierVal === 'lastOpened' ||
            classifierVal === 'lastModified') {
            if (constraintVal !== 'between') {
                return 1;
            }
            else {
                return 2;
            }
        }
        return 0;
    };
    NewRuleStepperComponent.prototype.stepChanged = function (event) {
        var _this = this;
        if (event.previouslySelectedIndex === 1) {
            var classifierValue = this.classifierFormGroup.get('classifierControl').value;
            this.betweenConstraintDisabled = this.checkIfBetweenDisabled(classifierValue);
            this.startEndWithDisabled = this.checkIfStartEndDisabled(classifierValue);
            if (this.betweenConstraintDisabled) {
                this.constraintFormGroup.get('constraintControl').setValue('include');
            }
        }
        if (event.selectedIndex === 2) {
            var folderPickedSubscription_1 = this.google.folderPicked$.subscribe(function (folder) {
                _this.pickedFolder = folder.id;
                _this.inputFieldGroup.get('folderLocationControl').setValue(folder.name);
                folderPickedSubscription_1.unsubscribe();
            });
        }
    };
    NewRuleStepperComponent.prototype.openFolderPicker = function () {
        this.google.openFilePicker();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NewRuleStepperComponent.prototype, "inputRule", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], NewRuleStepperComponent.prototype, "reset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NewRuleStepperComponent.prototype, "valueChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepper'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatVerticalStepper"])
    ], NewRuleStepperComponent.prototype, "stepper", void 0);
    NewRuleStepperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-rule-stepper',
            template: __webpack_require__(/*! ./new-rule-stepper.component.html */ "./src/app/components/shared/new-rule-stepper/new-rule-stepper.component.html"),
            styles: [__webpack_require__(/*! ./new-rule-stepper.component.scss */ "./src/app/components/shared/new-rule-stepper/new-rule-stepper.component.scss")],
            providers: [DEFAULT_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_google_google_service__WEBPACK_IMPORTED_MODULE_2__["GoogleService"]])
    ], NewRuleStepperComponent);
    return NewRuleStepperComponent;
}());



/***/ }),

/***/ "./src/app/components/tabs/config/config-list/config-list.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/tabs/config/config-list/config-list.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <span style=\"font-size: 2rem;\">Configuration's</span>\n  <span class=\"right refresh-button\" matTooltip=\"Refresh Config's\" matTooltipPosition=\"left\">\n    <button mat-icon-button color=\"accent\" (click)=\"refreshConfigs()\">\n      <mat-icon aria-label=\"Refresh configurations\">refresh</mat-icon>\n    </button>\n  </span>\n</div>\n<div *ngIf=\"loading\">\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</div>\n<div [hidden]=\"noConfigs\">\n  <mat-table #table [dataSource]=\"dataSource\">\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef>Name</mat-header-cell>\n      <mat-cell *matCellDef=\"let config\">{{config.name}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"actions\">\n      <mat-header-cell class=\"right\" *matHeaderCellDef>Actions</mat-header-cell>\n      <mat-cell class=\"right\" *matCellDef=\"let config\">\n        <button mat-icon-button color=\"accent\" matTooltip=\"Edit Config\" (click)=\"editConfig(config.key)\">\n          <mat-icon aria-label=\"Edit Config\">edit</mat-icon>\n        </button>\n        <button mat-icon-button color=\"primary\" matTooltip=\"Set Active\" (click)=\"setActiveConfig(config.key)\" [disabled]=\"getActiveConfig(config.key)\">\n          <mat-icon aria-label=\"Make Config Active\">settings_power</mat-icon>\n        </button>\n        <button mat-icon-button color=\"warn\" matTooltip=\"Delete config\" (click)=\"deleteConfig(config.key)\">\n          <mat-icon aria-label=\"Delete Config\">delete_forever</mat-icon>\n        </button>\n      </mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"tableColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: tableColumns;\"></mat-row>\n  </mat-table>\n  \n  <mat-paginator #paginator\n    [pageSize]=\"10\"\n    [pageSizeOptions]=\"[5, 10, 20]\"\n    [showFirstLastButtons]=\"true\">\n  </mat-paginator>\n</div>\n<p *ngIf=\"noConfigs\">You have no configurations try creating one!</p>"

/***/ }),

/***/ "./src/app/components/tabs/config/config-list/config-list.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/tabs/config/config-list/config-list.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right {\n  float: right;\n  text-align: right;\n  justify-content: end; }\n\n.refresh-button {\n  -ms-grid-row-align: center;\n      align-self: center; }\n\n.header {\n  display: flex;\n  padding: 15px 0;\n  justify-content: space-between; }\n"

/***/ }),

/***/ "./src/app/components/tabs/config/config-list/config-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/tabs/config/config-list/config-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ConfigListComponent, ConfigDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigListComponent", function() { return ConfigListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigDataSource", function() { return ConfigDataSource; });
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/firebase/database.service */ "./src/app/services/firebase/database.service.ts");
/* harmony import */ var _shared_edit_config_modal_edit_config_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/edit-config-modal/edit-config-modal.component */ "./src/app/components/shared/edit-config-modal/edit-config-modal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ConfigListComponent = /** @class */ (function () {
    function ConfigListComponent(firebaseAuth, firebase, database, dialog, router, zone) {
        this.firebaseAuth = firebaseAuth;
        this.firebase = firebase;
        this.database = database;
        this.dialog = dialog;
        this.router = router;
        this.zone = zone;
        this.oldPageSize = 10;
        this.loading = true;
        this.noConfigs = true;
        this.tableColumns = ['name', 'actions'];
    }
    ConfigListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.firebaseAuth.auth.currentUser) {
            this.userID = this.firebaseAuth.auth.currentUser.uid;
            this.configCollection = this.firebase
                .doc("users/" + this.userID)
                .collection('configs');
            this.dataSource = new ConfigDataSource(this.configCollection, this.paginator);
            this.database.numberConfigs(function (numConfigs) {
                if (numConfigs === 0) {
                    _this.noConfigs = true;
                }
                else {
                    _this.noConfigs = false;
                }
            });
        }
    };
    ConfigListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.firebaseAuth.auth.currentUser) {
            // Listen for page changes
            this.paginatorSubscription = this.paginator.page.subscribe(function () {
                if (_this.oldPageSize == _this.paginator.pageSize) {
                    _this.dataSource.loadConfigs(_this.paginator.pageIndex, _this.paginator.pageSize);
                }
                else {
                    _this.dataSource.loadConfigs(0, _this.paginator.pageSize);
                    _this.oldPageSize = _this.paginator.pageSize;
                    _this.paginator.pageIndex = 0;
                }
            });
            // Load the configurations
            this.dataSource.loadConfigs();
            // Pass the number of configs to the paginator
            this.database.numberConfigs(function (numConfigs) {
                _this.paginator.length = numConfigs;
            });
            // Listen for config changes
            this.configChangeSubscription =
                this.database.configSubject.subscribe(function (created) {
                    _this.refreshConfigs();
                });
            // Retrive the active config
            this.database.getActiveConfig(function (activeConfig) {
                _this.activeConfig = activeConfig;
            });
            // Listen for active config changes
            this.activeConfigChangeSubscription =
                this.database.activeConfigChanged.subscribe(function (newConfigID) {
                    _this.activeConfig = newConfigID;
                }, function (err) { return console.error; });
            setTimeout(function (_) {
                // Listen for loading state changes
                _this.loadingSubscription = _this.dataSource
                    .loading$.subscribe(function (loading) {
                    _this.loading = loading;
                });
            });
        }
    };
    ConfigListComponent.prototype.getDialogWidth = function () {
        var width = document.body.clientWidth;
        if (width >= 1280) {
            return (width / 2);
        }
        else if (width >= 640) {
            return (width / 1.5);
        }
        else {
            return 0;
        }
    };
    ConfigListComponent.prototype.refreshConfigs = function () {
        var _this = this;
        this.dataSource.loadConfigs();
        this.database.numberConfigs(function (numConfigs) {
            if (numConfigs === 0) {
                _this.noConfigs = true;
            }
            else {
                _this.noConfigs = false;
            }
        });
    };
    ConfigListComponent.prototype.editConfig = function (configID) {
        var _this = this;
        this.database.editingConfig = configID;
        var dialogWidth = this.getDialogWidth();
        if (dialogWidth) {
            var dialogInstance_1 = this.dialog.open(_shared_edit_config_modal_edit_config_modal_component__WEBPACK_IMPORTED_MODULE_5__["EditConfigModalComponent"], {
                width: dialogWidth + "px",
                maxHeight: document.body.clientHeight * .9 + "px"
            });
            var componentInstance = dialogInstance_1.componentInstance;
            var closeSubscription_1 = componentInstance.closeCommand.subscribe(function (close) {
                dialogInstance_1.close();
                closeSubscription_1.unsubscribe();
            });
        }
        else {
            this.zone.run(function () {
                _this.router.navigate(['/app/config/edit']);
            });
        }
    };
    ConfigListComponent.prototype.deleteConfig = function (configKey) {
        if (configKey === this.activeConfig) {
            this.setActiveConfig('');
        }
        this.database.deleteConfig(configKey);
    };
    ConfigListComponent.prototype.setActiveConfig = function (configKey) {
        this.database.setActiveConfig(configKey);
    };
    ConfigListComponent.prototype.getActiveConfig = function (configKey) {
        return (this.activeConfig === configKey) ? true : false;
    };
    ConfigListComponent.prototype.ngOnDestroy = function () {
        this.loadingSubscription.unsubscribe();
        this.paginatorSubscription.unsubscribe();
        this.configChangeSubscription.unsubscribe();
        this.activeConfigChangeSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])
    ], ConfigListComponent.prototype, "paginator", void 0);
    ConfigListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-config-list',
            template: __webpack_require__(/*! ./config-list.component.html */ "./src/app/components/tabs/config/config-list/config-list.component.html"),
            styles: [__webpack_require__(/*! ./config-list.component.scss */ "./src/app/components/tabs/config/config-list/config-list.component.scss")]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__["AngularFireAuth"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _services_firebase_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]])
    ], ConfigListComponent);
    return ConfigListComponent;
}());

var ConfigDataSource = /** @class */ (function () {
    function ConfigDataSource(configCollection, paginator) {
        this.configCollection = configCollection;
        this.paginator = paginator;
        this.configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this.loading$ = this.loadingSubject.asObservable();
    }
    ConfigDataSource.prototype.calculateStart = function (page, pageSize) {
        return (page ? page * pageSize : 0);
    };
    ConfigDataSource.prototype.connect = function () {
        return this.configSubject.asObservable();
    };
    ConfigDataSource.prototype.disconnect = function () {
        this.configSubject.complete();
        this.loadingSubject.complete();
    };
    ConfigDataSource.prototype.loadConfigs = function (page, pageSize) {
        var _this = this;
        if (page === void 0) { page = 0; }
        if (pageSize === void 0) { pageSize = 10; }
        this.loadingSubject.next(true);
        this
            .configCollection
            .ref
            .orderBy('name')
            .startAt(this.calculateStart(page, pageSize))
            .limit(pageSize)
            .get()
            .then(function (snapshot) {
            var configs = snapshot.docs;
            var data = [];
            for (var config in configs) {
                var name_1 = configs[config].data()['name'];
                data.push({
                    name: name_1,
                    key: configs[config].id
                });
            }
            _this
                .configSubject
                .next(data);
            _this.loadingSubject.next(false);
        }, function (err) { return console.error; });
    };
    return ConfigDataSource;
}());



/***/ }),

/***/ "./src/app/components/tabs/config/config.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/tabs/config/config.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-config-list></app-config-list>\n</div>"

/***/ }),

/***/ "./src/app/components/tabs/config/config.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/components/tabs/config/config.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tabs/config/config.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/tabs/config/config.component.ts ***!
  \************************************************************/
/*! exports provided: ConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigComponent", function() { return ConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_config_modal_config_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/config-modal/config-modal.component */ "./src/app/components/shared/config-modal/config-modal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Declare component to be shown when the config tab is selected.
 *
 * @export
 * @class ConfigComponent
 * @implements {OnInit}
 */
var ConfigComponent = /** @class */ (function () {
    /**
     * Creates an instance of ConfigComponent.
     * @memberof ConfigComponent
     */
    function ConfigComponent(appComponent, dialog, router, zone) {
        this.appComponent = appComponent;
        this.dialog = dialog;
        this.router = router;
        this.zone = zone;
        this.initalized = false;
    }
    ConfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.openConfigModalListener =
            this.appComponent.openConfigModal$.subscribe(function (open) {
                if (open === true) {
                    _this.openNewConfigDialog();
                }
            });
    };
    ConfigComponent.prototype.ngAfterViewInit = function () {
        this.initalized = true;
    };
    ConfigComponent.prototype.ngOnDestroy = function () {
        this.openConfigModalListener.unsubscribe();
    };
    ConfigComponent.prototype.getDialogWidth = function () {
        var width = document.body.clientWidth;
        if (width >= 1280) {
            return (width / 2);
        }
        else if (width >= 640) {
            return (width / 1.5);
        }
        else {
            return 0;
        }
    };
    ConfigComponent.prototype.openNewConfigDialog = function () {
        var _this = this;
        var dialogWidth = this.getDialogWidth();
        if (dialogWidth) {
            var dialogInstance_1 = this.dialog.open(_shared_config_modal_config_modal_component__WEBPACK_IMPORTED_MODULE_1__["ConfigModalComponent"], {
                width: dialogWidth + "px",
                maxHeight: document.body.clientHeight * .9 + "px"
            });
            var componentInstance = dialogInstance_1.componentInstance;
            var dialogSubscription_1 = componentInstance
                .closeCommand
                .subscribe(function (close) {
                dialogInstance_1.close();
                dialogSubscription_1.unsubscribe();
            });
        }
        else {
            this.zone.run(function () {
                _this.router.navigate(['/app/config/create']);
            });
        }
    };
    ConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-config',
            template: __webpack_require__(/*! ./config.component.html */ "./src/app/components/tabs/config/config.component.html"),
            styles: [__webpack_require__(/*! ./config.component.scss */ "./src/app/components/tabs/config/config.component.scss")],
        }),
        __metadata("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], ConfigComponent);
    return ConfigComponent;
}());



/***/ }),

/***/ "./src/app/components/tabs/home/home.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/tabs/home/home.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"padding-top: 10px;\">\n  <mat-card class=\"col-4 col-6-sm\">\n    <mat-card-header>\n      <mat-icon mat-card-avatar color=\"accent\">settings_power</mat-icon>\n      <mat-card-title>Active Config</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      {{ activeConfigName }}\n    </mat-card-content>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/tabs/home/home.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/components/tabs/home/home.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tabs/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/tabs/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/firebase/database.service */ "./src/app/services/firebase/database.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Declare a component to be shown when the home tab is selected.
 *
 * @export
 * @class HomeComponent
 * @implements {OnInit}
 */
var HomeComponent = /** @class */ (function () {
    /**
     * Creates an instance of HomeComponent.
     * @memberof HomeComponent
     */
    function HomeComponent(database) {
        this.database = database;
        this.activeConfigName = 'Loading...';
    }
    /**
     * Handle component initalization
     *
     * @memberof HomeComponent
     */
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.database.userID) {
            this.database.getActiveConfig(function (activeConfig) {
                if (activeConfig) {
                    _this.database.getConfig(activeConfig, function (config) {
                        _this.activeConfigName = config.name;
                    });
                }
                else {
                    _this.activeConfigName = 'No active configuration!';
                }
            });
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/tabs/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/tabs/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_firebase_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/tabs/settings/settings.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/tabs/settings/settings.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"center\">\n            <button mat-raised-button color=\"warn\" class=\"buttons\" (click)=\"deleteAccount()\">Delete Account</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/tabs/settings/settings.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/tabs/settings/settings.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttons {\n  font-size: 25px;\n  margin: 20px; }\n"

/***/ }),

/***/ "./src/app/components/tabs/settings/settings.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/tabs/settings/settings.component.ts ***!
  \****************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_google_google_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/google/google.service */ "./src/app/services/google/google.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Declare the component to be shown when the settings tab is selected.
 *
 * @export
 * @class SettingsComponent
 */
var SettingsComponent = /** @class */ (function () {
    /**
     * Creates an instance of SettingsComponent.
     * @memberof SettingsComponent
     */
    function SettingsComponent(firebase, firebaseAuth, google) {
        this.firebase = firebase;
        this.firebaseAuth = firebaseAuth;
        this.google = google;
    }
    SettingsComponent.prototype.deleteAccount = function () {
        var _this = this;
        this
            .firebaseAuth
            .auth
            .currentUser
            .delete()
            .then(function () {
            _this.google.signOut();
        }, function (err) { return console.error; });
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/components/tabs/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/components/tabs/settings/settings.component.scss"), __webpack_require__(/*! ../../../../simple-grid.scss */ "./src/simple-grid.scss")]
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__["AngularFireAuth"], _services_google_google_service__WEBPACK_IMPORTED_MODULE_3__["GoogleService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/modules/authenticated/authenticated.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/authenticated/authenticated.module.ts ***!
  \***************************************************************/
/*! exports provided: AuthenticatedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedModule", function() { return AuthenticatedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_tabs_config_config_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/tabs/config/config.component */ "./src/app/components/tabs/config/config.component.ts");
/* harmony import */ var _config_config_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config.module */ "./src/app/modules/config/config.module.ts");
/* harmony import */ var _services_firebase_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/firebase/database.service */ "./src/app/services/firebase/database.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_tabs_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/tabs/home/home.component */ "./src/app/components/tabs/home/home.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_tabs_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/tabs/settings/settings.component */ "./src/app/components/tabs/settings/settings.component.ts");
/* harmony import */ var _services_sorter_sorter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/sorter/sorter.service */ "./src/app/services/sorter/sorter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










/**
 * Handles all authenticated components
 *
 * @export
 * @class AuthenticatedModule
 */
var AuthenticatedModule = /** @class */ (function () {
    function AuthenticatedModule() {
    }
    AuthenticatedModule_1 = AuthenticatedModule;
    /**
     * Register with the root module of the app
     *
     * @static
     * @returns {ModuleWithProviders} This module
     * @memberof AuthenticatedModule
     */
    AuthenticatedModule.forRoot = function () {
        return {
            ngModule: AuthenticatedModule_1,
            providers: []
        };
    };
    AuthenticatedModule = AuthenticatedModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            declarations: [
                _components_tabs_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_tabs_config_config_component__WEBPACK_IMPORTED_MODULE_1__["ConfigComponent"],
                _components_tabs_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _config_config_module__WEBPACK_IMPORTED_MODULE_2__["ConfigModule"].forRoot()
            ],
            providers: [
                _services_firebase_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
                _services_sorter_sorter_service__WEBPACK_IMPORTED_MODULE_9__["SorterService"]
            ],
            exports: [
                _components_tabs_config_config_component__WEBPACK_IMPORTED_MODULE_1__["ConfigComponent"]
            ]
        })
    ], AuthenticatedModule);
    return AuthenticatedModule;
    var AuthenticatedModule_1;
}());



/***/ }),

/***/ "./src/app/modules/config/config.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/config/config.module.ts ***!
  \*************************************************/
/*! exports provided: ConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigModule", function() { return ConfigModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_tabs_config_config_list_config_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/tabs/config/config-list/config-list.component */ "./src/app/components/tabs/config/config-list/config-list.component.ts");
/* harmony import */ var _components_shared_config_modal_config_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/shared/config-modal/config-modal.component */ "./src/app/components/shared/config-modal/config-modal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_shared_new_config_page_new_config_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/shared/new-config-page/new-config-page.component */ "./src/app/components/shared/new-config-page/new-config-page.component.ts");
/* harmony import */ var _components_shared_new_rule_stepper_new_rule_stepper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/shared/new-rule-stepper/new-rule-stepper.component */ "./src/app/components/shared/new-rule-stepper/new-rule-stepper.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_shared_edit_config_modal_edit_config_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/shared/edit-config-modal/edit-config-modal.component */ "./src/app/components/shared/edit-config-modal/edit-config-modal.component.ts");
/* harmony import */ var _components_shared_edit_config_page_edit_config_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/shared/edit-config-page/edit-config-page.component */ "./src/app/components/shared/edit-config-page/edit-config-page.component.ts");
/* harmony import */ var _pipes_un_named_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/un-named.pipe */ "./src/app/pipes/un-named.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ConfigModule = /** @class */ (function () {
    function ConfigModule() {
    }
    ConfigModule_1 = ConfigModule;
    /**
     * Register with the root module of the app
     *
     * @static
     * @returns {ModuleWithProviders} This module
     * @memberof ConfigModule
     */
    ConfigModule.forRoot = function () {
        return {
            ngModule: ConfigModule_1,
            providers: []
        };
    };
    ConfigModule = ConfigModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _components_tabs_config_config_list_config_list_component__WEBPACK_IMPORTED_MODULE_1__["ConfigListComponent"],
                _components_shared_new_config_page_new_config_page_component__WEBPACK_IMPORTED_MODULE_5__["NewConfigPageComponent"],
                _components_shared_config_modal_config_modal_component__WEBPACK_IMPORTED_MODULE_2__["ConfigModalComponent"],
                _components_shared_new_rule_stepper_new_rule_stepper_component__WEBPACK_IMPORTED_MODULE_6__["NewRuleStepperComponent"],
                _components_shared_edit_config_modal_edit_config_modal_component__WEBPACK_IMPORTED_MODULE_8__["EditConfigModalComponent"],
                _components_shared_edit_config_page_edit_config_page_component__WEBPACK_IMPORTED_MODULE_9__["EditConfigPageComponent"],
                _pipes_un_named_pipe__WEBPACK_IMPORTED_MODULE_10__["UnNamedPipe"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"]
            ],
            entryComponents: [
                _components_shared_config_modal_config_modal_component__WEBPACK_IMPORTED_MODULE_2__["ConfigModalComponent"],
                _components_shared_edit_config_modal_edit_config_modal_component__WEBPACK_IMPORTED_MODULE_8__["EditConfigModalComponent"]
            ],
            exports: [
                _components_tabs_config_config_list_config_list_component__WEBPACK_IMPORTED_MODULE_1__["ConfigListComponent"]
            ]
        })
    ], ConfigModule);
    return ConfigModule;
    var ConfigModule_1;
}());



/***/ }),

/***/ "./src/app/pipes/un-named.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/un-named.pipe.ts ***!
  \****************************************/
/*! exports provided: UnNamedPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnNamedPipe", function() { return UnNamedPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UnNamedPipe = /** @class */ (function () {
    function UnNamedPipe() {
    }
    UnNamedPipe.prototype.transform = function (value, args) {
        return (value.length > 0) ? value : 'No Name';
    };
    UnNamedPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'unNamed'
        })
    ], UnNamedPipe);
    return UnNamedPipe;
}());



/***/ }),

/***/ "./src/app/services/auth/auth-guard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/auth/auth-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuardService, PreventAuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreventAuthGuardService", function() { return PreventAuthGuardService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _google_google_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../google/google.service */ "./src/app/services/google/google.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Prevent a user from accessing a route if they aren't authenticated.
 *
 * @export
 * @class AuthGuardService
 * @implements {CanActivate}
 */
var AuthGuardService = /** @class */ (function () {
    /**
     * Creates an instance of AuthGuardService.
     * @param {GoogleService} google Declare the Google Service as google.
     * @param {Router} router Declare the Router as router
     * @param {NgZone} zone Declare NgZone as zone
     * @memberof AuthGuardService
     */
    function AuthGuardService(google, router, zone) {
        this.google = google;
        this.router = router;
        this.zone = zone;
    }
    /**
     * Determines whether the user can go to the page and handle it.
     *
     * @returns {boolean} Whether or not the user can access the route
     * @memberof AuthGuardService
     */
    AuthGuardService.prototype.canActivate = function () {
        var _this = this;
        if (this.google.getAuthStatus()) {
            return true;
        }
        this.zone.run(function () {
            _this.router.navigate(['/']);
        });
        return false;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_google_google_service__WEBPACK_IMPORTED_MODULE_1__["GoogleService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]])
    ], AuthGuardService);
    return AuthGuardService;
}());

/**
 * Prevent a user from accessing a route if they are authenticated.
 *
 * @export
 * @class PreventAuthGuardService
 * @implements {CanActivate}
 */
var PreventAuthGuardService = /** @class */ (function () {
    /**
     * Creates an instance of PreventAuthGuardService.
     * @param {GoogleService} google Declare the Google Service as google.
     * @param {Router} router Declare the Router as router
     * @param {NgZone} zone Declare NgZone as zone
     * @memberof PreventAuthGuardService
     */
    function PreventAuthGuardService(google, router, zone) {
        this.google = google;
        this.router = router;
        this.zone = zone;
    }
    /**
     * Determines whether the user can go to the page and handle it.
     *
     * @returns {boolean} Whether or not the user can access the route
     * @memberof PreventAuthGuardService
     */
    PreventAuthGuardService.prototype.canActivate = function () {
        var _this = this;
        if (!this.google.getAuthStatus()) {
            return true;
        }
        this.zone.run(function () {
            _this.router.navigate(['/app/home']);
        });
        return false;
    };
    PreventAuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_google_google_service__WEBPACK_IMPORTED_MODULE_1__["GoogleService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]])
    ], PreventAuthGuardService);
    return PreventAuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/firebase/database.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/firebase/database.service.ts ***!
  \*******************************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _classes_config_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/config-builder */ "./src/app/classes/config-builder.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DatabaseService = /** @class */ (function () {
    function DatabaseService(firebase, firebaseAuth) {
        this.firebase = firebase;
        this.firebaseAuth = firebaseAuth;
        this._configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.configSubject = this._configSubject.asObservable();
        this._activeConfigChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.activeConfigChanged = this._activeConfigChanged.asObservable();
        firebase.firestore.settings({
            timestampsInSnapshots: true
        });
        if (this.firebaseAuth.auth.currentUser) {
            this.userID = firebaseAuth
                .auth
                .currentUser
                .uid;
            this.userDoc = firebase.doc("users/" + this.userID);
            this.configDocument = firebase.doc("users/" + this.userID + "/userData/config");
            this.configsCollection = this.userDoc.collection('configs');
        }
    }
    DatabaseService.prototype.createConfig = function (configName, firstGroupName, sourceLocation, destinationLocation, firstGroupRule) {
        var _this = this;
        var newConfig = _classes_config_builder__WEBPACK_IMPORTED_MODULE_2__["ConfigBuilder"].generateNewConfig(configName, firstGroupName, sourceLocation, destinationLocation, firstGroupRule);
        this
            .configsCollection
            .add(newConfig)
            .then(function () {
            _this._configSubject.next(true);
        }, function (err) {
            console.error(err);
            _this._configSubject.next(false);
        });
    };
    DatabaseService.prototype.deleteConfig = function (configID) {
        var _this = this;
        this
            .configsCollection
            .doc(configID)
            .delete()
            .then(function () {
            _this._configSubject.next(true);
        }, function (err) {
            console.error(err);
            _this._configSubject.next(false);
        });
    };
    DatabaseService.prototype.setActiveConfig = function (configID) {
        var _this = this;
        this
            .configDocument
            .set({
            activeConfig: configID
        })
            .then(function () {
            _this._activeConfigChanged.next(configID);
        }, function (err) {
            console.error(err);
            _this._activeConfigChanged.error(err);
        });
    };
    DatabaseService.prototype.updateConfig = function (newConfig) {
        var _this = this;
        this.configsCollection.doc(this.editingConfig).ref.set(newConfig)
            .then(function () {
            _this.editingConfig = '';
            _this._configSubject.next(true);
        }, function (err) { return console.error; });
    };
    DatabaseService.prototype.getConfig = function (configID, cb) {
        this.configsCollection.doc(configID).ref.get().then(function (snapshot) {
            cb(snapshot.data());
        }, function (err) { return console.error; });
    };
    DatabaseService.prototype.getActiveConfig = function (cb) {
        if (this.configDocument) {
            this
                .configDocument
                .ref
                .get()
                .then(function (snapshot) {
                if (snapshot && snapshot.data()) {
                    cb(snapshot.data()['activeConfig']);
                }
                else {
                    cb(null);
                }
            }, function (err) { return console.error; });
        }
        else {
            cb(null);
        }
    };
    DatabaseService.prototype.numberConfigs = function (cb) {
        if (this.configsCollection) {
            this
                .configsCollection
                .ref
                .get()
                .then(function (snapshot) {
                cb(snapshot.docs.length);
            });
        }
        else {
            cb(0);
        }
    };
    DatabaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__["AngularFireAuth"]])
    ], DatabaseService);
    return DatabaseService;
}());



/***/ }),

/***/ "./src/app/services/google/google.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/google/google.service.ts ***!
  \***************************************************/
/*! exports provided: GoogleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleService", function() { return GoogleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/index.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Variable for easy reference to the authenitcation instance.
 */
var authInstance;
var folderPicker;
var _folderPicked = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
function folderPicked(data) {
    if (data.action === 'picked') {
        _folderPicked.next(data.docs[0]);
    }
    else if (data.action === 'cancel') {
        _folderPicked.error(true);
    }
}
/**
 * Utility class to handle all interacting with the Google API
 *
 * @export
 * @class GoogleService
 */
var GoogleService = /** @class */ (function () {
    /**
     * Creates an instance of GoogleService.
     * @memberof GoogleService
     */
    function GoogleService(firebaseAuth) {
        this.firebaseAuth = firebaseAuth;
        /**
         * Holds a subject that is used to update subscribers with the authentication status.
         *
         * @private
         * @memberof GoogleService
         */
        this._authState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * Allows other modules / services to subscribe to the authentication status.
         *
         * @memberof GoogleService
         */
        this.authState$ = this._authState.asObservable();
        this.folderPicked$ = _folderPicked.asObservable();
    }
    /**
     * Initialize the Google API
     *
     * @param {Object} config
     * @memberof GoogleService
     */
    GoogleService.prototype.init = function (config, callback) {
        var _this = this;
        gapi.load('client:auth2', function () {
            gapi
                .client
                .init(config)
                .then(function () {
                authInstance = gapi.auth2.getAuthInstance();
                authInstance.isSignedIn.listen(function () {
                    _this._authState.next(authInstance.isSignedIn.get());
                    if (authInstance.isSignedIn.get()) {
                        var credential = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider.credential(_this.getToken());
                        _this.firebaseAuth.auth.signInWithCredential(credential);
                    }
                });
                var authStatus = authInstance.isSignedIn.get();
                _this._authState.next(authStatus);
                gapi.load('picker', function () {
                    var view = new google.picker.DocsView(google.picker.ViewId.FOLDERS)
                        .setIncludeFolders(true)
                        .setSelectFolderEnabled(true)
                        .setParent('root')
                        .setOwnedByMe(true);
                    folderPicker = new google.picker.PickerBuilder()
                        .disableFeature(google.picker.Feature.SUPPORT_TEAM_DRIVES)
                        .setAppId(362606538820)
                        .setOAuthToken(authInstance.currentUser.get().getAuthResponse().access_token)
                        .setDeveloperKey('AIzaSyB-yE9IXT29Vl_eAU7bzvzv5Qe17flfpzM')
                        .setSelectableMimeTypes('application/vnd.google-apps.folder')
                        .addView(view)
                        .setCallback(folderPicked)
                        .build();
                    if (callback) {
                        callback();
                    }
                });
            }, console.error);
        });
    };
    GoogleService.prototype.openFilePicker = function () {
        folderPicker.setVisible(true);
    };
    /**
     * Returns the users current authentication status.
     *
     * @returns {Boolean}
     * @memberof GoogleService
     */
    GoogleService.prototype.getAuthStatus = function () {
        if (authInstance) {
            return authInstance.isSignedIn.get();
        }
        else {
            return false;
        }
    };
    /**
     * Opens a popup allowing the user to sign in.
     *
     * @memberof GoogleService
     */
    GoogleService.prototype.signIn = function () {
        authInstance.signIn();
    };
    /**
     * Signs a user out
     *
     * @memberof GoogleService
     */
    GoogleService.prototype.signOut = function () {
        authInstance.signOut();
        this.firebaseAuth.auth.signOut();
    };
    /**
     * Gets the users id token
     *
     * @returns {string}
     * @memberof GoogleService
     */
    GoogleService.prototype.getToken = function () {
        return authInstance.currentUser.get().getAuthResponse().id_token;
    };
    GoogleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], GoogleService);
    return GoogleService;
}());



/***/ }),

/***/ "./src/app/services/sorter/sorter.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/sorter/sorter.service.ts ***!
  \***************************************************/
/*! exports provided: SorterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SorterService", function() { return SorterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SorterService = /** @class */ (function () {
    function SorterService() {
    }
    SorterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SorterService);
    return SorterService;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/**
 * Environment for production builds
 */
var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyB-yE9IXT29Vl_eAU7bzvzv5Qe17flfpzM",
        authDomain: "g-drive-sorter-2.firebaseapp.com",
        databaseURL: "https://g-drive-sorter-2.firebaseio.com",
        projectId: "g-drive-sorter-2",
        storageBucket: "g-drive-sorter-2.appspot.com",
        messagingSenderId: "362606538820"
    }
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
/**
 * Environment for development builds
 */
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyB-yE9IXT29Vl_eAU7bzvzv5Qe17flfpzM",
        authDomain: "g-drive-sorter-2.firebaseapp.com",
        databaseURL: "https://g-drive-sorter-2.firebaseio.com",
        projectId: "g-drive-sorter-2",
        storageBucket: "g-drive-sorter-2.appspot.com",
        messagingSenderId: "362606538820"
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/simple-grid.scss":
/*!******************************!*\
  !*** ./src/simple-grid.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n  Code from: https://github.com/zachacole/Simple-Grid\n\n  MIT License:\n  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/\n/* Webfont: Lato-Italic */\n@font-face {\n  font-family: 'LatoWeb';\n  src: url('Lato-Italic.eot');\n  /* IE9 Compat Modes */\n  src: url('Lato-Italic.eot?#iefix') format(\"embedded-opentype\"), url('Lato-Italic.woff2') format(\"woff2\"), url('Lato-Italic.woff') format(\"woff\"), url('Lato-Italic.ttf') format(\"truetype\");\n  font-style: italic;\n  font-weight: normal;\n  text-rendering: optimizeLegibility; }\n/* Webfont: Lato-Regular */\n@font-face {\n  font-family: 'LatoWeb';\n  src: url('Lato-Regular.eot');\n  /* IE9 Compat Modes */\n  src: url('Lato-Regular.eot?#iefix') format(\"embedded-opentype\"), url('Lato-Regular.woff2') format(\"woff2\"), url('Lato-Regular.woff') format(\"woff\"), url('Lato-Regular.ttf') format(\"truetype\");\n  font-style: normal;\n  font-weight: normal;\n  text-rendering: optimizeLegibility; }\n/* Webfont: Lato-Light */\n@font-face {\n  font-family: 'LatoWebLight';\n  src: url('Lato-Light.eot');\n  /* IE9 Compat Modes */\n  src: url('Lato-Light.eot?#iefix') format(\"embedded-opentype\"), url('Lato-Light.woff2') format(\"woff2\"), url('Lato-Light.woff') format(\"woff\"), url('Lato-Light.ttf') format(\"truetype\");\n  font-style: normal;\n  font-weight: normal;\n  text-rendering: optimizeLegibility; }\n/* Webfont: Lato-LightItalic */\n@font-face {\n  font-family: 'LatoWebLight';\n  src: url('Lato-LightItalic.eot');\n  /* IE9 Compat Modes */\n  src: url('Lato-LightItalic.eot?#iefix') format(\"embedded-opentype\"), url('Lato-LightItalic.woff2') format(\"woff2\"), url('Lato-LightItalic.woff') format(\"woff\"), url('Lato-LightItalic.ttf') format(\"truetype\");\n  font-style: italic;\n  font-weight: normal;\n  text-rendering: optimizeLegibility; }\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  left: 0;\n  top: 0;\n  font-size: 100%; }\n* {\n  font-family: \"LatoWeb\", Helvetica, sans-serif;\n  line-height: 1.5; }\nh1 {\n  font-size: 2.5rem; }\nh2 {\n  font-size: 2rem; }\nh3 {\n  font-size: 1.375rem; }\nh4 {\n  font-size: 1.125rem; }\nh5 {\n  font-size: 1rem; }\nh6 {\n  font-size: 0.875rem; }\np {\n  font-size: 1.125rem;\n  font-family: 'LatoWebLight';\n  line-height: 1.8; }\n.left {\n  float: left;\n  text-align: left; }\n.right {\n  float: right;\n  text-align: right; }\n.center {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto; }\n.justify {\n  text-align: justify; }\n.hidden-sm {\n  display: none; }\n.container {\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto; }\n@media only screen and (min-width: 33.75em) {\n    .container {\n      width: 80%; } }\n@media only screen and (min-width: 60em) {\n    .container {\n      width: 75%;\n      max-width: 60rem; } }\n.row {\n  position: relative;\n  width: 100%; }\n.row [class^=\"col\"] {\n  float: left;\n  margin: 0.5rem 2%;\n  min-height: 0.125rem; }\n.row::after {\n  content: \"\";\n  display: table;\n  clear: both; }\n.col-1,\n.col-2,\n.col-3,\n.col-4,\n.col-5,\n.col-6,\n.col-7,\n.col-8,\n.col-9,\n.col-10,\n.col-11,\n.col-12 {\n  width: 96%; }\n.col-1-sm {\n  width: 4.33333333%; }\n.col-2-sm {\n  width: 12.66666667%; }\n.col-3-sm {\n  width: 21%; }\n.col-4-sm {\n  width: 29.33333333%; }\n.col-5-sm {\n  width: 37.66666667%; }\n.col-6-sm {\n  width: 46%; }\n.col-7-sm {\n  width: 54.33333333%; }\n.col-8-sm {\n  width: 62.66666667%; }\n.col-9-sm {\n  width: 71%; }\n.col-10-sm {\n  width: 79.33333333%; }\n.col-11-sm {\n  width: 87.66666667%; }\n.col-12-sm {\n  width: 96%; }\n@media only screen and (min-width: 45em) {\n  .col-1 {\n    width: 4.33333333%; }\n  .col-2 {\n    width: 12.66666667%; }\n  .col-3 {\n    width: 21%; }\n  .col-4 {\n    width: 29.33333333%; }\n  .col-5 {\n    width: 37.66666667%; }\n  .col-6 {\n    width: 46%; }\n  .col-7 {\n    width: 54.33333333%; }\n  .col-8 {\n    width: 62.66666667%; }\n  .col-9 {\n    width: 71%; }\n  .col-10 {\n    width: 79.33333333%; }\n  .col-11 {\n    width: 87.66666667%; }\n  .col-12 {\n    width: 96%; }\n  .hidden-sm {\n    display: block; } }\n"

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/brandon/Projects/g-drive-sorter/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map