(function (angular) {
    'use strict'
    angular.module('app').constant('r1s3', {
        name: 'Africa',
        mapId: 'r1s3',
        regions: [
            {
                id: '1',
                name: '大西洋',
                path: '0.42% 0.43%, 9.28% 0.00%, 13.92% 10.84%, 8.30% 16.69%, 6.61% 22.54%, 5.49% 28.82%, 6.05% 36.52%, 14.35% 43.22%, 14.35% 49.50%, 17.44% 52.35%, 23.49% 52.64%, 31.93% 52.64%, 37.69% 62.05%, 38.54% 74.32%, 30.38% 88.30%, 20.82% 97.86%, 11.53% 90.73%, 11.39% 75.89%, 0.14% 75.89%'
            },
            {
                id: '2',
                name: '印度洋',
                path: '90.30% 42.94%, 99.58% 31.95%, 99.58% 99.43%, 80.03% 99.43%, 85.79% 85.16%, 92.26% 79.89%, 94.94% 77.03%, 95.08% 74.47%, 91.42% 73.75%, 92.55% 69.90%, 92.55% 65.34%, 83.97% 59.49%, 84.67% 52.35%'
            },
            {
                id: '3',
                name: '地中海',
                path: '44.16% 1.28%, 48.52% 1.71%, 49.51% 0.43%, 53.73% 0.43%, 56.54% 2.57%, 59.21% 0.86%, 62.17% 2.28%, 66.39% 2.00%, 69.06% 3.42%, 65.40% 5.99%, 63.15% 7.13%, 57.52% 5.85%, 55.13% 4.99%, 51.05% 6.99%, 48.52% 6.28%, 44.87% 4.99%'
            },
            {
                id: '4',
                name: '直布罗陀海峡',
                path: '11.95% 0.14%, 29.40% 0.14%, 28.83% 4.14%, 13.64% 4.56%'
            },
            {
                id: '5',
                name: '苏伊士运河',
                path: '66.95% 6.85%, 67.23% 10.13%, 68.92% 12.98%, 70.60% 12.55%, 69.06% 10.27%, 76.79% 10.13%, 76.79% 8.13%, 75.11% 7.70%, 68.64% 7.99%, 68.21% 6.70%'
            },
            {
                id: '6',
                name: '红海',
                path: '69.90% 12.84%, 71.17% 12.13%, 72.86% 14.41%, 74.40% 17.12%, 75.95% 18.54%, 76.65% 21.40%, 79.18% 23.54%, 80.45% 25.96%, 81.43% 26.96%, 82.14% 30.39%, 79.47% 28.82%, 77.36% 27.67%, 77.50% 25.53%, 76.09% 24.25%, 74.82% 22.25%, 74.54% 20.40%, 73.42% 18.97%, 71.87% 17.69%, 71.87% 16.69%, 71.03% 15.12%'
            },
            {
                id: '7',
                name: '几内亚湾',
                path: '17.44% 44.22%, 22.50% 42.80%, 26.30% 43.79%, 31.93% 41.94%, 35.72% 44.79%, 35.86% 47.36%, 33.05% 50.64%, 21.94% 49.64%, 19.27% 48.64%'
            },
            {
                id: '8',
                name: '撒哈拉沙漠',
                path: '8.44% 25.25%, 8.86% 18.97%, 14.06% 15.41%, 20.82% 11.70%, 27.43% 9.42%, 32.63% 7.85%, 36.99% 3.99%, 42.33% 4.71%, 46.27% 8.99%, 52.88% 10.41%, 56.26% 10.27%, 60.62% 9.84%, 63.15% 12.13%, 63.43% 17.26%, 64.42% 22.97%, 61.74% 25.68%, 41.63% 27.25%, 33.47% 27.82%, 24.33% 25.11%, 15.89% 25.39%, 11.81% 25.96%'
            },
            {
                id: '9',
                name: '纳米布沙漠',
                path: '45.44% 75.32%, 46.99% 75.04%, 53.9% 85.02%, 48.09% 90.02%'
            },
            {
                id: '10',
                name: '乍得盆地',
                path: '37.41% 31.53%, 39.66% 30.39%, 44.59% 30.67%, 45.57% 30.96%, 45.85% 31.81%, 45.85% 32.67%, 46.55% 33.24%, 47.12% 32.67%, 47.54% 30.96%, 47.96% 30.67%, 48.80% 30.67%, 50.21% 31.24%, 51.34% 30.39%, 53.31% 30.53%, 54.15% 31.95%, 53.31% 33.38%, 49.65% 36.52%, 45.15% 36.80%, 43.04% 34.81%, 40.23% 33.95%'
            },
            {
                id: '11',
                name: '刚果盆地',
                path: '47.12% 50.78%, 47.26% 46.79%, 56.54% 45.93%, 60.06% 47.5%, 60.62% 52.07%, 56.54% 53.64%, 50.77% 53.07%'
            },
            {
                id: '12',
                name: '阿赞德高原',
                path: '44.73% 40.37%, 62.73% 38.80%, 62.03% 45.79%, 44.59% 46.08%'
            },
            {
                id: '13',
                name: '埃塞俄比亚高原',
                path: '70.04% 33.81%, 69.90% 35.81%, 71.59% 36.52%, 71.73% 37.38%, 72.29% 38.09%, 71.87% 38.66%, 72.71% 40.66%, 74.54% 42.80%, 75.53% 44.51%, 78.90% 44.65%, 80.73% 43.37%, 81.86% 41.37%, 83.68% 39.94%, 83.54% 38.66%, 84.95% 38.66%, 84.95% 38.09%, 86.78% 36.52%, 86.78% 36.09%, 86.22% 36.09%, 84.11% 36.23%, 82.28% 35.24%, 82.28% 34.09%, 81.86% 33.67%, 79.32% 33.67%, 78.34% 29.39%, 75.67% 25.68%, 75.53% 28.96%, 75.11% 30.53%, 74.12% 32.10%, 73.56% 33.24%'
            },
            {
                id: '14',
                name: '东非高原',
                path: '72.57% 40.80%, 74.12% 40.66%, 74.54% 41.08%, 74.54% 43.22%, 73.98% 43.65%, 73.70% 44.79%, 74.40% 45.65%, 74.40% 46.93%, 74.54% 47.65%, 73.56% 48.36%, 73.42% 49.07%, 73.56% 49.79%, 74.26% 49.93%, 74.96% 50.36%, 75.11% 50.78%, 75.11% 51.50%, 74.82% 52.21%, 74.68% 53.21%, 74.40% 53.92%, 74.40% 55.06%, 74.96% 55.49%, 75.39% 56.06%, 75.39% 56.92%, 75.39% 57.49%, 75.11% 58.06%, 74.26% 58.20%, 73.28% 58.20%, 73.00% 57.20%, 73.28% 55.78%, 73.42% 54.21%, 72.57% 52.78%, 72.57% 49.50%, 72.29% 48.07%, 72.15% 45.36%, 72.01% 44.79%'
            },
            {
                id: '15',
                name: '德拉肯斯山脉',
                path: '52.18% 93.30%, 56.26% 94.01%, 59.92% 93.30%, 63.01% 91.73%, 65.26% 89.73%, 65.68% 87.02%, 67.23% 85.45%, 67.51% 82.74%, 69.20% 82.17%, 69.20% 79.89%, 67.93% 79.89%, 64.70% 79.32%, 62.31% 80.74%, 59.35% 81.31%, 57.38% 83.31%, 54.71% 87.02%, 54.15% 89.02%, 52.74% 90.16%'
            },
            {
                id: '16',
                name: '东非大裂谷',
                path: '79.04% 36.23%, 80.45% 36.23%, 81.43% 36.95%, 81.15% 38.52%, 80.45% 40.23%, 79.18% 41.80%, 78.34% 44.08%, 77.07% 45.51%, 76.93% 46.93%, 76.23% 48.07%, 75.81% 50.07%, 73.70% 50.21%, 72.86% 50.64%, 72.43% 51.36%, 72.86% 53.35%, 73.28% 54.49%, 73.28% 55.63%, 73.14% 56.78%, 72.86% 57.77%, 73.28% 59.06%, 74.12% 61.63%, 74.68% 63.77%, 75.11% 66.90%, 74.82% 68.05%, 73.56% 68.33%, 72.01% 67.76%, 71.87% 64.76%, 71.17% 61.63%, 70.32% 59.34%, 70.04% 57.63%, 70.46% 55.78%, 71.03% 52.64%, 71.45% 50.78%, 72.86% 48.93%, 73.84% 47.93%, 74.40% 47.22%, 74.40% 45.93%, 74.68% 44.22%, 75.53% 43.08%, 76.51% 40.66%, 76.93% 39.09%, 77.92% 37.09%'
            },
            {
                id: '17',
                name: '索马里半岛',
                path: '82.42% 41.37%, 82.28% 38.09%, 85.09% 35.52%, 88.89% 33.67%, 91.70% 32.10%, 93.11% 31.81%, 93.67% 32.67%, 93.81% 35.24%, 93.39% 38.66%, 88.89% 42.80%, 83.83% 42.65%'
            },
            {
                id: '18',
                name: '马达加斯加岛',
                path: '83.68% 69.9%, 81.58% 74.47%, 80.73% 78.32%, 81.15% 82.6%, 83.26% 84.17%, 90.65% 83.59%, 95% 73.47%, 92.12% 69.33%, 91.42% 65.91%, 90.72% 64.76%, 87.9% 65.48%, 86.64% 68.62%'
            },
            {
                id: '19',
                name: '好望角',
                path: '48.95% 93.30%, 53.87% 93.44%, 55.41% 94.86%, 54.85% 96.72%, 49.79% 96.86%, 48.24% 95.58%'
            },
            {
                id: '20',
                name: '乞力马扎罗山',
                path: '74.82% 52.92%, 75.39% 51.36%, 80.73% 51.36%, 82.14% 53.21%, 82.28% 55.21%, 81.01% 55.49%, 74.54% 55.35%, 74.40% 53.78%'
            },
            {
                id: '21',
                name: '南非高原',
                path: '58.51% 67.76%, 60.76% 67.76%, 60.62% 69.61%, 60.48% 70.47%, 59.35% 71.18%, 58.23% 72.18%, 58.37% 73.18%, 58.93% 74.18%, 59.49% 74.47%, 60.20% 74.18%, 61.32% 74.32%, 61.88% 74.89%, 62.03% 77.18%, 63.57% 80.17%, 63.85% 81.31%, 64.14% 84.45%, 62.45% 86.31%, 62.45% 88.30%, 60.90% 89.59%, 58.09% 89.16%, 56.96% 86.59%, 57.81% 81.88%, 56.68% 76.03%, 55.27% 73.18%'
            },
            {
                id: '22',
                name: '乍得湖',
                path: '43.46% 28.39%, 48.95% 28.25%, 49.51% 30.67%, 47.26% 30.53%, 47.40% 31.95%, 45.99% 32.67%, 45.43% 31.10%, 45.15% 30.81%, 43.74% 30.53%'
            },
            {
                id: '23',
                name: '阿萨勒湖',
                path: '76.65% 29.67%, 82.84% 29.39%, 83.40% 31.67%, 80.59% 32.10%, 79.47% 32.10%, 77.50% 31.95%, 76.37% 31.10%'
            },
            {
                id: '24',
                name: '维多利亚湖',
                path: '61.60% 50.21%, 68.07% 50.07%, 68.50% 48.93%, 70.46% 47.93%, 72.71% 48.93%, 71.31% 52.07%, 70.04% 53.50%, 68.78% 52.64%, 68.64% 52.35%, 62.31% 52.35%, 61.46% 51.50%'
            },
            {
                id: '25',
                name: '坦噶尼喀湖',
                path: '56.96% 54.35%, 64.28% 54.35%, 64.84% 52.78%, 66.67% 54.92%, 66.67% 56.63%, 68.07% 59.77%, 66.53% 61.63%, 64.84% 58.49%, 64.56% 56.92%, 57.38% 57.06%, 57.24% 56.06%'
            },
            {
                id: '26',
                name: '尼罗河',
                path: '64.98% 10.41%, 67.37% 9.99%, 69.76% 13.69%, 72.15% 18.26%, 71.17% 22.25%, 67.79% 25.39%, 65.68% 24.11%, 65.68% 22.40%'
            },
            {
                id: '27',
                name: '尼日尔河',
                path: '22.64% 28.10%, 27.99% 23.97%, 34.32% 31.53%, 36.29% 35.66%, 32.21% 40.80%, 29.96% 35.81%, 27.85% 30.96%'
            },
            {
                id: '28',
                name: '刚果河',
                path: '42.76% 56.06%, 45.43% 55.06%, 46.84% 53.50%, 47.68% 51.64%, 48.66% 51.21%, 50.35% 51.07%, 50.49% 52.35%, 50.49% 53.50%, 49.79% 55.21%, 47.82% 56.06%, 46.98% 55.35%, 46.13% 55.92%, 46.69% 57.77%, 43.88% 58.63%'
            },
            {
                id: '29',
                name: '赞比西河',
                path: '55.27% 66.62%, 56.54% 65.05%, 58.79% 65.19%, 59.63% 67.19%, 58.65% 68.19%, 57.38% 68.62%, 58.09% 69.61%, 58.37% 70.61%, 59.35% 71.47%, 60.06% 71.18%, 60.20% 70.76%, 60.76% 70.47%, 61.46% 70.47%, 62.87% 70.61%, 63.15% 69.19%, 63.99% 67.62%, 65.40% 67.48%, 67.09% 67.05%, 68.78% 68.33%, 71.03% 68.19%, 72.01% 68.90%, 72.57% 70.33%, 69.34% 71.04%, 68.07% 70.33%, 65.26% 71.04%, 63.85% 72.04%, 62.87% 72.75%, 61.74% 72.90%, 60.62% 72.75%, 59.77% 72.75%, 57.81% 72.18%, 56.82% 70.90%, 55.70% 68.62%'
            },
            {
                id: '30',
                name: '莫西奥图尼亚瀑布',
                path: '58.51% 72.61%, 69.76% 72.47%, 70.60% 74.04%, 59.07% 74.32%'
            }
        ]
    })
})(angular)
