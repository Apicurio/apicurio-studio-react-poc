import React from 'react';
import './apiTag.css'

export interface ApiTagProps {
  text: string
}

export const ApiTag: React.FC<ApiTagProps> = ({
  text
}) => (
  <span className="api-tag">
    {text}
  </span>
);