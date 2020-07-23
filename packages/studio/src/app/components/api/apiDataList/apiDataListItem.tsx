import React, { useContext } from "react";
import {
  Button,
  DataListItem,
  DataListItemCells,
  DataListItemRow,
  DataListCell,
  DataListCheck,
  DataListAction,
} from "@patternfly/react-core";
import { ApiTag } from "../apiTag";
import { ApiDropdownKebab } from "../apiDropDownKebab";
import ApicurioIcon from "../../../assets/apicurio-icon.png";
import "./apiDataListItem.css";
import { GlobalContext, GlobalContextObj } from "../../../../context";
import { Link } from "react-router-dom";

export const ApiDataListItem = () => {
  const { apis } = { ...useContext(GlobalContext).store };
  const globalContext: GlobalContextObj = useContext(GlobalContext);
  const setApiDrawerState = (apiDrawerState: boolean, currentApiId: string) => {
    globalContext.setApiDrawerExpanded(!apiDrawerState);
  };
  // const setCurrentApiState = (currentApiEdited: string, currentApiId: string) => {
  //   globalContext.setCurrentApiEdited(currentApiEdited);
  // };

  const filteredApis =
    globalContext.store.currentFilterCategory === "Name"
      ? apis.filter((api) => {
          return (
            api.name
              .toLowerCase()
              .indexOf(globalContext.store.inputValue.toLowerCase()) !== -1
          );
        })
      : apis.filter((api) => {
          for (let i = 0; i < api.tags.length; i++) {
            if (
              api.tags[i]
                .toLowerCase()
                .indexOf(globalContext.store.inputValue.toLowerCase()) !== -1
            ) {
              return api.name.toLowerCase();
            } else if (globalContext.store.inputValue === "") {
              return apis;
            }
          }

          return;
        });

  const sortedByTimestamp = filteredApis.sort(
    (a, b) => Number(b.createdOn) - Number(a.createdOn)
  );

  return (
    <React.Fragment>
      {sortedByTimestamp.map((api, index) => (
        <DataListItem
          id={api.id}
          key={index}
          aria-labelledby={`data-list-item-${api.id}`}
        >
          <DataListItemRow>
            <DataListCheck
              checked={false}
              aria-labelledby={`data-list-item-${api.id}`}
              name={`data-list-item-check-${api.id}`}
            />
            <DataListItemCells
              dataListCells={[
                <DataListCell
                  isIcon={true}
                  className="api-data-list-cell"
                  key={`primary content ${api.id}`}
                >
                  <img src={ApicurioIcon} />
                </DataListCell>,
                <DataListCell key={`secondary content ${api.id}`}>
                  <div className="app-api-title">{api.name}</div>
                  <div className="app-api-description">{api.description}</div>
                  <div className="app-api-tag-group">
                    {api.tags.map((tag, index) => (
                      <ApiTag key={index} text={tag} />
                    ))}
                  </div>
                </DataListCell>,
              ]}
            />
            <DataListAction
              aria-labelledby={`data-list-item-${api.id}`}
              id={`data-list-item-${api.id}`}
              aria-label="Actions"
            >
              <Button
                variant="link"
                onClick={() =>
                  setApiDrawerState(globalContext.store.apiDrawerExpanded)
                }
              >
                View Details
              </Button>
              <Link to={`/edit-api/apiID=${api.id}`}>
                <Button 
                // onClick={setCurrentApiState(globalContext.store.currentApiEdited)}
                 variant="secondary">Edit API</Button>
              </Link>
              {/* <Button variant="secondary">Edit API</Button> */}

              <ApiDropdownKebab />
            </DataListAction>
          </DataListItemRow>
        </DataListItem>
      ))}
    </React.Fragment>
  );
};

export default ApiDataListItem;
