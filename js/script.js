console.log('linked :)');

const landingSection = document.querySelector('#landingSection');
const availableStays = document.querySelector('#availableStays');
const availableCardContainer = document.querySelector('#availableCardContainer');
const topNav = document.querySelector('#topNav');
const searchNav = document.querySelector('#searchNav');
const filteredStays = document.querySelector('#filteredStays');
const filteredSection = document.querySelector('#filteredSection');
const stayNZLogo = document.querySelector('#stayNZLogo');
const searchIcon = document.querySelector('#searchIcon');
// const cardImage = document.querySelector('.filtered-section__img');

let accommodationObjectArray = [
    {
        id: 0,
        name: 'Summer Batch',
        location: 'Wellington',
        type: 'house',
        price: 180,
        photo: './images/batch-house.png',
        tags: ['parking', 'pool'],
        cardDetails: '4 guests, 2 bedrooms, 2 beds, 1 bath',
        cardAmenities: 'Breakfast, Pool',
        rating: 4.8,
        latitude: -41.29492147560822,
        longitude: 174.78441093545678,
        minNights: 2,
        maxNights: 7,
        minGuest: 1,
        maxGuest: 4,
        description: 'A lovely accommodation option Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione temporibus iste qui numquam? Libero nisi vitae asperiores veniam quibusdam doloribus similique! Explicabo eaque suscipit animi.',
        sleepingArrangements: `<div class="accommodation-page__sleeping-arrangement-div">
        <img class="accommodation-page__bed-img" src="./images/bed-icon.svg" alt="bed icon">
        <p class="accommodation-page__bedroom-number">Bedroom 1</p>
        <p class="accommodation-page__bed-type">1 king bed</p>
        </div>
        <div class="accommodation-page__sleeping-arrangement-div">
            <img class="accommodation-page__bed-img" src="./images/bed-icon.svg" alt="bed icon">
            <p class="accommodation-page__bedroom-number">Bedroom 2</p>
            <p class="accommodation-page__bed-type">1 queen bed</p>
        </div>`,
        onOffer: `<div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/wifi-icon.svg" alt="wifi icon">
        <p class="accommodation-page__amenities-label">Wifi</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/utensils-solid.svg" alt="utensils icon">
        <p class="accommodation-page__amenities-label">Breakfast</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/pool-icon.svg" alt="pool icon">
        <p class="accommodation-page__amenities-label">Pool</p>
        </div>
        `,
        mealOption: 'Continental breakfast',
        hostImg: './images/portraitgirl2.jpg',
        hostInfo: `Hey! I'm your host Jack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perferendis accusantium laboriosam voluptatum optio non.`,
    },
    {
        id: 1,
        name: 'Seaview Hotel',
        location: 'Auckland',
        type: 'hotel',
        price: 157,
        photo: './images/seaview-hotel.png',
        tags: ['breakfast', 'pool'],
        cardDetails: '2 guests, 1 bedroom, 1 bed, 1 bath',
        cardAmenities: 'Breakfast, Pool',
        rating: 4.9,
        latitude: -36.844344190974034,
        longitude: 174.61410305200818,
        minNights: 1,
        maxNights: 5,
        minGuest: 1,
        maxGuest: 2,
        description: 'A lovely accommodation option Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione temporibus iste qui numquam? Libero nisi vitae asperiores veniam quibusdam doloribus similique! Explicabo eaque suscipit animi.',
        sleepingArrangements: `<div class="accommodation-page__sleeping-arrangement-div">
        <img class="accommodation-page__bed-img" src="./images/bed-icon.svg" alt="bed icon">
        <p class="accommodation-page__bedroom-number">Bedroom 1</p>
        <p class="accommodation-page__bed-type">1 king bed</p>
        </div>
        <div class="accommodation-page__sleeping-arrangement-div">
            <img class="accommodation-page__bed-img" src="./images/bed-icon.svg" alt="bed icon">
            <p class="accommodation-page__bedroom-number">Bedroom 2</p>
            <p class="accommodation-page__bed-type">1 queen bed</p>
        </div>`,
        onOffer: `<div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/wifi-icon.svg" alt="wifi icon">
        <p class="accommodation-page__amenities-label">Wifi</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/utensils-solid.svg" alt="utensils icon">
        <p class="accommodation-page__amenities-label">Breakfast</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/pool-icon.svg" alt="pool icon">
        <p class="accommodation-page__amenities-label">Pool</p>
        </div>
        `,
        mealOption: 'Continental breakfast',
        hostImg: './images/portraitgirl2.jpg',
        hostInfo: `Hey! I'm your host Jack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perferendis accusantium laboriosam voluptatum optio non.`,
    },
    {
        id: 2,
        name: 'Nook Hotel',
        location: 'Wellington',
        type: 'hotel',
        price: 130,
        photo: './images/fairy-hotel.png',
        tags: ['playground', 'breakfast'],
        cardDetails: '2 guests, 1 bedroom, 1 bed, 1 bath',
        cardAmenities: 'Breakfast, Playground',
        rating: 4.5,
        latitude: -41.29014929728724,
        longitude: 174.7632107559241,
        minNights: 1,
        maxNights: 5,
        minGuest: 1,
        maxGuest: 2,
        description: 'A lovely accommodation option Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione temporibus iste qui numquam? Libero nisi vitae asperiores veniam quibusdam doloribus similique! Explicabo eaque suscipit animi.',
        sleepingArrangements: `<div class="accommodation-page__sleeping-arrangement-div">
        <img class="accommodation-page__bed-img" src="./images/bed-icon.svg" alt="bed icon">
        <p class="accommodation-page__bedroom-number">Bedroom 1</p>
        <p class="accommodation-page__bed-type">1 king bed</p>
        </div>
        <div class="accommodation-page__sleeping-arrangement-div">
            <img class="accommodation-page__bed-img" src="./images/bed-icon.svg" alt="bed icon">
            <p class="accommodation-page__bedroom-number">Bedroom 2</p>
            <p class="accommodation-page__bed-type">1 queen bed</p>
        </div>`,
        onOffer: `<div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/wifi-icon.svg" alt="wifi icon">
        <p class="accommodation-page__amenities-label">Wifi</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/utensils-solid.svg" alt="utensils icon">
        <p class="accommodation-page__amenities-label">Breakfast</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/pool-icon.svg" alt="pool icon">
        <p class="accommodation-page__amenities-label">Pool</p>
        </div>
        `,
        mealOption: 'Continental breakfast',
        hostImg: './images/portraitgirl2.jpg',
        hostInfo: `Hey! I'm your host Jack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perferendis accusantium laboriosam voluptatum optio non.`,
    },
    {
        id: 3,
        name: 'Glass House',
        location: 'Auckland',
        type: 'house',
        price: 240,
        photo: './images/glass-house.png',
        tags: ['pool', 'parking'],
        cardDetails: '4 guests, 2 bedrooms, 3 beds, 1 bath',
        cardAmenities: 'Pool, Parking',
        rating: 4.9,
        latitude: -36.897627118388165,
        longitude: 174.8352029000898,
        minNights: 2,
        maxNights: 15,
        minGuest: 1,
        maxGuest: 4,
        description: 'A lovely accommodation option Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione temporibus iste qui numquam? Libero nisi vitae asperiores veniam quibusdam doloribus similique! Explicabo eaque suscipit animi.',
        sleepingArrangements: `<div class="accommodation-page__sleeping-arrangement-div">
        <img class="accommodation-page__bed-img" src="./images/bed-icon.svg" alt="bed icon">
        <p class="accommodation-page__bedroom-number">Bedroom 1</p>
        <p class="accommodation-page__bed-type">1 king bed</p>
        </div>
        <div class="accommodation-page__sleeping-arrangement-div">
            <img class="accommodation-page__bed-img" src="./images/bed-icon.svg" alt="bed icon">
            <p class="accommodation-page__bedroom-number">Bedroom 2</p>
            <p class="accommodation-page__bed-type">1 queen bed</p>
        </div>`,
        onOffer: `<div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/wifi-icon.svg" alt="wifi icon">
        <p class="accommodation-page__amenities-label">Wifi</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/utensils-solid.svg" alt="utensils icon">
        <p class="accommodation-page__amenities-label">Breakfast</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/pool-icon.svg" alt="pool icon">
        <p class="accommodation-page__amenities-label">Pool</p>
        </div>
        `,
        mealOption: 'Continental breakfast',
        hostImg: './images/portraitgirl2.jpg',
        hostInfo: `Hey! I'm your host Jack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perferendis accusantium laboriosam voluptatum optio non.`,
    },
    {
        id: 4,
        name: 'Monday Hostel',
        location: 'Wellington',
        type: 'hostel',
        price: 30,
        photo: './images/marilyn-hotel.png',
        tags: ['breakfast', 'playground'],
        cardDetails: '1 guest, 1 bed, shared bathroom',
        cardAmenities: 'Breakfast, Playground',
        rating: 3.9,
        latitude: -41.32562237310197,
        longitude: 174.81604880712197,
        minNights: 1,
        maxNights: 10,
        minGuest: 1,
        maxGuest: 1,
        description: 'A lovely accommodation option Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione temporibus iste qui numquam? Libero nisi vitae asperiores veniam quibusdam doloribus similique! Explicabo eaque suscipit animi.',
        sleepingArrangements: `<div class="accommodation-page__sleeping-arrangement-div">
        <img class="accommodation-page__bed-img" src="./images/bed-icon.svg" alt="bed icon">
        <p class="accommodation-page__bedroom-number">Bedroom 1</p>
        <p class="accommodation-page__bed-type">1 king bed</p>
        </div>
        <div class="accommodation-page__sleeping-arrangement-div">
            <img class="accommodation-page__bed-img" src="./images/bed-icon.svg" alt="bed icon">
            <p class="accommodation-page__bedroom-number">Bedroom 2</p>
            <p class="accommodation-page__bed-type">1 queen bed</p>
        </div>`,
        onOffer: `<div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/wifi-icon.svg" alt="wifi icon">
        <p class="accommodation-page__amenities-label">Wifi</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/utensils-solid.svg" alt="utensils icon">
        <p class="accommodation-page__amenities-label">Breakfast</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/pool-icon.svg" alt="pool icon">
        <p class="accommodation-page__amenities-label">Pool</p>
        </div>
        `,
        mealOption: 'Continental breakfast',
        hostImg: './images/portraitgirl2.jpg',
        hostInfo: `Hey! I'm your host Jack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perferendis accusantium laboriosam voluptatum optio non.`,
    },
    {
        id: 5,
        name: 'Log House',
        location: 'Napier',
        type: 'house',
        price: 140,
        photo: './images/cabin-woods.png',
        tags: ['parking', 'playground'],
        cardDetails: '2 guests, 1 bedrooms, 1 bed, 1 bathroom',
        cardAmenities: 'Parking, Playground',
        rating: 4.7,
        latitude: -39.533839642775405,
        longitude: 176.88621996294015,
        minNights: 1,
        maxNights: 15,
        minGuest: 1,
        maxGuest: 2,
        description: 'A lovely accommodation option Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione temporibus iste qui numquam? Libero nisi vitae asperiores veniam quibusdam doloribus similique! Explicabo eaque suscipit animi.',
        sleepingArrangements: `<div class="accommodation-page__sleeping-arrangement-div">
        <img class="accommodation-page__bed-img" src="./images/bed-icon.svg" alt="bed icon">
        <p class="accommodation-page__bedroom-number">Bedroom 1</p>
        <p class="accommodation-page__bed-type">1 king bed</p>
        </div>
        <div class="accommodation-page__sleeping-arrangement-div">
            <img class="accommodation-page__bed-img" src="./images/bed-icon.svg" alt="bed icon">
            <p class="accommodation-page__bedroom-number">Bedroom 2</p>
            <p class="accommodation-page__bed-type">1 queen bed</p>
        </div>`,
        onOffer: `<div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/wifi-icon.svg" alt="wifi icon">
        <p class="accommodation-page__amenities-label">Wifi</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/utensils-solid.svg" alt="utensils icon">
        <p class="accommodation-page__amenities-label">Breakfast</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/pool-icon.svg" alt="pool icon">
        <p class="accommodation-page__amenities-label">Pool</p>
        </div>
        `,
        mealOption: 'Continental breakfast',
        hostImg: './images/portraitgirl2.jpg',
        hostInfo: `Hey! I'm your host Jack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perferendis accusantium laboriosam voluptatum optio non.`,
    },
    {
        id: 6,
        name: 'Full House',
        location: 'Taupo',
        type: 'house',
        price: 240,
        photo: './images/pool-house.png',
        tags: ['pool', 'breakfast'],
        cardDetails: '4 guests, 3 bedrooms, 4 beds, 2 bathrooms',
        cardAmenities: 'Breakfast, Pool',
        rating: 4.8,
        latitude: -38.68541077829806,
        longitude: 176.0912387072409,
        minNights: 1,
        maxNights: 7,
        minGuest: 1,
        maxGuest: 4,
        description: 'A lovely accommodation option Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione temporibus iste qui numquam? Libero nisi vitae asperiores veniam quibusdam doloribus similique! Explicabo eaque suscipit animi.',
        sleepingArrangements: `<div class="accommodation-page__sleeping-arrangement-div">
        <img class="accommodation-page__bed-img" src="./images/bed-icon.svg" alt="bed icon">
        <p class="accommodation-page__bedroom-number">Bedroom 1</p>
        <p class="accommodation-page__bed-type">1 king bed</p>
        </div>
        <div class="accommodation-page__sleeping-arrangement-div">
            <img class="accommodation-page__bed-img" src="./images/bed-icon.svg" alt="bed icon">
            <p class="accommodation-page__bedroom-number">Bedroom 2</p>
            <p class="accommodation-page__bed-type">1 queen bed</p>
        </div>`,
        onOffer: `<div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/wifi-icon.svg" alt="wifi icon">
        <p class="accommodation-page__amenities-label">Wifi</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/utensils-solid.svg" alt="utensils icon">
        <p class="accommodation-page__amenities-label">Breakfast</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/pool-icon.svg" alt="pool icon">
        <p class="accommodation-page__amenities-label">Pool</p>
        </div>
        `,
        mealOption: 'Continental breakfast',
        hostImg: './images/portraitgirl2.jpg',
        hostInfo: `Hey! I'm your host Jack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perferendis accusantium laboriosam voluptatum optio non.`,
    },
    {
        id: 7,
        name: 'Stay Hotel',
        location: 'Napier',
        type: 'hotel',
        price: 210,
        photo: './images/wood-hotel.png',
        tags: ['pool', 'breakfast'],
        cardDetails: '2 guests, 1 bedrooms, 1 bed, 1 bathroom',
        cardAmenities: 'Breakfast, Pool',
        rating: 4.6,
        latitude: -39.50470693578099,
        longitude: 176.8618440480119,
        minNights: 1,
        maxNights: 14,
        minGuest: 1,
        maxGuest: 2,
        description: 'A lovely accommodation option Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione temporibus iste qui numquam? Libero nisi vitae asperiores veniam quibusdam doloribus similique! Explicabo eaque suscipit animi.',
        sleepingArrangements: `<div class="accommodation-page__sleeping-arrangement-div">
        <img class="accommodation-page__bed-img" src="./images/bed-icon.svg" alt="bed icon">
        <p class="accommodation-page__bedroom-number">Bedroom 1</p>
        <p class="accommodation-page__bed-type">1 king bed</p>
        </div>
        <div class="accommodation-page__sleeping-arrangement-div">
            <img class="accommodation-page__bed-img" src="./images/bed-icon.svg" alt="bed icon">
            <p class="accommodation-page__bedroom-number">Bedroom 2</p>
            <p class="accommodation-page__bed-type">1 queen bed</p>
        </div>`,
        onOffer: `<div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/wifi-icon.svg" alt="wifi icon">
        <p class="accommodation-page__amenities-label">Wifi</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/utensils-solid.svg" alt="utensils icon">
        <p class="accommodation-page__amenities-label">Breakfast</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/pool-icon.svg" alt="pool icon">
        <p class="accommodation-page__amenities-label">Pool</p>
        </div>
        `,
        mealOption: 'Continental breakfast',
        hostImg: './images/portraitgirl2.jpg',
        hostInfo: `Hey! I'm your host Jack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perferendis accusantium laboriosam voluptatum optio non.`,
    },
    {
        id: 8,
        name: 'Ocean Hotel',
        location: 'Wellington',
        type: 'hotel',
        price: 140,
        photo: './images/lake-hotel.png',
        tags: ['breakfast', 'pool'],
        cardDetails: '2 guests, 1 bedroom, 1 bed, 1 bathroom',
        cardAmenities: 'Breakfast, Pool',
        rating: 4.1,
        latitude: -41.298287222900186,
        longitude: 174.80368918828512,
        minNights: 1,
        maxNights: 10,
        minGuest: 1,
        maxGuest: 2,
        description: 'A lovely accommodation option Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione temporibus iste qui numquam? Libero nisi vitae asperiores veniam quibusdam doloribus similique! Explicabo eaque suscipit animi.',
        sleepingArrangements: `<div class="accommodation-page__sleeping-arrangement-div">
        <img class="accommodation-page__bed-img" src="./images/bed-icon.svg" alt="bed icon">
        <p class="accommodation-page__bedroom-number">Bedroom 1</p>
        <p class="accommodation-page__bed-type">1 king bed</p>
        </div>
        <div class="accommodation-page__sleeping-arrangement-div">
            <img class="accommodation-page__bed-img" src="./images/bed-icon.svg" alt="bed icon">
            <p class="accommodation-page__bedroom-number">Bedroom 2</p>
            <p class="accommodation-page__bed-type">1 queen bed</p>
        </div>`,
        onOffer: `<div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/wifi-icon.svg" alt="wifi icon">
        <p class="accommodation-page__amenities-label">Wifi</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/utensils-solid.svg" alt="utensils icon">
        <p class="accommodation-page__amenities-label">Breakfast</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/pool-icon.svg" alt="pool icon">
        <p class="accommodation-page__amenities-label">Pool</p>
        </div>
        `,
        mealOption: 'Continental breakfast',
        hostImg: './images/portraitgirl2.jpg',
        hostInfo: `Hey! I'm your host Jack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perferendis accusantium laboriosam voluptatum optio non.`,
    },
    {
        id: 9,
        name: 'Palm Motel',
        location: 'Napier',
        type: 'motel',
        price: 90,
        photo: './images/palm-hotel.png',
        tags: ['pool', 'breakfast'],
        cardDetails: '4 guests, 2 bedrooms, 3 beds, 1 bathroom',
        cardAmenities: 'Breakfast, Pool',
        rating: 4.2,
        latitude: -39.44693510920972,
        longitude: 176.8687105029213,
        minNights: 1,
        maxNights: 5,
        minGuest: 1,
        maxGuest: 4,
        description: 'A lovely accommodation option Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione temporibus iste qui numquam? Libero nisi vitae asperiores veniam quibusdam doloribus similique! Explicabo eaque suscipit animi.',
        sleepingArrangements: `<div class="accommodation-page__sleeping-arrangement-div">
        <img class="accommodation-page__bed-img" src="./images/bed-icon.svg" alt="bed icon">
        <p class="accommodation-page__bedroom-number">Bedroom 1</p>
        <p class="accommodation-page__bed-type">1 king bed</p>
        </div>
        <div class="accommodation-page__sleeping-arrangement-div">
            <img class="accommodation-page__bed-img" src="./images/bed-icon.svg" alt="bed icon">
            <p class="accommodation-page__bedroom-number">Bedroom 2</p>
            <p class="accommodation-page__bed-type">1 queen bed</p>
        </div>`,
        onOffer: `<div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/wifi-icon.svg" alt="wifi icon">
        <p class="accommodation-page__amenities-label">Wifi</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/utensils-solid.svg" alt="utensils icon">
        <p class="accommodation-page__amenities-label">Breakfast</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/pool-icon.svg" alt="pool icon">
        <p class="accommodation-page__amenities-label">Pool</p>
        </div>
        `,
        mealOption: 'Continental breakfast',
        hostImg: './images/portraitgirl2.jpg',
        hostInfo: `Hey! I'm your host Jack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perferendis accusantium laboriosam voluptatum optio non.`,
    },
    {
        id: 10,
        name: 'Ocean Motel',
        location: 'Taupo',
        type: 'motel',
        price: 120,
        photo: './images/ocean-motel.png',
        tags: ['parking', 'pool'],
        cardDetails: '2 guests, 1 bedrooms, 1 bed, 1 bathroom',
        cardAmenities: 'Parking, Pool',
        rating: 3.9,
        latitude: -38.705775435665245,
        longitude: 175.96146270945385,
        minNights: 1,
        maxNights: 15,
        minGuest: 1,
        maxGuest: 2,
        description: 'A lovely accommodation option Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione temporibus iste qui numquam? Libero nisi vitae asperiores veniam quibusdam doloribus similique! Explicabo eaque suscipit animi.',
        sleepingArrangements: `<div class="accommodation-page__sleeping-arrangement-div">
        <img class="accommodation-page__bed-img" src="./images/bed-icon.svg" alt="bed icon">
        <p class="accommodation-page__bedroom-number">Bedroom 1</p>
        <p class="accommodation-page__bed-type">1 king bed</p>
        </div>
        <div class="accommodation-page__sleeping-arrangement-div">
            <img class="accommodation-page__bed-img" src="./images/bed-icon.svg" alt="bed icon">
            <p class="accommodation-page__bedroom-number">Bedroom 2</p>
            <p class="accommodation-page__bed-type">1 queen bed</p>
        </div>`,
        onOffer: `<div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/wifi-icon.svg" alt="wifi icon">
        <p class="accommodation-page__amenities-label">Wifi</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/utensils-solid.svg" alt="utensils icon">
        <p class="accommodation-page__amenities-label">Breakfast</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/pool-icon.svg" alt="pool icon">
        <p class="accommodation-page__amenities-label">Pool</p>
        </div>
        `,
        mealOption: 'Continental breakfast',
        hostImg: './images/portraitgirl2.jpg',
        hostInfo: `Hey! I'm your host Jack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perferendis accusantium laboriosam voluptatum optio non.`,
    },
    {
        id: 11,
        name: 'Craft Hostel',
        location: 'Napier',
        type: 'hostel',
        price: 50,
        photo: './images/feature-hostel.png',
        tags: ['breakfast', 'playground'],
        cardDetails: '1 guest, shared bedroom, 1 bed, shared bathroom',
        cardAmenities: '',
        rating: 4.6,
        latitude: -39.485366667288154,
        longitude: 176.9040727457045,
        minNights: 1,
        maxNights: 10,
        minGuest: 1,
        maxGuest: 1,
        description: 'A lovely accommodation option Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione temporibus iste qui numquam? Libero nisi vitae asperiores veniam quibusdam doloribus similique! Explicabo eaque suscipit animi.',
        sleepingArrangements: `<div class="accommodation-page__sleeping-arrangement-div">
        <img class="accommodation-page__bed-img" src="./images/bed-icon.svg" alt="bed icon">
        <p class="accommodation-page__bedroom-number">Bedroom 1</p>
        <p class="accommodation-page__bed-type">1 king bed</p>
        </div>
        <div class="accommodation-page__sleeping-arrangement-div">
            <img class="accommodation-page__bed-img" src="./images/bed-icon.svg" alt="bed icon">
            <p class="accommodation-page__bedroom-number">Bedroom 2</p>
            <p class="accommodation-page__bed-type">1 queen bed</p>
        </div>`,
        onOffer: `<div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/wifi-icon.svg" alt="wifi icon">
        <p class="accommodation-page__amenities-label">Wifi</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/utensils-solid.svg" alt="utensils icon">
        <p class="accommodation-page__amenities-label">Breakfast</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/pool-icon.svg" alt="pool icon">
        <p class="accommodation-page__amenities-label">Pool</p>
        </div>
        `,
        mealOption: 'Continental breakfast',
        hostImg: './images/portraitgirl2.jpg',
        hostInfo: `Hey! I'm your host Jack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perferendis accusantium laboriosam voluptatum optio non.`,
    },
    {
        id: 12,
        name: 'Cabin Motel',
        location: 'Wellington',
        type: 'motel',
        price: 210,
        photo: './images/log-motel.png',
        tags: ['parking', 'playground'],
        cardDetails: '2 guests, 1 bedroom, 2 beds, shared bathroom',
        cardAmenities: 'Parking, Playground',
        rating: 4.7,
        latitude: -41.23687032017337,
        longitude: 174.81398887064915,
        minNights: 1,
        maxNights: 15,
        minGuest: 1,
        maxGuest: 2,
        description: 'A lovely accommodation option Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione temporibus iste qui numquam? Libero nisi vitae asperiores veniam quibusdam doloribus similique! Explicabo eaque suscipit animi.',
        sleepingArrangements: `<div class="accommodation-page__sleeping-arrangement-div">
        <img class="accommodation-page__bed-img" src="./images/bed-icon.svg" alt="bed icon">
        <p class="accommodation-page__bedroom-number">Bedroom 1</p>
        <p class="accommodation-page__bed-type">1 king bed</p>
        </div>
        <div class="accommodation-page__sleeping-arrangement-div">
            <img class="accommodation-page__bed-img" src="./images/bed-icon.svg" alt="bed icon">
            <p class="accommodation-page__bedroom-number">Bedroom 2</p>
            <p class="accommodation-page__bed-type">1 queen bed</p>
        </div>`,
        onOffer: `<div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/wifi-icon.svg" alt="wifi icon">
        <p class="accommodation-page__amenities-label">Wifi</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/utensils-solid.svg" alt="utensils icon">
        <p class="accommodation-page__amenities-label">Breakfast</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/pool-icon.svg" alt="pool icon">
        <p class="accommodation-page__amenities-label">Pool</p>
        </div>
        `,
        mealOption: 'Continental breakfast',
        hostImg: './images/portraitgirl2.jpg',
        hostInfo: `Hey! I'm your host Jack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perferendis accusantium laboriosam voluptatum optio non.`,
    },
    {
        id: 13,
        name: 'Stay Hostel',
        location: 'Auckland',
        type: 'hostel',
        price: 60,
        photo: './images/auckland-hostel.png',
        tags: ['pool', 'breakfast'],
        cardDetails: '1 guest, shared bedroom, 1 bed, shared bathroom',
        cardAmenities: 'Breakfast, Pool',
        rating: 4.8,
        latitude: -36.87730708728428,
        longitude: 174.58869716884354,
        minNights: 1,
        maxNights: 7,
        minGuest: 1,
        maxGuest: 1,
        description: 'A lovely accommodation option Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione temporibus iste qui numquam? Libero nisi vitae asperiores veniam quibusdam doloribus similique! Explicabo eaque suscipit animi.',
        sleepingArrangements: `<div class="accommodation-page__sleeping-arrangement-div">
        <img class="accommodation-page__bed-img" src="./images/bed-icon.svg" alt="bed icon">
        <p class="accommodation-page__bedroom-number">Bedroom 1</p>
        <p class="accommodation-page__bed-type">1 king bed</p>
        </div>
        <div class="accommodation-page__sleeping-arrangement-div">
            <img class="accommodation-page__bed-img" src="./images/bed-icon.svg" alt="bed icon">
            <p class="accommodation-page__bedroom-number">Bedroom 2</p>
            <p class="accommodation-page__bed-type">1 queen bed</p>
        </div>`,
        onOffer: `<div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/wifi-icon.svg" alt="wifi icon">
        <p class="accommodation-page__amenities-label">Wifi</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/utensils-solid.svg" alt="utensils icon">
        <p class="accommodation-page__amenities-label">Breakfast</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/pool-icon.svg" alt="pool icon">
        <p class="accommodation-page__amenities-label">Pool</p>
        </div>
        `,
        mealOption: 'Continental breakfast',
        hostImg: './images/portraitgirl2.jpg',
        hostInfo: `Hey! I'm your host Jack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perferendis accusantium laboriosam voluptatum optio non.`,
    },
    {
        id: 14,
        name: 'Bunk Hostel',
        location: 'Taupo',
        type: 'hostel',
        price: 30,
        photo: './images/bunk-hostel.png',
        tags: ['breakfast', 'parking'],
        cardDetails: '2 guests, 1 bedroom, 2 beds, shared bathroom',
        cardAmenities: 'Breakfast, Parking',
        rating: 4.5,
        latitude: -38.714884063062975,
        longitude: 176.0919253527318,
        minNights: 1,
        maxNights: 15,
        minGuest: 1,
        maxGuest: 2,
        description: 'A lovely accommodation option Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione temporibus iste qui numquam? Libero nisi vitae asperiores veniam quibusdam doloribus similique! Explicabo eaque suscipit animi.',
        sleepingArrangements: `<div class="accommodation-page__sleeping-arrangement-div">
        <img class="accommodation-page__bed-img" src="./images/bed-icon.svg" alt="bed icon">
        <p class="accommodation-page__bedroom-number">Bedroom 1</p>
        <p class="accommodation-page__bed-type">1 king bed</p>
        </div>
        <div class="accommodation-page__sleeping-arrangement-div">
            <img class="accommodation-page__bed-img" src="./images/bed-icon.svg" alt="bed icon">
            <p class="accommodation-page__bedroom-number">Bedroom 2</p>
            <p class="accommodation-page__bed-type">1 queen bed</p>
        </div>`,
        onOffer: `<div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/wifi-icon.svg" alt="wifi icon">
        <p class="accommodation-page__amenities-label">Wifi</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/utensils-solid.svg" alt="utensils icon">
        <p class="accommodation-page__amenities-label">Breakfast</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/pool-icon.svg" alt="pool icon">
        <p class="accommodation-page__amenities-label">Pool</p>
        </div>
        `,
        mealOption: 'Continental breakfast',
        hostImg: './images/portraitgirl2.jpg',
        hostInfo: `Hey! I'm your host Jack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perferendis accusantium laboriosam voluptatum optio non.`,
    },
    {
        id: 15,
        name: 'Sunset Motel',
        location: 'Auckland',
        type: 'motel',
        price: 120,
        photo: './images/sunset-motel.png',
        tags: ['parking', 'playground'],
        cardDetails: '4 guests, 2 bedrooms, 3 beds, 1 bathroom',
        cardAmenities: 'Parking, Playground',
        rating: 3.8,
        latitude: -36.735465797785544,
        longitude: 174.75074550470458,
        minNights: 1,
        maxNights: 5,
        minGuest: 1,
        maxGuest: 4,
        description: 'A lovely accommodation option Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione temporibus iste qui numquam? Libero nisi vitae asperiores veniam quibusdam doloribus similique! Explicabo eaque suscipit animi.',
        sleepingArrangements: `<div class="accommodation-page__sleeping-arrangement-div">
        <img class="accommodation-page__bed-img" src="./images/bed-icon.svg" alt="bed icon">
        <p class="accommodation-page__bedroom-number">Bedroom 1</p>
        <p class="accommodation-page__bed-type">1 king bed</p>
        </div>
        <div class="accommodation-page__sleeping-arrangement-div">
            <img class="accommodation-page__bed-img" src="./images/bed-icon.svg" alt="bed icon">
            <p class="accommodation-page__bedroom-number">Bedroom 2</p>
            <p class="accommodation-page__bed-type">1 queen bed</p>
        </div>`,
        onOffer: `<div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/wifi-icon.svg" alt="wifi icon">
        <p class="accommodation-page__amenities-label">Wifi</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/utensils-solid.svg" alt="utensils icon">
        <p class="accommodation-page__amenities-label">Breakfast</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/pool-icon.svg" alt="pool icon">
        <p class="accommodation-page__amenities-label">Pool</p>
        </div>
        `,
        mealOption: 'Continental breakfast',
        hostImg: './images/portraitgirl2.jpg',
        hostInfo: `Hey! I'm your host Jack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perferendis accusantium laboriosam voluptatum optio non.`,
    },
];

