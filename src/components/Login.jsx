import { StytchLogin } from '@stytch/react';
import { Products } from '@stytch/vanilla-js';

const LoginOrSignup = () => {
   const config = {
      products: [Products.emailMagicLinks],
      emailMagicLinksOptions: {
        loginRedirectURL: 'http://localhost:3000/authenticate',
        loginExpirationMinutes: 60,
        signupRedirectURL: 'http://localhost:3000/authenticate',
        signupExpirationMinutes: 60,
      },
    };

   return <StytchLogin config={config} />;
};

export default LoginOrSignup;