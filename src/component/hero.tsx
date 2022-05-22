import Image from 'next/image';
import React from 'react';
import { WindowResponse } from '@/hook/WindowsResponse';

export const Hero: React.FC = () => {
  const { width } = WindowResponse();
  return width >= 900 ? (
    <div className='h-[800px] bg-hero bg-cover'>
      <div className='p-20 text-center'>
        <h1 className='text-[64px]'>キャッチフレーズ</h1>
        <p className='p-20 text-2xl'>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLScQ6GHACpxa4lgufIFqYzcQwRE9HMGGaVenf8BnFRgI7CPYzg/viewform'>
          <button className='h-[60px] w-[270px] rounded-[50px] bg-white text-lg font-bold  hover:opacity-70'>
            会員登録
          </button>
        </a>
      </div>
    </div>
  ) : (
    <div className='h-[800px] bg-hero bg-cover'>
      <div className='p-20 text-center'>
        <h1 className='text-[54px]'>キャッチフレーズ</h1>
        <p className='pt-10 pb-5'>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScQ6GHACpxa4lgufIFqYzcQwRE9HMGGaVenf8BnFRgI7CPYzg/viewform">
        <button className='h-[60px] w-[270px] rounded-[50px] bg-white text-lg font-bold  hover:opacity-70'>
          会員登録
        </button>

        </a>
      </div>
    </div>
  );
};
