import MyAvatar from '@/components/my-avatar';
import { FilePlus2, Heart, MessageCircle } from 'lucide-react';

export default function PostMainCard() {
    const user = {
        id: 1,
        name: 'John Doe',
        email: '0oG8l@example.com',
        picture: null,
        email_verified_at: null,
        created_at: '2022-01-01 00:00:00',
        updated_at: '2022-01-01 00:00:00',
    };

    const TruncatedText = ({ text, maxLength }: { text: string; maxLength: number }) => {
        const truncatedText = text.length > maxLength ? text.slice(0, maxLength) + '...' : text;

        return <p className="mb-5 w-full text-gray-700">{truncatedText}</p>;
    };

    return (
        <article className="mb-8 flex w-full max-w-[680px] flex-col-reverse gap-4 hover:cursor-pointer sm:flex-row">
            <div className="sm:flex-1">
                <div className="mb-2 flex items-center gap-2">
                    <MyAvatar user={user} />
                    <p>john doe</p>
                </div>
                <h2 className="mb-2 text-2xl font-semibold">Titre du post qui peut etre long</h2>
                <TruncatedText
                    maxLength={80}
                    text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Unde molestias porro odio accusamus quae et saepe dolor in blanditiis 
                ducimus distinctio eveniet, ullam pariatur labore, rerum obcaecati 
                inventore, cum sunt."
                />
                <ul className="flex items-center justify-between gap-2 text-gray-500">
                    <li>
                        <ul className="flex items-center gap-6">
                            <li>
                                <p>12 janvier 2025</p>
                            </li>
                            <li className="flex items-center gap-1">
                                <p>850</p>
                                <Heart />
                            </li>
                            <li className="flex items-center gap-1">
                                20
                                <MessageCircle />
                            </li>
                        </ul>
                    </li>

                    <li>
                        <FilePlus2 />
                    </li>
                </ul>
            </div>

            <div className="w-full sm:w-[20%]">
                <img
                    className="max-h-[100px] w-full object-cover"
                    src={
                        'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
                    }
                    alt=""
                />
            </div>
        </article>
    );
}
