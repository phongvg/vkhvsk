import type { recentTrans, userInformationType, groupInformationType, deviceInformationType } from '@/types/dashboard/index';

/*--Recent Transaction--*/
const recentTransaction: recentTrans[] = [
    {
        title: '09:30 am',
        subtitle: 'Payment received from John Doe of $385.90',
        textcolor: 'primary',
        boldtext: false,
        line: true,
        link: '',
        url: ''
    },
    {
        title: '10:00 am',
        subtitle: 'New sale recorded',
        textcolor: 'secondary',
        boldtext: true,
        line: true,
        link: '#ML-3467',
        url: ''
    },
    {
        title: '12:00 am',
        subtitle: 'Payment was made of $64.95 to Michael',
        textcolor: 'success',
        boldtext: false,
        line: true,
        link: '',
        url: ''
    },
    {
        title: '09:30 am',
        subtitle: 'New sale recorded',
        textcolor: 'warning',
        boldtext: true,
        line: true,
        link: '#ML-3467',
        url: ''
    },
    {
        title: '09:30 am',
        subtitle: 'New arrival recorded',
        textcolor: 'error',
        boldtext: true,
        line: true,
        link: '',
        url: ''
    },
    {
        title: '12:00 am',
        subtitle: 'Payment Received',
        textcolor: 'success',
        boldtext: false,
        line: false,
        link: '',
        url: ''
    },
]

/*Basic Table 1*/
const productPerformance: userInformationType[] = [
    {
        id: 1,
        name: 'Nguyễn Trung Kiên',
        email: 'kiennnt@gmail.com',
        group: 'admin',
        status: 'active',
        statuscolor: 'primary',

    },
    {
        id: 2,
        name: 'Nguyễn Văn Hằng',
        email: 'hangnv@gmail.com',
        group: 'leader',
        status: 'deactive',
        statuscolor: 'warning',
        
    },
    {
        id: 3,
        name: 'Vũ Giang Phong',
        email: 'phongvg@gmail.com',
        group: 'author',
        status: 'active',
        statuscolor: 'primary',
    },
    {
        id: 4,
        name: 'Trần Văn Đức',
        email: 'kiennnt@gmail.com',
        group: 'admin',
        status: 'active',
        statuscolor: 'primary',
        
    },

];

const groupPerformance: groupInformationType[] = [
    {
        id: 1,
        name: 'Nhóm Admin',
        status: 'active',
        statuscolor: 'primary',

    },
    {
        id: 2,
        name: 'Nhóm Authoring',
        status: 'deactive',
        statuscolor: 'warning',
        
    },
    {
        id: 3,
        name: 'Nhóm Manager',
        status: 'active',
        statuscolor: 'primary',
    },
    {
        id: 4,
        name: 'Nhóm content',
        status: 'active',
        statuscolor: 'primary',
        
    },

];

const devicePerformance: deviceInformationType[] = [
    {
        id: 1,
        name: 'Máy tính Dell',
        quantity: 10,
        status: 'available',
        statuscolor: 'primary',

    },
    {
        id: 2,
        name: 'Macbook',
        quantity: 10,
        status: 'unavailable',
        statuscolor: 'warning',
        
    },
    {
        id: 3,
        name: 'Bàn phím',
        quantity: 10,
        status: 'available',
        statuscolor: 'primary',
    },
    {
        id: 4,
        name: 'Chuột',
        quantity: 10,
        status: 'unavailable',
        statuscolor: 'warning',
        
    },

];


export { recentTransaction, productPerformance, groupPerformance, devicePerformance }