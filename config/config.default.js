'use strict';
module.exports = appInfo => {
  const config = exports = {};
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1545141509031_3673';
  // add your config here
  config.middleware = [];
  config.security = {
    csrf: {
      headerName: 'x-csrf-token',
    },
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  config.upload = {
    path: 'app/public/upload',
    temp: 'app/public/.temp',
  };

  return config;
};
