const config = {
    production: {
      secret: process.env.secret,
      MONGO_URI: process.env.MONGO_URI,
      port: process.env.PORT,
    },
    development: {
      secret: 'I_AM_SKYBOOT',
      MONGO_URI: 'mongodb+srv://sky3oot:12345@cluster0.lm1hk.mongodb.net/bookDB?retryWrites=true&w=majority',
      port: 3000,
    },
  };
  
  export const getConfig = env => config[env] || config.development;