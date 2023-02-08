module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', 'GG3vbnh4P9VKHo9SIPm9tw==,Zb/Q9jm8voHnnygorQF6yQ==,DrV3kv+Ay3kZVDE6mvfscw==,2ykBhjXI/6DI4yRpjJ3mJA=='),
  },
});
