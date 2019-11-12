import React from 'react';
import { NextPage } from 'next';

interface IExtraProps {
	Layout?: React.ElementType;
}

export type AppPage = NextPage & IExtraProps;

export declare const Home: React.FC<AppPage>;
