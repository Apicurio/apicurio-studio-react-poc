import React from 'react';
import { Button, DataListItem, DataListItemCells, DataListItemRow, DataListCell, DataListCheck, DataListAction } from '@patternfly/react-core';
import AppDropdownKebab from './appDropdownKebab';
import {AppTag} from './appTag';
import ApicurioIcon from './assets/apicurio-icon.png';
import './app.css'

interface AppDataListItemProps {
  id: string,
  name: string,
  description: string,
  createdOn?: Date,
  tags: string[],
  type?: string,
  key: number,
  onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void
}

class AppDataListItem extends React.Component<AppDataListItemProps> {
  constructor(props: AppDataListItemProps) {
    super(props);
  }
  render() {
    return (
      <DataListItem key={this.props.key} id={this.props.id} aria-labelledby={`data-list-item-${this.props.id}`}>
        <DataListItemRow>
          <DataListCheck aria-labelledby={`data-list-item-${this.props.id}`} name={`data-list-item-check-${this.props.id}`}/>
          <DataListItemCells
            dataListCells={[
              <DataListCell isIcon className="app-data-list-cell" key={`primary content ${this.props.id}`}>
                <img src={ApicurioIcon}/>
              </DataListCell>,
              <DataListCell key={`secondary content ${this.props.id}`}>
                <div className="app-api-title">
                  {this.props.name}
                </div>
                <div className="app-api-description">
                  {this.props.description}
                </div>
                <div className="app-api-tag-group">
                  {this.props.tags.map((tag, index) =>
                    <AppTag key={index} text={tag}/>
                  )}
                </div>
              </DataListCell>
            ]}
            />
          <DataListAction aria-labelledby={`data-list-item-${this.props.id}`} id={`data-list-item-${this.props.id}`} aria-label="Actions">
              <Button variant="link" onClick={this.props.onClick}>View Details</Button>
              <Button variant="secondary">Edit API</Button>
              <AppDropdownKebab/>
          </DataListAction>
        </DataListItemRow>
      </DataListItem>
    )
  }
};

export default AppDataListItem;