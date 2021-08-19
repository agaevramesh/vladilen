const fruits = [
    {id: 1, title: 'Apples', price: 20, img: 'https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834'},
    {id: 2, title: 'Oranges', price: 30, img: 'https://agfstorage.blob.core.windows.net/misc/FP_es/2021/04/20/nmb1.jpeg'},
    {id: 3, title: 'Mangoes', price: 40, img: 'https://lh4.googleusercontent.com/mwju8A5Ey3nCSB9-6_AeyKPQe3sw_mca71lCKFBiqPjEviKRxUDMJ4XgO0FER31oZMEg6pVf_tx-i8aauKH8SpafoPeXFzBKdLB8_HuYULfIeft3oxW62A1ccOFJJWoJ9FBAnzDQ'}
]

const modal = $.modal({
    title: 'Vladilen Modal',
    closable: true,
    content: `
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
    `,
    width: '400px',
    footerButtons: [
        {text: 'Ok', type: 'primary', handler() {
                console.log('Primary btn clicked')
                modal.close()
        }},
        {text: 'cancel', type: 'danger', handler() {
                console.log('Danger btn clicked')
                modal.close()
        }},
    ]
})
