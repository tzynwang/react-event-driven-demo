import React, { memo, useEffect } from 'react';
import { AUTH_EVENT } from '@Models/Law';
import type { AuthLayerProps, TokenLoginEvent } from './types';

function AuthLayer(props: AuthLayerProps): React.ReactElement {
  /* States */
  const { children } = props;

  /* Functions */
  function handleLogout(): void {
    console.info('receive logout event.');
  }
  function handleLoginByToken(e: Event): void {
    const event = e as CustomEvent<TokenLoginEvent>;
    console.info(`receive login by token event, token: ${event.detail.token}.`);
  }

  /* Hooks */
  useEffect(() => {
    document.addEventListener(AUTH_EVENT.LOGOUT, handleLogout);
    document.addEventListener(AUTH_EVENT.TOKEN_LOGIN, handleLoginByToken);
    return () => {
      document.removeEventListener(AUTH_EVENT.LOGOUT, handleLogout);
      document.removeEventListener(AUTH_EVENT.TOKEN_LOGIN, handleLoginByToken);
    };
  }, []);

  /* Main */
  return children;
}

export default memo(AuthLayer);
