import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../@core/services/product.service';
import { DataService } from '../../@core/services/data.service';
import * as _ from 'lodash';
@Component({
    selector: 'app-admin-analytics',
    templateUrl: './admin-analytics.component.html',
    styleUrls: ['./admin-analytics.component.scss']
})
export class AdminAnalyticsComponent implements OnInit {
    userData = {};
    allProducts = [];
    pieChartData;
    columnChartData;
    groupBy;
    pieChartReady = false;
    barChartReady = false;
    lapToprewards = 0;
    lapTopSales = 0;
    tvrewards = 0;
    tvSales = 0;
    mobilerewards = 0;
    mobileSales = 0;
    constructor(private productService: ProductService, private dataService: DataService) {
        this.dataService.loggedInUser.subscribe(data => {
            if (data) {
                this.userData = data;
               this.getTransactionDetail();
            }
        });
    }

    getTransactionDetail() {
        this.productService.getTransationDetails(this.userData['email']).subscribe(data => {
            if (data['success']) {
                this.allProducts = data['data'];
                this.loadPieChart();
                this.loadBarChart();
            }
        });

        // this.productService.getTransationDetails(this.userData['email']).subscribe(data => {
        //     if (data['success']) {
        //         this.allProducts = data['data'];
        //         this.loadBarChart();
        //     }
        // })
    }

    loadPieChart() {
        const groupByCategory = _.groupBy(this.allProducts, 'categoryName');
        this.groupBy = groupByCategory;
        this.pieChartData = {
            chartType: 'PieChart',
            dataTable: [
                ['Category', 'Product Count'],
                ['LAPTOP', groupByCategory['LAPTOP'] ? groupByCategory['LAPTOP'].length : 0],
                ['MOBILE', groupByCategory['MOBILE'] ? groupByCategory['MOBILE'].length : 0],
                ['TV', groupByCategory['TV'] ? groupByCategory['TV'].length : 0]
            ],
            options: {
                // title: 'Referral Type',
                is3D: true,
                height: 400,
                width: 500
            }
        };
    }

    loadBarChart() {
        this.groupBy['LAPTOP'].forEach(product => {

            this.lapToprewards += _.sumBy(product['transactionDetails'], (data) => {
                return data['directRewardPoints'] + data['indirectRewardPoints'] + data['indirectRewardPoints2'];
            });
            this.lapTopSales  += _.sumBy(product['transactionDetails'], (data) => {
                return data['totalAmount'] ;
            });
        });

        this.groupBy['MOBILE'].forEach(product => {

            this.mobilerewards += _.sumBy(product['transactionDetails'], (data) => {
                return data['directRewardPoints'] + data['indirectRewardPoints'] + data['indirectRewardPoints2'];
            });
            this.mobileSales  += _.sumBy(product['transactionDetails'], (data) => {
                return data['totalAmount'] ;
            });
        });

        this.groupBy['TV'].forEach(product => {

            this.tvrewards += _.sumBy(product['transactionDetails'], (data) => {
                return data['directRewardPoints'] + data['indirectRewardPoints'] + data['indirectRewardPoints2'];
            });
            this.tvSales  += _.sumBy(product['transactionDetails'], (data) => {
                return data['totalAmount'] ;
            });
        });

        this.columnChartData = {
            chartType: 'Bar',
            dataTable: [
                ['Category', 'Sales', 'Rewards'],
                ['LAPTOP', this.lapTopSales, this.lapToprewards],
                ['MOBILE', this.mobileSales, this.mobilerewards],
                ['TV', this.tvSales, this.tvrewards],
                // ['MOBILE', indirectTransactions1.length ? indirectTransactions1.length : 0, indirectRewards1],
                // ['TV', indirectTransactions2.length ? indirectTransactions2.length : 0, indirectRewards2]
            ],
            options: {

                height: 400,
                width: 500,
                chart: {
                    // title: 'Reward Points and Transactions'
                },
                // series: {
                //     0: { axis: 'Transaction Count' }, // Bind series 0 to an axis named 'distance'.
                //     1: { axis: 'Reward Points' } // Bind series 1 to an axis named 'brightness'.
                // },
                // axes: {
                //     y: {
                //         distance: { label: 'Transaction Count' }, // Left y-axis.
                //         brightness: {
                //             side: 'right',
                //             label: 'apparent magnitude'
                //         } // Right y-axis.
                //     }
                // },
                legend: { position: 'bottom', alignment: 'start' },
            }
        };
    }

    ngOnInit(): void { }

    makeChartPieVisible() {
        this.pieChartReady = true;
    }

    makeChartBarVisible() {
        this.barChartReady = true;
    }
}
