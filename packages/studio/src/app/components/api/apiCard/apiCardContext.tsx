import React, { Component } from "react";

const ApiCardContext = React.createContext({
  res: [] as any,
  selectedItems: [] as any,
  areAllSelected: false,
  splitButtonDropdownIsOpen: false,
  page: 1,
  perPage: 2,
  totalItemCount: 2,
  isChecked: false,
  numSelected: 0,
  handleCheckboxClick: (checked: boolean, e: any) => {},
  selectAll: (e: any) => {},
  selectPage: (e: any) => {},
  selectNone: (e: any) => {},
  splitCheckboxSelectAll: (e: any) => {}
});

class ApiCardProvider extends React.Component {
  // Context state
  state = {
    res: [] as any,
    selectedItems: [] as any,
    areAllSelected: false,
    splitButtonDropdownIsOpen: false,
    page: 1,
    perPage: 2,
    totalItemCount: 2,
    isChecked: false,
    numSelected: 0,
    handleCheckboxClick: (checked: boolean, e: any) => {},
    selectAll: (e: any) => {},
    selectPage: (e: any) => {},
    selectNone: (e: any) => {},
    splitCheckboxSelectAll: (e: any) => {}
  };

//   render() {
//     const { children } = this.props;
//     // const vars  = this.state
//     // const { selectPage, selectNone, selectAll } = this

    return (
      <ApiCardContext.Provider value={this.state}>
        {children}
      </AppCardContext.Provider>
    );
  }
}

export default ApiCardContext;

// export { AppCardProvider }
