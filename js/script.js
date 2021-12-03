console.log('linked :)');

// -------------------------------------------------------------
// Global variables start
// -------------------------------------------------------------
const landingSection = document.querySelector('#landingSection');
const availableStays = document.querySelector('#availableStays');
const availableCardContainer = document.querySelector('#availableCardContainer');
const topNav = document.querySelector('#topNav');
const searchNav = document.querySelector('#searchNav');
const filteredStays = document.querySelector('#filteredStays');
const filteredSection = document.querySelector('#filteredSection');
const stayNZLogo = document.querySelector('#stayNZLogo');
const searchIcon = document.querySelector('#searchIcon');
const availableArrowIcon = document.querySelector('#availableArrowIcon');
const accommodationPage = document.querySelector('#accommodationPage');
// -------------------------------------------------------------
// Global variables start
// -------------------------------------------------------------



// -------------------------------------------------------------
// Accommodation object array start
// -------------------------------------------------------------
let accommodationObjectArray = [
    {
        id: 0,
        id2: 00,
        name: 'Summer Batch',
        location: 'Wellington',
        type: 'house',
        price: 180,
        photo: './images/batch-house.png',
        altText: 'blue summer batch house',
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
        <img class="accommodation-page__utensils-icon" src="./images/utensils-solid.svg" alt="utensils icon">
        <p class="accommodation-page__amenities-label">Breakfast</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/pool-icon.svg" alt="pool icon">
        <p class="accommodation-page__amenities-label">Pool</p>
        </div>
        `,
        mealOption: '<b>$15 Continental breakfast</b> - per person, per day',
        mealPrice: 15,
        hostImg: './images/portraitgirl2.jpg',
        hostInfo: `Hey! I'm your host Jack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perferendis accusantium laboriosam voluptatum optio non.`,
    },
    {
        id: 1,
        id2: 11,
        name: 'Seaview Hotel',
        location: 'Auckland',
        type: 'hotel',
        price: 157,
        photo: './images/seaview-hotel.png',
        altText: 'hotel bath with sea view',
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
        <img class="accommodation-page__utensils-icon" src="./images/utensils-solid.svg" alt="utensils icon">
        <p class="accommodation-page__amenities-label">Breakfast</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/pool-icon.svg" alt="pool icon">
        <p class="accommodation-page__amenities-label">Pool</p>
        </div>
        `,
        mealOption: '<b>$15 Continental breakfast</b> - per person, per day',
        mealPrice: 15,
        hostImg: './images/portraitgirl2.jpg',
        hostInfo: `Hey! I'm your host Jack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perferendis accusantium laboriosam voluptatum optio non.`,
    },
    {
        id: 2,
        id2: 22,
        name: 'Nook Hotel',
        location: 'Wellington',
        type: 'hotel',
        price: 130,
        photo: './images/fairy-hotel.png',
        altText: 'cottage style hotel',
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
        <img class="accommodation-page__utensils-icon" src="./images/utensils-solid.svg" alt="utensils icon">
        <p class="accommodation-page__amenities-label">Breakfast</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/pool-icon.svg" alt="pool icon">
        <p class="accommodation-page__amenities-label">Pool</p>
        </div>
        `,
        mealOption: '<b>$15 Continental breakfast</b> - per person, per day',
        mealPrice: 15,
        hostImg: './images/portraitgirl2.jpg',
        hostInfo: `Hey! I'm your host Jack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perferendis accusantium laboriosam voluptatum optio non.`,
    },
    {
        id: 3,
        id2: 33,
        name: 'Glass House',
        location: 'Auckland',
        type: 'house',
        price: 240,
        photo: './images/glass-house.png',
        altText: 'modern house with big windows and pool',
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
        <img class="accommodation-page__utensils-icon" src="./images/utensils-solid.svg" alt="utensils icon">
        <p class="accommodation-page__amenities-label">Breakfast</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/pool-icon.svg" alt="pool icon">
        <p class="accommodation-page__amenities-label">Pool</p>
        </div>
        `,
        mealOption: '<b>$15 Continental breakfast</b> - per person, per day',
        mealPrice: 15,
        hostImg: './images/portraitgirl2.jpg',
        hostInfo: `Hey! I'm your host Jack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perferendis accusantium laboriosam voluptatum optio non.`,
    },
    {
        id: 4,
        id2: 44,
        name: 'Monday Hostel',
        location: 'Wellington',
        type: 'hostel',
        price: 30,
        photo: './images/marilyn-hotel.png',
        altText: 'hostel bedroom with two single beds',
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
        <img class="accommodation-page__utensils-icon" src="./images/utensils-solid.svg" alt="utensils icon">
        <p class="accommodation-page__amenities-label">Breakfast</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/pool-icon.svg" alt="pool icon">
        <p class="accommodation-page__amenities-label">Pool</p>
        </div>
        `,
        mealOption: '<b>$15 Continental breakfast</b> - per person, per day',
        mealPrice: 15,
        hostImg: './images/portraitgirl2.jpg',
        hostInfo: `Hey! I'm your host Jack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perferendis accusantium laboriosam voluptatum optio non.`,
    },
    {
        id: 5,
        id2: 55,
        name: 'Log House',
        location: 'Napier',
        type: 'house',
        price: 140,
        photo: './images/cabin-woods.png',
        altText: 'cabin in the woods',
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
        <img class="accommodation-page__utensils-icon" src="./images/utensils-solid.svg" alt="utensils icon">
        <p class="accommodation-page__amenities-label">Breakfast</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/pool-icon.svg" alt="pool icon">
        <p class="accommodation-page__amenities-label">Pool</p>
        </div>
        `,
        mealOption: '<b>$15 Continental breakfast</b> - per person, per day',
        mealPrice: 15,
        hostImg: './images/portraitgirl2.jpg',
        hostInfo: `Hey! I'm your host Jack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perferendis accusantium laboriosam voluptatum optio non.`,
    },
    {
        id: 6,
        id2: 66,
        name: 'Full House',
        location: 'Taupo',
        type: 'house',
        price: 240,
        photo: './images/pool-house.png',
        altText: 'two story house with pool',
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
        <img class="accommodation-page__utensils-icon" src="./images/utensils-solid.svg" alt="utensils icon">
        <p class="accommodation-page__amenities-label">Breakfast</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/pool-icon.svg" alt="pool icon">
        <p class="accommodation-page__amenities-label">Pool</p>
        </div>
        `,
        mealOption: '<b>$15 Continental breakfast</b> - per person, per day',
        mealPrice: 15,
        hostImg: './images/portraitgirl2.jpg',
        hostInfo: `Hey! I'm your host Jack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perferendis accusantium laboriosam voluptatum optio non.`,
    },
    {
        id: 7,
        id2: 77,
        name: 'Stay Hotel',
        location: 'Napier',
        type: 'hotel',
        price: 210,
        photo: './images/wood-hotel.png',
        altText: 'hotel bedroom, double bed, wooden feature wall',
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
        <img class="accommodation-page__utensils-icon" src="./images/utensils-solid.svg" alt="utensils icon">
        <p class="accommodation-page__amenities-label">Breakfast</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/pool-icon.svg" alt="pool icon">
        <p class="accommodation-page__amenities-label">Pool</p>
        </div>
        `,
        mealOption: '<b>$15 Continental breakfast</b> - per person, per day',
        mealPrice: 15,
        hostImg: './images/portraitgirl2.jpg',
        hostInfo: `Hey! I'm your host Jack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perferendis accusantium laboriosam voluptatum optio non.`,
    },
    {
        id: 8,
        id2: 88,
        name: 'Ocean Hotel',
        location: 'Wellington',
        type: 'hotel',
        price: 140,
        photo: './images/lake-hotel.png',
        altText: 'hotel room, double bed',
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
        <img class="accommodation-page__utensils-icon" src="./images/utensils-solid.svg" alt="utensils icon">
        <p class="accommodation-page__amenities-label">Breakfast</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/pool-icon.svg" alt="pool icon">
        <p class="accommodation-page__amenities-label">Pool</p>
        </div>
        `,
        mealOption: '<b>$15 Continental breakfast</b> - per person, per day',
        mealPrice: 15,
        hostImg: './images/portraitgirl2.jpg',
        hostInfo: `Hey! I'm your host Jack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perferendis accusantium laboriosam voluptatum optio non.`,
    },
    {
        id: 9,
        id2: 99,
        name: 'Palm Motel',
        location: 'Napier',
        type: 'motel',
        price: 90,
        photo: './images/palm-hotel.png',
        altText: '4 story motel with palm trees',
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
        <img class="accommodation-page__utensils-icon" src="./images/utensils-solid.svg" alt="utensils icon">
        <p class="accommodation-page__amenities-label">Breakfast</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/pool-icon.svg" alt="pool icon">
        <p class="accommodation-page__amenities-label">Pool</p>
        </div>
        `,
        mealOption: '<b>$15 Continental breakfast</b> - per person, per day',
        mealPrice: 15,
        hostImg: './images/portraitgirl2.jpg',
        hostInfo: `Hey! I'm your host Jack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perferendis accusantium laboriosam voluptatum optio non.`,
    },
    {
        id: 10,
        id2: 1010,
        name: 'Ocean Motel',
        location: 'Taupo',
        type: 'motel',
        price: 120,
        photo: './images/ocean-motel.png',
        altText: '3 story motel',
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
        <img class="accommodation-page__utensils-icon" src="./images/utensils-solid.svg" alt="utensils icon">
        <p class="accommodation-page__amenities-label">Breakfast</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/pool-icon.svg" alt="pool icon">
        <p class="accommodation-page__amenities-label">Pool</p>
        </div>
        `,
        mealOption: '<b>$15 Continental breakfast</b> - per person, per day',
        mealPrice: 15,
        hostImg: './images/portraitgirl2.jpg',
        hostInfo: `Hey! I'm your host Jack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perferendis accusantium laboriosam voluptatum optio non.`,
    },
    {
        id: 11,
        id2: 1111,
        name: 'Craft Hostel',
        location: 'Napier',
        type: 'hostel',
        price: 50,
        photo: './images/feature-hostel.png',
        altText: 'hostel with wooden bunk beds',
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
        <img class="accommodation-page__utensils-icon" src="./images/utensils-solid.svg" alt="utensils icon">
        <p class="accommodation-page__amenities-label">Breakfast</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/pool-icon.svg" alt="pool icon">
        <p class="accommodation-page__amenities-label">Pool</p>
        </div>
        `,
        mealOption: '<b>$15 Continental breakfast</b> - per person, per day',
        mealPrice: 15,
        hostImg: './images/portraitgirl2.jpg',
        hostInfo: `Hey! I'm your host Jack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perferendis accusantium laboriosam voluptatum optio non.`,
    },
    {
        id: 12,
        id2: 1212,
        name: 'Cabin Motel',
        location: 'Wellington',
        type: 'motel',
        price: 210,
        photo: './images/log-motel.png',
        altText: 'wooden cabin, table and chairs out front',
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
        <img class="accommodation-page__utensils-icon" src="./images/utensils-solid.svg" alt="utensils icon">
        <p class="accommodation-page__amenities-label">Breakfast</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/pool-icon.svg" alt="pool icon">
        <p class="accommodation-page__amenities-label">Pool</p>
        </div>
        `,
        mealOption: '<b>$15 Continental breakfast</b> - per person, per day',
        mealPrice: 15,
        hostImg: './images/portraitgirl2.jpg',
        hostInfo: `Hey! I'm your host Jack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perferendis accusantium laboriosam voluptatum optio non.`,
    },
    {
        id: 13,
        id2: 1313,
        name: 'Stay Hostel',
        location: 'Auckland',
        type: 'hostel',
        price: 60,
        photo: './images/auckland-hostel.png',
        altText: 'hostel bedroom, double bed, city view',
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
        <img class="accommodation-page__utensils-icon" src="./images/utensils-solid.svg" alt="utensils icon">
        <p class="accommodation-page__amenities-label">Breakfast</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/pool-icon.svg" alt="pool icon">
        <p class="accommodation-page__amenities-label">Pool</p>
        </div>
        `,
        mealOption: '<b>$15 Continental breakfast</b> - per person, per day',
        mealPrice: 15,
        hostImg: './images/portraitgirl2.jpg',
        hostInfo: `Hey! I'm your host Jack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perferendis accusantium laboriosam voluptatum optio non.`,
    },
    {
        id: 14,
        id2: 1414,
        name: 'Bunk Hostel',
        location: 'Taupo',
        type: 'hostel',
        price: 30,
        photo: './images/bunk-hostel.png',
        altText: 'hostel with bunk beds',
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
        <img class="accommodation-page__utensils-icon" src="./images/utensils-solid.svg" alt="utensils icon">
        <p class="accommodation-page__amenities-label">Breakfast</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/pool-icon.svg" alt="pool icon">
        <p class="accommodation-page__amenities-label">Pool</p>
        </div>
        `,
        mealOption: '<b>$15 Continental breakfast</b> - per person, per day',
        mealPrice: 15,
        hostImg: './images/portraitgirl2.jpg',
        hostInfo: `Hey! I'm your host Jack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perferendis accusantium laboriosam voluptatum optio non.`,
    },
    {
        id: 15,
        id2: 1515,
        name: 'Sunset Motel',
        location: 'Auckland',
        type: 'motel',
        price: 120,
        photo: './images/sunset-motel.png',
        altText: 'two story motel with carpark',
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
        <img class="accommodation-page__utensils-icon" src="./images/utensils-solid.svg" alt="utensils icon">
        <p class="accommodation-page__amenities-label">Breakfast</p>
        </div>
        <div class="accommodation-page__amenities">
        <img class="accommodation-page__amenities-icon" src="./images/pool-icon.svg" alt="pool icon">
        <p class="accommodation-page__amenities-label">Pool</p>
        </div>
        `,
        mealOption: '<b>$15 Continental breakfast</b> - per person, per day',
        mealPrice: 15,
        hostImg: './images/portraitgirl2.jpg',
        hostInfo: `Hey! I'm your host Jack. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perferendis accusantium laboriosam voluptatum optio non.`,
    },
];
// -------------------------------------------------------------
// Accommodation object array end
// -------------------------------------------------------------



