
import Navbar from '../components/Navbar'
import Footers from '../components/Footers'

const products = [
    {
      id: 1,
      name: 'Zoya Cevia Tunik Midi Dress',
      href: '#',
      imageSrc: 'https://dbs9nopbkp043.cloudfront.net/images/products/CEVIA_DRESS_1_1652335224211_resized1024.JPG',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp. 328.000',
      color: 'White',
    },
    {
      id: 1,
      name: 'Zoya Miya Tunik Midi Dress',
      href: '#',
      imageSrc: 'https://dbs9nopbkp043.cloudfront.net/images/products/MIYA_MIDI_DRESS_1_1649686344976_resized1024.JPG',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp 328,000',
      color: 'Black',
    },
    {
      id: 1,
      name: 'Zoya Neva Tunik Midi Dress',
      href: '#',
      imageSrc: 'https://dbs9nopbkp043.cloudfront.net/images/products/NEVA_MIDI_DRESS_NAVY_1_1_1652333626583_resized1024.JPG',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp. 368.400',
      color: 'Navy',
    },
    {
      id: 1,
      name: 'Zoya Andru Outer',
      href: '#',
      imageSrc: 'https://dbs9nopbkp043.cloudfront.net/images/products/ANDRU_OUTER_3_1650060958500_resized1024.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp. 335.400',
      color: 'Navy',
    },
    {
      id: 1,
      name: 'Zoya Trenzi Tunik',
      href: '#',
      imageSrc: 'https://dbs9nopbkp043.cloudfront.net/images/products/486d0c4a560bcd38f3ebc8df504f08f6_1645069995720_resized1024.jpeg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp 449.000',
      color: 'Khaki',
    },
    {
      id: 1,
      name: 'Zoya Caneza Navy Tunik',
      href: '#',
      imageSrc: 'https://dbs9nopbkp043.cloudfront.net/images/products/9e499c774476297cfee4120b2402bf79_1632710902094_resized1024.jpeg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp 274,550',
      color: 'Navy',
    },
    {
      id: 1,
      name: 'Zoya Aconite Tunik',
      href: '#',
      imageSrc: 'https://dbs9nopbkp043.cloudfront.net/images/products/ACONITE_MIDI_DRESS_1646646614522_resized1024.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp 251,100',
      color: 'Light Blue',
    },
    {
      id: 1,
      name: 'Zoya Fay Tunik Midi Dress',
      href: '#',
      imageSrc: 'https://dbs9nopbkp043.cloudfront.net/images/products/FAY_MIDI_DRESS_1_1649224051286_resized1024.JPG',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp. 428.400',
      color: 'Black',
    },
    // More products...
  ]
  
  export default function Example() {
    return (
      <>
      <Navbar />
        <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Midi Dress Tunik</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footers />
      </>
    )
  }
  