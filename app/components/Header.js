import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className='header'>
          <span>itProgger</span>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