// -------------------------------------------------------------
// Displays all accommodation cards on the landing page & searched page start
// -------------------------------------------------------------
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
// Displays all accommodation cards on the landing page & searched page end
// -------------------------------------------------------------



// -------------------------------------------------------------
// Google maps API key append start
// -------------------------------------------------------------
const script = '<script src="https://maps.googleapis.com/maps/api/js?key=' + key +'&callback=initMap&libraries=places&v=weekly" async defer></script>';

$(document).ready(function(){
    $('body').append(script);
});
// -------------------------------------------------------------
// Google maps API append end
// -------------------------------------------------------------



// -------------------------------------------------------------
// Google maps initMap start
// -------------------------------------------------------------
function initMap(){

    // search bar check-in and check-out dates start
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
            let enDate = new Date(selectDate.getTime() + 15 * msInADay);
        }
    });

    $('#searchCheckOut').datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth: true
    });
    // search bar check-in and check-out date end

    // creating map focus point start
    let newZealand = {lat: -38.87996245321901, lng: 176.11236351323205};

    const map = new google.maps.Map(document.getElementById('map'),{
        zoom: 7,
        center: newZealand,
    });
    // creating map focus point end

    // passing map to the markers function so markers can be placed on map
    setMarkers(map);

    // for(let i =0; i < filteredArrayGlobal.length; i++){
    //     let infoWindowContent = 
    //     `                
    //     <div class="filtered-section__card">
    //         <img class="filtered-section__img" id="${filteredArrayGlobal[i].id}" src="${filteredArrayGlobal[i].photo}" alt="${filteredArrayGlobal[i].altText}">
    //         <div class="filtered-section__info">
    //             <div class="filtered-section__top-text">
    //                 <div class="filtered-section__top-text-left">
    //                     <p class="filtered-section__grey-text">${filteredArrayGlobal[i].type}</p>
    //                     <p class="filtered-section__stay-name">${filteredArrayGlobal[i].name}, ${filteredArrayGlobal[i].location}</p>
    //                 </div>
    //                 <img class="filtered-section__bookmark" src="./images/bookmark.svg" alt="bookmark icon">
    //             </div>
    //             <div class="filtered-section__middle-text">
    //                 <p class="filtered-section__grey-text">${filteredArrayGlobal[i].cardDetails}</p>
    //                 <p class="filtered-section__grey-text">${filteredArrayGlobal[i].cardAmenities}</p>
    //             </div>
    //             <div class="filtered-section__bottom-text">
    //                 <div class="filtered-section__rating-div">
    //                     <img class="filtered-section__star" src="./images/star.svg" alt="star icon">
    //                     <p class="filtered-section__rating">${filteredArrayGlobal[i].rating}</p>
    //                 </div>
    //                 <p class="filtered-section__price"><b>$${filteredArrayGlobal[i].price}</b> / night</p>
    //             </div>
    //         </div>
    //     </div>
    //     `;
    //     window.infoWindowContentGlobal = infoWindowContent;
    // }

    // const infoWindow = new google.maps.InfoWindow({
    //     content: infoWindowContentGlobal,
    // });

}
// -------------------------------------------------------------
// Google maps initMap end
// -------------------------------------------------------------



