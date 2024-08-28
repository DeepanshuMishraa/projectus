import Link from 'next/link';
import Image from 'next/image';
import { Manrope, Noto_Sans } from 'next/font/google';
import logo from "../public/logo.png"

// Font configurations
const nato = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const manrope = Manrope({
  subsets: ['latin'],
});

const Navbar: React.FC = () => {
  return (
    <header className='fixed top-0 left-0 p-2 right-0 z-50 flex justify-center'>
      <nav className='flex items-center justify-between p-4 backdrop-blur-md bg-white/10 rounded-lg max-w-lg w-full'>
        {/* Left: ProJectus Link */}
        <div className='flex items-center space-x-4'>
          <Link href="/" className={`text-white text-2xl font-bold ${nato.className}`}>
            ProJectus
          </Link>
        </div>
        {/* Center: Logo */}
        <div className='flex justify-center'>
          <Image src={logo} alt="Logo" width={80} height={80} />
        </div>
        {/* Right: GitHub Link */}
        <div className='flex items-center space-x-4'>
          <Link href="https://github.com/DeepanshuMishraa" target="_blank" rel="noopener noreferrer" className={`text-white hover:text-gray-300 transition-colors ${manrope.className}`}>
            GitHub
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
