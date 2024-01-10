import type { Meta } from '@storybook/react';
import React from 'react';
import type { CardProps } from '../src';
import { Card } from '../src';

const story: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'solid'],
            defaultValue: 'default'
        },
        color: {
            control: 'select',
            options: ['default', 'primary', 'secondary'],
            defaultValue: 'default'
        }
    }
};

const Template = (args: CardProps<any>) => <Card {...args} style={{ width: '18rem', maxWidth: '100%' }} />;

export const Default = {
    render: Template,
    args: {
        variant: 'default',
        color: 'default',
        children: (
            <>
                Hello World!
                <Card.Divider />
                Content inside of the card
                <br />
                Another line of content inside of the card.
                <br />
                And another one.
                <Card.Divider />
                Imaginary footer
            </>
        )
    }
};

export const DefaultSolid = {
    render: Template,
    args: {
        variant: 'solid',
        color: 'default',
        children: <>Content inside of the card</>
    }
};
export const PrimarySolid = {
    render: Template,
    args: {
        variant: 'solid',
        color: 'primary',
        children: <>Content inside of the card</>
    }
};
export const SecondarySolid = {
    render: Template,
    args: {
        variant: 'solid',
        color: 'secondary',
        children: <>Content inside of the card</>
    }
};

export default story;
