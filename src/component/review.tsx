import React from 'react';
// import Slider from 'react-slick';
import { WindowResponse } from '@/hook/WindowsResponse';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Review: React.FC = () => {
  const { width } = WindowResponse();
  return width >= 900 ? (
    <div className='bg-gray-100'>
      <div className='mx-auto w-[90%] pb-10 pt-5'>
        <h1 className='text-title mb-20 mt-5'>Review</h1>
        <div className='grid grid-cols-3 gap-10'>
          <div className='rounded-xl bg-gray-50 px-5 py-5'>
            <div className='rounded-2xl bg-primary-500 px-5 py-10 text-left'>
              【仕事しての感想】
              <br />
              久々の旅行でした。いつも早めに到着してしまうので時間を潰すのに困っていました。そんなときこのサービスを知ったので、すきま時間を有効に活用することができました！
            </div>
            <div className='pt-5 text-left text-lg'>
              <p>宿泊：2泊3日</p>
              <p>収入金額：4,000円</p>
            </div>
          </div>
          <div className='rounded-xl bg-gray-50 px-5 py-5'>
            <div className='rounded-2xl bg-primary-500 px-5 py-10 text-left'>
              【仕事しての感想】
              <br />
              いつも利用している旅館でした。久しぶりに旅行ができるようになったので、旅館の HP
              を拝見したら、大好きな旅館の方と一緒に働けるなんて！！とても楽しい思い出が１つできました！
            </div>
            <div className='pt-5 text-left text-lg'>
              <p>宿泊：2泊3日</p>
              <p>収入金額：5,000円</p>
            </div>
          </div>
          <div className='rounded-xl bg-gray-50 px-5 py-5'>
            <div className='rounded-2xl bg-primary-500 px-5 py-10 text-left'>
              【仕事しての感想】
              <br />
              卒業旅行で利用した旅館で普段のアルバイトでは経験できないことを体験することができました！とても貴重な経験をしました。これからの社会人生活が楽しみになりました！
            </div>
            <div className='pt-5 text-left text-lg'>
              <p>宿泊：2泊3日</p>
              <p>収入金額：6,000円</p>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-10'>
          <div className='mx-1 h-4 w-4 rounded-[50%] bg-primary-700'></div>
          <div className='mx-1 h-4 w-4 rounded-[50%] bg-primary-300'></div>
          <div className='mx-1 h-4 w-4 rounded-[50%] bg-primary-300'></div>
          <div className='mx-1 h-4 w-4 rounded-[50%] bg-primary-300'></div>
          <div className='mx-1 h-4 w-4 rounded-[50%] bg-primary-300'></div>
        </div>
      </div>
    </div>
  ) : (
    <div className=' bg-gray-100'>
      <div className='mx-auto w-[90%] pb-10 pt-5'>
        <h1 className='text-title text-2xl'>Review</h1>
        <div className='mt-20 grid grid-cols-1 gap-10'>
          <div className='rounded-xl bg-gray-50 px-5 py-5'>
            <div className='rounded-2xl bg-primary-500 px-5 py-10 text-left'>
              【仕事しての感想】
              <br />
              久々の旅行でした。いつも早めに到着してしまうので時間を潰すのに困っていました。そんなときこのサービスをしったので、すきま時間を有効に活用することができました！
            </div>
            <div className='pt-5 text-left text-lg'>
              <p>宿泊：2泊3日</p>
              <p>収入金額：4,000円</p>
            </div>
          </div>
          <div className='rounded-xl bg-gray-50 px-5 py-5'>
            <div className='rounded-2xl bg-primary-500 px-5 py-10 text-left'>
              【仕事しての感想】
              <br />
              いつも利用している旅館でした。久しぶりに旅行ができるようになったので、旅館の HP
              を拝見したら、大好きな旅館の方と一緒に働けるなんて！！とても楽しい思い出が１つできました！
            </div>
            <div className='pt-5 text-left text-lg'>
              <p>宿泊：2泊3日</p>
              <p>収入金額：5,000円</p>
            </div>
          </div>
          <div className='rounded-xl bg-gray-50 px-5 py-5'>
            <div className='rounded-2xl bg-primary-500 px-5 py-10 text-left'>
              【仕事しての感想】
              <br />
              卒業旅行で利用した旅館で普段のアルバイトでは経験できないことを体験することができました！とても貴重な経験をしました。これからの社会人生活が楽しみになりました！
            </div>
            <div className='pt-5 text-left text-lg'>
              <p>宿泊：2泊3日</p>
              <p>収入金額：6,000円</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
