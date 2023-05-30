"use client";

import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { store } from "./store";

export function Providers({ children }) {
  return <Provider store={store}>
            <ToastContainer />
            <section className="sticky top-0 z-50">
                <Header/>
            </section>
            <section>
                {children}
            </section>
            <section>
                <Footer/>
            </section>
        </Provider>;
}
