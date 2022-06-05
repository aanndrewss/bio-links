const links = [
    {
        _id: 'link_1',
        icon: {
            path: '/icons/github_logo.svg',
            width: 76
        },
        gradient: {
            from: '#fdfff5',
            to: '#a9a9a9'
        },
        link: 'https://github.com/aanndrewss',
        title: 'github',
        isImportant: true
    },
    {
        _id: 'link_2',
        icon: {
            path: '/icons/telegram_logo.svg',
            width: 76
        },
        gradient: {
            from: '#fdfff5',
            to: '#a9a9a9'
        },
        link: 'https://t.me/andrxw66',
        title: 'tg'
    },
    {
        _id: 'link_3',
        icon: {
            path: '/icons/vk-logo.svg',
            width: 80
        },
        gradient: {
            from: '#fdfff5',
            to: '#a9a9a9'
        },
        link: 'https://vk.com/andrxw66',
        title: 'vk'
    },
    {
        _id: 'link_4',
        icon: {
            path: '/icons/instagram_icon.svg',
            width: 80
        },
        gradient: {
            from: '#fdfff5',
            to: '#a9a9a9'
        },
        link: 'https://www.instagram.com/_andrxw66/?hl=ru',
        title: 'inst'
    }
]

export default function handler(req, res) {
    res.status(200).json(links)
}
