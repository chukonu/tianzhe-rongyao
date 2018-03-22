(function (angular) {
    'use strict'
    angular.module('app').constant('r1s2', {
        name: 'South Asia',
        mapId: 'r1s2',
        regions: [
            {
                id: '1',
                name: '阿拉伯海',
                path: '0.49% 43.38%, 29.84% 45.63%, 33.61% 62.25%, 25.57% 62.25%, 24.26% 81.41%, 11.97% 82.54%, 0.16% 75.92%'
            },
            {
                id: '2',
                name: '孟加拉湾',
                path: '58.36% 52.82%, 63.77% 50.28%, 70.16% 45.92%, 76.56% 42.11%, 83.61% 46.34%, 87.70% 50.56%, 87.05% 57.18%, 84.10% 58.17%, 82.13% 62.96%, 66.07% 67.75%, 52.95% 67.61%, 53.28% 57.75%, 57.87% 55.63%'
            },
            {
                id: '3',
                name: '安达曼海',
                path: '89.84% 56.06%, 96.07% 53.10%, 99.51% 59.15%, 99.34% 79.44%, 88.20% 71.41%, 86.56% 65.63%'
            },
            {
                id: '4',
                name: '印度',
                path: '21.80% 36.76%, 24.92% 34.79%, 28.03% 35.07%, 29.02% 32.54%, 26.56% 29.72%, 26.39% 27.46%, 28.20% 26.20%, 30.66% 26.62%, 40.49% 16.76%, 42.46% 14.37%, 47.21% 15.21%, 47.21% 18.87%, 52.13% 21.27%, 50.00% 24.08%, 60.00% 29.30%, 68.69% 30.00%, 76.89% 28.31%, 85.41% 26.62%, 90.82% 24.08%, 92.79% 25.49%, 88.85% 28.31%, 86.39% 34.08%, 83.61% 39.72%, 82.13% 35.35%, 80.49% 36.90%, 79.84% 35.63%, 83.11% 32.68%, 76.07% 32.25%, 75.57% 30.56%, 71.97% 29.44%, 72.79% 31.69%, 71.64% 33.94%, 74.26% 37.04%, 73.77% 40.00%, 68.85% 42.25%, 57.38% 52.82%, 51.31% 57.04%, 50.66% 65.07%, 43.61% 74.51%, 36.56% 62.25%, 33.28% 55.07%, 32.13% 46.06%, 32.46% 40.28%, 27.05% 43.80%'
            },
            {
                id: '5',
                name: '巴基斯坦',
                path: '5.08% 31.41%, 6.07% 28.73%, 7.87% 27.75%, 10.16% 27.75%, 8.52% 26.48%, 9.02% 24.51%, 7.54% 23.10%, 5.90% 21.83%, 5.41% 20.42%, 5.41% 19.58%, 7.70% 20.85%, 11.64% 21.41%, 15.25% 21.41%, 17.54% 21.27%, 18.20% 20.42%, 18.36% 18.17%, 20.00% 17.46%, 21.15% 17.46%, 20.66% 13.66%, 23.77% 12.39%, 26.07% 13.66%, 27.70% 12.96%, 26.07% 10.56%, 30.33% 9.01%, 30.49% 6.62%, 33.93% 4.93%, 36.89% 4.79%, 39.67% 4.23%, 42.46% 4.51%, 44.92% 6.90%, 42.46% 8.73%, 40.98% 8.45%, 38.85% 5.49%, 34.26% 7.04%, 36.89% 7.46%, 38.36% 10.00%, 36.72% 11.41%, 37.54% 14.93%, 40.16% 15.92%, 38.20% 17.32%, 36.56% 20.99%, 33.93% 23.52%, 30.98% 25.92%, 28.20% 26.62%, 27.54% 26.06%, 26.39% 26.90%, 25.41% 28.87%, 26.39% 29.86%, 26.56% 31.41%, 28.03% 32.39%, 28.20% 34.65%, 27.21% 35.07%, 25.25% 35.07%, 23.28% 34.51%, 21.15% 36.06%, 19.51% 35.49%, 18.69% 34.08%, 17.54% 31.41%'
            },
            {
                id: '6',
                name: '恒河',
                path: '50.00% 31.13%, 60.00% 30.56%, 61.48% 30.14%, 63.44% 31.13%, 69.51% 31.41%, 71.15% 32.25%, 70.98% 34.08%, 70.16% 35.35%, 57.21% 35.63%, 55.74% 33.80%, 52.13% 32.82%'
            },
            {
                id: '7',
                name: '印度河',
                path: '27.38% 22.68%, 27.38% 19.58%, 28.36% 16.76%, 29.67% 14.23%, 31.64% 12.54%, 31.97% 13.94%, 31.15% 15.92%, 30.33% 18.73%, 33.44% 20.42%, 35.25% 20.14%, 34.59% 21.83%, 32.30% 23.24%, 29.51% 23.80%, 27.70% 24.65%, 25.90% 25.49%, 24.10% 26.76%, 22.62% 27.75%, 21.48% 28.73%, 23.11% 29.58%, 23.61% 31.13%, 23.44% 32.82%, 22.46% 33.52%, 21.48% 34.51%, 21.15% 35.63%, 19.67% 35.92%, 19.18% 34.79%, 19.67% 33.66%, 20.49% 32.82%, 20.00% 31.97%, 19.51% 30.85%, 19.51% 29.30%, 19.51% 28.03%, 19.51% 26.90%, 20.33% 25.49%, 20.16% 24.51%, 20.98% 23.52%, 21.80% 22.82%, 23.61% 22.54%, 25.08% 21.97%'
            },
            {
                id: '8',
                name: '尼泊尔',
                path: '54.75% 20.56%, 58.03% 22.96%, 63.61% 25.07%, 69.18% 26.48%, 70.98% 26.20%, 70.82% 29.58%, 63.28% 29.15%, 61.80% 28.17%, 58.36% 27.89%, 54.75% 26.20%, 51.31% 24.08%, 51.48% 23.10%, 53.44% 21.41%'
            },
            {
                id: '9',
                name: '孟加拉国',
                path: '81.97% 42.11%, 73.44% 41.41%, 73.11% 40.42%, 73.44% 39.44%, 72.46% 38.87%, 72.13% 38.03%, 72.30% 36.90%, 73.11% 36.34%, 72.95% 35.63%, 70.82% 35.77%, 70.82% 34.65%, 70.98% 33.80%, 69.84% 33.24%, 69.67% 31.97%, 70.16% 31.13%, 71.97% 29.30%, 75.57% 30.42%, 76.23% 32.68%, 81.15% 32.11%, 82.95% 32.68%, 81.31% 34.51%, 80.00% 34.79%, 79.67% 35.92%, 80.00% 37.04%, 80.98% 37.18%, 81.64% 35.92%, 82.62% 36.90%, 83.28% 39.30%, 83.77% 39.86%, 83.61% 41.13%, 82.46% 40.99%'
            },
            {
                id: '10',
                name: '斯里兰卡',
                path: '49.18% 72.39%, 51.80% 69.58%, 54.10% 71.27%, 57.38% 74.79%, 67.87% 75.07%, 67.87% 78.73%, 66.56% 79.15%, 57.87% 79.15%, 52.95% 81.55%, 49.67% 79.44%, 49.34% 76.90%, 48.52% 75.35%'
            },
            {
                id: '11',
                name: '马尔代夫',
                path: '24.43% 93.10%, 26.39% 62.82%, 29.34% 63.10%, 35.08% 67.75%, 35.41% 77.32%, 35.57% 94.23%, 31.15% 96.34%'
            },
            {
                id: '12',
                name: '克什米尔',
                path: '38.03% 10.00%, 37.70% 9.15%, 37.38% 8.31%, 36.89% 7.46%, 36.56% 7.32%, 35.90% 7.61%, 34.10% 7.18%, 34.43% 6.62%, 35.57% 6.48%, 36.89% 5.92%, 37.87% 5.63%, 38.36% 5.35%, 39.34% 5.35%, 40.00% 6.06%, 40.00% 7.04%, 40.33% 7.18%, 40.82% 8.31%, 41.15% 8.73%, 42.46% 8.31%, 43.44% 8.73%, 44.59% 9.01%, 46.39% 9.30%, 46.39% 9.86%, 46.89% 10.99%, 47.70% 11.13%, 47.05% 11.97%, 47.70% 13.10%, 48.69% 13.66%, 48.36% 15.21%, 46.89% 15.77%, 45.74% 15.35%, 45.41% 14.37%, 42.95% 14.37%, 42.62% 13.66%, 41.48% 14.08%, 40.49% 14.79%, 40.16% 15.35%, 38.52% 14.79%, 38.03% 13.66%'
            },
            {
                id: '13',
                name: '不丹',
                path: '72.79% 27.89%, 72.79% 26.06%, 74.10% 24.51%, 75.57% 25.21%, 76.89% 25.21%, 78.20% 25.49%, 79.02% 25.21%, 80.49% 25.49%, 82.13% 26.34%, 82.13% 28.31%, 80.00% 28.73%, 75.41% 28.59%'
            },
            {
                id: '14',
                name: '达卡',
                path: '75.74% 36.34%, 75.57% 35.63%, 76.07% 34.37%, 78.36% 32.39%, 81.31% 32.25%, 83.28% 32.25%, 85.25% 33.24%, 85.08% 34.79%, 83.44% 35.49%, 78.85% 35.63%, 77.54% 36.48%'
            },
            {
                id: '15',
                name: '伊斯兰堡',
                path: '27.54% 12.39%, 30.66% 12.68%, 32.62% 12.68%, 32.79% 10.85%, 35.57% 10.85%, 35.74% 12.96%, 39.51% 13.38%, 40.66% 13.94%, 40.49% 16.76%, 33.77% 16.20%, 27.05% 15.49%, 26.23% 13.94%'
            },
            {
                id: '16',
                name: '新德里',
                path: '30.66% 24.23%, 38.69% 24.37%, 43.61% 24.37%, 45.25% 25.35%, 44.10% 27.18%, 41.15% 27.61%, 33.28% 27.89%, 31.15% 27.89%, 30.49% 26.62%, 30.33% 24.93%'
            },
            {
                id: '17',
                name: '加尔各答',
                path: '60.82% 38.45%, 65.08% 38.45%, 70.49% 38.59%, 71.64% 38.45%, 72.46% 39.01%, 73.28% 39.15%, 73.28% 40.00%, 72.62% 40.85%, 69.34% 40.99%, 65.57% 40.99%, 61.15% 40.99%, 60.00% 39.72%, 60.49% 39.01%'
            },
            {
                id: '18',
                name: '卡拉奇',
                path: '9.02% 30.00%, 19.02% 30.85%, 20.33% 32.54%, 18.20% 34.23%, 9.34% 33.38%, 8.85% 31.41%'
            },
            {
                id: '19',
                name: '孟买',
                path: '30.82% 46.48%, 39.18% 46.76%, 39.18% 49.58%, 30.98% 49.44%'
            },
            {
                id: '20',
                name: '廷布',
                path: '73.28% 22.25%, 82.79% 22.25%, 82.62% 25.77%, 76.39% 25.63%, 76.07% 27.46%, 74.10% 27.75%, 72.79% 26.34%'
            },
            {
                id: '21',
                name: '马累',
                path: '30.82% 83.38%, 41.48% 82.96%, 41.64% 87.32%, 30.98% 87.04%'
            },
            {
                id: '22',
                name: '科伦坡',
                path: '38.20% 75.49%, 52.30% 75.21%, 52.62% 79.15%, 37.38% 79.15%'
            },
            {
                id: '23',
                name: '加德满都',
                path: '48.20% 27.46%, 57.38% 26.90%, 59.67% 27.32%, 61.80% 26.90%, 63.28% 25.77%, 64.75% 26.06%, 64.75% 27.61%, 62.79% 30.42%, 48.85% 31.41%, 48.03% 28.87%'
            }
        ]
    })
})(angular)
