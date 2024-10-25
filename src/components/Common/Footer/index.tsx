import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

export default function Footer() {
  return (
    <footer>
      <div className={cn('footer-container')}>
        <div className={cn('copyright')}>
          <span>©codeit - 2023</span>
        </div>
        <nav className={cn('footer-nav')}>
          <a href="/privacy">
            <span>Privacy Policy</span>
          </a>
          <a href="/faq">
            <span>FAQ</span>
          </a>
        </nav>
        <div className={cn('sns-link')}>
          <ul>
            <li>
              <a href="https://www.facebook.com/" target="blank">
                <img src="/images/facebook.svg" alt="페이스북" />
              </a>
            </li>
            <li>
              <a href="https://x.com/" target="blank">
                <img src="/images/twitter.svg" alt="트위터" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="blank">
                <img src="/images/youtube.svg" alt="유튜브" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="blank">
                <img src="/images/instagram.svg" alt="인스타" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