function availableCardLoop(){
    for(let i = 0; i < accommodationObjectArray.length; i++){
        generateAvailableCard(i);
    };
}
availableCardLoop();

function filteredCardLoop(){
    for(let i = 0; i < accommodationObjectArray.length; i++){
        generateSearchCard(i);
    };
}
filteredCardLoop();

// -------------------------------------------------------------
// Google maps API append start
// -------------------------------------------------------------

const script = '<script src="https://maps.googleapis.com/maps/api/js?key=' + key +'&callback=initMap&libraries=places&v=weekly" async defer></script>';
console.log(script);

$(document).ready(function(){
    $('body').append(script);
});

// -------------------------------------------------------------
// Google maps API append end
// -------------------------------------------------------------



// -------------------------------------------------------------
// Google maps start
// -------------------------------------------------------------

function initMap(){
    $('#searchCheckIn').datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth: true,
        minDate: new Date(),
        maxDate: '+1y',
        
        onSelect: function(date){
            let selectDate = new Date(date);
            let msInADay = 86400000;
            let stDate = new Date(selectDate.getTime() + msInADay);

            $('#searchCheckOut').datepicker('option', 'minDate', stDate);
            let enDate = new Date(selectDate.getTime() + 10 * msInADay);
        }
    });

    $('#searchCheckOut').datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth: true
    });

    // let locationAutocomplete = new google.maps.places.Autocomplete(
    //     document.getElementById('searchLocation'),
    //     {

    //     }
    // )


    let newZealand = {lat: -38.87996245321901, lng: 176.11236351323205};

    const map = new google.maps.Map(document.getElementById('map'),{
        zoom: 7,
        center: newZealand,
    });

    setMarkers(map);
}

