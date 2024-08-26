import Link from 'next/link';
import { Manrope, Noto_Sans } from 'next/font/google';
import { LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const nato  = Noto_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
})

const manrope = Manrope({
    subsets:['latin']
})

const Navbar: React.FC = async() => {

    const {isAuthenticated} = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
  return (
    <header className='fixed top-0 left-0 p-2 right-0 z-50 flex justify-center'>
      <nav className='flex items-center justify-between p-4 backdrop-blur-md bg-white/10 rounded-lg max-w-lg w-full'>
        <div className='flex items-center'>
          <Link href="/" className={`text-white text-2xl font-bold ${nato.className}`}>
            ProJectus
          </Link>
        </div>
        <div className='flex items-center space-x-4'>
          <Link href="https://github.com/DeepanshuMishraa" target="_blank" rel="noopener noreferrer" className={`text-white hover:text-gray-300 transition-colors ${manrope.className}`}>
            GitHub
          </Link>
          {isUserAuthenticated ? (
            <LogoutLink>Logout</LogoutLink>
          ):(
            <LoginLink>Login</LoginLink>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
