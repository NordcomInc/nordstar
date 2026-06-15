/**
 * Typed registry of every documented component.
 * Single source of truth for the nav, the components index page,
 * the <C> cross-link shortcode, and the <Related> footer.
 *
 * Add a new component by appending an entry here. Order matters —
 * the nav and index page render in declaration order.
 */
export type ComponentCategory = 'layout' | 'typography' | 'controls' | 'surfaces';

export type ComponentMeta = {
    /** Canonical component name as exported from `@nordcom/nordstar`. */
    name: string;
    /** URL-safe slug. Almost always `name.toLowerCase()`. */
    slug: string;
    /** npm package name for the standalone import. */
    package: string;
    /** Loose grouping for the components index. */
    category: ComponentCategory;
    /** One-line description used on the index card and the nav. */
    tagline: string;
    /** Slugs of related components — drives `<Related of="…" />`. */
    related: string[];
    /** Whether this component has accessibility considerations worth documenting. */
    hasA11y: boolean;
};

export const components = [
    {
        category: 'controls',
        hasA11y: true,
        name: 'Button',
        package: '@nordcom/nordstar-button',
        related: ['input', 'label'],
        slug: 'button',
        tagline: 'An interactive control for triggering actions.',
    },
    {
        category: 'surfaces',
        hasA11y: false,
        name: 'Card',
        package: '@nordcom/nordstar-card',
        related: ['view', 'header', 'heading'],
        slug: 'card',
        tagline: 'A bordered container that groups related content.',
    },
    {
        category: 'typography',
        hasA11y: true,
        name: 'Heading',
        package: '@nordcom/nordstar-heading',
        related: ['accented', 'label'],
        slug: 'heading',
        tagline: 'Display titles for pages and sections.',
    },
    {
        category: 'controls',
        hasA11y: true,
        name: 'Input',
        package: '@nordcom/nordstar-input',
        related: ['label', 'button'],
        slug: 'input',
        tagline: 'A text or textarea form control with optional label.',
    },
    {
        category: 'typography',
        hasA11y: true,
        name: 'Label',
        package: '@nordcom/nordstar-label',
        related: ['input', 'heading'],
        slug: 'label',
        tagline: 'Small uppercase text used for captions and form labels.',
    },
    {
        category: 'layout',
        hasA11y: false,
        name: 'View',
        package: '@nordcom/nordstar-view',
        related: ['header', 'card'],
        slug: 'view',
        tagline: 'A page-level layout wrapper.',
    },
    {
        category: 'surfaces',
        hasA11y: true,
        name: 'Details',
        package: '@nordcom/nordstar-details',
        related: ['card'],
        slug: 'details',
        tagline: 'A collapsible disclosure widget.',
    },
    {
        category: 'layout',
        hasA11y: true,
        name: 'Header',
        package: '@nordcom/nordstar-header',
        related: ['view', 'label'],
        slug: 'header',
        tagline: 'A site or section header with a logo slot and menu.',
    },
    {
        category: 'typography',
        hasA11y: false,
        name: 'Accented',
        package: '@nordcom/nordstar-accented',
        related: ['heading', 'label'],
        slug: 'accented',
        tagline: 'Inline text with an accent color, used to draw the eye.',
    },
    {
        category: 'layout',
        hasA11y: true,
        name: 'Separator',
        package: '@nordcom/nordstar-separator',
        related: ['card', 'view'],
        slug: 'separator',
        tagline: 'A thin rule that divides content visually or semantically.',
    },
    {
        category: 'typography',
        hasA11y: false,
        name: 'Kbd',
        package: '@nordcom/nordstar-kbd',
        related: ['button'],
        slug: 'kbd',
        tagline: 'A keyboard-key indicator for documenting shortcuts.',
    },
    {
        category: 'controls',
        hasA11y: true,
        name: 'Switch',
        package: '@nordcom/nordstar-switch',
        related: ['input', 'button'],
        slug: 'switch',
        tagline: 'A boolean toggle with an animated thumb.',
    },
    {
        category: 'surfaces',
        hasA11y: true,
        name: 'Tooltip',
        package: '@nordcom/nordstar-tooltip',
        related: ['button'],
        slug: 'tooltip',
        tagline: 'A floating label that explains an element on hover or focus.',
    },
    {
        category: 'controls',
        hasA11y: true,
        name: 'Select',
        package: '@nordcom/nordstar-select',
        related: ['input', 'button'],
        slug: 'select',
        tagline: 'A dropdown for choosing one option from a list.',
    },
    {
        category: 'surfaces',
        hasA11y: true,
        name: 'Accordion',
        package: '@nordcom/nordstar-accordion',
        related: ['details', 'card'],
        slug: 'accordion',
        tagline: 'A vertically stacked set of collapsible sections.',
    },
] as const satisfies readonly ComponentMeta[];

export type ComponentSlug = (typeof components)[number]['slug'];
export type ComponentName = (typeof components)[number]['name'];

export function getComponent(slug: ComponentSlug): ComponentMeta {
    const c = components.find((c) => c.slug === slug);
    if (!c) throw new Error(`Unknown component slug: ${slug}`);
    return c;
}

export function getComponentByName(name: string): ComponentMeta | undefined {
    return components.find((c) => c.name === name);
}
