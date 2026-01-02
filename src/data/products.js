export const products = [
    {
        id: 'coat',
        title: 'Abrigo Lana Merino',
        price: 129.00,
        image: '/images/products_coat.jpg',
        description: 'Abrigo oversized de lana merino en color beige natural. Corte minimalista con hombros caídos y solapas anchas. Perfecto para capas invernales.',
        ref: '12345678',
        badge: 'Nuevo',
        images: ['/images/detail_main.jpg', '/images/detail_texture.jpg', '/images/detail_back.jpg', '/images/detail_hanger.jpg']
    },
    {
        id: 'bomber',
        title: 'Chaqueta Bomber Seda',
        price: 89.00,
        originalPrice: 110.00,
        image: '/images/products_bomber.jpg',
        description: 'Chaqueta estilo bomber en seda rosa pastel. Acabados elásticos en puños y cintura. Un toque deportivo y elegante contemporáneo.',
        ref: '87654321',
        images: ['/images/products_bomber.jpg'] // Placeholder for details
    },
    {
        id: 'pants',
        title: 'Pantalón Lino Recto',
        price: 75.00,
        image: '/images/products_pants.jpg',
        description: 'Pantalón de lino puro en corte recto y cintura alta. Fresco, transpirable y esencial para un armario de verano sofisticado.',
        ref: '23456789',
        images: ['/images/products_pants.jpg']
    },
    {
        id: 'dress',
        title: 'Vestido Midi Noche',
        price: 145.00,
        image: '/images/products_dress.jpg',
        description: 'Vestido midi negro con estructura arquitectónica. Tejido de alta densidad que moldea la silueta con elegancia sobria.',
        ref: '98765432',
        images: ['/images/products_dress.jpg']
    },
    {
        id: 'shirt',
        title: 'Camisa Abstracta',
        price: 55.00,
        originalPrice: 68.00,
        image: '/images/products_shirt.jpg',
        description: 'Camisa de corte relajado con estampado abstracto en tonos pastel. Tejido ligero de viscosa para una caída fluida.',
        ref: '34567890',
        discountBadge: '-20%',
        images: ['/images/products_shirt.jpg']
    },
    {
        id: 'top',
        title: 'Top Punto Vibrante',
        price: 42.00,
        image: '/images/products_top.jpg',
        description: 'Top de punto canalé en un vibrante color magenta. Cuello alto y ajuste ceñido para una silueta moderna y audaz.',
        ref: '09876543',
        images: ['/images/products_top.jpg']
    }
];

export const getProductById = (id) => products.find(p => p.id === id);
