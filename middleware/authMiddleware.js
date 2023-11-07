const verifyUserRole = (requiredRole) => {
    return (req, res, next) => {
      const token = req.headers['authorization'];
  
      if (typeof token !== 'undefined') {
        jwt.verify(token, secretKey, (err, authData) => {
          if (err) {
            res.sendStatus(403); // Forbidden
          } else {
            if (authData.nombreRol === requiredRole) {
              req.authData = authData;
              next();
            } else {
              res.sendStatus(403); // Forbidden (el usuario no tiene el rol requerido)
            }
          }
        });
      } else {
        res.sendStatus(401); // Unauthorized
      }
    };
  };
  
  module.exports = {
    verifyUserRole
  };
  