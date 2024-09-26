import { FaCheck, FaGithub } from "react-icons/fa";
import {
  Footer,
  FooterBrand,
  FooterContent,
  FooterCopy,
  FooterItems,
} from "../components/navigation/footer/Footer";
import { TbWorld } from "react-icons/tb";
import { IoMail } from "react-icons/io5";
import React, { useState } from "react";
import Tooltip from "../components/tooltips/Tooltip";
import { LuCopy } from "react-icons/lu";

const FooterLayout = () => {
  const [text, setText] = useState("efcamilaweb@gmail.com");
  const [copied, setCopied] = useState(false);

  const handleClickCopied = () => {
    setCopied(true);

    navigator.clipboard.writeText(text);

    setTimeout(() => {
      setCopied(false);
    }, 2000);

    const onChangeText = (e) => setText(e.target.value);
  };

  return (
    <Footer>
      <FooterBrand>
        <p className="font-bold">web by <span className='text-blue-600'>camila</span></p>
      </FooterBrand>
      <FooterContent>
        <FooterItems>
          <div className="flex gap-5">
            <a
              href="https://github.com/efcamila"
              target="_blank"
              className="hover:text-black-800 dark:hover:text-white"
            >
              <FaGithub size={22} />
            </a>
            <button className="tooltip" onClick={handleClickCopied}>
              <IoMail
                size={22}
                className="hover:text-black-800 dark:hover:text-white"
              />
              <Tooltip>
                {copied ? (
                  <>
                    <FaCheck />
                    <p className="md-hidden">Copiado</p>
                  </>
                ) : (
                  <>
                    <LuCopy />
                    <p className="md-hidden">Copiar</p>
                  </>
                )}
              </Tooltip>
            </button>
            <a
              href="https://portfolio-wbc.vercel.app/"
              target="_blank"
              className="hover:text-black-800 dark:hover:text-white"
            >
              <TbWorld size={22} />
            </a>
          </div>
        </FooterItems>
      </FooterContent>
      <FooterCopy company="EfCamilaWeb" />
    </Footer>
  );
};

export default FooterLayout;
