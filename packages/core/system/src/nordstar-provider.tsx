import type { ReactNode } from 'react';
import styles from './nordstar-provider.module.scss';
import './styling.scss';

export type NordstarProviderProps = {
    children: ReactNode;
};

export const NordstarProvider = ({ children }: NordstarProviderProps) => {
    return <div className={styles.container}>{children}</div>;
};
