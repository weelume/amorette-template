'use client';
import { createContext, useContext, type ReactNode } from 'react';
import type { HostConfig } from './types';
const Context = createContext<HostConfig>({});
export function TemplateHostProvider({ children, ...value }: HostConfig & {
    children: ReactNode;
}) { return <Context.Provider value={value}>{children}</Context.Provider>; }
export const useTemplateHost = () => useContext(Context);
