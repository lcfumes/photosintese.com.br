'use strict';

const Joi = require('joi');
// var cloudinary = require('cloudinary');

// cloudinary.config({ 
//   cloud_name: 'sample', 
//   api_key: '874837483274837', 
//   api_secret: 'a676b67565c6767a6767d6767f676fe1' 
// });

//http://cloudinary.com/documentation/node_integration#getting_started_guide

/**
 * handlers
 */
module.exports.getAllDocuments = (request, reply) => {
    reply({"ENV": process.env.NODE_ENV}).code(200);
}

/**
 * configs
 */
module.exports.getAll = {
  handler: this.getAllDocuments,
  description: 'Informations of the API',
  notes: 'Return informations about the API',
  tags: ['api', 'api'],
  plugins: {
    'hapi-swagger': {
      responses: {
        '200': {}
      }
    }
  },
  validate: {
    headers: Joi.object().keys({
      'content-type': Joi.string().required().valid(['application/json']).default('application/json')          
    }).unknown()
  }
};