'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ComponentProps, ReactNode } from 'react';
import { cn } from '@/utils/cn';

export type NavLinkProps = {
    href: string;
    /** Match the pathname exactly instead of also matching nested routes. */
    exact?: boolean;
    children: ReactNode;
} & Omit<ComponentProps<typeof Link>, 'href' | 'children'>;

/**
 * `<NavLink/>`, a docs sidebar link that highlights itself when its route is active.
 *
 * `usePathname()` already strips the configured `basePath`, so it compares cleanly
 * against the `href` values declared in the nav. Nested routes (e.g. a component
 * page under its section) keep the parent marked active unless `exact` is set.
 */
export function NavLink({ href, exact = false, className, children, ...props }: NavLinkProps) {
    const pathname = usePathname();
    const active = exact ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

    return (
        <Link
            aria-current={active ? 'page' : undefined}
            className={cn(
                'flex items-center gap-3 transition-colors duration-150 hover:text-primary',
                active ? 'font-bold text-foreground' : 'text-foreground-highlight',
                className,
            )}
            data-active={active || undefined}
            href={href as ComponentProps<typeof Link>['href']}
            {...props}
        >
            {/* Decorative marker — hidden from assistive tech so the link's accessible name stays the label. */}
            <span aria-hidden="true" className="select-none">
                •
            </span>
            {children}
        </Link>
    );
}
