import React, { useContext, useState } from "react";
import {
  Brand,
  Card,
  CardHeader,
  CardHeaderMain,
  CardBody,
  CardFooter,
  CardActions,
  Gallery,
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

export const ApiCardView: React.FunctionComponent<ApiCardProps> = ({
  name,
  description,
  tags = []
}: ApiCardProps) => {
  const globalContext: GlobalContextObj = useContext(GlobalContext);
  const { selectedItems } = { ...globalContext.store.toolbarStatus };

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
  const filteredApis =
    globalContext.store.currentFilterCategory === "Name"
      ? apis.filter(api => {
          return (
            api.name
              .toLowerCase()
              .indexOf(globalContext.store.inputValue.toLowerCase()) !== -1
          );
        })
      : apis.filter(api => {
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

  const sortedByTimestamp = filteredApis.sort((a , b) => Number(b.createdOn) - Number(a.createdOn));

  return (
    <Gallery gutter="md">
      {sortedByTimestamp.map((api, key) => (
        <React.Fragment>
          <Card key={key}>
            <CardHeader>
            <CardHeaderMain>
              <Brand src={ApicurioIcon} />
            </CardHeaderMain>
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
                  id={"check " + api.id}
                  name="check"
                />
              </CardActions>
              </CardHeader>
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