function setMarkers(map){
    for(let i = 0; i < accommodationObjectArray.length; i++){
        const location = accommodationObjectArray[i].latLng;
        const stayName = accommodationObjectArray[i].name;

        const latitude = accommodationObjectArray[i].latitude;
        const longitude = accommodationObjectArray[i].longitude;

        const myLatLng = { lat: latitude, lng: longitude};

        new google.maps.Marker({
            position: myLatLng,
            map,
            title: stayName,
        });
    }
}

// -------------------------------------------------------------
// Google maps end
// -------------------------------------------------------------



// -------------------------------------------------------------
// Search bar search start
// -------------------------------------------------------------



// -------------------------------------------------------------
// Search bar search end
// -------------------------------------------------------------



// -------------------------------------------------------------
// sort by price start
// -------------------------------------------------------------

$("#sortPriceAvailable").change(function(){
    console.log('price sort is clicked');

    let sortValue = ($("#sortPriceAvailable").val());
    if(sortValue === 'price-low-high'){
        accommodationObjectArray.sort(function(a,b){
            let itemA = a.price, itemB = b.price;
            if(itemA < itemB){
                return -1;
            }
            if(itemA > itemB){
                return 1;
            }
        });
        allAvailableCards();
    }
    if(sortValue === 'price-high-low'){
        accommodationObjectArray.sort(function(a,b){
            let itemA = a.price, itemB = b.price;
            if(itemA > itemB){
                return -1;
            }
            if(itemA < itemB){
                return 1;
            }
        });
        allAvailableCards();
    }
    if(sortValue === 'reset-sort'){
        allAvailableCards();
    }
});