// -------------------------------------------------------------
// Map markers start
// -------------------------------------------------------------
function setMarkers(map){
    // running a for loop to filter through the object array getting the lat & lng of all the accommodation options to place markers for them
    for(let i = 0; i < accommodationObjectArray.length; i++){
        const location = accommodationObjectArray[i].latLng;
        const stayName = accommodationObjectArray[i].name;

        const latitude = accommodationObjectArray[i].latitude;
        const longitude = accommodationObjectArray[i].longitude;

        const myLatLng = { lat: latitude, lng: longitude};

        const marker = new google.maps.Marker({
            position: myLatLng,
            map,
            title: stayName,
        });

        window.markerGlobal = marker;
    }

    for(let i =0; i < accommodationObjectArray.length; i++){
        let infoWindowContent = 
        `                
        <div class="filtered-section__card">
            <img class="filtered-section__img" id="${accommodationObjectArray[i].id}" src="${accommodationObjectArray[i].photo}" alt="${accommodationObjectArray[i].altText}">
            <div class="filtered-section__info">
                <div class="filtered-section__top-text">
                    <div class="filtered-section__top-text-left">
                        <p class="filtered-section__grey-text">${accommodationObjectArray[i].type}</p>
                        <p class="filtered-section__stay-name">${accommodationObjectArray[i].name}, ${accommodationObjectArray[i].location}</p>
                    </div>
                    <img class="filtered-section__bookmark" src="./images/bookmark.svg" alt="bookmark icon">
                </div>
                <div class="filtered-section__middle-text">
                    <p class="filtered-section__grey-text">${accommodationObjectArray[i].cardDetails}</p>
                    <p class="filtered-section__grey-text">${accommodationObjectArray[i].cardAmenities}</p>
                </div>
                <div class="filtered-section__bottom-text">
                    <div class="filtered-section__rating-div">
                        <img class="filtered-section__star" src="./images/star.svg" alt="star icon">
                        <p class="filtered-section__rating">${accommodationObjectArray[i].rating}</p>
                    </div>
                    <p class="filtered-section__price"><b>$${accommodationObjectArray[i].price}</b> / night</p>
                </div>
            </div>
        </div>
        `;
        window.infoWindowContentGlobal = infoWindowContent;

        const infoWindow = new google.maps.InfoWindow({
            content: infoWindowContentGlobal,
        });

        console.log(markerGlobal);
    
        markerGlobal.addListener('mouseover', () => {
            infoWindow.open({
                anchor: markerGlobal,
                map,
                shouldFocus: false,
            });
        });

        markerGlobal.addListener('mouseout', () => {
            infoWindow.close();
        });
    }
}
// -------------------------------------------------------------
// Map markers end
// -------------------------------------------------------------



