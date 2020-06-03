import React, { createContext } from "react";
import { Api, ApiDesignChange, ApiCollaborator } from "@apicurio/models";

export interface ToolbarStatus {
  areAllSelected: boolean;
  selectedItems: any[];
  isChecked?: boolean;
}

export interface GlobalState {
  apis: Api[];
  collaborators: ApiCollaborator[];
  recentActivity: ApiDesignChange[];
  notificationDrawerExpanded: boolean;
  dashboardView: DashboardViews;
  toolbarStatus: ToolbarStatus;
  apiDrawerExpanded: boolean;
  selectedApiId: string;
}

/**
 * List of views for the dashboard.
 */
export enum DashboardViews {
  list = "list",
  card = "card"
}

const initialState: GlobalState = {
  apiDrawerExpanded: false,
  apis: [],
  collaborators: [],
  dashboardView: DashboardViews.list,
  notificationDrawerExpanded: false,
  recentActivity: [],
  selectedApiId: "",
  toolbarStatus: {
    areAllSelected: false,
    isChecked: false,
    selectedItems: []
  }
};

export interface GlobalContextObj {
  setApiDrawerExpanded: (isExpanded: boolean) => void;
  setSelectedApiId: (selectedApiId: string) => void;
  store: GlobalState;
  setDashboardView: (view: DashboardViews) => void;
  setNotificationDrawerExpanded: (isExpanded: boolean) => void;
  updateApis: (apis: Api[]) => void;
  updateCollaborators: (collaborators: ApiCollaborator[]) => void;
  updateRecentActivity: (recentActivity: ApiDesignChange[]) => void;
  updateToolbarStatus: (toolbarStatus: ToolbarStatus) => void;
}

export const GlobalContext = createContext({} as GlobalContextObj);

export class GlobalContextProvider extends React.Component<{}, GlobalState> {
  state: GlobalState = initialState;

  render() {
    return (
      <GlobalContext.Provider
        value={{
          setApiDrawerExpanded: this.setApiDrawerExpanded,
          setDashboardView: this.setDashboardView,
          setNotificationDrawerExpanded: this.setNotificationDrawerExpanded,
          setSelectedApiId: this.setSelectedApiId,
          store: this.state,
          updateApis: this.updateApis,
          updateCollaborators: this.updateCollaborators,
          updateRecentActivity: this.updateRecentActivity,
          updateToolbarStatus: this.updateToolbarStatus
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }

  private setApiDrawerExpanded = (apiDrawerExpanded: boolean) => {
    this.setState({ apiDrawerExpanded });
  };

  private setSelectedApiId = (selectedApiId: string) => {
    this.setState({ selectedApiId });
  };

  private setDashboardView = (dashboardView: DashboardViews) => {
    this.setState({ dashboardView });
  };

  private setNotificationDrawerExpanded = (
    notificationDrawerExpanded: boolean
  ) => {
    this.setState({ notificationDrawerExpanded });
  };

  private updateApis = (apis: Api[]) => {
    this.setState({ apis });
  };
  
  private updateRecentActivity = (recentActivity: ApiDesignChange[]) => {
    this.setState({ recentActivity });
  };

  private updateCollaborators = (collaborators: ApiCollaborator[]) => {
    this.setState({ collaborators });
  };

  private updateToolbarStatus = (toolbarStatus: ToolbarStatus) => {
    this.setState({ toolbarStatus });
  };
}
