import React from 'react';
import {Api, ApiDesignChange} from "@apicurio/models";

export interface GlobalState {
    apis: Api[],
    recentActivity: ApiDesignChange[],
    dashboardView: DashboardViews,
    notificationDrawerExpanded: boolean,
    apiDrawerExpanded: boolean
}

/**
 * List of views for the dashboard.
 */
export enum DashboardViews {
    list='list',
    card='card'
}

const initialState: GlobalState = {
    apiDrawerExpanded: false,
    apis: [],
    dashboardView: DashboardViews.list,
    notificationDrawerExpanded: false,
    recentActivity: []
};

export interface GlobalContextObj {
    setApiDrawerExpanded: (isExpanded: boolean) => void,
    store: GlobalState,
    setDashboardView: (view: DashboardViews) => void,
    setNotificationDrawerExpanded: (isExpanded: boolean) => void,
    updateApis: (apis: Api[]) => void,
    updateRecentActivity: (recentActivity: ApiDesignChange[]) => void,
};

export const GlobalContext = React.createContext({} as GlobalContextObj);

export class GlobalContextProvider extends React.Component<{}, GlobalState> {
    state: GlobalState = initialState;

    render() {
        return (
            <GlobalContext.Provider value={{
                setApiDrawerExpanded: this.setApiDrawerExpanded,
                setDashboardView: this.setDashboardView,
                setNotificationDrawerExpanded: this.setNotificationDrawerExpanded,
                store: this.state,
                updateApis: this.updateApis,
                updateRecentActivity: this.updateRecentActivity
            }}>
                {this.props.children}
            </GlobalContext.Provider>
        );
    }

    private setApiDrawerExpanded = (apiDrawerExpanded: boolean) => {
        this.setState({apiDrawerExpanded})
    }

    private setDashboardView = (dashboardView: DashboardViews) => {
        this.setState({dashboardView});
    }

    private setNotificationDrawerExpanded = (notificationDrawerExpanded: boolean) => {
        this.setState({notificationDrawerExpanded})
    }

    private updateApis = (apis: Api[]) => {
        this.setState({apis})
    }

    private updateRecentActivity = (recentActivity: ApiDesignChange[]) => {
        this.setState({recentActivity})
    }
};
