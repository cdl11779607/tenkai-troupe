/*
 * @Author: Chendingli
 * @Date: 2025-03-05 15:30:26
 * @LastEditors: Chendingli
 * @LastEditTime: 2025-03-05 15:57:02
 * @Description: 
 */
import yayJpg from '../assets/yay.jpg';

export default function HomePage() {
  return (
    <div>
      <h2  className='text-blue-200'>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} className='w-[800px]' />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