$('#sortPriceFiltered').change(function(){
    console.log('price sort is clicked');

    let sortValue = ($("#sortPriceFiltered").val());
    if(sortValue === 'price-low-high'){
        accommodationObjectArray.sort(function(a,b){
            let itemA = a.price, itemB = b.price;
            if(itemA < itemB){
                return -1;
            }
            if(itemA > itemB){
                return 1;
            }
        });
        allFilteredCards();
    }
    if(sortValue === 'price-high-low'){
        accommodationObjectArray.sort(function(a,b){
            let itemA = a.price, itemB = b.price;
            if(itemA > itemB){
                return -1;
            }
            if(itemA < itemB){
                return 1;
            }
        });
        allFilteredCards();
    }
    if(sortValue === 'reset-sort'){
        allFilteredCards();
    }
});

// -------------------------------------------------------------
// sort by price end
// -------------------------------------------------------------



// -------------------------------------------------------------
// sort by stay type start
// -------------------------------------------------------------

$('#accommodationTypeAvaiable').change(function(a, b){
    console.log('stay type sort is clicked');

    let sortValueAvailable = ($("#accommodationTypeAvaiable").val());
    if(sortValueAvailable === 'house'){
        $('#availableCardContainer').empty();
        for(i = 0; i < accommodationObjectArray.length; i++){
            if(accommodationObjectArray[i].type === 'house'){
                generateAvailableCard(i);
            }
        }

    }

    if(sortValueAvailable === 'hotel'){
        $('#availableCardContainer').empty();
        for(i = 0; i < accommodationObjectArray.length; i++){
            if(accommodationObjectArray[i].type === 'hostel'){
                generateAvailableCard(i);
            }
        }

    }

    if(sortValueAvailable === 'motel'){
        $('#availableCardContainer').empty();
        for(i = 0; i < accommodationObjectArray.length; i++){
            if(accommodationObjectArray[i].type === 'motel'){
                generateAvailableCard(i);
            }
        }

    }

    if(sortValueAvailable === 'hostel'){
        $('#availableCardContainer').empty();
        for(i = 0; i < accommodationObjectArray.length; i++){
            if(accommodationObjectArray[i].type === 'hostel'){
                generateAvailableCard(i);
            }
        }

    }

    if(sortValueAvailable === 'reset-sort'){
        allAvailableCards();
    }
});


