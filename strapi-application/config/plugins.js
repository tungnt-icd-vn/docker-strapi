module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'sendmail',
      settings: {
        defaultFrom: 'tungnt97@proton.me',
        defaultReplyTo: 'tungnt97@proton.me',
      },
    },
  },
});