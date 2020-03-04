
import React from 'react';
// import { Card, CardHead, CardHeader, CardBody, CardFooter, CardActions, Gallery, Dropdown, KebabToggle, DropdownItem, DropdownSeparator, Checkbox } from '@patternfly/react-core';
// import {ApiTag} from '../apiTag';
// import ApicurioIcon from './assets/apicurio-icon.png';
// import './apiCard.css'
// import { useStoreContext } from '../../../../context/reducers';
// import { ApiDropdownKebab } from './../apiDropDownKebab';

// interface AppCardProps {
//   id?: string,
//   name?: string,
//   description?: string,
//   tags?: string[],
//   type?: string
// }

// export const AppCard: React.FunctionComponent<AppCardProps> = ({ name, description, tags = []}: AppCardProps) => {
//     const { apiData } = useStoreContext();

//     return (

//         <Gallery gutter="md">
 
//          {apiData.map((api, key) => (
//            <React.Fragment>
//              <Card key={key}>
//                <CardHead>
//                  <img src={ApicurioIcon} />
//                  <CardActions>
//                    <ApiDropdownKebab/>
//                    <Checkbox
//                      value={api.id}
//                     //  isChecked={selectedItems.includes(parseInt(api.id))}
//                     //  checked={isChecked}
//                     //  onChange={this.handleCheckboxClick}
//                     //  aria-label="card checkbox example"
//                      id="check-1"
//                     //  name="check1"
//                    />
//                  </CardActions>
//                </CardHead>
//                <CardHeader className="app-card-view-card-header">
//                  {api.name}
//                </CardHeader>
//                <CardBody className="app-card-view-card-body">
//                  {api.description}
//                </CardBody>
//                <CardFooter>
//                  <div className="app-api-tag-group">
//                    {api.tags.map(
//                      (tag: string, index: string | number | undefined) => (
//                        <ApiTag text={tag} />
//                      )
//                    )}
//                  </div>
//                </CardFooter>
//              </Card>
//            </React.Fragment>
//          ))}
//        </Gallery>
//      );
// }