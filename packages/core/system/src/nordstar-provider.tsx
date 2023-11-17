import type { ReactNode } from 'react';
import './styling.scss';

export type NordstarProviderProps = {
    children: ReactNode;
};

export const NordstarProvider = ({ children }: NordstarProviderProps) => {
    return <>{children}</>;
};
