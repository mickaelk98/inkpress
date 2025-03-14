import MyAvatar from '@/components/my-avatar';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { NotebookPen } from 'lucide-react';

export default function Header() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <header className="border-secondary mb-6 w-full border-b-2 p-2 text-sm not-has-[nav]:hidden lg:px-6">
                <nav className="flex items-center justify-between gap-4">
                    <Link className="text-3xl font-bold" href={route('home')}>
                        Inkpress
                    </Link>
                    <div className="flex items-center gap-6">
                        <div className="flex cursor-pointer items-center gap-2 text-gray-600 hover:text-gray-800 lg:mr-6">
                            <NotebookPen />
                            <span className="text-lg">Ecrire</span>
                        </div>
                        {auth.user ? (
                            <Link href={route('dashboard')}>
                                <MyAvatar user={auth.user} />
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Connexion
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Inscription
                                </Link>
                            </>
                        )}
                    </div>
                </nav>
            </header>
        </>
    );
}
