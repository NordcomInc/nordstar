import * as Nordstar from '@nordcom/nordstar';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

export async function getAvailableComponentsFromFS() {
    const componentsDir = join(process.cwd(), '..', 'packages', 'components');
    const componentNames = (await readdir(componentsDir, { withFileTypes: true }))
        .filter((entry) => entry.isDirectory())
        .map((entry) => ({
            name: entry.name.toLowerCase().split('.').slice(0, -1).join('.')
        }));

    console.log(componentNames);
    return componentNames;
}

export function getAvailableComponents() {
    return (Object.keys(Nordstar) as Array<keyof typeof Nordstar>)
        .filter((key) => (Nordstar[key] as { displayName?: unknown }).displayName)
        .map((key) => key)
        .filter((key) => !['nordstarprovider'].includes(key.toLowerCase()));
}

export function getComponentByName(name: string) {
    const nameLower = name.toLowerCase();
    const componentKey = Object.keys(Nordstar).find((key) => key.toLowerCase() === nameLower);

    if (!componentKey) {
        throw new Error(`Component with name "${name}" not found.`);
    }

    return {
        Component: Nordstar[componentKey as keyof typeof Nordstar],
        key: componentKey
    };
}
