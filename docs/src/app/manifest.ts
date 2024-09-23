import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Nordstar Component Library',
        short_name: 'Nordstar'
    };
}
