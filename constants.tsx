
import React from 'react';
import { Sun, Battery, Wifi, Zap, CloudRain, Award, ShieldCheck, MapPin, Building2, Trees, Navigation, School } from 'lucide-react';
import { Product, Feature, Application } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'hs-60',
    name: '60W All-in-One Solar Street Light',
    image: '/images/hs-60.png',
    backImage: '/images/hs-60-back.png',
    description: 'A perfect blend of performance and efficiency, this 60W all-in-one solar street light is ideal for medium-sized outdoor spaces. It features an integrated solar panel, high-lumen LED light, durable lithium battery, and motion sensor in a compact unit. The included remote control allows easy adjustment of brightness levels and lighting modes.',
    specs: ['96 LED OSRAM', '18Ah LiFePO4 Battery', '18W/6V Mono Panel', 'IP65 Weatherproof'],
    details: [
      { feature: 'LED Power', value: '18W High-Efficiency LED Chip' },
      { feature: 'Battery', value: '18Ah LiFePO4 3.2V - Long-lasting and Safe' },
      { feature: 'LED Chip', value: '96 LED OSRAM - Superior Lumen Output' },
      { feature: 'Material', value: 'Durable Aluminium Body' },
      { feature: 'Solar Panel', value: '18W/6V (Mono) - High Conversion Efficiency' },
      { feature: 'Charging Time', value: '6-8 Hours' },
      { feature: 'Working Hours', value: '14-15 Hours' },
      { feature: 'Waterproof Rating', value: 'IP65' },
      { feature: 'Lighting Modes', value: 'Dusk to Dawn, Motion Sensor, Continuous' }
    ]
  },
  {
    id: 'hs-90',
    name: '90W All-in-One Solar Street Light',
    image: '/images/hs-90.png',
    backImage: '/images/hs-90-back.png',
    description: 'Designed for high-efficiency outdoor lighting, this 90W all-in-one solar street light combines a powerful LED lamp, integrated solar panel, and motion sensor in a sleek, weatherproof unit. Ideal for streets, parks, campuses, and industrial areas.',
    specs: ['144 LED OSRAM', '24Ah LiFePO4 Battery', '27W/6V Mono Panel', 'Motion Sensor'],
    details: [
      { feature: 'LED Power', value: '24W High-Efficiency LED Chip' },
      { feature: 'Battery', value: '24Ah LiFePO4 3.2V' },
      { feature: 'LED Chip', value: '144 LED OSRAM - High Lumen & Uniform Lighting' },
      { feature: 'Material', value: 'Durable Aluminium Body' },
      { feature: 'Solar Panel', value: '27W/6V (Mono)' },
      { feature: 'Charging Time', value: '6-8 Hours' },
      { feature: 'Working Hours', value: '14-15 Hours' },
      { feature: 'Waterproof Rating', value: 'IP65' },
      { feature: 'Lighting Modes', value: 'Dusk to Dawn, Motion Sensor, Continuous' }
    ]
  },
  {
    id: 'hs-120',
    name: '120W All-in-One Solar Street Light',
    image: '/images/hs-120.png',
    backImage: '/images/hs-120-back.png',
    description: 'The 120W all-in-one solar street light is designed for high-intensity illumination in large outdoor areas like highways and parking lots. Features a powerful LED, efficient monocrystalline panel, and smart motion sensor.',
    specs: ['192 LED OSRAM', '36Ah LiFePO4 Battery', '36W/6V Mono Panel', 'Extended Capacity'],
    details: [
      { feature: 'LED Power', value: '30W High-Efficiency LED Chip' },
      { feature: 'Battery', value: '36Ah LiFePO4 3.2V - Extended Power' },
      { feature: 'LED Chip', value: '192 LED OSRAM - High Lumen Output' },
      { feature: 'Material', value: 'Durable Aluminium Body' },
      { feature: 'Solar Panel', value: '36W/6V Monocrystalline' },
      { feature: 'Charging Time', value: '6-8 Hours' },
      { feature: 'Working Hours', value: 'Up to 14-15 Hours' },
      { feature: 'Waterproof Rating', value: 'IP65' },
      { feature: 'Lighting Modes', value: 'Dusk to Dawn, Motion Sensor, Continuous' }
    ]
  },
  {
    id: 'hs-180',
    name: '180W All-in-One Solar Street Light',
    image: '/images/hs-180.png',
    backImage: '/images/hs-180-back.png',
    description: 'Provides powerful illumination for highways, industrial areas, and large public spaces. Features a high-efficiency solar panel, ultra-bright LED, and smart controller in a compact design.',
    specs: ['288 LED OSRAM', '48Ah LiFePO4 Battery', '50W/6V Mono Panel', 'Highway Grade'],
    details: [
      { feature: 'LED Power', value: '36W High-Efficiency LED Chip' },
      { feature: 'Battery', value: '48Ah LiFePO4 3.2V' },
      { feature: 'LED Chip', value: '288 LED OSRAM - Uniform Lighting' },
      { feature: 'Material', value: 'Durable Aluminium Body' },
      { feature: 'Solar Panel', value: '50W/6V Monocrystalline' },
      { feature: 'Charging Time', value: '6-8 Hours' },
      { feature: 'Working Hours', value: 'Up to 14-15 Hours' },
      { feature: 'Waterproof Rating', value: 'IP65' },
      { feature: 'Lighting Modes', value: 'Dusk to Dawn, Motion Sensor, Continuous' }
    ]
  },
  {
    id: 'hs-240',
    name: '240W All-in-One Solar Street Light',
    image: '/images/hs-240.png',
    backImage: '/images/hs-240-back.png',
    description: 'Our maximum brightness model, offering coverage for airports and large highways. It features 384 OSRAM LEDs and a massive 52Ah LiFePO4 battery for sustained performance.',
    specs: ['384 LED OSRAM', '52Ah LiFePO4 Battery', '58W/6V Mono Panel', 'Airport Ready'],
    details: [
      { feature: 'LED Power', value: '42W High-Efficiency LED Chip' },
      { feature: 'Battery', value: '52Ah LiFePO4 3.2V - Maximum Capacity' },
      { feature: 'LED Chip', value: '384 LED OSRAM - Ultra High Lumen' },
      { feature: 'Material', value: 'Durable Aluminium Body' },
      { feature: 'Solar Panel', value: '58W/6V Monocrystalline' },
      { feature: 'Charging Time', value: '6-8 Hours' },
      { feature: 'Working Hours', value: 'Up to 15-16 Hours' },
      { feature: 'Waterproof Rating', value: 'IP65' },
      { feature: 'Lighting Modes', value: 'Dusk to Dawn, Motion Sensor, Continuous' }
    ]
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'osram',
    title: 'OSRAM LED Tech',
    description: 'High-efficacy German LED chips for superior brightness and longevity.',
    icon: <Sun className="w-8 h-8 text-yellow-400" />
  },
  {
    id: 'battery',
    title: 'LiFePO4 Battery',
    description: 'Next-gen Lithium Ferro Phosphate battery with 3000+ cycle life.',
    icon: <Battery className="w-8 h-8 text-green-500" />
  },
  {
    id: 'motion',
    title: 'Motion Sensor',
    description: 'Smart PIR sensors dim lights to 30% when no activity is detected.',
    icon: <Wifi className="w-8 h-8 text-blue-400" />
  },
  {
    id: 'savings',
    title: 'Zero Electricity',
    description: '100% off-grid performance with zero recurring energy costs.',
    icon: <Zap className="w-8 h-8 text-yellow-400" />
  },
  {
    id: 'waterproof',
    title: 'IP65 Weatherproof',
    description: 'Built to withstand heavy Indian monsoons and dust storms.',
    icon: <CloudRain className="w-8 h-8 text-cyan-400" />
  },
  {
    id: 'longevity',
    title: 'Long Life',
    description: 'Engineered for over 50,000 hours of maintenance-free operation.',
    icon: <Award className="w-8 h-8 text-green-500" />
  }
];

export const APPLICATIONS: Application[] = [
  { id: 'highway', title: 'Streets & Highways', icon: <Navigation className="w-10 h-10" /> },
  { id: 'park', title: 'Parks & Gardens', icon: <Trees className="w-10 h-10" /> },
  { id: 'industrial', title: 'Industrial Areas', icon: <Building2 className="w-10 h-10" /> },
  { id: 'rural', title: 'Rural Roads', icon: <MapPin className="w-10 h-10" /> },
  { id: 'campus', title: 'Campuses & Parking', icon: <School className="w-10 h-10" /> }
];

export const CONTACT_INFO = {
  phone: '+91 8094000802',
  email: 'solarsystems0751@gmail.com',
  address: 'Rajasthan, India'
};
