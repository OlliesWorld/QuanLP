import Image from 'next/image'
import Link from 'next/link'
import Logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='bg-qPurple m-auto grid grid-cols-3 gap-4 text-center py-12'>
        <div className='w-2/3'>
            <Link href='/' >
                <a><Image src={Logo} alt='Quan' layout='fixed'/></a>
            </Link>
        </div>
        <h2 className='col-start-2 col-end-3 text-center text-4xl text-qYellow'>Placing well-being at the heart of success!</h2>
  
      </div>
    )
}

export default Header