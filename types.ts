import React from 'react';

export interface ProductSpec {
  feature: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  specs: string[];
  details: ProductSpec[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Application {
  id: string;
  title: string;
  icon: React.ReactNode;
}
