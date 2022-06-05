const me = {
    siteName: 'bio',
    avatar: '/avatar.jpg',
    description:
        '<p>My name is Andrey.</p>' +
        '<p>18 y.o.</p>' +
        '<p>Student.</p>' +
        '<p>Want to be a frontend React developer.</p>'
}

export default function handler(req, res) {
    res.status(200).json(me)
}