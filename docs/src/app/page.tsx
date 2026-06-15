import { Accented, Button, Card, Heading, Label } from '@nordcom/nordstar';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    description:
        'An opinionated component library for building human-centric user interfaces by Nordcom AB and contributors.',
    alternates: {
        canonical: 'https://nordcominc.github.io/nordstar/',
    },
    title: {
        absolute: 'Nordstar Component Library',
    },
};

const features = [
    {
        body: 'Install the library, wrap your app in a single provider, and ship your first themed component in minutes. Every step is copy-paste ready.',
        cta: { color: 'primary', href: '/docs/getting-started', label: 'Get Started', variant: 'solid' },
        eyebrow: '1. Guides',
    },
    {
        body: 'Accessible, polymorphic building blocks — buttons, inputs, menus, switches and more — each fitted to the same token contract and keyboard-ready out of the box.',
        cta: { color: 'foreground', href: '/docs/components', label: 'Browse Components', variant: 'solid' },
        eyebrow: '2. Components',
    },
    {
        body: 'Own the look. Drive color, type, spacing, borders and motion from one theme object — or plain CSS variables — without ejecting or overriding internals.',
        cta: { color: 'foreground', href: '/docs/customization/theme', label: 'Make It Yours', variant: 'outline' },
        eyebrow: '3. Customization',
    },
] as const;

export default async function IndexPage() {
    return (
        <>
            <div className="flex w-[52rem] max-w-full flex-col gap-[calc(var(--nordstar-layout-section-spacing)/3)] pb-[var(--nordstar-layout-section-spacing)]">
                <Label className="tracking-wide" color="secondary">
                    Nordstar — by Nordcom Group Inc.
                </Label>
                <Heading>
                    Nordstar by <Accented>Nordcom</Accented> Group Inc. and contributors
                </Heading>
                <Heading level="h2">
                    An opinionated component library for building <Accented>human</Accented>-centric user interfaces
                </Heading>

                <div className="mt-[calc(var(--nordstar-layout-block-padding)/2)] flex flex-row flex-wrap gap-3">
                    <Button as={Link} color="primary" href="/docs/getting-started" variant="solid">
                        Get Started
                    </Button>
                    <Button
                        as={Link}
                        color="foreground"
                        href="https://github.com/NordcomInc/nordstar"
                        target="_blank"
                        variant="outline"
                    >
                        View on GitHub
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-[var(--nordstar-layout-block-padding)] min-[950px]:grid-cols-3">
                {features.map((feature) => (
                    <Card
                        className="transition-[transform,box-shadow,border-color] duration-200 ease-out-soft hover:-translate-y-1 hover:border-foreground-highlight hover:shadow-floating [&_a]:w-full [&_p]:mt-[calc(var(--nordstar-layout-block-padding)/4)] [&_p]:text-[0.95em] [&_p]:text-foreground-highlight"
                        key={feature.eyebrow}
                    >
                        <Card.Header>
                            <Label className="leading-none" color="foreground">
                                {feature.eyebrow}
                            </Label>
                        </Card.Header>

                        <p>{feature.body}</p>

                        <Card.Divider />

                        <Button
                            as={Link}
                            color={feature.cta.color}
                            href={feature.cta.href}
                            variant={feature.cta.variant}
                        >
                            {feature.cta.label}
                        </Button>
                    </Card>
                ))}
            </div>
        </>
    );
}
