import type { Metadata } from 'next';
import { Playground } from './playground';

/**
 * Server entry for the e2e playground: owns the (noindex) metadata and renders
 * the client `<Playground/>` surface that hosts every interactive component.
 */
export const metadata: Metadata = {
    robots: { follow: false, index: false },
    title: 'Playground',
};

export default function PlaygroundPage() {
    return <Playground />;
}
