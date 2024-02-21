import HomeHeader from '@/components/HomeHeader';
import HomeSearch from '@/components/HomeSearch';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className='flex flex-col items-center mt-24'>
        <Image
          src='/Google_logo.png'
          alt='Google Logo'
          width={300}
          height={100}
          priority
          style={{ width: 'auto' }}
          className="w-fit md:w-auto"
        />
        <HomeSearch />
      </div>
    </>
  );
}
