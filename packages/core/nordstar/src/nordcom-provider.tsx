import type { ReactNode } from 'react';

export type NordstarProviderProps = {
    children: ReactNode;
};

export const NordstarProvider = ({ children }: NordstarProviderProps) => {
    return <>{children}</>;
};
