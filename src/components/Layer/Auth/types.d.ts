import React from 'react';

export interface AuthLayerProps {
  children: React.ReactElement;
}

export interface TokenLoginEvent {
  token: string;
}
