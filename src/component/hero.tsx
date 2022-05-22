import Image from 'next/image';
import React from 'react';
import { WindowResponse } from '@/hook/WindowsResponse';

export const Hero: React.FC = () => {
  const { width } = WindowResponse();
  return width >= 900 ? (
    <div className='h-[750px] bg-hero bg-cover'>
      <div className='p-20 text-center'>
        <h1 className='text-[64px] font-extrabold text-white'>スキマバイトで旅行しよう</h1>
        <p className='pt-14 text-2xl text-white '>スキマ時間を使って旅館で新しい人との出会い</p>
        <p className='pb-20 text-2xl text-white '>さぁ、旅館は待ってますよ！</p>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLScQ6GHACpxa4lgufIFqYzcQwRE9HMGGaVenf8BnFRgI7CPYzg/viewform'>
          <button className='h-[60px] w-[270px] cursor-pointer rounded-[50px] bg-white text-black text-lg  font-bold hover:opacity-70'>
            会員登録
          </button>
        </a>
      </div>
    </div>
  ) : (
    <div className='bg-orange'>
      <div className='px-5 pt-10 text-center'>
        <h1 className='text-xl font-extrabold text-white'>
          スキマバイトで
          <br />
          旅行しよう
        </h1>
        <p className='pt-10 pb-5 font-bold text-white'>
          スキマ時間で旅館で新しい人との出会い
          <br />
          さぁ、旅館は待ってますよ！
        </p>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLScQ6GHACpxa4lgufIFqYzcQwRE9HMGGaVenf8BnFRgI7CPYzg/viewform'>
          <button className='h-[60px] w-[270px] cursor-pointer rounded-[50px] bg-white text-lg  font-bold hover:opacity-70'>
            会員登録
          </button>
        </a>
      </div>
      <Image src='/img/hero01.png' alt='hero' width={640} height={512} />
    </div>
  );
};
