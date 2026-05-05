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
        name: 'Button',
        slug: 'button',
        package: '@nordcom/nordstar-button',
        category: 'controls',
        tagline: 'An interactive control for triggering actions.',
        related: ['input', 'label'],
        hasA11y: true,
    },
    {
        name: 'Card',
        slug: 'card',
        package: '@nordcom/nordstar-card',
        category: 'surfaces',
        tagline: 'A bordered container that groups related content.',
        related: ['view', 'header', 'heading'],
        hasA11y: false,
    },
    {
        name: 'Heading',
        slug: 'heading',
        package: '@nordcom/nordstar-heading',
        category: 'typography',
        tagline: 'Display titles for pages and sections.',
        related: ['accented', 'label'],
        hasA11y: true,
    },
    {
        name: 'Input',
        slug: 'input',
        package: '@nordcom/nordstar-input',
        category: 'controls',
        tagline: 'A text or textarea form control with optional label.',
        related: ['label', 'button'],
        hasA11y: true,
    },
    {
        name: 'Label',
        slug: 'label',
        package: '@nordcom/nordstar-label',
        category: 'typography',
        tagline: 'Small uppercase text used for captions and form labels.',
        related: ['input', 'heading'],
        hasA11y: true,
    },
    {
        name: 'View',
        slug: 'view',
        package: '@nordcom/nordstar-view',
        category: 'layout',
        tagline: 'A page-level layout wrapper.',
        related: ['header', 'card'],
        hasA11y: false,
    },
    {
        name: 'Details',
        slug: 'details',
        package: '@nordcom/nordstar-details',
        category: 'surfaces',
        tagline: 'A collapsible disclosure widget.',
        related: ['card'],
        hasA11y: true,
    },
    {
        name: 'Header',
        slug: 'header',
        package: '@nordcom/nordstar-header',
        category: 'layout',
        tagline: 'A site or section header with a logo slot and menu.',
        related: ['view', 'label'],
        hasA11y: true,
    },
    {
        name: 'Accented',
        slug: 'accented',
        package: '@nordcom/nordstar-accented',
        category: 'typography',
        tagline: 'Inline text with an accent color, used to draw the eye.',
        related: ['heading', 'label'],
        hasA11y: false,
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
