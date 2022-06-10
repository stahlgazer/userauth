# Auth0 user registration/login template guide and setup for React.js
View live demo: https://userauth-khaki.vercel.app/

## Step1 - install auth0 dependency
```js
npm install @auth0/auth0-react
```
## Step2 - register an account with auth0, create app, configure app
- go to https://auth0.com/
- register an account
- create an app 
- select single-page application for react
- go to app settings and add localhost:3000 (or whichever you're using) and any deployment links for access. example below
![this is an image](https://i.gyazo.com/c7f72ce725f60708a4431f38572d87f3.png)

## Step3 - create provider and wrap app
clientid and domain are found in your auth0 app dashboard with the auth0 app you created.

```js
import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
  <Auth0Provider
    domain="client domain here"
    clientId="client id here"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
```

## Step4 - Create Login and Logout components
```js
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;
```
```js
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

export default LogoutButton;
```
## Step5 - Create Profile component and display user information
```js
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
```

### Now you should have auth0 + google social login setup to handle user authentication easily! Check out the documentation to dive further or if you get stuck.
https://auth0.com/docs
