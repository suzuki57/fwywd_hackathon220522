import React from 'react';
import { WindowResponse } from '@/hook/WindowsResponse';

export const CTA: React.FC = () => {
  const { width } = WindowResponse();
  return width >= 900 ? (
    <div className='w-full bg-gray-100'>
      <h1 className='text-title mb-16 pt-20'>スキマバイトで旅行しよう</h1>
      <div className='flex justify-center'>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLScQ6GHACpxa4lgufIFqYzcQwRE9HMGGaVenf8BnFRgI7CPYzg/viewform'>
          <button className='mb-24 h-[60px] w-[330px] rounded-[50px] bg-orange text-xl font-bold text-white hover:opacity-70'>
            会員登録
          </button>
        </a>
      </div>
    </div>
  ) : (
    <div className='w-full bg-gray-100'>
      <h1 className='text-title mb-16 pt-20 text-2xl'>
        スキマバイトで
        <br />
        旅行しよう
      </h1>
      <div className='flex justify-center'>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLScQ6GHACpxa4lgufIFqYzcQwRE9HMGGaVenf8BnFRgI7CPYzg/viewform'>
          <button className='mb-24 h-[60px] w-[330px] rounded-[50px] bg-orange text-xl font-bold text-white hover:opacity-70'>
            会員登録
          </button>
        </a>
      </div>
    </div>
  );
};
