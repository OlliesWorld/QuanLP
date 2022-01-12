import Image from 'next/image'
import Link from 'next/link'
import Logo from '../styles/logo.png'

const Header = () => {
    return (
        <div className='bg-qPurple m-auto text-center py-12'>
        <Link href='/'><Image src={Logo} alt='Quan'/></Link>
        <h1 className='text-center text-4xl text-qYellow'>Wellness Questionnaire</h1>
      </div>
    )
}

export default Header