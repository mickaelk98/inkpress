import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from '@/types';

interface Props {
    user: User;
}

export default function MyAvatar({ user }: Props) {
    return (
        <Avatar>
            <AvatarImage src={user.picture ? user.picture : 'https://github.com/shadcn.png'} alt="profil" />
            <AvatarFallback>{user.name}</AvatarFallback>
        </Avatar>
    );
}
