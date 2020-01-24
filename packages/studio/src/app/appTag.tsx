import React, { ReactNode } from 'react';
import './app.css'

type AppTagProps = {
  text: string
}


export const AppTag: React.FC<AppTagProps> = ({
  text
}) => (
  <span className="app-tag">
    {text}
  </span>
);