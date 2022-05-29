/*
  This Tshirts requires Tailwind CSS v2.0+ 
  
  This Tshirts requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: 'Rs. 480',
      imageSrc: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8829449/2019/3/27/53f054a2-9e25-4323-b7cb-3dd75a8a935a1553680531988-Roadster-Men-Navy-Blue-Striped-Polo-Collar-T-shirt-295155368-1.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: 'Rs. 350',
      imageSrc: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8829449/2019/3/27/53f054a2-9e25-4323-b7cb-3dd75a8a935a1553680531988-Roadster-Men-Navy-Blue-Striped-Polo-Collar-T-shirt-295155368-1.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: 'Rs. 890',
      imageSrc: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8829449/2019/3/27/53f054a2-9e25-4323-b7cb-3dd75a8a935a1553680531988-Roadster-Men-Navy-Blue-Striped-Polo-Collar-T-shirt-295155368-1.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: 'Rs. 350',
      imageSrc: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8829449/2019/3/27/53f054a2-9e25-4323-b7cb-3dd75a8a935a1553680531988-Roadster-Men-Navy-Blue-Striped-Polo-Collar-T-shirt-295155368-1.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: 'Rs. 350',
      imageSrc: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8829449/2019/3/27/53f054a2-9e25-4323-b7cb-3dd75a8a935a1553680531988-Roadster-Men-Navy-Blue-Striped-Polo-Collar-T-shirt-295155368-1.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: 'Rs. 350',
      imageSrc: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8829449/2019/3/27/53f054a2-9e25-4323-b7cb-3dd75a8a935a1553680531988-Roadster-Men-Navy-Blue-Striped-Polo-Collar-T-shirt-295155368-1.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: 'Rs. 350',
      imageSrc: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8829449/2019/3/27/53f054a2-9e25-4323-b7cb-3dd75a8a935a1553680531988-Roadster-Men-Navy-Blue-Striped-Polo-Collar-T-shirt-295155368-1.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: 'Rs. 350',
      imageSrc: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8829449/2019/3/27/53f054a2-9e25-4323-b7cb-3dd75a8a935a1553680531988-Roadster-Men-Navy-Blue-Striped-Polo-Collar-T-shirt-295155368-1.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]
  
  export default function Example() {
    return (
      //  border-2  border-red-400
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product,index) => (
              <a key={index} href={"product/tshirts"} className=" group">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-top  object-cover "
                  />
                </div>
                <h3 className="mt-4 text-sm uppercase text-gray-700">category</h3>
                <h3 className="mt-1 text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="mt-1 text-lg font text-gray-700">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  