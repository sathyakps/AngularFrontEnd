import { Component, OnInit } from '@angular/core';
import { DataService } from '../../@core/services/data.service';
import { UserService } from '../../@core/services/user.service';
import * as _ from 'lodash';
import { IEmployee } from 'ng-org-chart';

@Component({
    selector: 'app-user-analytics',
    templateUrl: './analytics.component.html',
    styleUrls: ['./analytics.component.scss']
})
export class UserAnalyticsComponent implements OnInit {
    userData = {};
    fullUserData = {};
    columnChartData = {};
    friendsChart;
    pieChartReady = false;
    barChartReady = false;
    public pieChartData: any = {};
    constructor(private dataService: DataService, private userService: UserService) {
        this.dataService.loggedInUser.subscribe(data => {
            if (data) {
                this.userData = data;
                this.getUserProfile();
            }
        });
    }

    loadPieChart(groupBy) {
        this.pieChartData = {
            chartType: 'PieChart',
            dataTable: [
                ['Referral Type', 'Count'],
                ['Direct', groupBy[0] ? groupBy[0].length : 0],
                ['FriendLevel 1', groupBy[1] ? groupBy[1].length : 0],
                ['FriendLevel 2', groupBy[2] ? groupBy[2].length : 0]
            ],
            options: {
                // title: 'Referral Type',
                is3D: true,
                height: 400,
                width: 500
            }
        };
    }

    getUserProfile() {
        this.userService.getUserData(this.userData['email']).subscribe(
            data => {
                console.log(data);
                if (data['success']) {
                    this.fullUserData = { ...this.fullUserData, ...this.userData, ...data['data'] };
                    const groupBy = _.groupBy(this.fullUserData['referralUsers'], refer => {
                        return refer['friendLevel'];
                    });
                    this.loadBarChart();
                }
            }
            // err => {
            //     this.fullUserData = this.userData;
            //     const groupBy = _.groupBy(this.userData['referralUsers'], refer => {
            //         return refer['friendLevel'];
            //     });
            //     this.loadPieChart(groupBy);
            //     this.loadBarChart();
            //     this.loadFriendsChart();
            // }
        );

        this.userService.getProfile(this.userData['email']).subscribe(
            data => {
                if (data['success']) {
                    console.log(data);
                    this.fullUserData = { ...this.fullUserData, ...this.userData, ...data['data'][0] };
                    const groupBy = _.groupBy(this.fullUserData['referralUsers'], refer => {
                        return refer['friendLevel'];
                    });
                    this.loadPieChart(groupBy);
                    this.loadFriendsChart();
                }
            }
            // err => {
            //     this.fullUserData = this.userData;
            //     const groupBy = _.groupBy(this.userData['referralUsers'], refer => {
            //         return refer['friendLevel'];
            //     });
            //     this.loadPieChart(groupBy);
            //     this.loadBarChart();
            //     this.loadFriendsChart();
            // }
        );
    }

    loadBarChart() {
        const directTransactions = this.fullUserData['directTransactions'];
        const directRewards = _.sumBy(directTransactions, data => {
            return data['directRewardPoints'];
        });
        const indirectTransactions1 = this.fullUserData['idirectTransactions1'];
        const indirectRewards1 = _.sumBy(indirectTransactions1, data => {
            return data['indirectRewardPoints'];
        });
        const indirectTransactions2 = this.fullUserData['idirectTransactions2'];
        const indirectRewards2 = _.sumBy(indirectTransactions2, data => {
            return data['indirectRewardPoints2'];
        });
        this.columnChartData = {
            chartType: 'Bar',
            dataTable: [
                ['Refer Type', 'Transaction Count', 'Reward Points'],
                ['Direct', directTransactions.length ? directTransactions.length : 0, directRewards],
                ['Friend Level 1', indirectTransactions1.length ? indirectTransactions1.length : 0, indirectRewards1],
                ['Friend Level 2', indirectTransactions2.length ? indirectTransactions2.length : 0, indirectRewards2]
            ],
            options: {

                height: 400,
                width: 500,
                chart: {
                    // title: 'Reward Points and Transactions'
                },
                series: {
                    0: { axis: 'Transaction Count' }, // Bind series 0 to an axis named 'distance'.
                    1: { axis: 'Reward Points' } // Bind series 1 to an axis named 'brightness'.
                },
                axes: {
                    y: {
                        distance: { label: 'Transaction Count' }, // Left y-axis.
                        brightness: {
                            side: 'right',
                            label: 'apparent magnitude'
                        } // Right y-axis.
                    }
                },
                legend: { position: 'bottom', alignment: 'start' }
            }
        };
    }

    loadFriendsChart() {
        const topUser: any = {};
        topUser['name'] = this.fullUserData['name'];
        topUser['email'] = this.fullUserData['email'];
        topUser['referralCode'] = this.fullUserData['referralCode'];
        topUser['designation'] =
            'RP -' + String(this.fullUserData['rewardPoints'] ? this.fullUserData['rewardPoints'] : 0);
        const allFriends = this.fullUserData['referralUsers'];
        allFriends.forEach(element => {
            element['subordinates'] = [];
            element['designation'] = 'RP -' + String(element['rewardPoints'] ? element['rewardPoints'] : 0);
        });
        const directFirends = _.groupBy(allFriends, data => {
            return data['referee'];
        });
        topUser['subordinates'] = directFirends[topUser['referralCode']] ? directFirends[topUser['referralCode']] : [];
        topUser['subordinates'].forEach(element => {
            element['subordinates'] = directFirends[element['referralCode']]
                ? directFirends[element['referralCode']]
                : [];
        });
        topUser['subordinates'].forEach(firstLevel => {
            firstLevel['subordinates'].forEach(secondLevel => {
                secondLevel['subordinates'] = directFirends[secondLevel['referralCode']]
                    ? directFirends[secondLevel['referralCode']]
                    : [];
            });
        });
        this.friendsChart = topUser;
    }

    makeChartPieVisible() {
        this.pieChartReady = true;
    }

    makeChartBarVisible() {
        this.barChartReady = true;
    }

    ngOnInit(): void {}
}
