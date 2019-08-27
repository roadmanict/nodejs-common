try {
  const nock = require('nock');

  nock.disableNetConnect();
} catch (error) {
  // ignore error
}