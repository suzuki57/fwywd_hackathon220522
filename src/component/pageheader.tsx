import Image from 'next/image';
import { WindowResponse } from '@/hook/WindowsResponse';

export const PageHeader: React.FC = () => {
  const { width } = WindowResponse();
  return width >= 900 ? (
    <div className='flex h-[100px] bg-orange'>
      <div className='flex-1 pl-[20px]'>
        <Image src='/img/logo-white01.png' alt='logo' width={220} height={100}></Image>
      </div>
      <h1 className='cursor-pointer pr-[100px] pt-[30px] text-lg text-white'>お問い合わせ</h1>
      <div className='pt-[20px] pr-[20px]'>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLScQ6GHACpxa4lgufIFqYzcQwRE9HMGGaVenf8BnFRgI7CPYzg/viewform'>
          <button className='h-[60px] w-[270px] cursor-pointer rounded-[50px] bg-white text-lg font-bold text-black hover:opacity-70'>
            会員登録
          </button>
        </a>
      </div>
    </div>
  ) : (
    <>
      <div className='h-[100px] bg-orange'>
        <div className='mx-auto flex w-[90%] items-center justify-between pt-5'>
          <Image src='/img/logo-white01.png' alt='logo' width={220} height={90}></Image>
          <div className=''>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLScQ6GHACpxa4lgufIFqYzcQwRE9HMGGaVenf8BnFRgI7CPYzg/viewform'>
              <button className='h-[40px] w-[170px] cursor-pointer rounded-[50px] bg-white text-lg  font-bold hover:opacity-70'>
                会員登録
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* <div>
        <div>
          {openMenu ? (
            <div onClick={onClickMenu} className='absolute top-0 z-10 w-full bg-black text-white'>
              testmenu
            </div>
          ) : null}
        </div>
      </div> */}
    </>
  );
};
