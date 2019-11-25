import { NextPage } from 'next';

export interface AppPage<P = {}> extends NextPage<P> {
	Layout: React.ReactNode;
}
