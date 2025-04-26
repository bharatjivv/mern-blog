import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex border border-teal-500 p-3 justify-center items-center rounded-tl-3xl rounded-br-3xl flex-col sm:flex-row text-center'>
      <div className='flex-1 justify-center flex flex-col'>
        <h2 className='text-2xl'>
          Learn HTML, CSS, Javascript
        </h2>
        <p className='text-gray-500 my-2'>
          Buid your own projects.
        </p>
        <a
          href='https://www.replit.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
    
        </a>
      </div>
      <div className='flex-1 p-7'>
        <img src='' alt='Image to be inserted' />
      </div>
    </div>
  );
}
