import { Heading, View } from '@nordcom/nordstar';
import type { Metadata } from 'next';
import { getAvailableComponents, getComponentByName } from '@/utils/components';

export type ComponentDocsPageParams = {
    name: string;
};

export async function generateMetadata({ params }: { params: ComponentDocsPageParams }): Promise<Metadata> {
    const { name } = await params;

    const { key } = getComponentByName(name);

    return {
        title: key,
        alternates: {
            canonical: `https://nordcominc.github.io/nordstar/docs/components/${name}/`,
        },
    };
}

export function generateStaticParams(): ComponentDocsPageParams[] {
    return getAvailableComponents().map((name) => ({ name: name.toLowerCase() }));
}

export default async function DocsComponentsComponentPage({ params }: { params: ComponentDocsPageParams }) {
    const { name } = await params;

    const { Component, key } = getComponentByName(name);
    const SpoofedComponent = Component as React.ComponentType<any>;

    return (
        <View withoutWrapper={true}>
            <Heading className="capitalize" level="h1">
                {key || name}
            </Heading>

            <div className="mt-3 rounded-lg border border-background-highlight p-3">
                <SpoofedComponent label={key} withoutWrapper={true}>
                    {key}
                </SpoofedComponent>
            </div>
        </View>
    );
}
