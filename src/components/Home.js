// Components
import Navbar from './Navbar'
import Footers from './Footers'
import Product from './Category'
// images
import img1 from '../images/bgzoya.png'

export default function Example() {
    return (
        <>
        <Navbar />
        <Product />
        <div className="relative bg-gray-300 overflow-hidden">
          <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
              <div className="sm:max-w-lg">
                <h1 className="text-4xl font font-extrabold tracking-tight text-black sm:text-7xl">
                  ZOYA
                </h1>
                <p className="mt-4 text-xl text-black">
                Zoya adalah brand fashion muslimah dibuat dengan material berkualitas, Disini kamu dapat menemukan berbagai produk hijab dan pakaian mulislim wanita dengan kualitas premium.
                </p>
              </div>
              <div>
                <div className="mt-10">
                  {/* Decorative image grid */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                  >
                    <div className="absolute transform sm:left-1/2 sm:top-20 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="w-150 h-350 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                            <img
                              src={img1}
                              alt=""
                              className="w-full h-full object-center object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footers />
        </>
    )
  }
  