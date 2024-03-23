import React from 'react';
import { GrFacebook } from 'react-icons/gr';
import { FaTwitter } from 'react-icons/fa';

export default function Profile() {
  return (
    <>
      <div className='my-20 max-w-2xl mx-auto grid grid-cols-2  gap-8 bg-white h-100 w-100 rounded-lg shadow-lg overflow-hidden '>
<article >
    <img src="https://img.freepik.com/free-vector/gradient-quill-pen-design-template_23-2149837194.jpg?w=900&t=st=1711198020~exp=1711198620~hmac=2106e619791e3171e28af467e85d2a1c5ce76742081a52d8356cfefe0dadf913" alt="anuj"   />
    </article>
     

        <article className="flex flex-col justify-center">
          <h3 className="text-xl font-bold">Anuj</h3>
          <p className="text-gray-600">
            is a frontend web designer and developer in Figma and React.js, based in Jamshedpur, India
          </p>
          <ul className="flex gap-4 mt-4">
            <li>
              <GrFacebook className="text-blue-600" />
            </li>
            <li>
              <FaTwitter className="text-blue-400" />
            </li>
          </ul>
        </article>
      </div>
    </>
  );
}