// -------------------------------------------------------------
// sort by price start
// -------------------------------------------------------------
$("#sortPriceAvailable").change(function(){
    // getting the selected value from the sort price input and arranging the object array depending on which value was selected
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

    let sortValue = ($("#sortPriceFiltered").val());
    if(sortValue === 'price-low-high'){
        filteredArrayGlobal.sort(function(a,b){
            let itemA = a.price, itemB = b.price;
            if(itemA < itemB){
                return -1;
            }
            if(itemA > itemB){
                return 1;
            }
        });
        allFilteredArraySearchCards();
    }
    if(sortValue === 'price-high-low'){
        filteredArrayGlobal.sort(function(a,b){
            let itemA = a.price, itemB = b.price;
            if(itemA > itemB){
                return -1;
            }
            if(itemA < itemB){
                return 1;
            }
        });
        allFilteredArraySearchCards();
    }
    if(sortValue === 'reset-sort'){
        allFilteredArraySearchCards();
    }
});
// -------------------------------------------------------------
// sort by price end
// -------------------------------------------------------------



// -------------------------------------------------------------
// sort by stay type start
// -------------------------------------------------------------
// landing page filters start
$('#accommodationTypeAvaiable').change(function(a, b){

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
// landing page filters end

//search page filters start
$('#accommodationTypeFiltered').change(function(a,b){
    let sortValueFiltered = ($('#accommodationTypeFiltered').val());

    if(sortValueFiltered === 'house'){
        $('#filteredCardContainer').empty();
        for(i = 0; i < filteredArrayGlobal.length; i++){
            if(filteredArrayGlobal[i].type === 'house'){
                searchFilteredArrayCards(i);
            }
        }
    }
    if(sortValueFiltered === 'hotel'){
        $('#filteredCardContainer').empty();
        for(i = 0; i < filteredArrayGlobal.length; i++){
            if(filteredArrayGlobal[i].type === 'hotel'){
                searchFilteredArrayCards(i);
            }
        }
    }
    if(sortValueFiltered === 'motel'){
        $('#filteredCardContainer').empty();
        for(i = 0; i < filteredArrayGlobal.length; i++){
            if(filteredArrayGlobal[i].type === 'motel'){
                searchFilteredArrayCards(i);
            }
        }
    }
    if(sortValueFiltered === 'hostel'){
        $('#filteredCardContainer').empty();
        for(i = 0; i < filteredArrayGlobal.length; i++){
            if(filteredArrayGlobal[i].type === 'hostel'){
                searchFilteredArrayCards(i);
            }
        }
    }
    if(sortValueFiltered === 'reset-sort'){
        allFilteredArraySearchCards(i);
    }
});
//search page filters end
// -------------------------------------------------------------
// sort by stay type end
// -------------------------------------------------------------



// -------------------------------------------------------------
// filter buttons start
// -------------------------------------------------------------
// landing page buttons start
$('#breakfastAvailable').click(function(){

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

    $('#availableCardContainer').empty();
    allAvailableCards(); 
});
// landing page buttons end


// search page buttons start
$('#breakfastFiltered').click(function(){

    $('#filteredCardContainer').empty();

    for(i = 0; i < filteredArrayGlobal.length; i++){
        for(let j = 0; j < filteredArrayGlobal[i].tags.length; j++){
            if(filteredArrayGlobal[i].tags[j] === 'breakfast'){
                searchFilteredArrayCards(i);
            }
        }
    }  
});

$('#poolFiltered').click(function(){

    $('#filteredCardContainer').empty();

    for(i = 0; i < filteredArrayGlobal.length; i++){
        for(let j = 0; j < filteredArrayGlobal[i].tags.length; j++){
            if(filteredArrayGlobal[i].tags[j] === 'pool'){
                searchFilteredArrayCards(i);
            }
        }
    }  
});

$('#playgroundFiltered').click(function(){

    $('#filteredCardContainer').empty();

    for(i = 0; i < filteredArrayGlobal.length; i++){
        for(let j = 0; j < filteredArrayGlobal[i].tags.length; j++){
            if(filteredArrayGlobal[i].tags[j] === 'playground'){
                searchFilteredArrayCards(i);
            }
        }
    }  
});

$('#resetFiltered').click(function(){

    $('#filteredCardContainer').empty();
    allFilteredArraySearchCards(); 
});
// search page buttons end
// -------------------------------------------------------------
// filter buttons end
// -------------------------------------------------------------



// -------------------------------------------------------------
// search filtering start
// -------------------------------------------------------------
function filterFunction(event){
    $('#filteredCardContainer').empty();
    event.preventDefault();

    // array of months so the date can have a written month instead of a number in checkInDetails & checkOutDetails 
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let msDay = 1000 * 3600 * 24;

    // getting values from search 
    let location = $('#searchLocation').val();

    let guests = $('#guestSelect').val();
    window.guestsGlobal = guests;

    let checkInDate = new Date ($('#searchCheckIn').val());

    let checkOutDate = new Date ($('#searchCheckOut').val());

    // getting individual data of day, month, year
    let checkInDay = checkInDate.getDate(),
        checkInMonth = checkInDate.getMonth(),
        checkInYear = checkInDate.getFullYear(),
        checkOutDay = checkOutDate.getDate(),
        checkOutMonth = checkOutDate.getMonth(),
        checkOutYear = checkOutDate.getFullYear();

    let checkInDetails = [checkInDay, months[checkInMonth], checkInYear].join(' ');

    let checkOutDetails = [checkOutDay, months[checkOutMonth], checkOutYear].join(' ');

    // this format is necessary for the datepicker('setDate') methodw
    const transferCheckInDetails = [checkInYear, checkInMonth +1, checkInDay].join('/');
    window.transferCheckInDetailsGlobal = transferCheckInDetails;

    const transferCheckOutDetails = [checkOutYear, checkOutMonth +1, checkOutDay].join('/');
    window.transferCheckOutDetailsGlobal = transferCheckOutDetails;

    // calculate the difference between check-in and check-out days
    let difference = checkOutDate.getTime() - checkInDate.getTime();
    
    let dayDifference = difference/msDay;

    if((checkInDate == 'Invalid Date') || (checkOutDate == 'Invalid Date')){
        // alert('Please enter both a check in & check out date');
    }

    // filtering the accommodation object array through the search filters to create a new array, so this new array can be filtered through later on when appending relevant information from the accommodation options that fit the search conditions
    const filteredArray = accommodationObjectArray.filter(function(accommodationObjectArray){
        return (location === accommodationObjectArray.location) && (dayDifference >= accommodationObjectArray.minNights) && (dayDifference <= accommodationObjectArray.maxNights) && (guests >= accommodationObjectArray.minGuest) && (guests <= accommodationObjectArray.maxGuest)
    }
    );

    // making this array globally accessible
    window.filteredArrayGlobal = filteredArray;

    // calling this function creates the search cards with information from the new filtered array
    allFilteredArraySearchCards();
    
}


// hiding and showing the relevant sections so the website 'changes pages' from the landing page to the searched page
$('#searchIcon').click(function(){

    // adding the search bar to the nav bar
    $('#searchBar').append( $('#navSearchBar') );

    // elements with the class 'hide' aren't visible as 'hide' has a display of none
    landingSection.classList.add('top-position');
    landingSection.classList.remove('landing-section');
    availableStays.classList.add('hide');
    availableCardContainer.classList.add('hide');

    filteredStays.classList.remove('hide');
    filteredSection.classList.remove('hide');
    
});

// -------------------------------------------------------------
// search filtering end
// -------------------------------------------------------------



// -------------------------------------------------------------
// creates accommodation cards on landing page & search page - start
// -------------------------------------------------------------

// empties card container and calls generateAvailableCard function to append all accommodation options to the landing page
function allAvailableCards(){
    $('#availableCardContainer').empty();
    for(let i = 0; i < accommodationObjectArray.length; i++){
        generateAvailableCard(i);
    }
}

// prepares card container and calls generateAvailableCard function to append all options to the searched page
function allFilteredCards(){
    $('#filteredCardContainer').empty();
    for(let i = 0; i < accommodationObjectArray.length; i++){
        generateSearchCard(i);
    }
}

// generates the cards that appear on the landing page, appends all relevent information from the accommodation array
function generateAvailableCard(x){
    $('#availableCardContainer').append(
        `
            <div class="accommodation-card">
                <img class="accommodation-card__img" id="${accommodationObjectArray[x].id}" src="${accommodationObjectArray[x].photo}" alt="${accommodationObjectArray[x].altText}">
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

// generates the cards that appear when users have searched, appends all relevent information from the accommodation array
function generateSearchCard(x){
    $('#filteredCardContainer').append(
        `
            <div class="filtered-section__card">
                <img class="filtered-section__img" id="${accommodationObjectArray[x].id}" src="${accommodationObjectArray[x].photo}" alt="${accommodationObjectArray[x].altText}">
                <div class="filtered-section__info">
                    <div class="filtered-section__top-text">
                        <div class="filtered-section__top-text-left">
                            <p class="filtered-section__grey-text">${accommodationObjectArray[x].type}</p>
                            <p class="filtered-section__stay-name">${accommodationObjectArray[x].name}, ${accommodationObjectArray[x].location}</p>
                        </div>
                        <img class="filtered-section__bookmark" src="" alt="">
                    </div>
                    <div class="filtered-section__middle-text">
                        <p class="filtered-section__grey-text">${accommodationObjectArray[x].cardDetails}</p>
                        <p class="filtered-section__grey-text">${accommodationObjectArray[x].cardAmenities}</p>
                    </div>
                    <div class="filtered-section__bottom-text">
                        <div class="filtered-section__rating-div">
                            <img class="filtered-section__star" src="./images/star.svg" alt="star icon">
                            <p class="filtered-section__rating">${accommodationObjectArray[x].rating}</p>
                        </div>
                        <p class="filtered-section__price"><b>$${accommodationObjectArray[x].price}</b> / night</p>
                    </div>
                </div>
            </div>
        `
    );
}

// generates the cards that appear when users have searched, appends all relevent information from the filteredArray
function allFilteredArraySearchCards(){
    $('#filteredCardContainer').empty();

    for(let i = 0; i < filteredArrayGlobal.length; i++){
        $('#filteredCardContainer').append(
            `
                <div class="filtered-section__card">
                    <img class="filtered-section__img" id="${filteredArrayGlobal[i].id}" src="${filteredArrayGlobal[i].photo}" alt="${filteredArrayGlobal[i].altText}">
                    <div class="filtered-section__info">
                        <div class="filtered-section__top-text">
                            <div class="filtered-section__top-text-left">
                                <p class="filtered-section__grey-text">${filteredArrayGlobal[i].type}</p>
                                <p class="filtered-section__stay-name">${filteredArrayGlobal[i].name}, ${filteredArrayGlobal[i].location}</p>
                            </div>
                            <img class="filtered-section__bookmark" src="./images/bookmark.svg" alt="bookmark icon">
                        </div>
                        <div class="filtered-section__middle-text">
                            <p class="filtered-section__grey-text">${filteredArrayGlobal[i].cardDetails}</p>
                            <p class="filtered-section__grey-text">${filteredArrayGlobal[i].cardAmenities}</p>
                        </div>
                        <div class="filtered-section__bottom-text">
                            <div class="filtered-section__rating-div">
                                <img class="filtered-section__star" src="./images/star.svg" alt="star icon">
                                <p class="filtered-section__rating">${filteredArrayGlobal[i].rating}</p>
                            </div>
                            <p class="filtered-section__price"><b>$${filteredArrayGlobal[i].price}</b> / night</p>
                        </div>
                    </div>
                </div>
            `
        );
    }

    // creates the 'page' for the accommodation option that has been clicked
    $('.filtered-section__img').click(function(){
        for(let i = 0; i < filteredArrayGlobal.length; i++){
            if(parseInt(this.id) === filteredArrayGlobal[i].id){
                filteredPageGenerator(i);
            }
        }

        filteredStays.classList.add('hide');
        filteredSection.classList.add('hide');
    });
}


// -------------------------------------------------------------
// when filters are applied to the searched cards, this function is alled to filter through the new object array and append relevant info - start
// -------------------------------------------------------------
function searchFilteredArrayCards(i){
    $('#filteredCardContainer').empty();
    $('#filteredCardContainer').append(
        `
            <div class="filtered-section__card">
                <img class="filtered-section__img" id="${filteredArrayGlobal[i].id}" src="${filteredArrayGlobal[i].photo}" alt="${filteredArrayGlobal[i].altText}">
                <div class="filtered-section__info">
                    <div class="filtered-section__top-text">
                        <div class="filtered-section__top-text-left">
                            <p class="filtered-section__grey-text">${filteredArrayGlobal[i].type}</p>
                            <p class="filtered-section__stay-name">${filteredArrayGlobal[i].name}, ${filteredArrayGlobal[i].location}</p>
                        </div>
                        <img class="filtered-section__bookmark" src="./images/bookmark.svg" alt="bookmark icon">
                    </div>
                    <div class="filtered-section__middle-text">
                        <p class="filtered-section__grey-text">${filteredArrayGlobal[i].cardDetails}</p>
                        <p class="filtered-section__grey-text">${filteredArrayGlobal[i].cardAmenities}</p>
                    </div>
                    <div class="filtered-section__bottom-text">
                        <div class="filtered-section__rating-div">
                            <img class="filtered-section__star" src="./images/star.svg" alt="star icon">
                            <p class="filtered-section__rating">${filteredArrayGlobal[i].rating}</p>
                        </div>
                        <p class="filtered-section__price"><b>$${filteredArrayGlobal[i].price}</b> / night</p>
                    </div>
                </div>
            </div>
        `
    );
}
// -------------------------------------------------------------
// when filters are applied to the searched cards, this function is alled to filter through the new object array and append relevant info - end
// -------------------------------------------------------------


// -------------------------------------------------------------
// creates accommodation cards on landing page - end
// -------------------------------------------------------------


// -------------------------------------------------------------
// creates the accommodation pages for each stay - start
// -------------------------------------------------------------

// listens for which card has been clicked, the calls the accommodationPageGenerator to append the revelant information to the accommodation page
$('.accommodation-card__img').click(function(){
    for(let i = 0; i < accommodationObjectArray.length; i ++){
        if(parseInt(this.id) === accommodationObjectArray[i].id){
            accommodationPageGenerator(i);
        }
    }

    // hiding the landing page sections and adding the search bar to the nav bar to transform webpage into the relevant accommodation page
    landingSection.classList.add('top-position');
    landingSection.classList.remove('landing-section');
    availableStays.classList.add('hide');
    availableCardContainer.classList.add('hide');

    // changing the id of the back arrow as there are two different ways the accommodation page can be accessed, so which way the page was accessed changes what needs to happen when the back arrow is clicked
    document.getElementById('arrowIcon').id = 'availableArrowIcon';

    $('#availableArrowIcon').click(function(){

        // reverting the classList back to the landing page set up styling
        landingSection.classList.remove('top-position');
        landingSection.classList.add('landing-section');
        availableStays.classList.remove('hide');
        availableCardContainer.classList.remove('hide');

        // emptying the accommodation page so it's not visible from the landing page set up
        $('#accommodationPage').empty();
    });

});



// generates the accommodation stay page, appends all relevent information
function accommodationPageGenerator(x){
    $('#accommodationPage').empty();
    $('#accommodationPage').append(
        `
            <div class="accommodation-page__arrow-div">
                <img class="accommodation-page__arrow-icon" id="arrowIcon" src="./images/arrow.svg" alt="arrow icon">
            </div>
            <div class="accommodation-page__top-info">
                <div class="accommodation-page__top-left">
                    <p class="accommodation-page__stay-name">${accommodationObjectArray[x].name}</p>
                    <p class="accommodation-page__stay-location">${accommodationObjectArray[x].location}</p>
                </div>
                <img class="accommodation-page__bookmark-icon" src="./images/bookmark.svg" alt="bookmark icon">
            </div>
            
            <img class="accommodation-page__stay-img" src="${accommodationObjectArray[x].photo}" alt="${accommodationObjectArray[x].altText}">
            
            <div class="accommodation-page__stay-info">
                <div class="accommodation-page__stay-info-left">
                    <div class="accommodation-page__stay-type-div">
                        <img class="accommodation-page__house-icon" src="./images/home-solid.svg" alt="home icon">
                        <p  class="accommodation-page__heading-2">${accommodationObjectArray[x].type}</p>
                    </div>
            
                    <div class="accommodation-page__description-div">
                        <p class="accommodation-page__heading-2">Description</p>
                        <p class="accommodation-page__p">${accommodationObjectArray[x].description}</p>
                    </div>
            
                    <div class="accommodation-page__sleeping-div">
                        <p class="accommodation-page__heading-2">Sleeping arrangements</p>
                        <div class="accommodation-page__sleeping-container">
                            ${accommodationObjectArray[x].sleepingArrangements}
                        </div>
                    </div>
                </div>
                <div class="accommodation-page__stay-info-right">
                    <div class="accommodation-page__booking-div">
                        <input class="accommodation-page__check-in" type="text" name="accommCheckIn">
                        <input class="accommodation-page__check-out" type="text" name="accommCheckOut">
                        <select class="accommodation-page__guests" name="guestsaccommGuests">
                            <option value="Add guests">Add guests</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                        </select>
                        <select class="accommodation-page__breakfast" name="breakfast" id="breakfast">
                            <option value="breakfast">Breakfast options</option>
                            <option value="yes">${accommodationObjectArray[x].mealOption}</option>
                            <option value="no">No</option>
                        </select>
                        <button class="accommodation-page__make-booking" id="makeBooking">Make Booking</button>
                    </div>
                </div>
            </div>
            
            <div class="accommodation-page__extra-info">
                <div class="accommodation-page__on-offer-div">
                    <p class="accommodation-page__heading-2">What's on offer</p>
                    <div class="accommodation-page__amenities-div" id="amenitiesDiv">${accommodationObjectArray[x].onOffer}</div>
                </div>
            
                <div class="accommodation-page__meal-div">
                    <p class="accommodation-page__heading-2">Meal options</p>
                    <div class="accommodation-page__meal-info">
                        <p class="accommodation-page__meal-text">${accommodationObjectArray[x].mealOption}</p>
                    </div>
                </div>
            </div>
            
            <div class="accommodation-page__map-div">
                <p class="accommodation-page__heading-2">${accommodationObjectArray[x].location}</p>
                <div class="accommodation-page__map" id="accommodationMap"></div>
            </div>
            
            <div class="accommodation-page__contact-div">
                <div class="accommodation-page__contact-div-top">
                    <img class="accommodation-page__host-img" src="${accommodationObjectArray[x].hostImg}" alt="${accommodationObjectArray[x].altText}">
                    <div class="accommodation-page__contact-div-info">
                        <p class="accommodation-page__heading-2">Meet your host</p>
                        <button class="accommodation-page__contact-btn">Contact</button>
                    </div>
                </div>
                <p class="accommodation-page__p">${accommodationObjectArray[x].hostInfo}</p>
            </div>
        `
    );
}




function filteredPageGenerator(x){

    $('#accommodationPage').empty();
    $('#accommodationPage').append(
        `
            <div class="accommodation-page__arrow-div">
                <img class="accommodation-page__arrow-icon" id="filteredArrowIcon" src="./images/arrow.svg" alt="arrow icon">
            </div>
            <div class="accommodation-page__top-info">
                <div class="accommodation-page__top-left">
                    <p class="accommodation-page__stay-name">${filteredArrayGlobal[x].name}</p>
                    <p class="accommodation-page__stay-location">${filteredArrayGlobal[x].location}</p>
                </div>
                <img class="accommodation-page__bookmark-icon" src="./images/bookmark.svg" alt="bookmark icon">
            </div>
            
            <img class="accommodation-page__stay-img" src="${filteredArrayGlobal[x].photo}" alt="${filteredArrayGlobal[x].altText}">
            
            <div class="accommodation-page__stay-info">
                <div class="accommodation-page__stay-info-left">
                    <div class="accommodation-page__stay-type-div">
                        <img class="accommodation-page__house-icon" src="./images/home-solid.svg" alt="home icon">
                        <p  class="accommodation-page__heading-2">${filteredArrayGlobal[x].type}</p>
                    </div>
            
                    <div class="accommodation-page__description-div">
                        <p class="accommodation-page__heading-2">Description</p>
                        <p class="accommodation-page__description-text">${filteredArrayGlobal[x].description}</p>
                    </div>
            
                    <div class="accommodation-page__sleeping-div">
                        <p class="accommodation-page__heading-2">Sleeping arrangements</p>
                        <div class="accommodation-page__sleeping-container">
                            ${filteredArrayGlobal[x].sleepingArrangements}
                        </div>
                    </div>
                </div>
                <div class="accommodation-page__stay-info-right">
                    <div class="accommodation-page__booking-div">
                        <input class="accommodation-page__check-in" type="text" name="accommCheckIn" id="accommCheckIn">
                        <input class="accommodation-page__check-out" type="text" name="accommCheckOut" id="accommCheckOut">
                        <select class="accommodation-page__guests" name="guestsaccommGuests" id="accommGuests">
                            <option value="Add guests">Add guests</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                        </select>
                        <select class="accommodation-page__breakfast" name="breakfast" id="breakfast">
                            <option value="breakfast">Breakfast options</option>
                            <option value="yes">${accommodationObjectArray[x].mealOption}</option>
                            <option value="no">No</option>
                        </select>
                        <button class="accommodation-page__make-booking" id="${filteredArrayGlobal[x].id2}" data-toggle="modal" data-target="#exampleModalCenter">Make Booking</button>
                    </div>
                </div>
            </div>
            
            <div class="accommodation-page__extra-info">
                <div class="accommodation-page__on-offer-div">
                    <p class="accommodation-page__heading-2">What's on offer</p>
                    <div class="accommodation-page__amenities-div" id="amenitiesDiv">${filteredArrayGlobal[x].onOffer}</div>
                </div>
            
                <div class="accommodation-page__meal-div">
                    <p class="accommodation-page__heading-2">Meal options</p>
                    <div class="accommodation-page__meal-info">
                        <p class="accommodation-page__meal-text">${filteredArrayGlobal[x].mealOption}</p>
                    </div>
                </div>
            </div>
            
            <div class="accommodation-page__map-div">
                <p class="accommodation-page__heading-2">${filteredArrayGlobal[x].location}</p>
                <div class="accommodation-page__map" id="accommodationMap"></div>
            </div>
            
            <div class="accommodation-page__contact-div">
                <div class="accommodation-page__contact-div-top">
                    <img class="accommodation-page__host-img" src="${filteredArrayGlobal[x].hostImg}" alt="${filteredArrayGlobal[x].altText}">
                    <div class="accommodation-page__contact-div-info">
                        <p class="accommodation-page__heading-2">Meet your host</p>
                        <button class="accommodation-page__contact-btn">Contact</button>
                    </div>
                </div>
                <p class="accommodation-page__host-info">${filteredArrayGlobal[x].hostInfo}</p>
            </div>
        `
    );

    
    // $('#accommCheckIn').datepicker({
    //     dateFormat:'yy-mm-dd',
    //     changeMonth: true,
    //     minDate: new Date(),
    //     // defaultDate: transferCheckInDetailsGlobal,

    //     onSelect: function(date){
    //         let selectDate = new Date(date);
    //         let msInADay = 86400000;
    //         let stDate = new Date(selectDate.getTime() + msInADay);

    //         $('#accommCheckOut').datepicker('option', 'minDate', stDate);
    //         let enDate = new Date(selectDate.getTime() + 15 * msInADay);
    //     }
    // });

    // sets the dates/guests to the values user input in the search bar
    document.getElementById('accommCheckIn').value=transferCheckInDetailsGlobal;

    document.getElementById('accommCheckOut').value=transferCheckOutDetailsGlobal;
    
    document.getElementById('accommGuests').value=guestsGlobal;
    console.log(guestsGlobal);

    // $('#accommCheckIn').change(function(){
    //     document.getElementById('accommCheckOut').value = 'Add dates';
    // })

    // $('#accommCheckOut').change(function(){
    //     document.getElementById('accommCheckIn').value = 'Add dates';
    // })



    // reverts the steps taken to create the 'accommodation page' so that it goes back to the 'searched page'
    $('#filteredArrowIcon').click(function(){
        filteredStays.classList.remove('hide');
        filteredSection.classList.remove('hide');

        // emptying the accommodation page so it's not visible
        $('#accommodationPage').empty();
    });

    $('.accommodation-page__make-booking').click(function(){
        console.log('modal clicked');

        // getting the values for the booking
        let checkInDate = new Date ($('#accommCheckIn').val());

        let checkOutDate = new Date ($('#accommCheckOut').val());

        let guests = $('#accommGuests').val();
        console.log(guests);

        let breakfast = $('#breakfast').val();

        if(breakfast === 'breakfast'){
            // if no default breakfast option is selected, remove the data-toggle modal attribute to stop the booking modal popping up, and alert the user to select breakfast option
            $('.accommodation-page__make-booking').removeAttr('data-toggle', 'modal');
            alert('Please select an option for breakfast before continuing');
        } else if(breakfast === 'yes'){
            // adds data-togle back in so modal pops up
            $('.accommodation-page__make-booking').attr('data-toggle', 'modal');
            let breakfastGuests = 'Yes';
            window.breakfastGuestsGlobal = breakfastGuests;
        } else if (breakfast === 'no'){
            // adds data-togle back in so modal pops up
            $('.accommodation-page__make-booking').attr('data-toggle', 'modal');
            let breakfastGuests = 'No';
            window.breakfastGuestsGlobal = breakfastGuests;
        }

        // getting individual data of day, month, year
        let checkInDay = checkInDate.getDate(),
        checkInMonth = checkInDate.getMonth(),
        checkInYear = checkInDate.getFullYear(),
        checkOutDay = checkOutDate.getDate(),
        checkOutMonth = checkOutDate.getMonth(),
        checkOutYear = checkOutDate.getFullYear();

        const checkInDetails = [checkInYear, checkInMonth, checkInDay].join('/');

        const checkOutDetails = [checkOutYear, checkOutMonth, checkOutDay].join('/');

        let msDay = 1000 * 3600 * 24;

        // calculate the difference between check-in and check-out days
        let difference = checkOutDate.getTime() - checkInDate.getTime();
    
        let dayDifference = difference/msDay;

        console.log(dayDifference);

        const nightPrice = accommodationObjectArray[x].price * dayDifference;
        console.log(nightPrice);

        const mealPrice = accommodationObjectArray[x].mealPrice * guests * dayDifference;

        priceTotal = nightPrice + mealPrice;

        $('#modalContent').empty();
        $('#modalContent').append(
            `
                <div class="modal__text-div">
                    <p class="modal__confirmation-heading">Your booking is confirmed!</p>
                    <p class="modal__p-grey">Keep an eye out for a confirmation email</p>
                </div>
                <!-- filtered card start -->
                <div class="filtered-section__card">
                    <img class="filtered-section__img" id="${filteredArrayGlobal[x].id}" src="${filteredArrayGlobal[x].photo}" alt="${filteredArrayGlobal[x].altText}">
                    <div class="filtered-section__info">
                        <div class="filtered-section__top-text">
                            <div class="filtered-section__top-text-left">
                                <p class="filtered-section__grey-text">${filteredArrayGlobal[x].type}</p>
                                <p class="filtered-section__stay-name">${filteredArrayGlobal[x].name}, ${filteredArrayGlobal[x].location}</p>
                            </div>
                            <img class="filtered-section__bookmark" src="./images/bookmark.svg" alt="bookmark icon">
                        </div>
                        <div class="filtered-section__middle-text">
                            <p class="filtered-section__grey-text">${filteredArrayGlobal[x].cardDetails}</p>
                            <p class="filtered-section__grey-text">${filteredArrayGlobal[x].cardAmenities}</p>
                        </div>
                        <div class="filtered-section__bottom-text">
                            <div class="filtered-section__rating-div">
                                <img class="filtered-section__star" src="./images/star.svg" alt="star icon">
                                <p class="filtered-section__rating">${filteredArrayGlobal[x].rating}</p>
                            </div>
                            <p class="filtered-section__price"><b>$${filteredArrayGlobal[x].price}</b> / night</p>
                        </div>
                    </div>
                </div>
                <!-- filtered card end -->
                <div class="modal__booking-info">
                    <div class="modal__info-div">
                        <p class="modal__p-grey">Check-in</p>
                        <p class="modal__p">${checkInDetails}</p>
                    </div>
                    <div class="modal__info-div">
                        <p class="modal__p-grey">Check-out</p>
                        <p class="modal__p">${checkOutDetails}</p>
                    </div>
                    <div class="modal__info-div">
                        <p class="modal__p-grey">Guests</p>
                        <p class="modal__p">${guests}</p>
                    </div>
                    <div class="modal__info-div">
                        <p class="modal__p-grey">Breakfast</p>
                        <p class="modal__p">${breakfastGuestsGlobal}</p>
                    </div>
                </div>
                <div class="modal__price-breakdown-div">
                    <p class="modal__heading-2">Price breakdown:</p>
                    <div class="modal__price-div">
                        <p class="modal__p">$${accommodationObjectArray[x].price} x ${dayDifference} night</p>
                        <p class="modal__p">${nightPrice}</p>
                    </div>
                    <div class="modal__breakfast-price-div">
                        <div class="modal__breakfast-prices">
                            <p class="modal__p">${accommodationObjectArray[x].mealOption}</p>
                            <p class="modal__p-grey">x ${guests} guests</p>
                            <p class="modal__p-grey">x ${dayDifference} days</p>
                        </div>
                        <p class="modal__p">$${mealPrice}</p>
                    </div>
                    <div class="modal__price-total-div">
                        <p class="modal__heading-2">Total</p>
                        <p class="modal__heading-2">$${priceTotal}</p>
                    </div>
                </div>
            `
        );
    });
}

// -------------------------------------------------------------
// creates accommodation pages for each stay - end
// -------------------------------------------------------------


searchIcon.addEventListener('click', filterFunction);