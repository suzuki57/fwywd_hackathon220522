import React from 'react';
import { WindowResponse } from '@/hook/WindowsResponse';

export const CTA: React.FC = () => {
    const { width} = WindowResponse();
    return width >= 900 ? (
      <>
       
      </>
  
    ):
    (
      <></>
    )
    };