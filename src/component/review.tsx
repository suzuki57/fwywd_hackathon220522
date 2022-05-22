import React from 'react';
// import Slider from 'react-slick';
import { WindowResponse } from '@/hook/WindowsResponse';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Review: React.FC = () => {
    const { width} = WindowResponse();
    return width >= 900 ? (
      <div className='w-[90%] mx-auto'>
        <h1 className='text-title'>Review</h1>
        <div className='grid grid-cols-3 gap-10'>
        <div className='rounded-xl px-5 py-5 bg-gray-50'>
          <div className='px-5 py-10 bg-primary-500 rounded-2xl text-left'>テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト </div>
          <div className='pt-5 text-left'>
          <p>収入金額：〇〇円</p>
          <p className='pt-5'>割引前の金額：〇〇円</p>
          <p>割引後の金額：〇〇円</p>
          </div>
        </div>
        <div className='rounded-xl px-5 py-5 bg-gray-50'>
          <div className='px-5 py-10 bg-primary-500 rounded-2xl text-left'>テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト </div>
          <div className='pt-5 text-left'>
          <p>収入金額：〇〇円</p>
          <p className='pt-5'>割引前の金額：〇〇円</p>
          <p>割引後の金額：〇〇円</p>
          </div>
        </div>
        <div className='rounded-xl px-5 py-5 bg-gray-50'>
          <div className='px-5 py-10 bg-primary-500 rounded-2xl text-left'>テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト </div>
          <div className='pt-5 text-left'>
          <p>収入金額：〇〇円</p>
          <p className='pt-5'>割引前の金額：〇〇円</p>
          <p>割引後の金額：〇〇円</p>
          </div>
        </div>
        </div>
      </div>
  
    ):
    (
      <div className='w-[90%] mx-auto pb-10'>
        <h1 className='text-title text-2xl'>Review</h1>
        <div className='grid grid-cols-1 gap-10'>
        <div className='rounded-xl px-5 py-5 bg-gray-50'>
          <div className='px-5 py-10 bg-primary-500 rounded-2xl text-left'>テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト </div>
          <div className='pt-5 text-left'>
          <p>収入金額：〇〇円</p>
          <p className='pt-5'>割引前の金額：〇〇円</p>
          <p>割引後の金額：〇〇円</p>
          </div>
        </div>
        <div className='rounded-xl px-5 py-5 bg-gray-50'>
          <div className='px-5 py-10 bg-primary-500 rounded-2xl text-left'>テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト </div>
          <div className='pt-5 text-left'>
          <p>収入金額：〇〇円</p>
          <p className='pt-5'>割引前の金額：〇〇円</p>
          <p>割引後の金額：〇〇円</p>
          </div>
        </div>
        <div className='rounded-xl px-5 py-5 bg-gray-50'>
          <div className='px-5 py-10 bg-primary-500 rounded-2xl text-left'>テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト テキスト </div>
          <div className='pt-5 text-left'>
          <p>収入金額：〇〇円</p>
          <p className='pt-5'>割引前の金額：〇〇円</p>
          <p>割引後の金額：〇〇円</p>
          </div>
        </div>
        </div>
      </div>
    )
    };