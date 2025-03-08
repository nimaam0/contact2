
export default function Home() {
  return (
    <div className="container p-10  items-center justify-center bg-gray-100">
      <div className="w-full">
        {/* Box Blue */}
        <div className="bg-[#2590EB] mb-5 text-white p-6 rounded-3xl text-center relative">
          <img src="./pattern1.svg" alt="تصویر" className="w-fit absolute md:left-1/12 top-0 left-0 z-10" />
          <img src="./pattern1 (1).svg" alt="تصویر" className="w-fit absolute md:right-1/12 bottom-0 right-0 z-10" />
          <h1 className="bg-blue-200 text-xl font-bold w-20 z-20 p-1 m-auto rounded-xl">ارتباط</h1>
          <p className="mt-2 text-xl z-20 relative">با ما در تماس باشید – ما همیشه پاسخگوی شما هستیم</p>
        </div>





        {/* Main Box */}
        <div className="bg-gray-50 p-4 rounded-3xl text-black flex flex-col md:flex-row">
          
          
     
          {/* Form */}
         <div className="md:flex md:flex-2 md:gap-2.5">
          <div className="mt-4 text-base">
          <div>
          <h2 className="text-xl font-bold">پیام خود را برای ما ارسال کنید</h2>
          <span className="mt-2 text-base">اگر سوالی دارید یا نیاز به راهنمایی بیشتر دارید، فرم زیر را تکمیل کنید.</span>
          </div>
            <div className="md:gap-2.5 md:flex md:flex-row md:mt-2.5">
              <div className="md:w-1/2">
                <span className="my-2">نام و نام خانوادگی</span>
                <input type="text" className="w-full p-2 border rounded-xl border-gray-300" />
              </div>
              <div className="md:w-1/2">
                <span className="my-2">شماره تماس</span>
                <input type="tel" className="w-full p-2 border rounded-xl border-gray-300" />
              </div>
            </div>
           <span className="my-2 md:mt-2">پیام شما</span>
            <textarea className="w-full h-40 p-2 border rounded-xl border-gray-300"></textarea>
            <button className="w-full md:w-32 md:mr-auto md:px-8 bg-blue-500 text-white py-2 rounded-xl">ارسال پیام</button>
          </div>
          
          {/* Image */}
          
          </div>
          <div className="w-full flex-1">
            <img src="./Mask group.svg" alt="تصویر" className="w-full rounded-lg" />
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center space-y-2 text-gray-700">
          <div className="flex items-center justify-between">
            <span className="flex items-center space-x-2">
              <i className="fas fa-phone text-blue-500"></i>
              <span>+98 912 345 6789</span>
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center space-x-2">
              <i className="fas fa-envelope text-blue-500"></i>
              <span>email@example.com</span>
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center space-x-2">
              <i className="fas fa-map-marker-alt text-blue-500"></i>
              <span>آدرس شما اینجا</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
