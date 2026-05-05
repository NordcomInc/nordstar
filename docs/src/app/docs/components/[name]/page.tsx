import { getAvailableComponents, getComponentByName } from '@/utils/components';
import { Heading, View } from '@nordcom/nordstar';
import type { Metadata } from 'next';

export type ComponentDocsPageParams = {
    name: string;
};

export async function generateMetadata({ params: { name } }: { params: ComponentDocsPageParams }): Promise<Metadata> {
    const { key } = getComponentByName(name);

    return {
        title: key,
        alternates: {
            canonical: `https://nordcominc.github.io/nordstar/docs/components/${name}/`
        }
    };
}

export function generateStaticParams(): ComponentDocsPageParams[] {
    return getAvailableComponents().map((name) => ({ name: name.toLowerCase() }));
}

export default async function DocsComponentsComponentPage({ params: { name } }: { params: ComponentDocsPageParams }) {
    const { Component, key } = getComponentByName(name);
    const SpoofedComponent = Component as React.ComponentType<any>;

    return (
        <View withoutWrapper={true}>
            <Heading level="h1" className="capitalize">
                {key || name}
            </Heading>

            <div className="border-background-highlight mt-3 rounded-lg border p-3">
                <SpoofedComponent withoutWrapper={true} label={key}>
                    {key}
                </SpoofedComponent>
            </div>
        </View>
    );
}