$('#accommodationTypeFiltered').change(function(a,b){
    let sortValueFiltered = ($('#accommodationTypeFiltered').val());

    if(sortValueFiltered === 'house'){
        $('#filteredCardContainer').empty();
        for(i = 0; i < accommodationObjectArray.length; i++){
            if(accommodationObjectArray[i].type === 'house'){
                generateSearchCard(i);
            }
        }
    }
    if(sortValueFiltered === 'hotel'){
        $('#filteredCardContainer').empty();
        for(i = 0; i < accommodationObjectArray.length; i++){
            if(accommodationObjectArray[i].type === 'hotel'){
                generateSearchCard(i);
            }
        }
    }
    if(sortValueFiltered === 'motel'){
        $('#filteredCardContainer').empty();
        for(i = 0; i < accommodationObjectArray.length; i++){
            if(accommodationObjectArray[i].type === 'motel'){
                generateSearchCard(i);
            }
        }
    }
    if(sortValueFiltered === 'hostel'){
        $('#filteredCardContainer').empty();
        for(i = 0; i < accommodationObjectArray.length; i++){
            if(accommodationObjectArray[i].type === 'hostel'){
                generateSearchCard(i);
            }
        }
    }
    if(sortValueFiltered === 'reset-sort'){
        allFilteredCards();
    }
});

