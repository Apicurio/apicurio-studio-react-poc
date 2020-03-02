import React from "react";
import { Button } from "@patternfly/react-core";
import {
  DataToolbar,
  DataToolbarItem,
  DataToolbarContent
} from "@patternfly/react-core/dist/esm/experimental";
import { ThIcon, ListIcon } from "@patternfly/react-icons";
//TODO: Need to add accessibility to the toolbar (see: http://patternfly-react.surge.sh/patternfly-4/demos/pagelayout)

export interface ApiToolbarProps {
  buttonClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  buttonSelected: string;
}

export const ApiToolbar: React.FunctionComponent<ApiToolbarProps> = ({
  buttonClick,
  buttonSelected
}: ApiToolbarProps) => {
  return (
    <DataToolbar>
      <DataToolbarContent>
        <DataToolbarItem>
          This is where the Data Toolbar should go
        </DataToolbarItem>
        <DataToolbarItem variant="pagination">
          <Button
            onClick={buttonClick}
            className={
              "app-data-toolbar-button-control " +
              (buttonSelected === "card" ? "pf-m-selected" : "")
            }
            variant="plain"
          >
            <ThIcon />
          </Button>
          <Button
            onClick={buttonClick}
            className={
              "app-data-toolbar-button-control " +
              (buttonSelected === "list" ? "pf-m-selected" : "")
            }
            variant="plain"
          >
            <ListIcon />
          </Button>
          <span className="app-toolbar-api-total">4 APIs found</span>
        </DataToolbarItem>
      </DataToolbarContent>
    </DataToolbar>
  );
};
