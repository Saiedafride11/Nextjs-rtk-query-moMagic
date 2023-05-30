import HeaderBottom from './HeaderBottom';
import HeaderMobileView from './HeaderMobileView';
import HeaderTop from './HeaderTop';

const Header = () => {
      return (
            <main className="w-full h-full flex flex-col justify-center items-center">
                  <HeaderTop/>
                  <HeaderBottom/>
                  <HeaderMobileView/>
            </main>
      );
};

export default Header;
