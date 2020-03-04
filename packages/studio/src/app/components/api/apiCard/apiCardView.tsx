import React, { useContext, useState } from "react";
import {
  Card,
  CardHead,
  CardHeader,
  CardBody,
  CardFooter,
  CardActions,
  Gallery,
  Dropdown,
  KebabToggle,
  DropdownItem,
  DropdownSeparator,
  Checkbox
} from "@patternfly/react-core";
import { ApiTag } from "../apiTag";
import ApicurioIcon from "./../../../assets/apicurio-icon.png";
import "./apiCard.css";
import AppDropdownKebab from "../apiDropDownKebab/apiDropdownKebab";
import { GlobalContext, GlobalContextObj } from "../../../../context";

interface ApiCardProps {
  id?: string;
  name?: string;
  description?: string;
  tags?: string[];
  type?: string;
}

<<<<<<< HEAD


export const ApiCardView: React.FunctionComponent<ApiCardProps> = ({
  name,
  description,
  tags = []
}: ApiCardProps) => {
  const {
    apiData,
    selectedItems,
    isChecked,
    res,
    totalItemCount
    } = useStoreContext();

  const [state, setState] = useContext(StoreContext);

  
  // const card = useContext(AppCardContext);
=======
export const AppCardView: React.FunctionComponent<AppCardProps> = ({
  name,
  description,
  tags = []
}: AppCardProps) => {
  const globalContext: GlobalContextObj = useContext(GlobalContext);
  const { selectedItems } = { ...globalContext.store.toolbarStatus };
>>>>>>> 7f2fbd0... rebased with context changes

  const getAllItems = () => {
    const collection: number[] = [];
    for (const items of selectedItems) {
      // tslint:disable-next-line: radix
      collection.push(parseInt(items.id));
    }
    return collection;
  };

  const handleCheckboxClick = (checked: boolean, e: any) => {
    const { value } = e.target;

    if (checked) {
      globalContext.updateToolbarStatus({
        areAllSelected:
          globalContext.store.apis.length - 1 === selectedItems.length,
        selectedItems: selectedItems.concat(value * 1)
      });
    } else {
      globalContext.updateToolbarStatus({
        areAllSelected: false,
        selectedItems: selectedItems.filter(item => item !== Number(value))
      });
    }
  };

  const { apis } = { ...useContext(GlobalContext).store };

  return (
    <Gallery gutter="md">
      {apis.map((api, key) => (
        <React.Fragment>
          <Card key={key}>
            <CardHead>
              <img src={ApicurioIcon} />
              <CardActions>
                <AppDropdownKebab />
                <Checkbox
                  value={api.id}
                  // tslint:disable-next-line: radix
                  isChecked={globalContext.store.toolbarStatus.selectedItems.includes(
                    parseInt(api.id)
                  )}
                  checked={globalContext.store.toolbarStatus.isChecked}
                  onChange={handleCheckboxClick}
                  aria-label="card checkbox"
                  id="check-1"
                  name="check1"
                />
              </CardActions>
            </CardHead>
            <CardHeader className="api-card-view-card-header">
              {api.name}
            </CardHeader>
            <CardBody className="api-card-view-card-body">
              {api.description}
            </CardBody>
            <CardFooter>
              <div className="api-api-tag-group">
                {api.tags.map(
                  (tag: string, index: string | number | undefined) => (
                    <ApiTag text={tag} />
                  )
                )}
              </div>
            </CardFooter>
          </Card>
        </React.Fragment>
      ))}
    </Gallery>
  );
};