// -------------------------------------------------------------
// sort by stay type end
// -------------------------------------------------------------



// -------------------------------------------------------------
// sort buttons start
// -------------------------------------------------------------

$('#breakfastAvailable').click(function(){
    console.log('breakfast clicked');

    $('#availableCardContainer').empty();

    for(i = 0; i < accommodationObjectArray.length; i++){
        for(let j = 0; j < accommodationObjectArray[i].tags.length; j++){
            if(accommodationObjectArray[i].tags[j] === 'breakfast'){
                generateAvailableCard(i);
            }
        }
    }  
});

$('#poolAvailable').click(function(){
    console.log('pool clicked');

    $('#availableCardContainer').empty();

    for(i = 0; i < accommodationObjectArray.length; i++){
        for(let j = 0; j < accommodationObjectArray[i].tags.length; j++){
            if(accommodationObjectArray[i].tags[j] === 'pool'){
                generateAvailableCard(i);
            }
        }
    }  
});

$('#playgroundAvailable').click(function(){
    console.log('playground clicked');

    $('#availableCardContainer').empty();

    for(i = 0; i < accommodationObjectArray.length; i++){
        for(let j = 0; j < accommodationObjectArray[i].tags.length; j++){
            if(accommodationObjectArray[i].tags[j] === 'playground'){
                generateAvailableCard(i);
            }
        }
    }  
});

$('#parkingAvailable').click(function(){
    console.log('parking clicked');

    $('#availableCardContainer').empty();

    for(i = 0; i < accommodationObjectArray.length; i++){
        for(let j = 0; j < accommodationObjectArray[i].tags.length; j++){
            if(accommodationObjectArray[i].tags[j] === 'parking'){
                generateSearchCard(i);
            }
        }
    }  
});

$('#resetAvailable').click(function(){
    console.log('reset clicked');

    $('#availableCardContainer').empty();
    allAvailableCards(); 
});



$('#breakfastFiltered').click(function(){
    console.log('breakfast clicked');

    $('#filteredCardContainer').empty();

    for(i = 0; i < accommodationObjectArray.length; i++){
        for(let j = 0; j < accommodationObjectArray[i].tags.length; j++){
            if(accommodationObjectArray[i].tags[j] === 'breakfast'){
                generateSearchCard(i);
            }
        }
    }  
});

