import type { ReactNode } from 'react';
import './nordstar-provider.module.scss';

export type NordstarProviderProps = {
    children: ReactNode;
};

export const NordstarProvider = ({ children }: NordstarProviderProps) => {
    return <div>{children}</div>;
};
