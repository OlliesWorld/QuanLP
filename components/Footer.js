import Image from 'next/image'
import Logo from '../styles/logo.png'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <footer className='flex justify-evenly py-4 bg-qPurple text-qWhite'>
            <div>
                <Image src={Logo} alt='logo' />
                <p>Wilhelmina van Pruisenweg 35</p>
                <p>2595 AN , The Hague, Netherlands</p>
                <p>KvK: 80307329</p>
                    <div>
                        <p>Connect with us!</p>
                        <div className=' w-[55%] flex justify-evenly -ml-2'>
                       
                            <SocialIcon url='https://www.linkedin.com/company/quan-wellbeing' bgColor='#fee622'  style={{ height: 25, width: 25 }}/>
                       
                            <SocialIcon url='https://www.instagram.com/quanwellbeing/' bgColor='#fee622'  style={{ height: 25, width: 25 }}/>
                       
                            <SocialIcon url='https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fquanwellbeing' bgColor='#fee622'  style={{ height: 25, width: 25 }} />
                        
                            <SocialIcon url='https://twitter.com/quanwellbeing' bgColor='#fee622'   style={{ height: 25, width: 25 }}/>
                        
                        </div>
                    </div>
            </div>
            <div className='items-end'> © {new Date().getFullYear()} Built by 
                <a href="https://roni.rocks/"   target="_blank" rel="noreferrer" >
                <span className="text-rBlue font-bold" >Roni</span>
                </a>
            </div>
            
        </footer>
    )
    
}

export default Footer