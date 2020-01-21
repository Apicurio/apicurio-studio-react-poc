import React, { ReactNode } from 'react';
import './app.css'
//import {UserDropdown} from './components/userDropDown'
//let isDropdownOpen: boolean = false;
//const userDropdownItems: ReactNode[] = [];

export const AppTag = ({
  text
}) => (
  <span class="app-tag">
    {text}
  </span>
);