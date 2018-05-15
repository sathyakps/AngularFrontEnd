import { ProductService } from './../../@core/services/product.service';
import { ViewProductDetailComponent } from './view-product-detail/view-product-detail.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'app-view-product',
    templateUrl: './view-product.component.html',
    styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
    choosenCategory = '';
    public allProducts = [
        {
            _id: '5af70bae0ed5570134422e54',
            active: true,
            transactionIds: ['5af70bbd0ed5570134422e55'],
            categoryName: 'LAPTOP',
            name: 'Acer Predator Helios',
            price: 61990,
            brand: 'Acer',
            description:
                'Great price for a GTX 1060 GPU,Strong performance,Relatively long battery life,two-year warranty,Easy to upgrade.',
            imageURL:
                'https://rukminim1.flixcart.com/image/312/312/j5ws0i80/computer/y/z/g/acer-na-notebook-original-imaewhwsbmyquxjr.jpeg?q=70',
            maximumDiscount: 27,
            processor: 'Intel Core i5 Processor (8th Gen)',
            RAM: 4,
            OS: '64 bit Windows 10 Operating System',
            storage: 128,
            displaySize: 15.6,
            adminId: 'admin@v4hackers.com',
            createdAt: '2018-05-12T15:43:42.150Z',
            updatedAt: '2018-05-12T15:43:58.129Z',
            __v: 0,
            transactionDetails: []
        },
        {
            _id: '5af9d70af431e916d0a294v8',
            active: true,
            transactionIds: ['5af70bbd0ed5570134422e55'],
            categoryName: 'LAPTOP',
            name: 'MSI GV Series',
            price: 82990,
            brand: 'MSI',
            description:
                'MSI GV62 7RD is stuffed with raw power with NVIDIA GTX 1050 4GB Graphics,Intel 7th gen core i7 7700HQ processor , Cooler Boost 4 technology , Steelseries keyboard',
            imageURL:
                'https://rukminim1.flixcart.com/image/312/312/ja73ki80/computer/v/v/x/msi-na-gaming-laptop-original-imaeztu7nz9e6mz9.jpeg?q=70',
            maximumDiscount: 30,
            processor: 'Intel Core i7 Processor (7th Gen)',
            RAM: 4,
            OS: '64 bit Windows 10 Operating System',
            storage: 128,
            displaySize: 15.6,
            adminId: 'admin@v4hackers.com',
            createdAt: '2018-05-12T15:43:42.150Z',
            updatedAt: '2018-05-12T15:43:58.129Z',
            __v: 0,
            transactionDetails: []
        },
        {
            _id: '5ad9d70af421e916d0a294v6',
            active: true,
            transactionIds: ['5af70bbd0ed5570134422e55'],
            categoryName: 'LAPTOP',
            name: 'Dell 15 5000',
            price: 36990,
            brand: 'Dell',
            description: 'The Dell Inspiron 15 is a multimedia device with a simple and unobtrusive design.',
            imageURL:
                'https://rukminim1.flixcart.com/image/312/312/j9n3ekw0/computer/r/h/a/dell-inspiron-15-2-in-1-laptop-original-imaezauz8gubzgeg.jpeg?q=70',
            maximumDiscount: 9,
            processor: 'Intel Core i3 Processor (7th Gen)',
            RAM: 4,
            OS: 'Windows 10 Operating System',
            storage: 512,
            displaySize: 15.6,
            adminId: 'admin@v4hackers.com',
            createdAt: '2018-05-12T15:43:42.150Z',
            updatedAt: '2018-05-12T15:43:58.129Z',
            __v: 0,
            transactionDetails: []
        },
        {
            _id: '5ad9y70af121e946d0a294v6',
            active: true,
            transactionIds: ['5af70bbd0ed5570134422e55'],
            categoryName: 'LAPTOP',
            name: 'Apple MacBook Air',
            price: 54990,
            brand: 'Apple',
            description:
                'Apple MacBook Air now comes with much faster storage, better battery life and slightly improved performance in other areas.',
            imageURL:
                'https://rukminim1.flixcart.com/image/312/312/j4irlow0/computer/j/8/c/apple-na-notebook-original-imaevdrcvuksg2zv.jpeg?q=70',
            maximumDiscount: 5,
            processor: 'Intel Core i5 Processor (5th Gen)',
            RAM: 3,
            OS: '64 bit Mac OS Operating System',
            storage: 128,
            displaySize: 13.3,
            adminId: 'admin@v4hackers.com',
            createdAt: '2018-05-12T15:43:42.150Z',
            updatedAt: '2018-05-12T15:43:58.129Z',
            __v: 0,
            transactionDetails: []
        },
        {
            _id: '5af9d70af401e616d0a294b7',
            active: true,
            categoryName: 'TV',
            name: 'Micromax 81cm HD Ready LED TV',
            price: 12499,
            brand: 'Micromax',
            description:
                'Delight your senses with the Micromax HD Ready LED TV that has CLCP technology and SRS surround sound incorporated',
            imageURL:
                'https://rukminim1.flixcart.com/image/312/312/j7f2qvk0/television/5/p/8/micromax-32t8361hd-original-imaexntv64hkgssg.jpeg?q=70',
            maximumDiscount: 37,
            screenSize: 32,
            screenType: 'LED',
            smartTv: false,
            speakerOutput: 20,
            adminId: 'admin@v4hackers.com',
            createdAt: '2018-05-14T18:35:54.973Z',
            updatedAt: '2018-05-14T18:35:54.973Z',
            __v: 0,
            transactionDetails: []
        },
        {
            _id: '5za9d70vf431e816d0a294b7',
            active: true,
            categoryName: 'TV',
            name: 'Thomson LED Smart TV B9',
            price: 13499,
            brand: 'Thomson',
            description:
                'There is always a new show to catch up on, a funny clip to watch online, or an important sports event to tune in to – do it all on this Thomson Smart TV',
            imageURL:
                'https://rukminim1.flixcart.com/image/312/312/jfr57rk0/television/p/h/n/thomson-b9-32m3277-original-imaf45bckfhgpzpg.jpeg?q=70',
            maximumDiscount: 20,
            screenSize: 32,
            screenType: 'LED',
            smartTv: true,
            speakerOutput: 20,
            adminId: 'admin@v4hackers.com',
            createdAt: '2018-05-14T18:35:54.973Z',
            updatedAt: '2018-05-14T18:35:54.973Z',
            __v: 0,
            transactionDetails: []
        },
        {
            _id: '5za9d70vf431t816d0a294b7',
            active: true,
            categoryName: 'TV',
            name: 'Sanyo 108.2cm Full HD LED TV',
            price: 22999,
            brand: 'Sanyo',
            description:
                'Enjoy watching your favourite TV shows, movies, and much more on the crystal-clear 108.2 cm (43 inch) display of the Sanyo Full HD LED TV',
            imageURL:
                'https://rukminim1.flixcart.com/image/312/312/jc0ttow0-1/television/7/v/p/sanyo-xt-43s7100f-original-imaff8x4gguhghhg.jpeg?q=70',
            maximumDiscount: 41,
            screenSize: 43,
            screenType: 'LED',
            smartTv: true,
            speakerOutput: 16,
            adminId: 'admin@v4hackers.com',
            createdAt: '2018-05-14T18:35:54.973Z',
            updatedAt: '2018-05-14T18:35:54.973Z',
            __v: 0,
            transactionDetails: []
        },
        {
            _id: '5za9d70vf431e816d0a204b7',
            active: true,
            categoryName: 'TV',
            name: 'Vu 80cm HD Ready LED TV',
            price: 11499,
            brand: 'Vu',
            description:
                'Television, just got a lot more interesting, with clear visuals and great audio as you bring home this 80 cm(32 inch) HD Ready LED TV from Vu',
            imageURL:
                'https://rukminim1.flixcart.com/image/312/312/jdyuefk0/television/t/5/4/vu-32d7545-original-imaf27fyxv4y8jnc.jpeg?q=70',
            maximumDiscount: 28,
            screenSize: 32,
            screenType: 'LED',
            smartTv: true,
            speakerOutput: 20,
            adminId: 'admin@v4hackers.com',
            createdAt: '2018-05-14T18:35:54.973Z',
            updatedAt: '2018-05-14T18:35:54.973Z',
            __v: 0,
            transactionDetails: []
        },
        {
            _id: '5af9d749fec5e40434720adf',
            active: true,
            categoryName: 'MOBILE',
            name: 'Redmi Note 4',
            price: 10999,
            brand: 'Xiaomi',
            description:
                'Redmi Note 4 will provide tough competition to other smartphones in its price segment, and even some priced a little higher.',
            imageURL:
                'https://rukminim1.flixcart.com/image/312/312/mobile/9/8/z/mi-redmi-note-4-na-original-imaeqdxjuadhagfc.jpeg?q=70',
            maximumDiscount: 15,
            RAM: 4,
            screenSize: 5.5,
            battery: 4100,
            noOfSIM: 2,
            memory: 128,
            adminId: 'admin@v4hackers.com',
            createdAt: '2018-05-14T18:36:57.256Z',
            updatedAt: '2018-05-14T18:36:57.256Z',
            __v: 0,
            transactionDetails: []
        },
        {
            _id: '5af9d749fav5e40234420adf',
            active: true,
            categoryName: 'MOBILE',
            name: 'Panasonic Eluga A4',
            price: 7499,
            brand: 'Panasonic',
            description:
                'Panasonic Eluga A4 graphical performance that can make games run smoothly, this phone has got a Mali-T720 MP2 GPU',
            imageURL:
                'https://rukminim1.flixcart.com/image/312/312/j8ddbbk0-1/mobile/h/z/r/panasonic-eluga-a4-eb-90s52ea4m-original-imaeyeqtvttdhqje.jpeg?q=70',
            maximumDiscount: 42,
            RAM: 3,
            screenSize: 5.2,
            battery: 5000,
            noOfSIM: 2,
            memory: 128,
            adminId: 'admin@v4hackers.com',
            createdAt: '2018-05-14T18:36:57.256Z',
            updatedAt: '2018-05-14T18:36:57.256Z',
            __v: 0,
            transactionDetails: []
        },
        {
            _id: '5af9d719fav2e40234420edf',
            active: true,
            categoryName: 'MOBILE',
            name: 'Honor 9 Lite',
            price: 14999,
            brand: 'Honor',
            description: 'Honor 9 Lite’s bezel-light design and twin-lens camera tricks are eye catching',
            imageURL:
                'https://rukminim1.flixcart.com/image/312/312/jcp4b680/mobile/z/d/b/honor-9-lite-lld-al10-original-imaffh2qdpanuhp9.jpeg?q=70',
            maximumDiscount: 11,
            RAM: 4,
            screenSize: 5.5,
            battery: 4000,
            noOfSIM: 2,
            memory: 128,
            adminId: 'admin@v4hackers.com',
            createdAt: '2018-05-14T18:36:57.256Z',
            updatedAt: '2018-05-14T18:36:57.256Z',
            __v: 0,
            transactionDetails: []
        },
        {
            _id: '5af9da9500c74b2fc89bbb89',
            active: true,
            categoryName: 'MOBILE',
            name: 'Samsung Galaxy J7 Nxt',
            price: 9490,
            brand: 'Samsung',
            description: 'Samsung J7 Nxt does come with a Super AMOLED display, it is just an HD panel',
            imageURL:
                'https://rukminim1.flixcart.com/image/312/312/j5crukw0/mobile/h/s/j/samsung-j7-nxt-sm-j701fzddins-original-imaew2enzf5qytsg.jpeg?q=70',
            maximumDiscount: 13,
            RAM: 2,
            screenSize: 5.5,
            battery: 3000,
            noOfSIM: 2,
            memory: 256,
            adminId: 'admin@v4hackers.com',
            createdAt: '2018-05-14T18:51:01.881Z',
            updatedAt: '2018-05-14T18:51:01.881Z',
            __v: 0,
            transactionDetails: []
        }
    ];

    constructor(private modal: MatDialog, private productService: ProductService) {
        this.productService.getAllProduct().subscribe(data => {
            if (data['success']) {
                this.allProducts = data['data'];
            }
        });
    }

    ngOnInit(): void {}

    openProductDetail(product): void {
        const dialogRef = this.modal.open(ViewProductDetailComponent, {
            width: '850px',
            height: '500px',
            data: product
        });
    }

    changeCategory(catName) {
        this.choosenCategory = catName;
    }
}
