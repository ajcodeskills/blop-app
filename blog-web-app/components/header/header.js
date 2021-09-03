import Link from 'next/link';
import {useRouter} from 'next/router'
import styles from './header.module.css';
function Header() {
    const router = useRouter();
    const handleClick = () => {
        router.push('/')
    }
    return (
        <div className = {styles.container}>
            <div className = {styles.logo} onClick = {handleClick}>
                <img className = {styles.imgLogo} src = "https://marketing-images.meesho.com/images/logo.png" />
            </div>
            <div className = {styles.blogs}>
                <Link href = "/blog/1"><a className = {router.asPath === '/blog/1' && styles.active}>Blog1</a></Link>
            </div>
            <div className = {styles.blogs}>
                <Link href = "/blog/2"><a className = {router.asPath === '/blog/2' && styles.active}>Blog2</a></Link>
            </div>
            <div className = {styles.blogs}>
                <Link href = "/blog/3"><a className = {router.asPath === '/blog/3' && styles.active}>Blog3</a></Link>
            </div>
        </div>
    )
}
export default Header;