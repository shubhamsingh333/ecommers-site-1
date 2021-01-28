
export const Menu = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Iphone', path: '/product/iphone', slug: 'iphone', banner: '/images/holiday-logo-202011.png' },
    { id: 3, title: 'OnePlus', path: '/product/oneplus', slug: 'oneplus', banner: '/images/onePlusLogo.png' },
    { id: 4, title: 'Samsung', path: '/product/samsung', slug: 'samsung', banner: '/images/sumsungLogo.png' },
    { id: 5, title: 'Support', path: '/support' },
    { id: 6, title: 'Log-In', path: '/signin' },
    { id: 7, title: 'Sign-Up ', path: '/signup' },
];

export const LoginMenu = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Iphone', path: '/product/iphone', slug: 'iphone', banner: '/images/holiday-logo-202011.png' },
    { id: 3, title: 'OnePlus', path: '/product/oneplus', slug: 'oneplus', banner: '/images/onePlusLogo.png' },
    { id: 4, title: 'Samsung', path: '/product/samsung', slug: 'samsung', banner: '/images/sumsungLogo.png' },
    { id: 5, title: 'Cart', path: '/cart' },
    { id: 6, title: 'Support', path: '/support' },
    { id: 7, title: 'LogOut', path: '/logout' },
    { id: 8, title: 'WishList', path:'/wishlist'},
    { id: 9, title: 'Profile', path:'profile'},

];

