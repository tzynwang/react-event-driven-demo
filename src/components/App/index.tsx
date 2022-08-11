import React, { memo } from 'react';
import cn from 'classnames';
import Button from '@Components/Common/Button';
import { AUTH_EVENT } from '@Models/Law';
import scopedStyle from './index.module.css';
import type { TokenLoginEvent } from './types';

function App(): React.ReactElement {
  /* Function */
  function handleLoginByToken(): void {
    // https://use-form.netlify.app/interfaces/_node_modules_typescript_lib_lib_dom_d_.customeventinit.html
    const event = new CustomEvent<TokenLoginEvent>(AUTH_EVENT.TOKEN_LOGIN, {
      detail: { token: 'a very long token' },
    });
    document.dispatchEvent(event);
  }
  function handleLogout(): void {
    const event = new Event(AUTH_EVENT.LOGOUT);
    document.dispatchEvent(event);
  }

  /* Main */
  return (
    <main className={cn(scopedStyle.main)}>
      <div className={cn(scopedStyle.mainButtonWrapper)}>
        <Button
          onClick={handleLoginByToken}
          label="Emit AUTH_EVENT.TOKEN_LOGIN event"
        />
        <Button onClick={handleLogout} label="Emit AUTH_EVENT.LOGOUT event" />
      </div>
    </main>
  );
}

export default memo(App);
