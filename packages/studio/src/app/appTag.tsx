import React from 'react';
import './app.css'

interface AppTagProps {
  text: string
}

export const AppTag: React.FC<AppTagProps> = ({
  text
}) => (
  <span className="app-tag">
    {text}
  </span>
);