$('#poolFiltered').click(function(){
    console.log('pool clicked');

    $('#filteredCardContainer').empty();

    for(i = 0; i < accommodationObjectArray.length; i++){
        for(let j = 0; j < accommodationObjectArray[i].tags.length; j++){
            if(accommodationObjectArray[i].tags[j] === 'pool'){
                generateSearchCard(i);
            }
        }
    }  
});

$('#playgroundFiltered').click(function(){
    console.log('playground clicked');

    $('#filteredCardContainer').empty();

    for(i = 0; i < accommodationObjectArray.length; i++){
        for(let j = 0; j < accommodationObjectArray[i].tags.length; j++){
            if(accommodationObjectArray[i].tags[j] === 'playground'){
                generateSearchCard(i);
            }
        }
    }  
});

$('#resetFiltered').click(function(){
    console.log('reset clicked');

    $('#filteredCardContainer').empty();
    allFilteredCards(); 
});

// -------------------------------------------------------------
// sort buttons end
// -------------------------------------------------------------

function filterFunction(event){
    $('#filteredCardContainer').empty();
    event.preventDefault();

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let msDay = 1000 * 3600 * 24;

    // getting values from search 
    let location = $('#searchLocation').val();
    console.log(location);

    let guests = $('#guestSelect').val();
    console.log(guests);

    let checkInDate = new Date ($('#searchCheckIn').val());
    console.log(checkInDate);

    let checkOutDate = new Date ($('#searchCheckOut').val());
    console.log(checkOutDate);

    // getting individual data of day, month, year
    let checkInDay = checkInDate.getDate(),
        checkInMonth = checkInDate.getMonth(),
        checkInYear = checkInDate.getFullYear(),
        checkOutDay = checkOutDate.getDate(),
        checkOutMonth = checkOutDate.getMonth(),
        checkOutYear = checkOutDate.getFullYear();

    let checkInDetails = [checkInDay, months[checkInMonth], checkInYear].join(' ');
    console.log(checkInDetails);

    let checkOutDetails = [checkOutDay, months[checkOutMonth], checkOutYear].join(' ');
    console.log(checkOutDetails);

    // calculate the difference between check-in and check-out days
    let difference = checkOutDate.getTime() - checkInDate.getTime();
    
    let dayDifference = difference/msDay;
    console.log(dayDifference);

    // conditions for entering a date
    if(checkInDate >= checkOutDate){
        // alert('Check out date must be later than check in date');
    }

    if((checkInDate == 'Invalid Date') || (checkOutDate == 'Invalid Date')){
        // alert('Please enter both a check in & check out date');
    }

    for(let i = 0; i < accommodationObjectArray.length; i++){
        if((location === accommodationObjectArray[i].location) && (dayDifference >= accommodationObjectArray[i].minNights) && (dayDifference <= accommodationObjectArray[i].maxNights) && (guests >= accommodationObjectArray[i].minGuest) && (guests <= accommodationObjectArray[i].maxGuest)){
            generateSearchCard(i);
        }
    }
}


$('#searchIcon').click(function(){
    console.log('search clicked');

    $('#searchBar').append( $('#navSearchBar') );
    
    // topNav.classList.add('hide');
    landingSection.classList.add('top-position');
    landingSection.classList.remove('landing-section');
    availableStays.classList.add('hide');
    availableCardContainer.classList.add('hide');

    filteredStays.classList.remove('hide');
    filteredSection.classList.remove('hide');
    // searchNav.classList.remove('hide');

    
});

// $('#stayNZLogo').click(function(){
//     filteredStays.classList.add('hide');
//     filteredSection.classList.add('hide');
//     landingSection.classList.add('landing-section');

//     landingSection.classList.remove('top-position');
//     availableStays.classList.remove('hide');
//     availableCardContainer.classList.remove('hide');
// });


function allAvailableCards(){
    $('#availableCardContainer').empty();
    for(let i = 0; i < accommodationObjectArray.length; i++){
        generateAvailableCard(i);
    }
}

function allFilteredCards(){
    $('#filteredCardContainer').empty();
    for(let i = 0; i < accommodationObjectArray.length; i++){
        generateSearchCard(i);
    }
}


function generateAvailableCard(x){
    $('#availableCardContainer').append(
        `
            <div class="accommodation-card">
                <img class="accommodation-card__img" id="${accommodationObjectArray[x].id}" src="${accommodationObjectArray[x].photo}" alt="">
                <div  class="accommodation-card__div">
                    <div class="accommodation-card__text">
                        <p class="accommodation-card__name">${accommodationObjectArray[x].name}</p>
                        <p class="accommodation-card__location">${accommodationObjectArray[x].location}</p>
                    </div>
                    <p class="accommodation-card__price">$${accommodationObjectArray[x].price}</p>
                </div>
            </div>
        `   
    );
}

function generateSearchCard(x){
    $('#filteredCardContainer').append(
        `
        <div class="filtered-section__card">
            <img class="filtered-section__img" src="${accommodationObjectArray[x].photo}" alt="">
            <div class="filtered-section__info">
                <div class="filtered-section__top-text">
                    <div class="filtered-section__top-text-left">
                        <p class="filtered-section__stay-type">${accommodationObjectArray[x].type}</p>
                        <p class="filtered-section__stay-name">${accommodationObjectArray[x].name}, ${accommodationObjectArray[x].location}</p>
                    </div>
                    <img class="filtered-section__bookmark" src="" alt="">
                </div>
                <div class="filtered-section__middle-text">
                    <p class="filtered-section__details">${accommodationObjectArray[x].cardDetails}</p>
                    <p class="filtered-section__amenities">${accommodationObjectArray[x].cardAmenities}</p>
                </div>
                <div class="filtered-section__bottom-text">
                    <div class="filtered-section__rating-div">
                        <img class="filtered-section__star" src="./images/star.svg" alt="star icon">
                        <p class="filtered-section__rating">${accommodationObjectArray[x].rating}</p>
                    </div>
                    <p class="filtered-section__price"><b>$</b>${accommodationObjectArray[x].price} / night. Max nights ${accommodationObjectArray[x].maxNights}</p>
                </div>
            </div>
        </div>
        `
    )
}

// function generateAccommodationPage(){
//     $('.accommodation-card__img').click(function(){
//         console.log(this.src);
//         // for(let i = 0; i < accommodationObjectArray.length; i ++){
//         //     if(parseInt)
//         // }
//     });
// }

$('.accommodation-card__img').click(function(){
    // console.log(this.src);
    for(let i = 0; i < accommodationObjectArray.length; i ++){
        if(parseInt(this.id) === accommodationObjectArray[i].id){
            console.log(this.id);
            accommodationPageGeneratoe(i);
        }
    }
});


