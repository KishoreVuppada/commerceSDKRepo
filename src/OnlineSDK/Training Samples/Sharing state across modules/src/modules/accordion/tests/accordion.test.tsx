/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

import { buildMockModuleProps } from '@msdyn365-commerce/core';
import { wrapInResolvedAsyncResult } from '@msdyn365-commerce-modules/retail-actions';
import { render } from 'enzyme';
import * as React from 'react';

import { IAccordionExpandedState } from '../../../actions/accordion-state/accordion-state';
import Accordion from '../accordion';
import { IAccordionData } from '../accordion.data';
import { IAccordionProps } from '../accordion.props.autogenerated';
import accordionView from '../accordion.view';

const mockAccordionData: IAccordionData = {
    accordionExpandedState: wrapInResolvedAsyncResult({
        isAllExpanded: true
    } as IAccordionExpandedState)
};

const myReactNodeChild1: React.ReactNode = <div />;
const myReactNodeChild2: React.ReactNode = <div />;
const slotsItem = {
    accordionItems: [myReactNodeChild1, myReactNodeChild2] as React.ReactNode[]
};

const mockActions = {};

describe('Accordion integration tests', () => {
    it('renders correctly', () => {
        const moduleProps: IAccordionProps<IAccordionData> = {
            ...(buildMockModuleProps(mockAccordionData, mockActions, {}) as IAccordionProps<IAccordionData>),
            resources: {},
            slots: slotsItem,

            // @ts-expect-error
            renderView: accordionView
        };

        const component = render(<Accordion {...moduleProps} />);
        expect(component).toMatchSnapshot();
    });
});