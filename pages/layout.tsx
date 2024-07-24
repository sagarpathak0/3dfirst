import Navbar from "./navbar";
import Footer from "./footer";
import Scene from "@/components/Scene";
import 'tailwindcss/tailwind.css'

export default function Layout({children}){
    return(
        <>
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}