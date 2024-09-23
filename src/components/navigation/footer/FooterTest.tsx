import { FaGithub } from "react-icons/fa";
import { Footer, FooterBrand, FooterContent, FooterCopy, FooterItems } from "./Footer";
import { TbWorld } from "react-icons/tb";
import { IoMail } from "react-icons/io5";
import React from "react";

const urls = [
  {
    name: 'Link 1'
  },
  {
    name: 'Link 2'
  },
  {
    name: 'Link 3'
  }
]
const FooterTest = () => {
  return (
    <Footer>
      <FooterBrand>
        <p className="font-bold">brand</p>
      </FooterBrand>
      <FooterContent>
          <FooterItems>
          <div className="grid grid-cols-2 gap-3">
          {urls.map((url, index) => (
            <a href="#">{url.name}</a>
          ))}
        </div>
          </FooterItems>
        <FooterItems>
          <div className="flex gap-5">
            <a href=""><FaGithub size={22}/></a>
            <a href=""><IoMail size={22}/></a>
            <a href=""><TbWorld size={22}/></a>
          </div>
            </FooterItems>
      </FooterContent>
      
      <FooterCopy company="brand"/>
    </Footer>
  );
};

export default FooterTest;
