import React from 'react';
import { useStoreContext } from './../../../../context/reducers';
import { MockReference, PublishApi} from "@apicurio/models";
import { ICommand, MarshallCompat } from "apicurio-data-models";
import * as moment from "moment";
import './apiActivityItem.css';
import { Button } from '@patternfly/react-core';

import { PlusIcon,
    UserEditIcon,
    EditIcon,
    CopyrightIcon,
    InfoCircleIcon,
    PencilAltIcon,
    TrashIcon, 
    ServerIcon,
    TagIcon,
    CodeIcon,
    ExchangeAltIcon,
    QuestionIcon,
    CloudUploadAltIcon
} from '@patternfly/react-icons';

export const ApiActivityItem = ({activityApiName, activityType, activityOn, activityData}) => {

    const { recentActivityData } = useStoreContext();

    var _command: ICommand = null;
    var _publication: PublishApi;
    var _mock: MockReference;

    function command(): ICommand {
        if (_command == null) {
            _command = MarshallCompat.unmarshallCommand(JSON.parse(activityData));
        }
        return _command;
    }

    function publication(): PublishApi {
        if (_publication == null) {
            _publication = JSON.parse(recentActivityData.data);
        }
        return _publication;
    }

    function mock(): MockReference {
        if (_mock == null) {
            _mock = JSON.parse(recentActivityData.data);
        }
        return _mock;
    }

    // Return the correct icon
    const returnIcon = (itemtype: string) => {
        if (itemtype === "Command") {
            return commandIcon();
        }
        if (itemtype == "Publish") {
            return publicationIcon();
        }
        if (itemtype == "Mock") {
            return mockIcon();
        }
        return "document";
    }

    // Return the correct description
    const returnDescription = (itemtype: string) => {
        if (itemtype == "Command") {
            return commandDescription();
        }
        if (itemtype == "Publish") {
            return publicationDescription();
        }
        if (itemtype == "Mock") {
            return mockDescription();
        }
        return null;
    }

    // Command Icon
    const commandIcon = () => {
        // let rval: string = "user";
        switch (command()["type"]()) {
            case "AddPathItemCommand":
            case "AddPathItemCommand_20":
            case "AddPathItemCommand_30":
            case "AddSchemaDefinitionCommand":
            case "AddSchemaDefinitionCommand_20":
            case "AddSchemaDefinitionCommand_30":
            case "AddSecurityRequirementCommand":
            case "AddExampleCommand_30":
            case "AddParameterExampleCommand_30":
                return <PlusIcon/>
            case "ChangeContactCommand":
            case "ChangeContactCommand_20":
            case "ChangeContactCommand_30":
                return <UserEditIcon/>
            case "ChangeDescriptionCommand":
            case "ChangeDescriptionCommand_20":
            case "ChangeDescriptionCommand_30":
                return <EditIcon/>
            case "ChangeLicenseCommand":
            case "ChangeLicenseCommand_20":
            case "ChangeLicenseCommand_30":
                return <CopyrightIcon/>
            case "ChangeMediaTypeTypeCommand":
            case "ChangeParameterDefinitionTypeCommand":
            case "ChangeParameterDefinitionTypeCommand_20":
            case "ChangeParameterDefinitionTypeCommand_30":
            case "ChangeParameterTypeCommand":
            case "ChangeParameterTypeCommand_20":
            case "ChangeParameterTypeCommand_30":
            case "ChangePropertyTypeCommand":
            case "ChangePropertyTypeCommand_20":
            case "ChangePropertyTypeCommand_30":
            case "ChangeResponseTypeCommand":
            case "ChangeResponseTypeCommand_20":
            case "ChangeSchemaTypeCommand":
            case "ChangeResponseDefinitionTypeCommand":
            case "ChangeResponseDefinitionTypeCommand_20":
                return <InfoCircleIcon/>
            case "ChangePropertyCommand":
            case "ChangePropertyCommand_20":
            case "ChangePropertyCommand_30":
            case "ChangeSecuritySchemeCommand":
            case "ChangeSecuritySchemeCommand_20":
            case "ChangeSecuritySchemeCommand_30":
            case "ChangeServerCommand":
            case "ChangeTitleCommand":
            case "ChangeTitleCommand_20":
            case "ChangeTitleCommand_30":
            case "ChangeVersionCommand_20":
            case "ChangeVersionCommand":
            case "ChangeVersionCommand_30":
            case "SetExampleCommand":
            case "SetExampleCommand_20":
            case "SetExampleCommand_30":
            case "SetParameterExampleCommand_30":
            case "SetExtensionCommand":
            case "ReplaceSecurityRequirementCommand":
                return <PencilAltIcon/>
            case "DeleteAllOperationsCommand":
            case "DeleteAllParametersCommand_20":
            case "DeleteAllParametersCommand_30":
            case "DeleteAllPropertiesCommand":
            case "DeleteAllPropertiesCommand_20":
            case "DeleteAllPropertiesCommand_30":
            case "DeleteAllTagsCommand":
            case "DeleteAllServersCommand":
            case "DeleteAllSecurityRequirementsCommand":
            case "DeleteAllSecuritySchemesCommand":
            case "DeleteMediaTypeCommand":
            case "DeleteOperationCommand":
            case "DeleteOperationCommand_20":
            case "DeleteOperationCommand_30":
            case "DeleteParameterCommand":
            case "DeleteParameterCommand_20":
            case "DeleteParameterCommand_30":
            case "DeletePathCommand":
            case "DeletePathCommand_20":
            case "DeletePathCommand_30":
            case "DeletePropertyCommand":
            case "DeletePropertyCommand_20":
            case "DeletePropertyCommand_30":
            case "DeleteResponseCommand":
            case "DeleteResponseCommand_20":
            case "DeleteResponseCommand_30":
            case "DeleteSchemaDefinitionCommand":
            case "DeleteSchemaDefinitionCommand_20":
            case "DeleteSchemaDefinitionCommand_30":
            case "DeleteSecuritySchemeCommand":
            case "DeleteSecuritySchemeCommand_20":
            case "DeleteSecuritySchemeCommand_30":
            case "DeleteSecurityRequirementCommand":
            case "DeleteServerCommand":
            case "DeleteTagCommand":
            case "DeleteTagCommand_20":
            case "DeleteTagCommand_30":
            case "DeleteRequestBodyCommand_30":
            case "DeleteAllResponsesCommand":
            case "DeleteAllResponsesCommand_20":
            case "DeleteAllResponsesCommand_30":
            case "DeleteContactCommand":
            case "DeleteContactCommand_20":
            case "DeleteContactCommand_30":
            case "DeleteLicenseCommand":
            case "DeleteLicenseCommand_20":
            case "DeleteLicenseCommand_30":
            case "DeleteExampleCommand":
            case "DeleteExampleCommand_20":
            case "DeleteExampleCommand_30":
            case "DeleteParameterExampleCommand_30":
            case "DeleteExtensionCommand":
                <TrashIcon/>
            case "NewMediaTypeCommand":
            case "NewOperationCommand":
            case "NewOperationCommand_20":
            case "NewOperationCommand_30":
            case "NewParamCommand":
            case "NewParamCommand_20":
            case "NewParamCommand_30":
            case "NewPathCommand":
            case "NewPathCommand_20":
            case "NewPathCommand_30":
            case "NewRequestBodyCommand":
            case "NewRequestBodyCommand_20":
            case "NewRequestBodyCommand_30":
            case "NewResponseCommand":
            case "NewResponseCommand_20":
            case "NewResponseCommand_30":
            case "NewResponseDefinitionCommand":
            case "NewResponseDefinitionCommand_20":
            case "NewResponseDefinitionCommand_30":
            case "NewSchemaDefinitionCommand":
            case "NewSchemaDefinitionCommand_20":
            case "NewSchemaDefinitionCommand_30":
            case "NewSchemaPropertyCommand":
            case "NewSchemaPropertyCommand_20":
            case "NewSchemaPropertyCommand_30":
            case "NewSecuritySchemeCommand":
            case "NewSecuritySchemeCommand_20":
            case "NewSecuritySchemeCommand_30":
                return <PlusIcon/>
            case "NewServerCommand":
                return <ServerIcon/>
            case "NewTagCommand":
            case "NewTagCommand_20":
            case "NewTagCommand_30":
                return <TagIcon/>
            case "ReplaceOperationCommand":
            case "ReplaceOperationCommand_20":
            case "ReplaceOperationCommand_30":
            case "ReplacePathItemCommand":
            case "ReplacePathItemCommand_20":
            case "ReplacePathItemCommand_30":
            case "ReplaceSchemaDefinitionCommand":
            case "ReplaceSchemaDefinitionCommand_20":
            case "ReplaceSchemaDefinitionCommand_30":
            case "ReplaceDocumentCommand":
                return <CodeIcon/>
            case "RenamePathItemCommand":
            case "RenameParameterCommand":
            case "RenameSchemaDefinitionCommand":
            case "RenameSchemaDefinitionCommand_20":
            case "RenameSchemaDefinitionCommand_30":
            case "RenameResponseDefinitionCommand_20":
            case "RenameResponseDefinitionCommand_30":
                return <ExchangeAltIcon/>

            case "AggregateCommand":
                return aggregateCommandIcon();
            default:
                return <QuestionIcon/>
        }
        return null;
    }

        // Aggregate Command Icon
        const aggregateCommandIcon = () => {
            let name: string = command()["name"];
            let rval: string = "question";
            switch (name) {
                case "CreateRESTResource":
                    rval = "align-left";
                    break;
                case "NewResponseWithRef":
                    rval = "reply-all";
                    break;
            }
            return rval;
        }
    
        // Publication Icon
        const publicationIcon = () => {
            return publication().type.toLowerCase();
        }
    
        // Mock Icon
        const mockIcon = () => {
            return <CloudUploadAltIcon/>;
        }

    const commandDescription = () => {
        let rval: string;
        let ppath: string
        switch (command()["type"]()) {
            case "AddPathItemCommand":
            case "AddPathItemCommand_20":
            case "AddPathItemCommand_30":
                rval = "added a Path Item named " + command()["_newPathItemName"] + ".";
                break;
            case "AddSchemaDefinitionCommand":
            case "AddSchemaDefinitionCommand_20":
            case "AddSchemaDefinitionCommand_30":
                rval = "added a Data Type named " + command()["_newDefinitionName"] + ".";
                break;
            case "AddSecurityRequirementCommand":
                rval = `added a Security Requirement at location ${command()["_parentPath"]}.`;
                break;
            case "ChangeContactCommand":
            case "ChangeContactCommand_20":
            case "ChangeContactCommand_30":
                rval = "altered the API's Contact information.";
                break;
            case "ChangeDescriptionCommand":
            case "ChangeDescriptionCommand_20":
            case "ChangeDescriptionCommand_30":
                rval = "altered the API's description.";
                break;
            case "ChangeLicenseCommand":
            case "ChangeLicenseCommand_20":
            case "ChangeLicenseCommand_30":
                rval = "changed the API's license to " + command()["_newLicenseUrl"] + ".";
                break;
            case "ChangeMediaTypeTypeCommand":
                rval = "modified a Media Type (for node " + command()["_mediaTypePath"] + ").";
                break;
            case "ChangeParameterDefinitionTypeCommand":
            case "ChangeParameterDefinitionTypeCommand_20":
            case "ChangeParameterDefinitionTypeCommand_30":
            case "ChangeParameterTypeCommand":
            case "ChangeParameterTypeCommand_20":
            case "ChangeParameterTypeCommand_30":
                rval = "changed the type of a Parameter at location " + command()["_paramPath"] + ".";
                break;
            case "ChangePropertyTypeCommand":
            case "ChangePropertyTypeCommand_20":
            case "ChangePropertyTypeCommand_30":
                rval = "changed the type of the Schema Property named '" + command()["_propName"] + "' at location " + command()["_propPath"] + ".";
                break;
            case "ChangeSchemaTypeCommand":
                rval = "changed the type of the Schema at location " + command()["_schemaPath"] + ".";
                break;
            case "ChangeResponseTypeCommand":
            case "ChangeResponseTypeCommand_20":
            case "ChangeResponseDefinitionTypeCommand":
            case "ChangeResponseDefinitionTypeCommand_20":
                rval = "changed the type of an operation Response at location " + command()["_responsePath"] + ".";
                break;
            case "ChangePropertyCommand":
            case "ChangePropertyCommand_20":
            case "ChangePropertyCommand_30":
                rval = "changed the value of property '" + command()["_property"] + "' at location " + command()["_nodePath"] + ".";
                break;
            case "ChangeSecuritySchemeCommand":
            case "ChangeSecuritySchemeCommand_20":
            case "ChangeSecuritySchemeCommand_30":
                rval = "modified the details of Security Scheme named '" + command()["_schemeName"] + "'.";
                break;
            case "ChangeServerCommand":
                rval = "modified the details of Server '" + command()["_serverUrl"] + "' at location " + command()["_parentPath"] + ".";
                break;
            case "ChangeTitleCommand":
            case "ChangeTitleCommand_20":
            case "ChangeTitleCommand_30":
                rval = "altered the API's title to '" + command()["_newTitle"] + "'";
                break;
            case "ChangeVersionCommand":
            case "ChangeVersionCommand_20":
            case "ChangeVersionCommand_30":
                rval = "altered the API's version to '" + command()["_newVersion"] + "'";
                break;
            case "DeleteAllOperationsCommand":
                rval = "deleted all of the operations from path " + command()["_parentPath"] + ".";
                break;
            case "DeleteAllTagsCommand":
                rval = "deleted all of the tags from the API.";
                break;
            case "DeleteAllServersCommand":
                ppath = command()["_parentPath"];
                if (ppath == "/") {
                    rval = "deleted all of the servers from the API.";
                } else {
                    rval = `deleted all of the servers from the operation at path ${ ppath }.`;
                }
                break;
            case "DeleteAllSecurityRequirementsCommand":
                ppath = command()["_parentPath"];
                if (ppath == "/") {
                    rval = "deleted all of the security requirements from the API.";
                } else {
                    rval = `deleted all of the security requirements from the operation at path ${ ppath }.`;
                }
                break;
            case "DeleteAllSecuritySchemesCommand":
                rval = "deleted all of the security schemes from the API.";
                break;
            case "DeleteAllParametersCommand":
            case "DeleteAllParametersCommand_20":
            case "DeleteAllParametersCommand_30":
                rval = "deleted all of the " + command()["_paramType"] + " style parameters at location " + command()["_parentPath"] + ".";
                break;
            case "DeleteAllPropertiesCommand":
            case "DeleteAllPropertiesCommand_20":
            case "DeleteAllPropertiesCommand_30":
                rval = "deleted all of the Schema properties at location " + command()["_schemaPath"] + ".";
                break;
            case "DeleteMediaTypeCommand":
                rval = "deleted Media Type '" + command()["_mediaTypeName"] + "' at location " + command()["_mediaTypePath"] + ".";
                break;
            case "DeleteOperationCommand":
            case "DeleteOperationCommand_20":
            case "DeleteOperationCommand_30":
                rval = "deleted the '" + command()["_property"] + "' Operation at location " + command()["_parentPath"] + ".";
                break;
            case "DeleteParameterCommand":
            case "DeleteParameterCommand_20":
            case "DeleteParameterCommand_30":
                rval = "deleted a parameter at location " + command()["_parameterPath"] + ".";
                break;
            case "DeletePathCommand":
            case "DeletePathCommand_20":
            case "DeletePathCommand_30":
                rval = "deleted a Path Item named '" + command()["_path"] + "'.";
                break;
            case "DeletePropertyCommand":
            case "DeletePropertyCommand_20":
            case "DeletePropertyCommand_30":
                rval = "deleted a Property named '" + command()["_propertyName"] + "' at location " + command()["_propertyPath"] + ".";
                break;
            case "DeleteResponseCommand":
            case "DeleteResponseCommand_20":
            case "DeleteResponseCommand_30":
                rval = "deleted a Response with code '" + command()["_responseCode"] + "' at location " + command()["_responsePath"] + ".";
                break;
            case "DeleteSchemaDefinitionCommand":
            case "DeleteSchemaDefinitionCommand_20":
            case "DeleteSchemaDefinitionCommand_30":
                rval = "deleted the Data Type named '" + command()["_definitionName"] + "'.";
                break;
            case "DeleteSecuritySchemeCommand":
            case "DeleteSecuritySchemeCommand_20":
            case "DeleteSecuritySchemeCommand_30":
                rval = "deleted the Security Scheme named '" + command()["_schemeName"] + "'.";
                break;
            case "DeleteServerCommand":
                rval = "deleted a Server with url '" + command()["_serverUrl"] + "' at location " + command()["_parentPath"] + ".";
                break;
            case "DeleteTagCommand":
            case "DeleteTagCommand_20":
            case "DeleteTagCommand_30":
                rval = "deleted the global Tag definition with name '" + command()["_tagName"] + "'.";
                break;
            case "DeleteRequestBodyCommand_30":
                rval = "deleted the global Tag definition with name '" + command()["_tagName"] + "'.";
                break;
            case "DeleteAllResponsesCommand":
            case "DeleteAllResponsesCommand_20":
            case "DeleteAllResponsesCommand_30":
                rval = "deleted all of the Responses at location " + command()["_parentPath"] + ".";
                break;
            case "DeleteContactCommand":
            case "DeleteContactCommand_20":
            case "DeleteContactCommand_30":
                rval = "deleted the API's Contact information.";
                break;
            case "DeleteLicenseCommand":
            case "DeleteLicenseCommand_20":
            case "DeleteLicenseCommand_30":
                rval = "deleted the API's License information.";
                break;
            case "DeleteSecurityRequirementCommand":
                rval = `deleted a Security Requirement at location ${command()["_parentPath"]}.`;
                break;
            case "NewMediaTypeCommand":
                rval = "added a new Media Type named '" + command()["_newMediaType"] + "' at location " + command()["_nodePath"] + ".";
                break;
            case "NewOperationCommand":
            case "NewOperationCommand_20":
            case "NewOperationCommand_30":
                rval = "added a new Operation named '" + command()["_method"] + "' at location " + command()["_path"] + ".";
                break;
            case "NewParamCommand":
            case "NewParamCommand_20":
            case "NewParamCommand_30":
                rval = `added a new ${ command()["_paramType"] } parameter named '${ command()["_paramName"] }' at location ${ command()["_parentPath"] }.`;
                break;
            case "NewPathCommand":
            case "NewPathCommand_20":
            case "NewPathCommand_30":
                rval = "added a new Path named '" + command()["_newPath"] + "'.";
                break;
            case "NewRequestBodyCommand":
            case "NewRequestBodyCommand_20":
            case "NewRequestBodyCommand_30":
                rval = "added a Request Body for Operation at location  " + command()["_operationPath"] + ".";
                break;
            case "NewResponseCommand":
            case "NewResponseCommand_20":
            case "NewResponseCommand_30":
                rval = "added a new Response for response code '" + command()["_statusCode"] + "' for Operation at location " + command()["_operationPath"] + ".";
                break;
            case "NewResponseDefinitionCommand":
            case "NewResponseDefinitionCommand_20":
            case "NewResponseDefinitionCommand_30":
                rval = `added a new Response Definition named '${ command()["_newDefinitionName"]}'.`;
                break;
            case "NewSchemaDefinitionCommand":
            case "NewSchemaDefinitionCommand_20":
            case "NewSchemaDefinitionCommand_30":
                rval = `added a new Data Type named '${ command()["_newDefinitionName"]}'.`;
                break;
            case "NewSchemaPropertyCommand":
            case "NewSchemaPropertyCommand_20":
            case "NewSchemaPropertyCommand_30":
                rval = "added a new Schema Property named '" + command()["_propertyName"] + "' at location " + command()["_schemaPath"] + ".";
                break;
            case "NewSecuritySchemeCommand":
            case "NewSecuritySchemeCommand_20":
            case "NewSecuritySchemeCommand_30":
                rval = "added a new Security Scheme named '" + command()["_schemeName"] + "'.";
                break;
            case "NewServerCommand":
                rval = "added a new Server with url '" + command()["_server"].url + "' at location " + command()["_parentPath"] + ".";
                break;
            case "NewTagCommand":
            case "NewTagCommand_20":
            case "NewTagCommand_30":
                rval = "added a new Tag named '" + command()["_tagName"] + "'.";
                break;
            case "ReplaceOperationCommand":
            case "ReplaceOperationCommand_20":
            case "ReplaceOperationCommand_30":
                rval = "fully replaced the source for Operation '" + command()["_method"] + "' at location " + command()["_path"] + ".";
                break;
            case "ReplacePathItemCommand":
            case "ReplacePathItemCommand_20":
            case "ReplacePathItemCommand_30":
                rval = "fully replaced the source for Path '" + command()["_pathName"] + "'.";
                break;
            case "ReplaceDocumentCommand":
                rval = `fully replaced the source for the entire API!`;
                break;
            case "ReplaceSchemaDefinitionCommand":
            case "ReplaceSchemaDefinitionCommand_20":
            case "ReplaceSchemaDefinitionCommand_30":
                rval = "fully replaced the source for Data Type '" + command()["_defName"] + "'.";
                break;
            case "ReplaceSchemaDefinitionCommand":
            case "ReplaceSchemaDefinitionCommand_20":
            case "ReplaceSchemaDefinitionCommand_30":
                rval = "fully replaced the source for Data Type '" + command()["_defName"] + "'.";
                break;
            case "ReplaceSecurityRequirementCommand":
                rval = `modified the details of a Security Requirement at location ${command()["_parentPath"]}.`;
                break;
            case "RenamePathItemCommand":
                rval = `renamed a path from '${command()['_oldPath']}' to '${command()['_newPath']}'.`;
                break;
            case "RenameParameterCommand":
                rval = `renamed a ${command()['_paramIn']} parameter from '${command()['_oldParamName']}' to '${command()['_newParamName']}'.`;
                break;
            case "RenameSchemaDefinitionCommand":
            case "RenameSchemaDefinitionCommand_20":
            case "RenameSchemaDefinitionCommand_30":
                rval = "renamed a schema definition from '" + command()["_oldName"] + "' to '" + command()["_newName"] + "'.";
                break;
            case "RenameResponseDefinitionCommand":
            case "RenameResponseDefinitionCommand_20":
            case "RenameResponseDefinitionCommand_30":
                rval = "renamed a response definition from '" + command()["_oldName"] + "' to '" + command()["_newName"] + "'.";
                break;
            case "DeleteExampleCommand":
            case "DeleteExampleCommand_20":
                rval = "deleted an example for content-type '" + command()["_exampleContentType"] + "' from the Response at location " + command()["_responsePath"] + ".";
                break;
            case "DeleteExampleCommand_30":
                rval = "deleted an example named '" + command()["_exampleName"] + "' from the MediaType at location " + command()["_mediaTypePath"] + ".";
                break;
            case "DeleteExtensionCommand":
                rval = `removed the extension named '${ command()["_name"] }'.`;
                break;
            case "AddExampleCommand_30":
                rval = "added an example named '" + command()["_newExampleName"] + "' to the MediaType at location " + command()["_parentPath"] + ".";
                break;
            case "AddParameterExampleCommand_30":
                rval = "added an example named '" + command()["_newExampleName"] + "' to the Parameter at location " + command()["_parentPath"] + ".";
                break;
            case "SetExampleCommand_20":
                rval = "changed the value of the example for content-type '" + command()["_newContentType"] + "' for the Response at location " + command()["_parentPath"] + ".";
                break;
            case "SetExampleCommand_30":
                rval = "changed the value of the example named '" + command()["_newExampleName"] + "' for the MediaType at location " + command()["_parentPath"] + ".";
                break;
            case "SetParameterExampleCommand_30":
                rval = "changed the value of the example named '" + command()["_newExampleName"] + "' for the Parameter at location " + command()["_parentPath"] + ".";
                break;
            case "SetExtensionCommand":
                rval = `changed the value of the extension named '${ command()["_name"] }'.`;
                break;

            case "AggregateCommand":
                rval = aggregateCommandDescription();
                break;
            default:
                console.info("[ActivityItemComponent] WARNING - unhandled change item type: %s", command()["type"]());
                rval = "performed some unknown action...";
        }
        return rval;
    }

    const aggregateCommandDescription = () => {
        let name: string = command()["name"];
        let rval: string;
        switch (name) {
            case "CreateRESTResource":
                rval = `created a Data Type and associated REST resource named '${ command()["info"].dataType }'.`;
                break;
            case "NewResponseWithRef":
                rval = `created a Response that references the Response Definition at '${ command()["info"].$ref }'.`;
                break;
            default:
                console.info("[ActivityItemComponent] WARNING - unhandled AggregateCommand change item: %s", name);
                rval = "performed some unknown action...";
        }
        return rval;
    }

    const publicationDescription = () => {
        return "published the API to " + publication().type + ".";
    }

    const mockDescription = () => {
        return "mocked the API to " + mock().serviceRef
            + " at " + mock().mockURL + ".";
    }

    const returnApiName = (itemApiName: string) => {
        if (itemApiName && itemApiName.length > 50) {
            return itemApiName.substring(0, 50) + "...";
        }
        return itemApiName;
    }

    const returnTimeStamp = (itemOn: string) => {
        return moment(itemOn).fromNow();
    }

    return (
        <React.Fragment>
            <div className="app-notification-drawer__icon-text">
                <span className="app-notification-drawer__icon">
                    { returnIcon(activityType) }
                </span>
                <Button variant="link" isInline>
                    { returnApiName(activityApiName) }
                </Button>
            </div>
            <div>
                In { returnApiName(activityApiName) }, you { returnDescription(activityType) }
            </div>
            <div className="app-notification-drawer__time-stamp">
                { returnTimeStamp(activityOn) }
            </div>
        </React.Fragment>
    )
}

export default ApiActivityItem;