export const ProductList = [
    {
        id: 1, menuId: 2, slug: 'iphone', title: 'Apple Watch', imgPath: '/images/HeroWatch.jpg',
        shortDescription: 'Gold Stainless Steel Case with Milanese ', price: 25000,
        protitle: 'Apple Watch Series 6', imageList: '/images/buyWatch.jpg'
    },
    {
        id: 2, menuId: 2, slug: 'iphone', title: 'iPhone Case and Covers', imgPath: '/images/holiday-hero-magsafe-202011.jpg',
        shortDescription: 'Designed by Apple to complement iPhone 12 Pro Max, the Silicone Case with MagSafe is a delightful way to protect your iPhone',
        price: 3999, protitle: 'iPhone 12 Pro Max Silicone Case with MagSafe', imageList: '/images/MHLF3.jpg'
    },
    {
        id: 3, menuId: 2, slug: 'iphone', title: 'Mac', imgPath: '/images/holiday-hero-macbookair-202011.jpg',
        shortDescription: 'Apple M1 Chip with 8-Core CPU and 8-Core GPU 256GB Storage', price: 84999,
        protitle: 'MacBook Pro 13-inch', imageList: '/images/mac13.jpg'
    },
    {
        id: 4, menuId: 2, slug: 'iphone', title: 'iPhone', imgPath: '/images/holiday-hero-iphone12-202011.jpg',
        shortDescription: 'As part of our efforts to reach our environmental goals, iPhone 12 Pro and iPhone 12 Pro Max',
        price: 95499, protitle: 'iPhone 12 Pro', imageList: '/images/iPhone-1.jpg'
    },
    {
        id: 5, menuId: 2, slug: 'iphone', title: 'Homepod Mini', imgPath: '/images/holiday-hero-homepodmini-202011.jpg',
        shortDescription: 'Siri is an intelligent assistant for your HomePod mini. Just use your voice to check your calendar or the weather',
        price: 7999, protitle: 'HomePod mini', imageList: '/images/homepod-mini.jpg'
    },
    {
        id: 6, menuId: 2, slug: 'iphone', title: 'Airpods pro', imgPath: '/images/holiday-hero-airpodspro.jpg',
        shortDescription: 'Up to 5 hours of listening time(on one charge)More than 24 hours of listening time(with Wireless Charging Case)',
        price: 8999, protitle: 'AirPods', imageList: '/images/airpods1.png'
    },
    {
        id: 7, menuId: 3, title: 'One Plus', imgPath: '/images/11.webp',
        shortDescription: 'Important features: Face Unlock, HDR, Screen Flash, Face Retouching, CINE Aspect Ratio Video Recording',
        price: 42999, protitle: 'OnePlus 8T 5G', imageList: "/images/oneplusphone.png"
    },
    {
        id: 8, menuId: 3, title: 'OnePlus Buds', imgPath: '/images/oneplusBuds.png',
        shortDescription: 'Each earbud incorporates an advanced 10mm dynamic driver, delivering deep bass definition.With Bass Boost.',
        price: 2999, protitle: 'OnePlus Buds Z White', imageList: '/images/one1.png'
    },
    {
        id: 9, menuId: 3, title: 'OnePlus TV', imgPath: '/images/oneplusTV.png',
        shortDescription: 'QLED 4K Display • Gamma Color Magic • Dolby Vision® and Dolby Atmos® • 50W 2.1CH Stereo System • Android TV • OnePlus Connect',
        price: 14999, protitle: 'OnePlus TV Y Series', imageList: '/images/oneplustv1.png'
    },
    {
        id: 10, menuId: 3, title: 'OnePlus Case', imgPath: '/images/oneplusCase.png',
        shortDescription: 'Where street-art, tech and Never Settle meet', price: 499,
        protitle: 'OnePlus 8 André Limited Edition Protective Case Street Art', imageList: '/images/oneCover.png'
    },
    {
        id: 11, menuId: 3, title: 'OnePlus Bag', imgPath: '/images/oneplusBag.png',
        shortDescription: 'The OnePlus Explorer Backpack was designed from the ground up with a bold new aesthetic, liters of space, and reliable durability.',
        price: 2999, protitle: 'OnePlus Explorer Backpack Black', imageList: '/images/onebag.jpg'
    },
    {
        id: 12, menuId: 3, title: 'OnePlus', imgPath: '/images/33.webp',
        shortDescription: '• 90 Hz Fluid Display • Triple Cameras • Snapdragon 855 Plus', price: 31999,
        protitle: 'OnePlus 7T Pro', imageList: '/images/one7.png'
    },
    {
        id: 13, menuId: 4, title: 'Samsung', imgPath: '/images/galaxy-z-fold2.webp',
        shortDescription: 'Samsung Galaxy s most advanced zoom ever will help you capture amazing things from far away.',
        price: 86999, protitle: 'Galaxy S20 Ultra', imageList: '/images/galaxys20ultra.jpg'
    },
    {
        id: 14, menuId: 4, title: 'Sumsang Smart TV', imgPath: '/images/sumsungTV.webp',
        shortDescription: 'Direct Full Array: 32X Object Tracking Sound(OTS+) Infinity Screen', price: 25000,
        protitle: '2m 16cm (85") Q950T 8K Smart QLED TV', imageList: '/images/sTV.webp'
    },
    {
        id: 15, menuId: 4, title: 'Sumsung Buds', imgPath: '/images/sumsungBuds.webp',
        shortDescription: 'Iconic design that’s comfortable to wearDeep & spacious sound Battery that delivers all - day connectivity',
        price: 9990, protitle: 'Galaxy Buds Live', imageList: '/images/buds1.webp'
    },
    {
        id: 16, menuId: 4, title: 'Sumsung Watch', imgPath: '/images/samsungWatch.webp',
        shortDescription: 'Refined Classic Watch Design Insight driven tracking for health & fitness Unmatched & seamless connectivity that frees you up',
        price: 3490, protitle: 'Galaxy Watch3', imageList: '/images/swatch1.webp'
    },
    {
        id: 17, menuId: 4, title: 'Sumsung Tab', imgPath: '/images/sumsungTab.webp',
        shortDescription: 'Big Display: 26.31cm (10.4") WUXGA Display with 80% Screen to Body Ratio Amazing Sound: Quad Stereo Speakers Long Binging Sessions with 7, 040 mAh Battery',
        price: 14999, protitle: 'Galaxy Tab A7', imageList: '/images/stab1.webp'
    },
    {
        id: 18, menuId: 4, title: 'Home Appliances', imgPath: '/images/sumsungCook.webp',
        shortDescription: 'Triple Cooling Flex Zone Digital Inverter Technology', price: 51999,
        protitle: 'RF50K5910SL French Door with Triple Cooling, 594L', imageList: '/images/s1.webp'
    },
];
{ /*     
  subShortDescription: 'Silver Aluminum Case with White Sport Band', subPrice: '15,999', subProtitle: 'Apple Watch Series 3',
subShortDescription: ' The MagSafe Charger makes wireless charging a snap.The perfectly aligned magnets attach to your iPhone 12 or iPhone 12 Pro and provide faster wireless charging up to 15W.', subPrice: '2,999', subProtitle: 'MagSafe Charger',
   subShortDescription: '2.6GHz 6 - Core Processor 512GB Storage AMD Radeon Pro 5300M', subPrice: '1,79,999', subProtitle: 'MacBook Pro 16-inch',
      subShortDescription: 'Apple-branded hardware product and accessories contained in the original packaging (“Apple Product”) come with a One-Year Limited Warranty. See apple.com/in/legal/warranty for more information.', subPrice: '51,999', subProtitle: 'Apple iPhone 11',
     subShortDescription: 'Presenting you the Apple HomePod Smart Speaker, White which comes with a new design and improved sound, providing the best all -in -one access to Apple Siri.With spatial awareness, it automatically analyses the acoustics and adjusts the sound based on its location.', subPrice: '14,999', subProtitle: 'HomePod',
    subShortDescription: 'AirPods Pro have been designed to deliver Active Noise Cancellation for immersive sound, Transparency mode so you can hear your surroundings, and a customizable fit for all-day comfort. Just like AirPods, AirPods Pro connect magically to your iPhone or Apple Watch. And they’re ready to use right out of the case.', subPrice: '29,999', subProtitle: 'Airpods pro',
     subShortDescription: '120 Hz Fluid Display • Qualcomm® Snapdragon™ 865 and 5G • Warp Charge 30 Wireless • 48 MP Quad Camera', subPrice: '54,999', subProtitle: 'OnePlus 8 Pro',
      subShortDescription: 'The case is a power bank, allowing up to 30 hours of listening time. Fully charged, the earphones can listen to music for up to 7 hours.', subPrice: '4999', subProtitle: 'OnePlus Buds Nord Blue',
     subShortDescription: '• QLED 4K Display • Gamma Color Magic • Dolby Vision®  and Dolby Atmos® • 50W 2.1CH Stereo System • Android TV • OnePlus Connect', subPrice: '84,999', subProtitle: 'OnePlus TV Q1 Series',
    subShortDescription: 'At OnePlus, we’ve always collaborated with the greatest minds to bring creativity to life.', subPrice: '1299', subProtitle: 'OnePlus Nord Creator Case Finsta',
    subShortDescription: 'The OnePlus Explorer Backpack was designed from the ground up with a bold new aesthetic, liters of space, and reliable durability.', subPrice: '4999', subProtitle: 'OnePlus Explorer Backpack Morandi Green',
  subShortDescription: '• Quad camera, OIS 48 MP Sony IMX586 • 32 MP & ultra wide selfie cameras • 90 Hz Fluid AMOLED display • Snapdragon™ 765G 5G & up to 12 GB RAM', subPrice: '29,999', subProtitle: 'OnePlus Nord',
   subShortDescription: 'Samsung Galaxy s most advanced zoom ever will help you capture amazing things from far away.Galaxy S20 s Hybrid Optic Zoom allows you to zoom up to x10 on anything that catches your eye with absolutely no loss of image quality. On top of that, you can enjoy Galaxy S20 s Super Resolution Zoom, which allows you to carry on zooming all the way to x100***.So when you re at a the back of the crowd at a music festival, you can zoom to the stage in no time', subPrice: '54,999', subProtitle: 'Galaxy S20 +',
 subShortDescription: 'Real 8K Resolution & 8K AI Upscaling Object Tracking Sound +  Voice Assistant with One Remote Control', subPrice: '12,99,999', subProtitle: '2m 07cm (82") Q800T 8K Smart QLED TV',
  subShortDescription: 'Up to a huge 11hrs* of non-stop music on a single chargeRich, natural sound by AKG with powerful bass & crisp high notes Dedicated 3 mic set up for loud & clear calls in any surrounding', subPrice: '8990', subProtitle: 'Galaxy Buds+ BTS Edition',
   subShortDescription: '90 Activity Tracking modes to choose from Stress monitoring & Sleep insights Up to 21 days of battery life', subPrice: '3999', subProtitle: 'Galaxy Fit2',
  subShortDescription: 'The most advanced Galaxy Tab changes how you work and play Bigger.Brighter.Faster The most advanced display on a tablet', subPrice: '71,999', subProtitle: 'Galaxy Tab S7 | Tab S7+',
 subShortDescription: 'AI Powered Laundry  Hygiene Steam - Removes 99.9 % of bacteria and allergens  AddWash', subPrice: '79,500', subProtitle: 'WD10N641R2X Washer Dryer with Q-Rator (AI Powered Laundry) and Addwash™ 10Kg/7Kg',








*/}