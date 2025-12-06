import React from 'react';

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface CardData {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
}

export interface MarqueeItem {
  text: string;
  highlight: string;
}