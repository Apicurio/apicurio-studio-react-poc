import React, { ReactNode } from 'react';
import { Button, DataListItem, DataListItemCells, DataListItemRow, DataListCell, DataListCheck, DataListAction } from '@patternfly/react-core';
import {AppDropdownKebab} from './appDropdownKebab';
import {AppTag} from './appTag';
import ApicurioIcon from './assets/apicurio-icon.png';
import './app.css'

type AppDataListItemProps = {
  apiName: string,
  apiDescription: string,
  apiTag1: string,
  apiTag2: string,
  rowid: number,
  key: number,
  onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void
}

class AppDataListItem extends React.Component<AppDataListItemProps> {
  constructor(props: AppDataListItemProps) {
    super(props);
  }
  render() {
    return (
      <DataListItem key={this.props.key} id={this.props.rowid} aria-labelledby={`data-list-item-${this.props.rowid}`}>
        <DataListItemRow>
          <DataListCheck aria-labelledby={`data-list-item-${this.props.rowid}`} name={`data-list-item-check-${this.props.rowid}`}/>
          <DataListItemCells
            dataListCells={[
              <DataListCell isIcon key={`primary content ${this.props.rowid}`}>
                <img src={ApicurioIcon}/>
              </DataListCell>,
              <DataListCell key={`secondary content ${this.props.rowid}`}>
                <div className="app-api-title">
                  {this.props.apiName}
                </div>
                <div className="app-api-description">
                  {this.props.apiDescription}
                </div>
                <div className="app-api-tag-group">
                <AppTag
                  text={this.props.apiTag1}
                />
                <AppTag
                  text={this.props.apiTag2}
                />
                </div>
              </DataListCell>
            ]}
            />
          <DataListAction aria-labelledby={`data-list-item-${this.props.rowid}`} id={`data-list-item-${this.props.rowid}`} aria-label="Actions">
              <Button variant="link" onClick={this.props.onClick}>View Details</Button>
              <Button variant="secondary">Edit API</Button>
              <AppDropdownKebab />
          </DataListAction>
        </DataListItemRow>
      </DataListItem>
    )
  }
};

export default AppDataListItem;