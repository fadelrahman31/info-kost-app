const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const jwksUrl = process.env.JWKS_ENDPOINT;

export default function() {
  return jwt({
    // Dynamically provide a signing key based on the kid in the header and the signing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: jwksUrl
    }),
    credentialsRequired: false,
    algorithms: ['RS256'],
    getToken: function(req) {
      if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
      } else if (req.cookies && req.cookies.token) {
        return req.cookies.token;
      }
      return null;
    }
  });
}
