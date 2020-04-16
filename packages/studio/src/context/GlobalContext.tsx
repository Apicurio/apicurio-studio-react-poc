import React from 'react';
import {Api, ApiDesignChange} from "@apicurio/models";

export interface GlobalState {
    apis: Api[],
    recentActivity: ApiDesignChange[],
    dashboardView: DashboardViews,
    notificationDrawerExpanded: boolean,
    selectedApiId: string
}

/**
 * List of views for the dashboard.
 */
export enum DashboardViews {
    list='list',
    card='card'
}

const initialState: GlobalState = {
    apis: [],
    dashboardView: DashboardViews.list,
    notificationDrawerExpanded: false,
    recentActivity: [],
    selectedApiId: ""
};

export interface GlobalContextObj {
    store: GlobalState,
    setDashboardView: (view: DashboardViews) => void,
    setNotificationDrawerExpanded: (isExpanded: boolean) => void,
    updateApis: (apis: Api[]) => void,
    updateRecentActivity: (recentActivity: ApiDesignChange[]) => void,
    setSelectedApiId: (selectedApiId: string) => void
};

export const GlobalContext = React.createContext({} as GlobalContextObj);

export class GlobalContextProvider extends React.Component<{}, GlobalState> {
    state: GlobalState = initialState;

    render() {
        return (
            <GlobalContext.Provider value={{
                setDashboardView: this.setDashboardView,
                setNotificationDrawerExpanded: this.setNotificationDrawerExpanded,
                setSelectedApiId: this.setSelectedApiId,
                store: this.state,
                updateApis: this.updateApis,
                updateRecentActivity: this.updateRecentActivity
            }}>
                {this.props.children}
            </GlobalContext.Provider>
        );
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

    private setSelectedApiId = (selectedApiId: string) => {
        this.setState({selectedApiId})
    }
};
