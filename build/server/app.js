module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://10.55.70.65:3001/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _server = __webpack_require__(2);
	
	var _getRoutesAndStore2 = __webpack_require__(56);
	
	var _getRoutesAndStore3 = _interopRequireDefault(_getRoutesAndStore2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _getRoutesAndStore = (0, _getRoutesAndStore3.default)(),
	    store = _getRoutesAndStore.store,
	    routes = _getRoutesAndStore.routes;
	
	(0, _server.useReact)(_server.createServer)({
	    createRoutes: routes,
	    createStore: store
	}).start();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createServer = exports.useReact = undefined;
	
	var _app = __webpack_require__(3);
	
	Object.defineProperty(exports, 'createServer', {
	  enumerable: true,
	  get: function get() {
	    return _app.createServer;
	  }
	});
	
	var _useReact2 = __webpack_require__(28);
	
	var _useReact3 = _interopRequireDefault(_useReact2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.useReact = _useReact3.default;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createServer = undefined;
	
	var _server = __webpack_require__(4);
	
	var _server2 = _interopRequireDefault(_server);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.createServer = _server2.default;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends2 = __webpack_require__(5);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getIterator2 = __webpack_require__(6);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	exports.default = createServer;
	
	var _fs = __webpack_require__(7);
	
	var _debug = __webpack_require__(8);
	
	var _debug2 = _interopRequireDefault(_debug);
	
	var _http = __webpack_require__(9);
	
	var _http2 = _interopRequireDefault(_http);
	
	var _https = __webpack_require__(10);
	
	var _https2 = _interopRequireDefault(_https);
	
	var _koa = __webpack_require__(11);
	
	var _koa2 = _interopRequireDefault(_koa);
	
	var _koaStatic = __webpack_require__(12);
	
	var _koaStatic2 = _interopRequireDefault(_koaStatic);
	
	var _koaMount = __webpack_require__(13);
	
	var _koaMount2 = _interopRequireDefault(_koaMount);
	
	var _koaAddTrailingSlashes = __webpack_require__(14);
	
	var _koaAddTrailingSlashes2 = _interopRequireDefault(_koaAddTrailingSlashes);
	
	var _koaNormalizePath = __webpack_require__(15);
	
	var _koaNormalizePath2 = _interopRequireDefault(_koaNormalizePath);
	
	var _koaLowercasePath = __webpack_require__(16);
	
	var _koaLowercasePath2 = _interopRequireDefault(_koaLowercasePath);
	
	var _koaRemoveTrailingSlashes = __webpack_require__(17);
	
	var _koaRemoveTrailingSlashes2 = _interopRequireDefault(_koaRemoveTrailingSlashes);
	
	var _roc = __webpack_require__(18);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Creates a server instance.
	 *
	 * @example
	 * import { createServer } from 'roc-web/app';
	 *
	 * const server = createServer({
	 *    serve: 'static',
	 *    favicon: 'static/favicon.png'
	 * });
	 *
	 * server.start();
	 *
	 * @param {rocServerOptions} options - Options for the server. Will override configuration in roc.config.js.
	 * @param {Function[]} beforeUserMiddlewares - Middlewares that should be added before the user middlewares.
	 * @returns {rocServer} server - Roc server instance.
	 */
	/* global USE_DEFAULT_KOA_MIDDLEWARES HAS_KOA_MIDDLEWARES KOA_MIDDLEWARES __DEV__ ROC_PATH  */
	
	function createServer() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var beforeUserMiddlewares = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	
	    var logger = (0, _debug2.default)('roc:server');
	    logger.log = console.info.bind(console);
	
	    var server = (0, _koa2.default)();
	    var runtimeSettings = (0, _roc.merge)((0, _roc.getSettings)('runtime'), options);
	
	    if (true) {
	        var middlewares = __webpack_require__(19).default(runtimeSettings);
	        middlewares.forEach(function (middleware) {
	            return server.use(middleware);
	        });
	    }
	
	    if (beforeUserMiddlewares.length) {
	        beforeUserMiddlewares.forEach(function (middleware) {
	            return server.use(middleware);
	        });
	    }
	
	    if (false) {
	        var _middlewares = require(KOA_MIDDLEWARES).default(runtimeSettings);
	        _middlewares.forEach(function (middleware) {
	            return server.use(middleware);
	        });
	    }
	
	    var makeServe = function makeServe() {
	        var toServe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	        toServe = [].concat(toServe);
	
	        var staticSettings =  false ? runtimeSettings.koa.staticServe : {};
	
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	            for (var _iterator = (0, _getIterator3.default)(toServe), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var path = _step.value;
	
	                server.use((0, _koaStatic2.default)(path, (0, _extends3.default)({
	                    // We use defer as default here to no try to fetch a file
	                    // if we have set something on body, something that is done in
	                    // redirect. This because https://github.com/koajs/send/issues/51
	                    defer: true
	                }, staticSettings)));
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }
	    };
	
	    if (runtimeSettings.koa.normalize.enabled) {
	        server.use((0, _koaNormalizePath2.default)({ defer: runtimeSettings.koa.normalize.defer }));
	    }
	
	    if (runtimeSettings.koa.lowercase.enabled) {
	        server.use((0, _koaLowercasePath2.default)({ defer: runtimeSettings.koa.lowercase.defer }));
	    }
	
	    if (runtimeSettings.koa.trailingSlashes.enabled === true) {
	        server.use((0, _koaAddTrailingSlashes2.default)({ defer: runtimeSettings.koa.trailingSlashes.defer }));
	    } else if (runtimeSettings.koa.trailingSlashes.enabled === false) {
	        server.use((0, _koaRemoveTrailingSlashes2.default)());
	    }
	
	    // Serve folders
	    makeServe(runtimeSettings.serve);
	
	    function start(port, httpsPort) {
	        port = port || process.env.PORT || runtimeSettings.port;
	        httpsPort = httpsPort || process.env.HTTPS_PORT || runtimeSettings.https.port;
	
	        var app = (0, _koa2.default)();
	        app.use((0, _koaMount2.default)(("/"), server));
	
	        // Start the server on HTTP
	        _http2.default.createServer(app.callback()).listen(port);
	        logger('Server started on port ' + port + ' (HTTP) and served from ' + ("/"));
	
	        // If a HTTPS port is defined we will try to start the application with SSL/TLS
	        if (httpsPort) {
	            var key = (0, _roc.getAbsolutePath)(runtimeSettings.https.key);
	            var cert = (0, _roc.getAbsolutePath)(runtimeSettings.https.cert);
	
	            // Add a self-signed certificate for development purposes if non is provided.
	            if ((true) && !key && !cert) {
	                key = __webpack_require__(27).getKey();
	                cert = __webpack_require__(27).getCert();
	            }
	
	            if (key && cert) {
	                var httpsOptions = {
	                    key: (0, _fs.readFileSync)(key),
	                    cert: (0, _fs.readFileSync)(cert)
	                };
	
	                _https2.default.createServer(httpsOptions, app.callback()).listen(httpsPort);
	                logger('Server started on port ' + httpsPort + ' (HTTPS) and served from ' + ("/"));
	            } else {
	                logger('You have defined a HTTPS port but not given any certificate files to use…');
	            }
	        }
	
	        if (process.send) {
	            process.send('online');
	        }
	    }
	
	    return {
	        server: server,
	        start: start
	    };
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/extends");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/get-iterator");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("debug");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("http");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("https");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("koa");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("koa-static");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("koa-mount");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("koa-add-trailing-slashes");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("koa-normalize-path");

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("koa-lowercase-path");

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("koa-remove-trailing-slashes");

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("roc");

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = middlewares;
	
	var _koaErrors = __webpack_require__(20);
	
	var _koaErrors2 = _interopRequireDefault(_koaErrors);
	
	var _koaHelmet = __webpack_require__(21);
	
	var _koaHelmet2 = _interopRequireDefault(_koaHelmet);
	
	var _koaEtag = __webpack_require__(22);
	
	var _koaEtag2 = _interopRequireDefault(_koaEtag);
	
	var _koaCompressor = __webpack_require__(23);
	
	var _koaCompressor2 = _interopRequireDefault(_koaCompressor);
	
	var _koaFavicon = __webpack_require__(24);
	
	var _koaFavicon2 = _interopRequireDefault(_koaFavicon);
	
	var _koaAccesslog = __webpack_require__(25);
	
	var _koaAccesslog2 = _interopRequireDefault(_koaAccesslog);
	
	var _koaLogger = __webpack_require__(26);
	
	var _koaLogger2 = _interopRequireDefault(_koaLogger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Returns the middlewares to be used
	 *
	 * @param {object} config - A roc config object.
	 * @returns {array} A array with middlewares to use.
	 */
	function middlewares(config) {
	    var middlewaresList = [];
	
	    if (true) {
	        middlewaresList.push((0, _koaErrors2.default)());
	    }
	
	    // Security headers
	    middlewaresList.push((0, _koaHelmet2.default)());
	
	    middlewaresList.push((0, _koaEtag2.default)());
	
	    // We only enable gzip in dist
	    if (false) {
	        middlewaresList.push((0, _koaCompressor2.default)());
	    }
	
	    var favicon = config.favicon;
	    if (favicon) {
	        middlewaresList.push((0, _koaFavicon2.default)(favicon));
	    }
	
	    if (false) {
	        middlewaresList.push((0, _koaAccesslog2.default)());
	    } else {
	        middlewaresList.push((0, _koaLogger2.default)());
	    }
	
	    return middlewaresList;
	} /* global __DEV__ __DIST__ */

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("koa-errors");

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("koa-helmet");

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("koa-etag");

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("koa-compressor");

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("koa-favicon");

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("koa-accesslog");

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("koa-logger");

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("roc-package-web-app/certificate");

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _objectWithoutProperties2 = __webpack_require__(29);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	exports.default = useReact;
	
	var _readStats = __webpack_require__(30);
	
	var _readStats2 = _interopRequireDefault(_readStats);
	
	var _router = __webpack_require__(31);
	
	var _router2 = _interopRequireDefault(_router);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Enhances a server instance with React support.
	 *
	 * Extends the options object from _roc-web_. See {@link rocServerOptions} for what the new options are.
	 *
	 * @example
	 * import { createServer } from 'roc-web/app';
	 * import { useReact } from 'roc-web-react/app/server';
	 *
	 * const server = useReact(createServer)({
	 *     serve: 'files',
	 *     createRoutes: routes,
	 *     createStore: store,
	 *     stats: './stats.json'
	 * });
	
	 * server.start();
	 *
	 * @param {function} createServer - A createServer function to wrap and add extra functionality to
	 * @returns {function} Returns a new createServer that can be used to create server instances that can manage React
	 * applications
	 */
	function useReact(createServer) {
	    return function () {
	        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	        var beforeUserMiddlewares = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	        var stats = options.stats,
	            createRoutes = options.createRoutes,
	            createStore = options.createStore,
	            serverOptions = (0, _objectWithoutProperties3.default)(options, ['stats', 'createRoutes', 'createStore']);
	
	
	        return createServer(serverOptions, beforeUserMiddlewares.concat((0, _router2.default)({
	            createRoutes: createRoutes,
	            createStore: createStore,
	            stats: (0, _readStats2.default)(stats)
	        })));
	    };
	}

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("roc-package-web-app-react/lib/helpers/read-stats");

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _regenerator = __webpack_require__(32);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	exports.default = routes;
	
	var _debug = __webpack_require__(8);
	
	var _debug2 = _interopRequireDefault(_debug);
	
	var _prettyError = __webpack_require__(33);
	
	var _prettyError2 = _interopRequireDefault(_prettyError);
	
	var _universalConfig = __webpack_require__(34);
	
	var _setupForRender2 = __webpack_require__(36);
	
	var _setupForRender3 = _interopRequireDefault(_setupForRender2);
	
	var _render = __webpack_require__(39);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var pretty = new _prettyError2.default();
	var log = (0, _debug2.default)('roc:server');
	
	function routes(_ref) {
	    var createRoutes = _ref.createRoutes,
	        createStore = _ref.createStore,
	        stats = _ref.stats,
	        dist = _ref.dist;
	
	    if (!createRoutes) {
	        throw new Error('createRoutes needs to be defined');
	    }
	
	    if (!stats) {
	        throw new Error('stats needs to be defined');
	    }
	
	    var renderPage = (0, _render.initRenderPage)(stats, dist);
	
	    return _regenerator2.default.mark(function _callee(next) {
	        var _setupForRender, store, history, url, _ref2, body, redirect, _ref2$status, status;
	
	        return _regenerator2.default.wrap(function _callee$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        _context.prev = 0;
	
	                        if (_universalConfig.rocConfig.runtime.ssr) {
	                            _context.next = 10;
	                            break;
	                        }
	
	                        _context.next = 4;
	                        return next;
	
	                    case 4:
	                        if (!(this.body || this.status !== 404)) {
	                            _context.next = 6;
	                            break;
	                        }
	
	                        return _context.abrupt('return');
	
	                    case 6:
	
	                        this.status = 200;
	                        this.body = renderPage();
	                        _context.next = 24;
	                        break;
	
	                    case 10:
	                        _setupForRender = (0, _setupForRender3.default)(createStore, this.url), store = _setupForRender.store, history = _setupForRender.history, url = _setupForRender.url;
	
	                        // Give Koa middlewares a chance to interact with the reduxStore
	                        // This can be used to dynamically pass some data to the client.
	
	                        this.state.reduxStore = store;
	                        _context.next = 14;
	                        return next;
	
	                    case 14:
	                        if (!(this.body || this.status !== 404)) {
	                            _context.next = 16;
	                            break;
	                        }
	
	                        return _context.abrupt('return');
	
	                    case 16:
	                        _context.next = 18;
	                        return (0, _render.reactRender)(url, history, store, createRoutes, renderPage, this.state);
	
	                    case 18:
	                        _ref2 = _context.sent;
	                        body = _ref2.body;
	                        redirect = _ref2.redirect;
	                        _ref2$status = _ref2.status;
	                        status = _ref2$status === undefined ? 200 : _ref2$status;
	
	
	                        if (redirect) {
	                            this.redirect(redirect);
	                        } else {
	                            this.status = status;
	                            this.body = body;
	                        }
	
	                    case 24:
	                        _context.next = 31;
	                        break;
	
	                    case 26:
	                        _context.prev = 26;
	                        _context.t0 = _context['catch'](0);
	
	                        log('Render error', pretty.render(_context.t0));
	                        this.status = 500;
	                        this.body = renderPage();
	
	                    case 31:
	                    case 'end':
	                        return _context.stop();
	                }
	            }
	        }, _callee, this, [[0, 26]]);
	    });
	}

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/regenerator");

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = require("pretty-error");

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	* Universal Configuration Manager
	*
	* Manages both __application__ configuration and __Roc__ configuration.
	* On the server the configurations will be fetched directly and on the client it's expected that the configuration
	* is available on `window` as `ROC_CONFIG` and `APP_CONFIG`.
	*
	* appConfig will only contain what has been selected by `runtime.configWhitelistProperty`. That means if you want
	* to read the full configuration on the server you will need to read it directly from node-config.
	*/
	
	var rocConfig = exports.rocConfig = function () {
	    return typeof window !== 'undefined' ? window.ROC_CONFIG : __webpack_require__(18).getSettings();
	}();
	
	var whiteListed = function whiteListed() {
	    return rocConfig.runtime.configWhitelistProperty ? __webpack_require__(35)[rocConfig.runtime.configWhitelistProperty] : undefined;
	};
	
	var appConfig = exports.appConfig = function () {
	    return typeof window !== 'undefined' ? window.APP_CONFIG : whiteListed();
	}();

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = require("config");

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = setupForRender;
	
	var _reactRouter = __webpack_require__(37);
	
	var _reactRouterRedux = __webpack_require__(38);
	
	/* global ROC_PATH */
	
	function setupForRender(createStore, url) {
	    var basename =  true ? '' : ROC_PATH;
	
	    var completeUrl = basename + url;
	    var memoryHistory = (0, _reactRouter.createMemoryHistory)({
	        entries: [completeUrl],
	        basename: basename
	    });
	
	    var store = createStore ? createStore(memoryHistory) : null;
	    var history = store ? (0, _reactRouterRedux.syncHistoryWithStore)(memoryHistory, store) : memoryHistory;
	
	    return {
	        store: store,
	        history: history,
	        url: url
	    };
	}

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = require("react-router-redux");

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _promise = __webpack_require__(40);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _extends2 = __webpack_require__(5);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(29);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	exports.initRenderPage = initRenderPage;
	exports.reactRender = reactRender;
	
	var _debug = __webpack_require__(8);
	
	var _debug2 = _interopRequireDefault(_debug);
	
	var _nunjucks = __webpack_require__(41);
	
	var _nunjucks2 = _interopRequireDefault(_nunjucks);
	
	var _serializeJavascript = __webpack_require__(42);
	
	var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);
	
	var _prettyError = __webpack_require__(33);
	
	var _prettyError2 = _interopRequireDefault(_prettyError);
	
	var _react = __webpack_require__(43);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _server = __webpack_require__(44);
	
	var _reactRouter = __webpack_require__(37);
	
	var _reactRedux = __webpack_require__(45);
	
	var _reactHelmet = __webpack_require__(46);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _reactRouterRedial = __webpack_require__(47);
	
	var _roc = __webpack_require__(18);
	
	var _reactServerStatus = __webpack_require__(48);
	
	var _reactServerStatus2 = _interopRequireDefault(_reactServerStatus);
	
	var _myPath = __webpack_require__(49);
	
	var _myPath2 = _interopRequireDefault(_myPath);
	
	var _universalConfig = __webpack_require__(34);
	
	var _header = __webpack_require__(50);
	
	var _header2 = _interopRequireDefault(_header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var pretty = new _prettyError2.default(); /* global __DIST__ __DEV__ HAS_TEMPLATE_VALUES TEMPLATE_VALUES */
	
	var log = (0, _debug2.default)('roc:react-render');
	
	function initRenderPage(_ref) {
	    var script = _ref.script,
	        css = _ref.css;
	
	    var templatePath = _universalConfig.rocConfig.runtime.template.path || _myPath2.default + '/views';
	    _nunjucks2.default.configure((0, _roc.getAbsolutePath)(templatePath), {
	        watch: (true)
	    });
	
	    var bundleName = script[0];
	    var styleName = css[0];
	
	    return function (head) {
	        var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	        var fluxState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	        var redialProps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
	        var customTemplateValues = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
	        var dev = _universalConfig.rocConfig.dev,
	            build = _universalConfig.rocConfig.build,
	            rest = (0, _objectWithoutProperties3.default)(_universalConfig.rocConfig, ['dev', 'build']);
	
	
	        var rocConfigClient =  false ? rest : (0, _extends3.default)({}, rest, { dev: dev });
	
	        // If we have no head we will generate it
	        if (!head) {
	            // Render to trigger React Helmet
	            (0, _server.renderToStaticMarkup)(_react2.default.createElement(_header2.default, null));
	            head = _reactHelmet2.default.rewind();
	        }
	
	        return _nunjucks2.default.render(_universalConfig.rocConfig.runtime.template.name, {
	            head: head,
	            content: content,
	            fluxState: (0, _serializeJavascript2.default)(fluxState),
	            bundleName: bundleName,
	            styleName: styleName,
	            dist: (false),
	            serializedRocConfig: (0, _serializeJavascript2.default)(rocConfigClient),
	            serializedAppConfig: (0, _serializeJavascript2.default)(_universalConfig.appConfig),
	            redialProps: (0, _serializeJavascript2.default)(redialProps),
	            custom: customTemplateValues
	        });
	    };
	}
	
	function reactRender(url, history, store, createRoutes, renderPage, koaState) {
	    var staticRender = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
	
	    return new _promise2.default(function (resolve) {
	        (0, _reactRouter.match)({ history: history, routes: createRoutes(store), location: url }, function (error, redirect, renderProps) {
	            if (redirect) {
	                log('Redirect request to ' + (redirect.pathname + redirect.search));
	                return resolve({
	                    redirect: redirect.pathname + redirect.search
	                });
	            } else if (error) {
	                log('Router error', pretty.render(error));
	                return resolve({
	                    status: 500,
	                    body: renderPage()
	                });
	            } else if (!renderProps) {
	                log('No renderProps, most likely the path does not exist');
	                return resolve({
	                    status: 404,
	                    body: renderPage()
	                });
	            }
	
	            var locals = store ? {
	                dispatch: store.dispatch,
	                getState: store.getState
	            } : {};
	
	            var hooks = _universalConfig.rocConfig.runtime.fetch.server;
	
	            (0, _reactRouterRedial.triggerHooks)({
	                renderProps: renderProps,
	                hooks: hooks,
	                locals: locals
	            }).then(function (_ref2) {
	                var redialMap = _ref2.redialMap,
	                    redialProps = _ref2.redialProps;
	
	                var component = _react2.default.createElement(_reactRouterRedial.RedialContext, (0, _extends3.default)({}, renderProps, { redialMap: redialMap }));
	
	                if (store) {
	                    component = _react2.default.createElement(
	                        _reactRedux.Provider,
	                        { store: store },
	                        component
	                    );
	                }
	
	                var page = staticRender ? (0, _server.renderToStaticMarkup)(component) : (0, _server.renderToString)(component);
	                var head = _reactHelmet2.default.rewind();
	                var state = store ? store.getState() : {};
	
	                var templateValues = void 0;
	                if (false) {
	                    // Provides settings, Redux state and Koa state
	                    templateValues = require(TEMPLATE_VALUES).default({
	                        koaState: koaState,
	                        settings: _universalConfig.rocConfig,
	                        reduxState: state
	                    });
	                }
	
	                return resolve({
	                    body: renderPage(head, page, state, redialProps, templateValues),
	                    status: _reactServerStatus2.default.rewind() || 200
	                });
	            }).catch(function (err) {
	                if (err) {
	                    log('Fetching error', pretty.render(err));
	                }
	                return resolve({
	                    status: 500,
	                    body: renderPage()
	                });
	            });
	        });
	    });
	}

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/promise");

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = require("nunjucks");

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = require("serialize-javascript");

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = require("react-router-redial");

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = require("react-server-status");

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = require("roc-package-web-app-react/lib/helpers/my-path");

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _extends2 = __webpack_require__(5);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(51);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(52);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(53);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(54);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(55);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(43);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactHelmet = __webpack_require__(46);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _universalConfig = __webpack_require__(34);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Header = function (_React$Component) {
	    (0, _inherits3.default)(Header, _React$Component);
	
	    function Header() {
	        (0, _classCallCheck3.default)(this, Header);
	        return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
	    }
	
	    (0, _createClass3.default)(Header, [{
	        key: 'render',
	        value: function render() {
	            var path =  false ? ROC_PATH + '/' : ("/");
	            var base = _universalConfig.rocConfig.runtime.base.href && path ? (0, _extends3.default)({}, _universalConfig.rocConfig.runtime.base, {
	                href: _universalConfig.rocConfig.runtime.base.href.replace(/ROC_PATH/, path)
	            }) : {};
	
	            return _react2.default.createElement(_reactHelmet2.default, {
	                htmlAttributes: _universalConfig.rocConfig.runtime.htmlAttributes,
	                defaultTitle: _universalConfig.rocConfig.runtime.applicationName,
	                titleTemplate: _universalConfig.rocConfig.runtime.applicationNameTemplate,
	                meta: _universalConfig.rocConfig.runtime.meta,
	                link: _universalConfig.rocConfig.runtime.link,
	                base: base,
	                script: _universalConfig.rocConfig.runtime.script,
	                style: _universalConfig.rocConfig.runtime.style
	            });
	        }
	    }]);
	    return Header;
	}(_react2.default.Component); /* global ROC_PATH */
	
	exports.default = Header;

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/createClass");

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/inherits");

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _toConsumableArray2 = __webpack_require__(58);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _extends2 = __webpack_require__(5);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	exports.default = getRoutesAndStore;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* global REACT_ROUTER_ROUTES, REDUX_REDUCERS, HAS_REDUX_REDUCERS, HAS_REDUX_MIDDLEWARES, REDUX_MIDDLEWARES,
	    USE_DEFAULT_REDUX_REDUCERS, USE_DEFAULT_REDUX_MIDDLEWARES, USE_DEFAULT_REACT_ROUTER_ROUTES
	*/
	
	function getRoutesAndStore() {
	    var web = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	    var store = null;
	    var routes = null;
	
	    if (true) {
	        (function () {
	            var _require = __webpack_require__(59),
	                createStore = _require.createStore;
	
	            var defaultReducers = {};
	            if (true) {
	                defaultReducers = __webpack_require__(59).defaultReducers;
	            }
	
	            var middlewares = [];
	            if (true) {
	                middlewares = middlewares.concat(__webpack_require__(59).defaultMiddlewares);
	            }
	
	            if (false) {
	                middlewares = middlewares.concat(require(REDUX_MIDDLEWARES).default());
	            }
	
	            var reducers = (0, _extends3.default)({}, defaultReducers, __webpack_require__(69));
	
	            var storeCreator = createStore.apply(undefined, [reducers].concat((0, _toConsumableArray3.default)(middlewares)));
	
	            var replaceReducers = null;
	            if (web) {
	                replaceReducers = function replaceReducers(replaceReducer) {
	                    module.hot.accept(/*require.resolve*/(69), function () {
	                        replaceReducer((0, _extends3.default)({}, defaultReducers, __webpack_require__(69)));
	                    });
	                };
	            }
	
	            store = storeCreator(replaceReducers);
	        })();
	    }
	
	    if (true) {
	        var _require2 = __webpack_require__(59),
	            createRoutes = _require2.createRoutes;
	
	        routes = createRoutes(__webpack_require__(71).default);
	    } else {
	        routes = require(REACT_ROUTER_ROUTES).default;
	    }
	
	    return {
	        routes: routes,
	        store: store
	    };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(57)(module)))

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.defaultMiddlewares = exports.defaultReducers = exports.createStore = exports.createRoutes = exports.appConfig = exports.rocConfig = undefined;
	
	var _universalConfig = __webpack_require__(34);
	
	Object.defineProperty(exports, 'rocConfig', {
	  enumerable: true,
	  get: function get() {
	    return _universalConfig.rocConfig;
	  }
	});
	Object.defineProperty(exports, 'appConfig', {
	  enumerable: true,
	  get: function get() {
	    return _universalConfig.appConfig;
	  }
	});
	
	var _createRoutes2 = __webpack_require__(60);
	
	var _createRoutes3 = _interopRequireDefault(_createRoutes2);
	
	var _createStore2 = __webpack_require__(63);
	
	var _createStore3 = _interopRequireDefault(_createStore2);
	
	var _reducers = __webpack_require__(65);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _middlewares = __webpack_require__(67);
	
	var _middlewares2 = _interopRequireDefault(_middlewares);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.createRoutes = _createRoutes3.default;
	exports.createStore = _createStore3.default;
	exports.defaultReducers = _reducers2.default;
	exports.defaultMiddlewares = _middlewares2.default;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = createRoutes;
	
	var _react = __webpack_require__(43);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Route = __webpack_require__(61);
	
	var _Route2 = _interopRequireDefault(_Route);
	
	var _application = __webpack_require__(62);
	
	var _application2 = _interopRequireDefault(_application);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Route creator
	 *
	 * @param {!function} routes - A function that takes a reference to potential store and returns a React Router route
	 * @returns {function} A function that takes a reference to a potential store, runs the `routes` function and wrapps the
	 * result in a _Application component_ wrapper. See the README.md for more information on what it does.
	 */
	function createRoutes(routes) {
	    return function (store) {
	        var appRoutes = routes(store);
	
	        return _react2.default.createElement(
	            _Route2.default,
	            { path: '/', component: _application2.default },
	            appRoutes
	        );
	    };
	}

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = require("react-router/lib/Route");

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _getPrototypeOf = __webpack_require__(51);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(52);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(53);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(54);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(55);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _class, _temp;
	
	var _react = __webpack_require__(43);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _header = __webpack_require__(50);
	
	var _header2 = _interopRequireDefault(_header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Application = (_temp = _class = function (_React$Component) {
	    (0, _inherits3.default)(Application, _React$Component);
	
	    function Application() {
	        (0, _classCallCheck3.default)(this, Application);
	        return (0, _possibleConstructorReturn3.default)(this, (Application.__proto__ || (0, _getPrototypeOf2.default)(Application)).apply(this, arguments));
	    }
	
	    (0, _createClass3.default)(Application, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_header2.default, null),
	                this.props.children
	            );
	        }
	    }]);
	    return Application;
	}(_react2.default.Component), _class.propTypes = {
	    children: _react2.default.PropTypes.node
	}, _temp);
	exports.default = Application;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends2 = __webpack_require__(5);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _toConsumableArray2 = __webpack_require__(58);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	exports.default = createReduxStore;
	
	var _redux = __webpack_require__(64);
	
	var _reactRouterRedux = __webpack_require__(38);
	
	var _universalConfig = __webpack_require__(34);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Redux store creator
	 *
	 * @param {!object} reducers - Reducers that should be added to the store
	 * @param {...function} middlewares - Redux middlewares that should be added to the store
	 * @returns {function} A function that has the following interface:
	 * `(callback) => (reduxReactRouter, getRoutes, createHistory, initialState)`.
	 * The callback will be called when the application is in _DEV_ mode on the client as a way to add hot module update of
	 * the reducers. The callback itself will take a function as the parameter that in turn takes the reducers to update.
	 */
	function createReduxStore(reducers) {
	    for (var _len = arguments.length, middlewares = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        middlewares[_key - 1] = arguments[_key];
	    }
	
	    return function (callback) {
	        return function (history, initialState) {
	            var finalCreateStore = void 0;
	            var normalMiddlewares = [].concat(middlewares);
	
	            // Add the react-router-redux middleware
	            normalMiddlewares.push((0, _reactRouterRedux.routerMiddleware)(history));
	
	            if (false) {
	                var _require = require('redux-devtools'),
	                    persistState = _require.persistState;
	
	                var createLogger = require('redux-logger');
	                var logger = createLogger({
	                    level: _universalConfig.rocConfig.dev.reduxLogger.level,
	                    collapsed: _universalConfig.rocConfig.dev.reduxLogger.collapsed,
	                    duration: _universalConfig.rocConfig.dev.reduxLogger.duration,
	                    timestamp: _universalConfig.rocConfig.dev.reduxLogger.timestamp
	                });
	
	                var debugMiddlewares = [logger];
	
	                var devTools = window.devToolsExtension ? window.devToolsExtension()
	                // TODO Enable maxAge support here. Will require a fix for validations in roc
	                // This should probably also additionally only be added if devtools is on in settings
	                : require('../../client/dev-tools').default.instrument();
	
	                finalCreateStore = (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, (0, _toConsumableArray3.default)(normalMiddlewares).concat(debugMiddlewares)), devTools, persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)))(_redux.createStore);
	            } else {
	                finalCreateStore = (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, (0, _toConsumableArray3.default)(normalMiddlewares)))(_redux.createStore);
	            }
	
	            var reducer = (0, _redux.combineReducers)((0, _extends3.default)({
	                routing: _reactRouterRedux.routerReducer
	            }, reducers));
	
	            var store = finalCreateStore(reducer, initialState);
	
	            if (false) {
	                // Enable Webpack hot module replacement for reducers
	                callback(function (newReducers) {
	                    var nextRootReducer = (0, _redux.combineReducers)((0, _extends3.default)({
	                        routing: _reactRouterRedux.routerReducer
	                    }, newReducers));
	                    store.replaceReducer(nextRootReducer);
	                });
	            }
	
	            return store;
	        };
	    };
	} /* globals __DEV__ __WEB__ */

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.errors = undefined;
	
	var _errors2 = __webpack_require__(66);
	
	var _errors3 = _interopRequireDefault(_errors2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.errors = _errors3.default;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _toConsumableArray2 = __webpack_require__(58);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	exports.default = errors;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function errors() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var action = arguments[1];
	    var type = action.type,
	        error = action.error,
	        payload = action.payload;
	
	
	    if (type === 'RESET_ERROR_MESSAGES') {
	        return [];
	    } else if (error) {
	        return [].concat((0, _toConsumableArray3.default)(state), [payload]);
	    }
	
	    return state;
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reduxThunk = __webpack_require__(68);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = [_reduxThunk2.default];

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.clicker = undefined;
	
	var _clicker2 = __webpack_require__(70);
	
	var _clicker3 = _interopRequireDefault(_clicker2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.clicker = _clicker3.default;

/***/ },
/* 70 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = clicker;
	exports.click = click;
	var CLICKED = 'CLICKED';
	
	function clicker() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { increment: 1 };
	
	  if (action.type === CLICKED) {
	    return state + action.increment;
	  }
	
	  return state;
	}
	
	function click(increment) {
	  return { type: CLICKED, increment: increment };
	}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(43);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(37);
	
	var _app = __webpack_require__(72);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _start = __webpack_require__(80);
	
	var _start2 = _interopRequireDefault(_start);
	
	var _about = __webpack_require__(87);
	
	var _about2 = _interopRequireDefault(_about);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  return _react2.default.createElement(
	    _reactRouter.Route,
	    { component: _app2.default },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: _start2.default }),
	    _react2.default.createElement(_reactRouter.Route, { component: _about2.default, path: '/about/' })
	  );
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _getPrototypeOf = __webpack_require__(51);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(52);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(53);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(54);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(55);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _class, _temp; // React Hot Reload does not support stateless function components as of now
	/* eslint-disable react/prefer-stateless-function */
	
	
	var _react = __webpack_require__(43);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactHelmet = __webpack_require__(46);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _MuiThemeProvider = __webpack_require__(89);
	
	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);
	
	var _navbar = __webpack_require__(73);
	
	var _navbar2 = _interopRequireDefault(_navbar);
	
	var _footer = __webpack_require__(75);
	
	var _footer2 = _interopRequireDefault(_footer);
	
	var _style = __webpack_require__(79);
	
	var _style2 = _interopRequireDefault(_style);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var App = (_temp = _class = function (_Component) {
	    (0, _inherits3.default)(App, _Component);
	
	    function App() {
	        (0, _classCallCheck3.default)(this, App);
	        return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
	    }
	
	    (0, _createClass3.default)(App, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _MuiThemeProvider2.default,
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: _style2.default.main },
	                    _react2.default.createElement(_reactHelmet2.default, {
	                        link: [{
	                            rel: 'icon', href: '/favicon.png'
	                        }, {
	                            "rel": "stylesheet",
	                            "href": "//fonts.googleapis.com/icon?family=Material+Icons",
	                            "type": "text/css"
	                        }]
	                    }),
	                    _react2.default.createElement(_navbar2.default, null),
	                    this.props.children,
	                    _react2.default.createElement(_footer2.default, null)
	                )
	            );
	        }
	    }]);
	    return App;
	}(_react.Component), _class.propTypes = {
	    children: _react.PropTypes.node.isRequired
	}, _temp);
	exports.default = App;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(43);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(37);
	
	var _style = __webpack_require__(74);
	
	var _style2 = _interopRequireDefault(_style);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  return _react2.default.createElement(
	    'div',
	    { className: _style2.default.navbar },
	    _react2.default.createElement(
	      'div',
	      { className: 'wrapper' },
	      _react2.default.createElement(
	        'ul',
	        null,
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _reactRouter.IndexLink,
	            {
	              to: '/',
	              className: _style2.default.a,
	              activeClassName: _style2.default.active
	            },
	            'Home'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _reactRouter.Link,
	            {
	              to: '/about/',
	              className: _style2.default.a,
	              activeClassName: _style2.default.active
	            },
	            'About'
	          )
	        )
	      )
	    )
	  );
	};

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = {
		"navbar": "src-components-navbar-_style__navbar___3H4mn",
		"a": "src-components-navbar-_style__a___1X9AS",
		"active": "src-components-navbar-_style__active___hamBV"
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(43);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _style = __webpack_require__(76);
	
	var _style2 = _interopRequireDefault(_style);
	
	var _vg = __webpack_require__(77);
	
	var _vg2 = _interopRequireDefault(_vg);
	
	var _gh = __webpack_require__(78);
	
	var _gh2 = _interopRequireDefault(_gh);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  return _react2.default.createElement(
	    'div',
	    { className: _style2.default.footer },
	    _react2.default.createElement(
	      'div',
	      { className: 'wrapper' },
	      _react2.default.createElement(
	        'a',
	        { href: 'http://tech.vg.no', alt: 'VG Tech' },
	        _react2.default.createElement('img', { className: _style2.default.vg, src: _vg2.default })
	      ),
	      _react2.default.createElement(
	        'a',
	        { href: 'http://github.com/rocjs/roc', alt: 'Github.com Roc' },
	        _react2.default.createElement('img', { className: _style2.default.gh, src: _gh2.default })
	      )
	    )
	  );
	};

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = {
		"footer": "src-components-footer-_style__footer___jDhHL",
		"vg": "src-components-footer-_style__vg___1FxVN",
		"gh": "src-components-footer-_style__gh___h-Ekf"
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3ad909f5fa6443f42a01971861621954.png";

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "472739dfb5857b1f659f4c4c6b4568d0.png";

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = {
		"main": "src-screens-app-_style__main___3wEwY"
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _getPrototypeOf = __webpack_require__(51);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(52);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(53);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(54);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(55);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(43);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Card = __webpack_require__(81);
	
	var _FlatButton = __webpack_require__(82);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	var _Toggle = __webpack_require__(83);
	
	var _Toggle2 = _interopRequireDefault(_Toggle);
	
	var _Divider = __webpack_require__(84);
	
	var _Divider2 = _interopRequireDefault(_Divider);
	
	var _FontIcon = __webpack_require__(85);
	
	var _FontIcon2 = _interopRequireDefault(_FontIcon);
	
	var _colors = __webpack_require__(86);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = {
	    lightbulb: {},
	    switchName: {
	        float: 'left',
	        position: 'relative'
	    },
	    block: {},
	    toggle: {
	        marginBottom: 16
	    },
	    card: {
	        backgroundColor: '#fff'
	    },
	    cardContainer: {
	        margin: 10,
	        padding: 10
	    }
	}; // React Hot Reload does not support stateless function components as of now
	/* eslint-disable react/prefer-stateless-function */
	
	var Switch = function (_Component) {
	    (0, _inherits3.default)(Switch, _Component);
	
	    function Switch() {
	        (0, _classCallCheck3.default)(this, Switch);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (Switch.__proto__ || (0, _getPrototypeOf2.default)(Switch)).call(this));
	
	        _this.state = {
	            isOn: false
	        };
	        return _this;
	    }
	
	    (0, _createClass3.default)(Switch, [{
	        key: 'onToggle',
	        value: function onToggle(el, state) {
	            this.setState({
	                isOn: state
	            });
	        }
	    }, {
	        key: 'getLabel',
	        value: function getLabel(text, state) {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { style: styles.switchName },
	                    _react2.default.createElement(
	                        _FontIcon2.default,
	                        { className: 'material-icons', color: this.state.isOn ? _colors.yellow700 : _colors.grey500 },
	                        'lightbulb_outline'
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { style: styles.switchName },
	                    text
	                )
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var children = this.props.children;
	            return _react2.default.createElement(_Toggle2.default, { defaultToggled: this.state.isOn, label: this.getLabel(this.props.name, this.state.isOn),
	                onToggle: this.onToggle.bind(this), style: styles.toggle });
	        }
	    }]);
	    return Switch;
	}(_react.Component);
	
	var LightSwitch = function LightSwitch(props) {
	    return _react2.default.createElement(Switch, { name: props.name });
	};
	
	var Room = function Room(props) {
	    return _react2.default.createElement(
	        _Card.Card,
	        { style: styles.card },
	        _react2.default.createElement(_Card.CardHeader, {
	            title: props.name,
	            expanded: true,
	            actAsExpander: true,
	            showExpandableButton: true
	        }),
	        _react2.default.createElement(
	            _Card.CardText,
	            { expandable: false },
	            _react2.default.createElement(LightSwitch, { name: 'Taklampe' }),
	            _react2.default.createElement(LightSwitch, { name: 'St\xE5lampe' }),
	            _react2.default.createElement(LightSwitch, { name: 'Spot' }),
	            _react2.default.createElement(LightSwitch, { name: 'Le Klint' })
	        )
	    );
	};
	
	var Start = function (_Component2) {
	    (0, _inherits3.default)(Start, _Component2);
	
	    function Start() {
	        (0, _classCallCheck3.default)(this, Start);
	        return (0, _possibleConstructorReturn3.default)(this, (Start.__proto__ || (0, _getPrototypeOf2.default)(Start)).apply(this, arguments));
	    }
	
	    (0, _createClass3.default)(Start, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { style: styles.cardContainer },
	                    _react2.default.createElement(Room, { name: 'Living room' })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { style: styles.cardContainer },
	                    _react2.default.createElement(Room, { name: 'Kitchen' })
	                )
	            );
	        }
	    }]);
	    return Start;
	}(_react.Component);
	
	exports.default = Start;

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = require("material-ui/Card");

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = require("material-ui/FlatButton");

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = require("material-ui/Toggle");

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = require("material-ui/Divider");

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = require("material-ui/FontIcon");

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = require("material-ui/styles/colors");

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _getPrototypeOf = __webpack_require__(51);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(52);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(53);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(54);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(55);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(43);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _style = __webpack_require__(88);
	
	var _style2 = _interopRequireDefault(_style);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// React Hot Reload does not support stateless function components as of now
	/* eslint-disable react/prefer-stateless-function */
	var About = function (_Component) {
	  (0, _inherits3.default)(About, _Component);
	
	  function About() {
	    (0, _classCallCheck3.default)(this, About);
	    return (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || (0, _getPrototypeOf2.default)(About)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(About, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.main },
	        _react2.default.createElement(
	          'div',
	          { className: 'header' },
	          _react2.default.createElement(
	            'h1',
	            null,
	            'About'
	          ),
	          _react2.default.createElement(
	            'h2',
	            null,
	            'roc-template-web-app-react'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'wrapper' },
	          _react2.default.createElement(
	            'h4',
	            null,
	            'Roc is an open source project by VG'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'It allows you to create consistent developer experiences for your teams within the node and npm ecosystem. One of the primary goals is to avoid boilerplate fragmentations across projects. You are currently in a project powered by the ',
	            _react2.default.createElement(
	              'a',
	              { href: 'https://github.com/rocjs/roc-package-web-app-react', alt: 'Github.com Roc Web App React' },
	              'roc-package-web-app-react'
	            ),
	            ' package.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'The project itself is not React-centric.'
	          ),
	          _react2.default.createElement(
	            'h4',
	            null,
	            'Contribute'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'If you use the project and have ideas (or code) that will help us improve, please feel free to do so at ',
	            _react2.default.createElement(
	              'a',
	              { href: 'https://github.com/rocjs', alt: 'Github.com Roc' },
	              'Github'
	            ),
	            '.'
	          )
	        )
	      );
	    }
	  }]);
	  return About;
	}(_react.Component);
	
	exports.default = About;

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = {
		"main": "src-screens-about-_style__main___2vF0H"
	};

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map