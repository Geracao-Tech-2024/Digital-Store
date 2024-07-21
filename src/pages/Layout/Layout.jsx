import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

// Definindo o componente de layout
function Layout ({ children }) {
    return (
        <div>
            {/* <Header /> */}
                {children()}
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;