function accommodationPageGeneratoe(x){

    $('#accommodationPage').append(
        `
            <div class="accommodation-page__top-info">
                <div class="accommodation-page__top-left">
                    <p class="accommodation-page__stay-name">${accommodationObjectArray[x].name}</p>
                    <p class="accommodation-page__stay-location">${accommodationObjectArray[x].location}</p>
                </div>
                <img class="accommodation-page__bookmark-icon" src="./images/bookmark.svg" alt="bookmark icon">
            </div>
            
            <img class="accommodation-page__stay-img" src="${accommodationObjectArray[x].photo}" alt="${accommodationObjectArray[x].name}">
            
            <div class="accommodation-page__stay-info">
                <div class="accommodation-page__stay-info-left">
                    <div class="accommodation-page__stay-type-div">
                        <img class="accommodation-page__house-icon" src="./images/home-solid.svg" alt="home icon">
                        <p  class="accommodation-page__stay-type">${accommodationObjectArray[x].type}</p>
                    </div>
            
                    <div class="accommodation-page__description-div">
                        <p class="accommodation-page__description-heading">Description</p>
                        <p class="accommodation-page__description-text">${accommodationObjectArray[x].description}</p>
                    </div>
            
                    <div class="accommodation-page__sleeping-div">
                        <p class="accommodation-page__sleeping-heading">Sleeping arrangements</p>
                        ${accommodationObjectArray[x].sleepingArrangements}
                    </div>
                </div>
                <div class="accommodation-page__stay-info-right">
                    <div class="accommodation-page__booking-div">
            
                        <select class="accommodation-page__breakfast" name="breakfast" id="breakfast">
                            <option value="breakfast">Breakfast</option>
                            <option value="">${accommodationObjectArray[x].mealOption}</option>
                        </select>
                        <button class="accommodation-page__make-booking" id="makeBooking">Make Booking</button>
                    </div>
                </div>
            </div>
            
            <div class="accommodation-page__extra-info">
                <div class="accommodation-page__on-offer-div">
                    <p class="accommodation-page__on-offer-heading">What's on offer</p>
                    <div class="accommodation-page__amenities-div" id="amenitiesDiv">${accommodationObjectArray[x].onOffer}</div>
                </div>
            
                <div class="accommodation-page__meal-div">
                    <p class="accommodation-page__meal-heading">Meal options</p>
                    <div class="accommodation-page__meal-info">
                        <img class="accommodation-page__utensils-icon" src="./images/utensils-solid.svg" alt="utensils icon">
                        <p class="accommodation-page__meal-text">${accommodationObjectArray[x].mealOption}</p>
                    </div>
                </div>
            </div>
            
            <div class="accommodation-page__map-div">
                <p class="accommodation-page__map-location-name">${accommodationObjectArray[x].location}</p>
                <div class="accommodation-page__map" id="accommodationMap"></div>
            </div>
            
            <div class="accommodation-page__contact-div">
                <div class="accommodation-page__contact-div-top">
                    <img class="accommodation-page__host-img" src="${accommodationObjectArray[x].hostImg}" alt="">
                    <div class="accommodation-page__contact-div-info">
                        <p class="accommodation-page__contact-div-heading">Meet your host</p>
                        <button class="accommodation-page__contact-btn">Contact</button>
                    </div>
                    <p class="accommodation-page__host-info">${accommodationObjectArray[x].hostInfo}</p>
                </div>
            </div>
        `
    )
}


// function generateAccommodationPage(){
//     console.log('generateAccommodationPage clicked');

//     for(let x = 0; x < accommodationObjectArray.length; x++){
//         $('#accommodationPage').append(
//             `
//                 <div class="accommodation-page__top-info">
//                     <div class="accommodation-page__top-left">
//                         <p class="accommodation-page__stay-name">${accommodationObjectArray[x].name}</p>
//                         <p class="accommodation-page__stay-location">${accommodationObjectArray[x].location}</p>
//                     </div>
//                     <img class="accommodation-page__bookmark-icon" src="./images/bookmark.svg" alt="bookmark icon">
//                 </div>
                
//                 <img class="accommodation-page__stay-img" src="${accommodationObjectArray[x].photo}" alt="${accommodationObjectArray[x].name}">
                
//                 <div class="accommodation-page__stay-info">
//                     <div class="accommodation-page__stay-info-left">
//                         <div class="accommodation-page__stay-type-div">
//                             <img class="accommodation-page__house-icon" src="./images/home-solid.svg" alt="home icon">
//                             <p  class="accommodation-page__stay-type">${accommodationObjectArray[x].type}</p>
//                         </div>
                
//                         <div class="accommodation-page__description-div">
//                             <p class="accommodation-page__description-heading">Description</p>
//                             <p class="accommodation-page__description-text">${accommodationObjectArray[x].description}</p>
//                         </div>
                
//                         <div class="accommodation-page__sleeping-div">
//                             <p class="accommodation-page__sleeping-heading">Sleeping arrangements</p>
//                             ${accommodationObjectArray[x].sleepingArrangements}
//                         </div>
//                     </div>
//                     <div class="accommodation-page__stay-info-right">
//                         <div class="accommodation-page__booking-div">
                
//                             <select class="accommodation-page__breakfast" name="breakfast" id="breakfast">
//                                 <option value="breakfast">Breakfast</option>
//                                 <option value="">${accommodationObjectArray[x].mealOption}</option>
//                             </select>
//                             <button class="accommodation-page__make-booking" id="makeBooking">Make Booking</button>
//                         </div>
//                     </div>
//                 </div>
                
//                 <div class="accommodation-page__extra-info">
//                     <div class="accommodation-page__on-offer-div">
//                         <p class="accommodation-page__on-offer-heading">What's on offer</p>
//                         <div class="accommodation-page__amenities-div" id="amenitiesDiv">${accommodationObjectArray[x].onOffer}</div>
//                     </div>
                
//                     <div class="accommodation-page__meal-div">
//                         <p class="accommodation-page__meal-heading">Meal options</p>
//                         <div class="accommodation-page__meal-info">
//                             <img class="accommodation-page__utensils-icon" src="./images/utensils-solid.svg" alt="utensils icon">
//                             <p class="accommodation-page__meal-text">${accommodationObjectArray[x].mealOption}</p>
//                         </div>
//                     </div>
//                 </div>
                
//                 <div class="accommodation-page__map-div">
//                     <p class="accommodation-page__map-location-name">${accommodationObjectArray[x].location}</p>
//                     <div class="accommodation-page__map" id="accommodationMap"></div>
//                 </div>
                
//                 <div class="accommodation-page__contact-div">
//                     <div class="accommodation-page__contact-div-top">
//                         <img class="accommodation-page__host-img" src="${accommodationObjectArray[x].hostImg}" alt="">
//                         <div class="accommodation-page__contact-div-info">
//                             <p class="accommodation-page__contact-div-heading">Meet your host</p>
//                             <button class="accommodation-page__contact-btn">Contact</button>
//                         </div>
//                         <p class="accommodation-page__host-info">${accommodationObjectArray[x].hostInfo}</p>
//                     </div>
//                 </div>
//             `
//         )
//     }
// }

searchIcon.addEventListener('click', filterFunction);
// cardImage.addEventListener('click', generateAccommodationPage);