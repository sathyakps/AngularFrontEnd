import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
    public loggedInUser = new BehaviorSubject({
        _id: '5af70b650ed5570134422e51',
        referee: null,
        referralList: [
            'test2@v4hackers.com',
            'dak@v4hackers.com',
            'refer@v4hackers.com'
        ],
        referralUsers: [
            {
                _id: '5af70b850ed5570134422e53',
                referee: 'rJpOsFE0z',
                referralList: [],
                transactionIds: ['5af70bbd0ed5570134422e55'],
                iTransactionId: [],
                iTransactionId2: [],
                productCodes: [],
                rewardPoints: 2960,
                name: 'test_user',
                email: 'test3@v4hackers.com',
                mobile: 8148142484,
                password:
                    '$2b$04$HeitN93/AS5XQ50HCh09.O/dBjAvZaZ/VE.hTOhK5BnFEVDKOnCCW',
                referralCode: 'SJaKsYECG',
                createdAt: '2018-05-12T15:43:01.265Z',
                updatedAt: '2018-05-12T15:43:57.435Z',
                __v: 0,
                friendLevel: 1
            },
            {
                _id: '5af9c0375768f616dc425ecb',
                referee: 'HJTDitEAz',
                referralList: [],
                transactionIds: [],
                iTransactionId: [],
                iTransactionId2: [],
                productCodes: [],
                rewardPoints: 0,
                role: 'USER',
                name: 'dak',
                email: 'dak@v4hackers.com',
                mobile: 8148142484,
                password:
                    '$2b$04$DKynkw8TS..iPLAOGxfB8OYOT2an6jiAGvIb2uZxRH6JnP/grkjxy',
                referralCode: 'rkerxSPRz',
                createdAt: '2018-05-14T16:58:31.607Z',
                updatedAt: '2018-05-14T16:58:31.607Z',
                __v: 0,
                friendLevel: 0
            },
            {
                _id: '5af9c0375768f616dc425ecb',
                referee: 'rkerxSPRz',
                referralList: [],
                transactionIds: [],
                iTransactionId: [],
                iTransactionId2: [],
                productCodes: [],
                rewardPoints: 0,
                role: 'USER',
                name: 'dak',
                email: 'dak@v4hackers.com',
                mobile: 8148142484,
                password:
                    '$2b$04$DKynkw8TS..iPLAOGxfB8OYOT2an6jiAGvIb2uZxRH6JnP/grkjxy',
                referralCode: 'rkewxSPRz',
                createdAt: '2018-05-14T16:58:31.607Z',
                updatedAt: '2018-05-14T16:58:31.607Z',
                __v: 0,
                friendLevel: 0
            },
            {
                _id: '5af70b750ed5570134422e52',
                referee: 'HJTDitEAz',
                referralList: ['test3@v4hackers.com'],
                transactionIds: [],
                iTransactionId: ['5af70bbd0ed5570134422e55'],
                iTransactionId2: [],
                productCodes: [],
                rewardPoints: 296,
                name: 'test_user',
                email: 'test2@v4hackers.com',
                mobile: 8148142484,
                password:
                    '$2b$04$Yl0Ucs1u/xr7wU9uLurQI.LeUv55dMVpgTH4d9mFT8JM50zirtn1O',
                referralCode: 'rJpOsFE0z',
                createdAt: '2018-05-12T15:42:45.498Z',
                updatedAt: '2018-05-12T15:43:57.662Z',
                __v: 0,
                friendLevel: 0
            },
            {
                _id: '5afa77172da19102240580b6',
                referee: 'rkyYLxd0G',
                referralList: [],
                transactionIds: [],
                iTransactionId: [],
                iTransactionId2: [],
                productCodes: [],
                rewardPoints: 0,
                role: 'USER',
                name: 'refer test',
                email: '1@v4hackers.con',
                mobile: 1234567890,
                password:
                    '$2b$04$Kj4M.mBqDpCuWLec3VP4UOYvh8oHaDmh4aMpDX9im5lquYRhNWFwC',
                referralCode: 'r1yQwgO0f',
                createdAt: '2018-05-15T05:58:47.100Z',
                updatedAt: '2018-05-15T05:58:47.100Z',
                __v: 0,
                friendLevel: 1
            },
            {
                _id: '5afa77172da19102240580b6',
                referee: 'r1yQwgO0f',
                referralList: [],
                transactionIds: [],
                iTransactionId: [],
                iTransactionId2: [],
                productCodes: [],
                rewardPoints: 0,
                role: 'USER',
                name: 'refer test',
                email: '1@v4hackers.con',
                mobile: 1234567890,
                password:
                    '$2b$04$Kj4M.mBqDpCuWLec3VP4UOYvh8oHaDmh4aMpDX9im5lquYRhNWFwC',
                referralCode: 'r1yQwgO0f',
                createdAt: '2018-05-15T05:58:47.100Z',
                updatedAt: '2018-05-15T05:58:47.100Z',
                __v: 0,
                friendLevel: 2
            },
            {
                _id: '5afa76772da19102240580b5',
                referee: 'HJTDitEAz',
                referralList: ['1@v4hackers.con'],
                transactionIds: [],
                iTransactionId: [],
                iTransactionId2: [],
                productCodes: [],
                rewardPoints: 0,
                role: 'USER',
                name: 'Referd User',
                email: 'refer@v4hackers.com',
                mobile: 1234567890,
                password:
                    '$2b$04$f5pp0jj3/uGT6rTNPvlOIO.5jFJe7LojotZWathotGvrQvWBfEZze',
                referralCode: 'rkyYLxd0G',
                createdAt: '2018-05-15T05:56:07.406Z',
                updatedAt: '2018-05-15T05:58:47.406Z',
                __v: 0,
                friendLevel: 0
            }
        ],
        transactionIds: ['5af819e228fcc6204835bd9f'],
        iTransactionId: [],
        iTransactionId2: ['5af70bbd0ed5570134422e55'],
        productCodes: [
            {
                productId: '5af6957efd02e118286de472',
                discount: 9.2,
                referCode: 'Hy8CCqBAf'
            },
            {
                productId: '5af6957efd02e118286de472',
                discount: 9.6,
                referCode: 'SyC-yjrCG'
            },
            {
                productId: '5af70bae0ed5570134422e54',
                discount: 5,
                referCode: 'ryXocRIRM'
            },
            {
                productId: '5af70bae0ed5570134422e54',
                discount: 5.5,
                referCode: 'r1D3cA80M'
            }
        ],
        rewardPoints: 2990,
        name: 'test_user',
        email: 'test1@v4hackers.com',
        mobile: 8148142484,
        password:
            '$2b$04$1T7TuIbCLRGDhCUScVT1AO9vAkmqk6VetWl2cOuT.ZMdXHspakK5C',
        referralCode: 'HJTDitEAz',
        createdAt: '2018-05-12T15:42:29.350Z',
        updatedAt: '2018-05-15T05:56:07.724Z',
        __v: 0,
        directTransactions: [
            {
                _id: '5af819e228fcc6204835bd9f',
                paymentMode: 'COD',
                status: 'SUCCESS',
                productQty: 2,
                productId: '5af70bae0ed5570134422e54',
                referEmail: 'test1@v4hackers.com',
                totalAmount: 74000,
                buyerDetails: {
                    _id: '5af819e228fcc6204835bda0',
                    name: 'sathya',
                    mobile: 8148142484,
                    address: 'Chennai'
                },
                directRewardPoints: 2960,
                indirectRewardPoints: 296,
                indirectRewardPoints2: 0,
                createdAt: '2018-05-13T10:56:34.340Z',
                updatedAt: '2018-05-13T10:56:34.340Z',
                __v: 0
            }
        ],
        idirectTransactions1: [
            {
                _id: '5af70bbd0ed5570134422e55',
                paymentMode: 'COD',
                status: 'SUCCESS',
                productQty: 2,
                productId: '5af70bae0ed5570134422e54',
                referEmail: 'test3@v4hackers.com',
                totalAmount: 74000,
                buyerDetails: {
                    _id: '5af70bbd0ed5570134422e56',
                    name: 'sathya',
                    mobile: 8148142484,
                    address: 'Chennai'
                },
                directRewardPoints: 2960,
                indirectRewardPoints: 296,
                indirectRewardPoints2: 30,
                createdAt: '2018-05-12T15:43:57.179Z',
                updatedAt: '2018-05-12T15:43:57.179Z',
                __v: 0
            }
        ],
        idirectTransactions2: [
            {
                _id: '5af70bbd0ed5570134422e55',
                paymentMode: 'COD',
                status: 'SUCCESS',
                productQty: 2,
                productId: '5af70bae0ed5570134422e54',
                referEmail: 'test3@v4hackers.com',
                totalAmount: 74000,
                buyerDetails: {
                    _id: '5af70bbd0ed5570134422e56',
                    name: 'sathya',
                    mobile: 8148142484,
                    address: 'Chennai'
                },
                directRewardPoints: 2960,
                indirectRewardPoints: 296,
                indirectRewardPoints2: 30,
                createdAt: '2018-05-12T15:43:57.179Z',
                updatedAt: '2018-05-12T15:43:57.179Z',
                __v: 0
            }
        ]
    });
    public loggedInStatus = new BehaviorSubject(false);
}
