
import Navbar from '../components/Navbar'
import Footers from '../components/Footers'
const products = [
    {
      id: 1,
      name: 'Zoya Calma Scarf',
      href: '#',
      imageSrc: 'https://dbs9nopbkp043.cloudfront.net/images/products/200199_1653455878869_resized1024.JPG',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp. 105,000',
      color: 'Silver Gray',
    },
    {
      id: 1,
      name: 'Zoya Mabel Scarf',
      href: '#',
      imageSrc: 'https://dbs9nopbkp043.cloudfront.net/images/products/10_1653457400285_resized1024.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp. 105,000',
      color: 'Khaki',
    },
    {
      id: 1,
      name: 'Zoya Berly Scarf',
      href: '#',
      imageSrc: 'https://dbs9nopbkp043.cloudfront.net/images/products/200135_1653454112291_resized1024.JPG',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp. 105,000',
      color: 'Green',
    },
    {
      id: 1,
      name: 'Zoya Primaz Scarf',
      href: '#',
      imageSrc: 'https://dbs9nopbkp043.cloudfront.net/images/products/PRIMAZ_1653456285065_resized1024.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp. 105,000',
      color: 'Navy',
    },
    {
      id: 1,
      name: 'Zoya Hanuma Silver Grey Scarf',
      href: '#',
      imageSrc: 'https://dbs9nopbkp043.cloudfront.net/images/products/HANUMA_SCARF_GREY_SQUARE_2_1645016427380_resized1024.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp. 169,000',
      color: 'Baby Pink',
    },
    {
      id: 1,
      name: 'Zoya Monita Scarff',
      href: '#',
      imageSrc: 'https://dbs9nopbkp043.cloudfront.net/images/products/afa9ec5819d8e0f25032f779e1ba8724_1640921750745_resized1024.jpeg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp. 87,000',
      color: 'Black',
    },
    {
      id: 1,
      name: 'Zoya Selva Scarf',
      href: '#',
      imageSrc: 'https://dbs9nopbkp043.cloudfront.net/images/products/7c3e9e1f5997ce9122f2572a8a489888_1640921397684_resized1024.jpeg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp. 87,000',
      color: 'Black',
    },
    {
      id: 1,
      name: 'Zoya Althea Plain Scarf',
      href: '#',
      imageSrc: 'https://dbs9nopbkp043.cloudfront.net/images/products/f6261c0fa9d82ba4993debdcb6c52265_1645065311955_resized1024.jpeg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp. 87,500',
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
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Zoya Hijab</h2>
  
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