import ItemBox from "./Item";
import { setAdress } from "./items";

export default function Home() {
  return (
    <div className="container p-10  items-center justify-center bg-blue-200">
      <div className="w-full">
        {/* Box Blue */}
        <div className="bg-[#2590EB] mb-5 text-white p-6 rounded-3xl text-center relative">
          <img src="./pattern1.svg" alt="تصویر" className="w-fit absolute lg:left-1/12 top-0 left-0 z-10" />
          <img src="./pattern1 (1).svg" alt="تصویر" className="w-fit absolute lg:right-1/12 bottom-0 right-0 z-10" />
          <h1 className="bg-blue-200 text-xl font-bold w-20 z-20 p-1 m-auto rounded-xl">ارتباط</h1>
          <p className="mt-2 text-xl z-20 relative">با ما در تماس باشید – ما همیشه پاسخگوی شما هستیم</p>
        </div>
        {/* Main Box */}
        <div className="bg-gray-50 p-4 rounded-3xl text-black flex flex-col lg:flex-row">
          {/* Form */}
         <div className="lg:flex lg:flex-2 lg:gap-2.5">
          <div className="mt-4 text-base">
          <div>
          <h2 className="text-xl font-bold">پیام خود را برای ما ارسال کنید</h2>
          <span className="mt-2 text-base">اگر سوالی دارید یا نیاز به راهنمایی بیشتر دارید، فرم زیر را تکمیل کنید.</span>
          </div>
            <div className="lg:gap-2.5 lg:flex lg:flex-row lg:mt-2.5">
              <div className="lg:w-1/2">
                <span className="my-2">نام و نام خانوادگی</span>
                <input type="text" className="w-full p-2 border rounded-xl border-gray-300" />
              </div>
              <div className="lg:w-1/2">
                <span className="my-2">شماره تماس</span>
                <input type="tel" className="w-full p-2 border rounded-xl border-gray-300" />
              </div>
            </div>
           <span className="my-2 lg:mt-2">پیام شما</span>
            <textarea className="w-full h-40 p-2 border rounded-xl border-gray-300"></textarea>
            <button className="w-full lg:flex lg:w-32 lg:mr-auto lg:px-8 bg-blue-500 text-white py-2 rounded-xl">ارسال پیام</button>
          </div>
          {/* Image */}
          
          </div>
          <div className="w-full flex-1">
            <img src="./Mask group.svg" alt="تصویر" className="w-full rounded-lg" />
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 p-2.5 items-center text-gray-700">
          <ItemBox data={setAdress} />
        </div>
      </div>
    </div>
  );
}
