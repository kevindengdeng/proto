/**
 * @fileoverview gRPC-Web generated client stub for dengdeng.ops.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var validate_validate_pb = require('../../../validate/validate_pb.js')
const proto = {};
proto.dengdeng = {};
proto.dengdeng.ops = {};
proto.dengdeng.ops.v1 = require('./ops_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.dengdeng.ops.v1.OpsSystemClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.dengdeng.ops.v1.OpsSystemPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.dengdeng.ops.v1.OpsMessage,
 *   !proto.dengdeng.ops.v1.OpsMessage>}
 */
const methodDescriptor_OpsSystem_Echo = new grpc.web.MethodDescriptor(
  '/dengdeng.ops.v1.OpsSystem/Echo',
  grpc.web.MethodType.UNARY,
  proto.dengdeng.ops.v1.OpsMessage,
  proto.dengdeng.ops.v1.OpsMessage,
  /**
   * @param {!proto.dengdeng.ops.v1.OpsMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dengdeng.ops.v1.OpsMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dengdeng.ops.v1.OpsMessage,
 *   !proto.dengdeng.ops.v1.OpsMessage>}
 */
const methodInfo_OpsSystem_Echo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dengdeng.ops.v1.OpsMessage,
  /**
   * @param {!proto.dengdeng.ops.v1.OpsMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dengdeng.ops.v1.OpsMessage.deserializeBinary
);


/**
 * @param {!proto.dengdeng.ops.v1.OpsMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dengdeng.ops.v1.OpsMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dengdeng.ops.v1.OpsMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dengdeng.ops.v1.OpsSystemClient.prototype.echo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dengdeng.ops.v1.OpsSystem/Echo',
      request,
      metadata || {},
      methodDescriptor_OpsSystem_Echo,
      callback);
};


/**
 * @param {!proto.dengdeng.ops.v1.OpsMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dengdeng.ops.v1.OpsMessage>}
 *     Promise that resolves to the response
 */
proto.dengdeng.ops.v1.OpsSystemPromiseClient.prototype.echo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dengdeng.ops.v1.OpsSystem/Echo',
      request,
      metadata || {},
      methodDescriptor_OpsSystem_Echo);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.dengdeng.ops.v1.UserClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.dengdeng.ops.v1.UserPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.dengdeng.ops.v1.OpsMessage,
 *   !proto.dengdeng.ops.v1.OpsMessage>}
 */
const methodDescriptor_User_Login = new grpc.web.MethodDescriptor(
  '/dengdeng.ops.v1.User/Login',
  grpc.web.MethodType.UNARY,
  proto.dengdeng.ops.v1.OpsMessage,
  proto.dengdeng.ops.v1.OpsMessage,
  /**
   * @param {!proto.dengdeng.ops.v1.OpsMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dengdeng.ops.v1.OpsMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dengdeng.ops.v1.OpsMessage,
 *   !proto.dengdeng.ops.v1.OpsMessage>}
 */
const methodInfo_User_Login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dengdeng.ops.v1.OpsMessage,
  /**
   * @param {!proto.dengdeng.ops.v1.OpsMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dengdeng.ops.v1.OpsMessage.deserializeBinary
);


/**
 * @param {!proto.dengdeng.ops.v1.OpsMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dengdeng.ops.v1.OpsMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dengdeng.ops.v1.OpsMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dengdeng.ops.v1.UserClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dengdeng.ops.v1.User/Login',
      request,
      metadata || {},
      methodDescriptor_User_Login,
      callback);
};


/**
 * @param {!proto.dengdeng.ops.v1.OpsMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dengdeng.ops.v1.OpsMessage>}
 *     Promise that resolves to the response
 */
proto.dengdeng.ops.v1.UserPromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dengdeng.ops.v1.User/Login',
      request,
      metadata || {},
      methodDescriptor_User_Login);
};


module.exports = proto.dengdeng.ops.v1;

