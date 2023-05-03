import { socialLinks } from '../data';

const SocialLinks = ({ parentClass, itemClass }) => {
    return (
        <ul className={parentClass}>
            { socialLinks.map((link) => {
                return (
                    <li key={link.id}>
                        <a 
                        href={link.id} 
                        target="_blank" 
                        rel="noreferrer" 
                        className={itemClass}
                        >
                            <i className={link.icon}></i>
                        </a>
                    </li>
                );
            }) }
        </ul>
    );
}

export default SocialLinks;