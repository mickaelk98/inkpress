import MyAvatar from './my-avatar';

export default function PostTopCard() {
    const user = {
        id: 1,
        name: 'John Doe',
        email: '0oG8l@example.com',
        picture: null,
        email_verified_at: null,
        created_at: '2022-01-01 00:00:00',
        updated_at: '2022-01-01 00:00:00',
    };

    return (
        <article>
            <div className="mb-2 flex items-center gap-2">
                <MyAvatar user={user} />
                <p>john doe</p>
            </div>
            <p className="mb-2 text-xl font-bold">le titre de l'article top</p>
            <p className="text-gray-700">janvier 2025</p>
        </article>
    );
}
