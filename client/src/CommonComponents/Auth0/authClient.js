
import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './auth0-variables';

class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: AUTH_CONFIG.domain,
      clientID: AUTH_CONFIG.clientId,
      redirectUri: AUTH_CONFIG.callbackUrl,
      responseType: 'token id_token',
      scope: 'openid profile',
    });

    this.getProfile = this.getProfile.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  getProfile() {
    try {

      const profile = JSON.parse(sessionStorage.getItem('profile'));
      return profile;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  getProfileForeName() {
    const profile = this.getProfile();
    return profile ? profile.given_name : 'anon';
  }

  getIdToken() {
    return sessionStorage.getItem('idToken');
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err);
        if (!authResult || !authResult.idToken) {
          return reject(err);
        }
        const expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
        sessionStorage.setItem('id_token', authResult.idToken);
        sessionStorage.setItem('expires_at', expiresAt);
        sessionStorage.setItem('profile', JSON.stringify(authResult.idTokenPayload));
        resolve();
      });
    });
  }

  isAuthenticated() {
    return new Date().getTime() < sessionStorage.getItem('expires_at');
  }

  signIn() {
    this.auth0.authorize();
  }

  signOut() {
    sessionStorage.removeItem('id_token');
    sessionStorage.removeItem('expires_at');
    sessionStorage.removeItem('profile');
  }
}

const auth0Client = new Auth();

export default auth0Client;
