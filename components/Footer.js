import Image from 'next/image'
import Link from 'next/link'
import Logo from '../assets/logo.png'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <footer className='lg:flex justify-evenly py-4 bg-qPurple text-qWhite text-center lg:text-left'>
            <div>
            <Link href='/' >
                <a><Image src={Logo} alt='Quan' layout='fixed'/></a>
            </Link>
                <p>Wilhelmina van Pruisenweg 35</p>
                <p>2595 AN , The Hague, Netherlands</p>
                <p>KvK: 80307329</p>
                    <div>
                        <p>Connect with us!</p>
                        <div className=' w-[55%] flex justify-evenly m-auto lg:-ml-2'>
                       
                            <SocialIcon url='https://www.linkedin.com/company/quan-wellbeing' bgColor='#fee622'  style={{ height: 25, width: 25 }}/>
                       
                            <SocialIcon url='https://www.instagram.com/quanwellbeing/' bgColor='#fee622'  style={{ height: 25, width: 25 }}/>
                       
                            <SocialIcon url='https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fquanwellbeing' bgColor='#fee622'  style={{ height: 25, width: 25 }} />
                        
                            <SocialIcon url='https://twitter.com/quanwellbeing' bgColor='#fee622'   style={{ height: 25, width: 25 }}/>
                        
                        </div>
                    </div>
            </div>
            <div className='items-end'> © {new Date().getFullYear()} Built by 
                <a href='https://roni.rocks/'   target="_blank" rel='noreferrer' >
                <span className='text-rBlue font-bold' >Roni</span>
                </a>
            </div>
            
        </footer>
    )
    
}

export default Footer