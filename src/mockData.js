const productsMock = () => [
    {
        id: 0, category: "monitores", title: "Led Monitor Samsung", price: "25.499",
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_796587-MLA46165231779_052021-F.webp",
        stock: 5, initialValue: 1, description: `Imágenes fluidas, muy fluidas:
        Ahora todas las imágenes se ven impecables. La frecuencia de actualización de 75 Hz produce escenas más fluidas. Ya sea que te estés poniendo al día con tu drama favorito, mires un video o juegues, tu entretenimiento es fluido, sin demoras ni efecto fantasma.
        
        Más potencia para juegos:
        Ajustes ideales para juego para que obtengas ventaja al instante. Consigue un color y un contraste de imagen óptimos para ver las escenas más claras y descubrir a los enemigos en la oscuridad. 
        `
    },
    {
        id: 1, category: "monitores", title: "Monitor Dell E2420H led 24 ", price: "21936",
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_843063-MLA44913483505_022021-F.webp",
        stock: 5, initialValue: 1, description: `Imágenes fluidas, muy fluidas:
        Ahora todas las imágenes se ven impecables. La frecuencia de actualización de 75 Hz produce escenas más fluidas. Ya sea que te estés poniendo al día con tu drama favorito, mires un video o juegues, tu entretenimiento es fluido, sin demoras ni efecto fantasma.
        
        Más potencia para juegos:
        Ajustes ideales para juego para que obtengas ventaja al instante. Consigue un color y un contraste de imagen óptimos para ver las escenas más claras y descubrir a los enemigos en la oscuridad. 
        `
    },
    {
        id: 2, category: "monitores", title: " Monitor Samsung C24RG5", price: "25.499",
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_896735-MLA45212708765_032021-F.webp",
        stock: 5, initialValue: 1, description: `Samsung está fielmente comprometida en brindar productos de calidad y que contribuyan a crear un mejor futuro para las personas. Como empresa líder en la industria tecnológica uno de sus objetivos principales es desarrollar avanzadas e innovadoras soluciones. Es por ello que con este monitor tendrás y disfrutarás de una gran experiencia visual en todo momento.
        `
    },
    {
        id: 3, category: "monitores", title: "Monitor gamer LG 27GL650F", price: "58.999",
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_624926-MLA44490109901_012021-F.webp",
        stock: 5, initialValue: 1, description: `Una experiencia visual de calidad
        Este monitor de 27" te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Su tiempo de respuesta de 5 ms lo hace ideal para gamers y cinéfilos porque es capaz de mostrar imágenes en movimiento sin halos o bordes borrosos.
        `
    },
    {
        id: 4, category: "monitores", title: "Monitor gamer Gigabyte G24F", price: "44.999",
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_906141-MLA48049398973_102021-F.webp",
        stock: 5, initialValue: 1, description: `Imágenes fluidas, muy fluidas:
        Ahora todas las imágenes se ven impecables. La frecuencia de actualización de 75 Hz produce escenas más fluidas. Ya sea que te estés poniendo al día con tu drama favorito, mires un video o juegues, tu entretenimiento es fluido, sin demoras ni efecto fantasma.
        
        Más potencia para juegos:
        Ajustes ideales para juego para que obtengas ventaja al instante. Consigue un color y un contraste de imagen óptimos para ver las escenas más claras y descubrir a los enemigos en la oscuridad. 
        `
    },
    {
        id: 5, category: "procesadores", title: "Procesador gamer AMD Ryzen 5 5600X", price: "46.500",
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_806834-MLA44347094824_122020-F.webp",
        stock: 5, initialValue: 1, description: `Clave en el rendimiento de tu computadora de escritorio, ya no tenés que pensar en cómo distribuir el tiempo y acciones porque ahora las tareas en simultáneo son posibles.
        AMD cuenta con un catálogo de productos que se adaptan a los requerimientos de todo tipo de usuarios: juegos en línea, edición a gran escala, contenido en múltiples plataformas y más.
        `
    },
    {
        id: 6, category: "procesadores", title: "Procesador Intel Core i3-9100", price: "23.999",
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_886852-MLA41422930700_042020-F.webp",
        stock: 5, initialValue: 1, description: `Productividad y entretenimiento, todo disponible en tu computadora de escritorio. La superioridad tecnológica de INTEL es un beneficio para todo tipo de profesionales. Asegura el mejor rendimiento de las aplicaciones, de la transferencia de datos y la conexión con otros elementos tecnológicos.
        `
    },
    {
        id: 7, category: "procesadores", title: "Procesador Intel Core i5-10400F", price: "25.000",
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_602530-MLA43003993713_082020-F.webp",
        stock: 5, initialValue: 1, description: `Núcleos: el corazón del procesador
        En este producto, encontrarás los núcleos, que son los encargados de ejecutar las instrucciones y actividades que le asignás a tu dispositivo. Estos tienen relación directa con dos elementos: los hilos y el modelo. Por lo tanto, a la hora de elegir un procesador, es importante que valores los tres en su conjunto.
        `
    },
    {
        id: 8, category: "perifericos", title: "Gabinete Cooler Noga 8609", price: "3840",
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_698511-MLA28912700817_122018-F.webp",
        stock: 4, initialValue: 1, description: `
        Poderoso Gabinete Gamer con 3 Coolers con LEDS rojos.
        Contiene 1 Puerto USB 3.0, 2 Puertos USB 2.0 y conexiones miniplug para Auriculares y Mic.
        Posee 1 paneles de vidrio y 1 panel de acrílico tonalizados.
        Incluye Fuente de Alimentación de 600W.`
    },
    {
        id: 9, category: "perifericos", title: "Mouse Logitech G Series", price: "2850",
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_958411-MLA32145845961_092019-F.webp",
        stock: 0, initialValue: 0, description: `Adaptado a tus movimientos:
        El mouse de juego te ofrecerá la posibilidad de marcar la diferencia y sacar ventajas en tus partidas. Su conectividad y sensor suave ayudará a que te desplaces rápido por la pantalla.
        
        La funcionalidad al alcance de tu mano:
        El sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales.
        
        Rapidez y confiabilidad de los botones:
        Con sus 18 botones podrás tener mayor control e independencia para ejecutar.`
    },
    {
        id: 10, category: "perifericos", title: "Teclado Logitech", price: "3799",
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_865567-MLA46869059586_072021-F.webp",
        stock: 10, initialValue: 1, description: `Innovadores en diseño y tecnología, Logitech se encarga de brindar la mejor experiencia de uso para sus usuarios. Sus teclados resaltan por ser resistentes y muy de buena calidad, por lo que podrás disfrutarlos por un largo tiempo.`
    },
    {
        id: 11, category: "motherboards", title: "Motherboard Mother Asus Prime A320m-k", price: "7.500",
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_814476-MLA47101074241_082021-F.webp",
        stock: 10, initialValue: 1, description: `CPU:
        AMD AM4 socket AMD Opteron ™ sharp de segunda generación / equipado con Dacentrurus ™ Radeon ™ Vega Graphics / Dacentrurus ™ Generation 1/7th generación A-series / Procesador Athlon X4
        compatible con CPU de hasta 8 núcleos
        * Visite www. asus .com para ver la lista de compatibilidad con procesadores.RAM:
        AMD Ryzen ™ 2nd Generation / Ryzen ™ con Radeon ™ Vega Graphics / Ryzen ™ 1st Generation Processor
        2 x DIMM, capacidad hasta 32GB, DDR4 3200 (overclockeado) / 3000 (overclockeado) / 2933 (overclockeado) / 2800 (OC) / 2666/2400/2133 MHz Memoria sin búfer.`
    },
    {
        id: 12, category: "motherboards", title: "Motherboard Gigabyte Ga-a320m-h", price: "7.297",
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_940015-MLA45077500225_032021-F.webp",
        stock: 10, initialValue: 1, description: `Innovadores en diseño y tecnología, Logitech se encarga de brindar la mejor experiencia de uso para sus usuarios. Sus teclados resaltan por ser resistentes y muy de buena calidad, por lo que podrás disfrutarlos por un largo tiempo.`
    },
    {
        id: 13, category: "motherboards", title: "Motherboard Asus A320m-k", price: "13.799",
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_814476-MLA47101074241_082021-F.webp",
        stock: 10, initialValue: 1, description: `PRIME A320M-K

        CPU:
        AMD AM4 socket AMD Opteron ™ sharp de segunda generación / equipado con Dacentrurus ™ Radeon ™ Vega Graphics / Dacentrurus ™ Generation 1/7th generación A-series / Procesador Athlon X4
        compatible con CPU de hasta 8 núcleos
        * Visite www. asus .com para ver la lista de compatibilidad con procesadores.
        
        Chipset: AMD A320
        
        RAM:
        AMD Ryzen ™ 2nd Generation / Ryzen ™ con Radeon ™ Vega Graphics / Ryzen ™ 1st Generation Processor
        2 x DIMM, capacidad hasta 32GB, DDR4 3200 (overclockeado) / 3000 (overclockeado) / 2933 (overclockeado) / 2800 (OC) / 2666/2400/2133 MHz Memoria sin búfer.`
    },
    {
        id: 14, category: "perifericos", title: "Kit Teclado y mouse Redragon", price: "5.799",
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_724732-MLA46441687000_062021-F.webp",
        stock: 10, initialValue: 1, description: `Con este kit de teclado y mouse Redragon vas a poder llevar tus partidas a otro nivel. Destinado a un público gamer, potenciá tu performance en distintos juegos. Con este combo, podrás darle un uso intensivo a estos dispositivos y disfrutar de interminables horas de diversión.Silencioso y ligero
        Este kit incluye un periférico que posee una arquitectura de membrana. ¿Qué quiere decir esto? Que su teclado te permitirá disfrutar de pulsaciones silenciosas. A diferencia de los mecánicos, este tipo de dispositivos son ligeros y fáciles de transportar.`
    },
    {
        id: 15, category: "perifericos", title: "Auriculares Redragon Scylla", price: "3.230",
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_861715-MLA40862930598_022020-F.webp",
        stock: 10, initialValue: 1, description: `Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Redragon Scylla no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.

        El formato perfecto para vos
        Al ser on-ear se apoyan en tus orejas cómodamente y ofrecen una gran calidad de sonido. Usalos en viajes largos o actividades al aire libre.`
    },
    {
        id: 16, category: "procesadores", title: "Procesador Intel Core i7-10700K", price: "45.400",
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_600668-MLA43003993305_082020-F.webp",
        stock: 5, initialValue: 1, description: `Productividad y entretenimiento, todo disponible en tu computadora de escritorio. La superioridad tecnológica de INTEL es un beneficio para todo tipo de profesionales. Asegura el mejor rendimiento de las aplicaciones, de la transferencia de datos y la conexión con otros elementos tecnológicos.

        Núcleos: el corazón del procesador
        En este producto, encontrarás los núcleos, que son los encargados de ejecutar las instrucciones y actividades que le asignás a tu dispositivo. Estos tienen relación directa con dos elementos: los hilos y el modelo. Por lo tanto, a la hora de elegir un procesador, es importante que valores los tres en su conjunto.
        `
    }
]

export default productsMock;