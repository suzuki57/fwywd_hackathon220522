import Image from 'next/image';
import React from 'react';

import { WindowResponse } from '@/hook/WindowsResponse';

export const Merit: React.FC = () => {
  const { width } = WindowResponse();
  return width >= 900 ? (
    <div className='bg-white'>
      <h1 className='text-title mt-5'>Merit</h1>
      <div className='mx-auto my-20 flex w-11/12'>
        <div className='mx-4 border-2 border-orange'>
          <div className='mx-auto w-8/12 py-3'>
            <div className='mx-auto  w-max'>
              <Image src='/img/money.png' alt='money' width={125} height={125} />
            </div>
            <h1 className='my-6 text-center text-xl font-extrabold text-black'>
              タイトルタイトルタイトル
            </h1>
            <p className='text-black'>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
        </div>
        <div className='mx-4 border-2 border-orange'>
          <div className='mx-auto w-8/12 py-3'>
            <div className='mx-auto  w-max'>
              <Image src='/img/clock.png' alt='money' width={125} height={125} />
            </div>
            <h1 className='my-6 text-center text-xl font-extrabold text-black'>
              タイトルタイトルタイトル
            </h1>
            <p className='text-black'>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
        </div>
        <div className='mx-4 border-2 border-orange'>
          <div className='mx-auto w-8/12 py-3'>
            <div className='mx-auto  w-max'>
              <Image src='/img/user.png' alt='money' width={125} height={125} />
            </div>
            <h1 className='my-6 text-center text-xl font-extrabold text-black'>
              タイトルタイトルタイトル
            </h1>
            <p className='text-black'>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className='bg-white'>
      <h1 className='text-title mt-5 text-2xl'>Merit</h1>
      <div className='mx-auto my-20 w-11/12'>
        <div className='my-4 border-2 border-orange'>
          <div className='mx-auto w-8/12 py-3'>
            <div className='mx-auto w-max'>
              <Image src='/img/money.png' alt='money' width={125} height={125} />
            </div>
            <h1 className='my-6 text-center text-xl font-extrabold text-black'>
              タイトルタイトルタイトル
            </h1>
            <p className='text-black'>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
        </div>
        <div className='my-4 border-2 border-orange'>
          <div className='mx-auto w-8/12 py-3'>
            <div className='mx-auto  w-max'>
              <Image src='/img/clock.png' alt='money' width={125} height={125} />
            </div>
            <h1 className='my-6 text-center text-xl font-extrabold text-black'>
              タイトルタイトルタイトル
            </h1>
            <p className='text-black'>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
        </div>
        <div className='my-4 border-2 border-orange'>
          <div className='mx-auto w-8/12 py-3'>
            <div className='mx-auto  w-max'>
              <Image src='/img/user.png' alt='money' width={125} height={125} />
            </div>
            <h1 className='my-6 text-center text-xl font-extrabold text-black'>
              タイトルタイトルタイトル
            </h1>
            <p className='text-black'>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
