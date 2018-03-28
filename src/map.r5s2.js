;(function(angular) {
    'use strict'
    angular.module('app').constant('r5s2', {
        mapId: 'r5s2',
        name: 'South Pole',
        width: 669,
        height: 834,
        regions: [
            {
                id: 'r5s2-1',
                name: '太平洋',
                path: 'polygon(12.26% 28.78%,2.99% 29.62%,0.45% 31.06%,0.15% 58.39%,0.30% 78.66%,13.60% 99.28%,46.79% 99.64%,54.26% 92.09%,60.09% 87.05%,61.43% 74.10%,59.64% 69.66%,47.83% 67.51%,47.38% 62.71%,40.66% 60.43%,25.11% 56.71%)'
            },
            {
                id: 'r5s2-2',
                name: '大西洋',
                path: 'polygon(50.37% 0.12%,19.73% 0.12%,0.30% 6.35%,0.45% 16.19%,8.52% 23.14%,13.00% 23.86%,18.24% 23.74%,25.11% 29.62%,35.28% 28.90%,41.26% 24.22%,51.87% 18.94%,63.23% 21.46%,69.81% 21.82%,75.64% 24.34%,85.35% 12.35%,87.29% 2.76%,85.50% 0.12%)'
            },
            {
                id: 'r5s2-3',
                name: '印度洋',
                path: 'polygon(93.57% 3.96%,82.66% 11.99%,76.38% 22.18%,75.93% 24.58%,83.71% 33.93%,87.74% 44.72%,91.03% 50.12%,80.57% 63.91%,68.46% 70.50%,62.33% 79.14%,64.42% 85.73%,72.94% 88.37%,94.77% 84.29%,98.80% 76.26%,99.70% 42.09%,99.70% 11.87%,98.21% 4.44%)'
            },
            {
                id: 'r5s2-4',
                name: '南美洲',
                path: 'polygon(8.22% 12.23%,2.39% 12.95%,0.45% 14.99%,0.15% 23.14%,0.30% 29.86%,0.30% 34.17%,6.58% 33.57%,8.67% 23.26%,9.72% 17.99%)'
            },
            {
                id: 'r5s2-5',
                name: '大洋洲',
                path: 'polygon(70.70% 80.10%,53.06% 87.77%,47.53% 95.56%,47.23% 99.04%,52.47% 99.76%,57.85% 99.88%,65.62% 99.88%,82.36% 99.76%,89.99% 99.28%,96.56% 99.76%,99.70% 95.68%,98.65% 89.33%,89.39% 82.97%)'
            },
            {
                id: 'r5s2-6',
                name: '德雷克海峡',
                path: 'polygon(12.56% 10.19%,3.44% 17.15%,2.54% 27.22%,1.94% 36.09%,3.89% 43.17%,9.42% 44.48%,15.10% 43.05%,17.79% 36.57%,12.86% 26.50%,15.40% 17.15%,15.55% 12.35%)'
            },
            {
                id: 'r5s2-7',
                name: '南极高原',
                path: 'polygon(49.78% 32.49%,37.37% 38.73%,35.58% 48.08%,37.97% 52.76%,45.74% 49.40%,50.97% 50.36%,58.89% 52.76%,62.63% 49.64%,65.02% 44.96%,63.38% 38.13%,57.25% 34.29%)',
                children: [
                    {
                        id: 'r5s2-14',
                        name: '阿蒙森-斯科特站（美）',
                        path: 'polygon(50.22% 41.37%,45.14% 44.84%,50.37% 50.72%,56.50% 45.20%)'
                    }
                ]
            },
            {
                id: 'r5s2-8',
                name: '南极半岛',
                path: 'polygon(15.99% 21.82%,12.26% 28.06%,15.99% 37.05%,19.43% 41.01%,25.11% 41.01%,28.70% 38.61%,31.99% 35.37%,28.70% 29.50%,21.67% 23.74%)'
            },
            {
                id: 'r5s2-9',
                name: '文森山',
                path: 'polygon(30.49% 37.53%,26.46% 41.73%,27.50% 45.68%,30.79% 46.40%,35.28% 46.16%,35.58% 41.97%,33.93% 39.09%)'
            },
            {
                id: 'r5s2-10',
                name: '长城站（中国）',
                path: 'polygon(12.41% 22.66%,8.52% 26.50%,9.12% 30.22%,13.60% 31.53%,17.94% 31.29%,18.83% 26.74%,16.59% 23.86%)'
            },
            {
                id: 'r5s2-11',
                name: '中山站（中国）',
                path: 'polygon(79.67% 34.65%,75.64% 36.81%,75.04% 40.77%,77.58% 42.33%,82.06% 43.17%,84.01% 41.01%,83.71% 36.57%)'
            },
            {
                id: 'r5s2-12',
                name: '东方站（俄）',
                path: 'polygon(68.31% 44.48%,62.03% 48.56%,68.76% 53.84%,73.54% 49.28%)'
            },
            {
                id: 'r5s2-13',
                name: '和平站（俄）',
                path: 'polygon(85.05% 44.36%,78.77% 48.08%,85.95% 53.12%,90.73% 48.56%)'
            },
            {
                id: 'r5s2-15',
                name: '迪蒙.迪维尔站（法）',
                path: 'polygon(72.20% 61.15%,66.07% 67.27%,73.54% 71.34%,78.33% 66.19%)'
            }
        ],
        labels: [
            {
                "id": "r5s2-1",
                "name": "太平洋",
                fontSize: '24px',
                letterSpacing: '12px',
                fill: '#006994',
                "optimal": [
                    "26.96%",
                    "78.57%"
                ]
            },
            {
                "id": "r5s2-2",
                "name": "大西洋",
                fontSize: '24px',
                letterSpacing: '12px',
                fill: '#006994',
                "optimal": [
                    "29.34%",
                    "14.41%"
                ]
            },
            {
                "id": "r5s2-3",
                "name": "印度洋",
                textAnchor: 'middle',
                fontSize: '24px',
                letterSpacing: '12px',
                fill: '#006994',
                "optimal": [
                    "87.44%",
                    "73.44%"
                ]
            },
            {
                "id": "r5s2-4",
                "name": "南美洲",
                fontWeight: 'bold',
                fontSize: '18px',
                fill: '#FF1493',
                writingMode: 'tb',
                "optimal": ['1.8%', '25.30%']
            },
            {
                "id": "r5s2-5",
                "name": "大洋洲",
                textAnchor: 'middle',
                fontSize: '24px',
                fontWeight: 'bold',
                letterSpacing: '48px',
                fill: '#FF1493',
                "optimal": ['76%', '96%']
            },
            {
                "id": "r5s2-6",
                "name": "德雷克海峡",
                writingMode: 'tb',
                fontSize: '16px',
                letterSpacing: '4px',
                fill: '#006994',
                "optimal": ['6.60%', '23.98%']
            },
            {
                "id": "r5s2-7",
                "name": "南极高原",
                textAnchor: 'middle',
                fontSize: '18px',
                fontWeight: 'bold',
                "optimal": [
                    "50.65%",
                    "41.70%"
                ]
            },
            {
                "id": "r5s2-8",
                "name": "南极半岛",
                textAnchor: 'middle',
                "optimal": [
                    "22.45%",
                    "33.21%"
                ]
            },
            {
                "id": "r5s2-9",
                "name": "文森山",
                "optimal": [
                    "31.24%",
                    "42.52%"
                ]
            },
            {
                "id": "r5s2-10",
                "name": "长城站（中国）",
                "optimal": [
                    "13.76%",
                    "27.48%"
                ]
            },
            {
                "id": "r5s2-11",
                "name": "中山站（中国）",
                "optimal": [
                    "79.53%",
                    "38.91%"
                ]
            },
            {
                "id": "r5s2-12",
                "name": "东方站（俄）",
                "optimal": [
                    "68.04%",
                    "49.06%"
                ]
            },
            {
                "id": "r5s2-13",
                "name": "和平站（俄）",
                "optimal": [
                    "85.01%",
                    "48.59%"
                ]
            },
            {
                "id": "r5s2-14",
                "name": "阿蒙森-斯科特站（美）",
                textAnchor: 'middle',
                "optimal": [
                    "50.65%",
                    "44%"
                ]
            },
            {
                "id": "r5s2-15",
                "name": "迪蒙.迪维尔站（法）",
                "optimal": [
                    "72.40%",
                    "66.43%"
                ]
            }
        ]
    })
})(angular)