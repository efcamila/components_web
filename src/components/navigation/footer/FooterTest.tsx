import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Footer, FooterBrand, FooterContent, FooterCopy, FooterItems } from "./Footer";

const FooterTest = () => {
  return (
    <Footer>
      <FooterBrand>
        <img src="/vite.svg" alt="" />
        <p className="font-bold">Vite</p>
      </FooterBrand>
      <FooterContent>
        <FooterItems title="Options">
          <a href="" className="hover:text-blue-400">Accesibility</a>
          <a href="" className="hover:text-blue-400">Camera</a>
          <a href="" className="hover:text-blue-400">Messages</a>
        </FooterItems>
        <FooterItems title="Actions">
          <a href="" className="hover:text-blue-400">Add a element</a>
          <a href="" className="hover:text-blue-400">Edit</a>
          <a href="" className="hover:text-blue-400">Delete</a>
        </FooterItems>
        <FooterItems>
          <div className="flex gap-5">
            <FaFacebook size={20}/>
            <FaWhatsapp size={20}/>
            <FaInstagram size={20}/>
          </div>
        </FooterItems>
      </FooterContent>
      <FooterCopy company="EfCamilaWeb"/>
    </Footer>
  );
};

export default FooterTest;
