import React from 'react';

export interface PluginRegistry {

    // Add more if needed from https://developers.mattermost.com/extend/plugins/webapp/reference
    registerPostDropdownMenuComponent(component)
    registerPostTypeComponent(typeName: string, component: React.ElementType)

}
