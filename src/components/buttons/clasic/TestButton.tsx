import { CgHello } from "react-icons/cg";
import { Button } from "./Button";
import {
  FaBell,
  FaBellSlash,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import {
  AiFillLike,
  AiFillPauseCircle,
  AiFillPlayCircle,
} from "react-icons/ai";
import { useState } from "react";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { TbMessageChatbot } from "react-icons/tb";

const TestButton = () => {
  const [love, setLove] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4">
        <h1 className="w-14 dark:text-white">Solid</h1>
        <Button type="button" style="primary">
          Botón
        </Button>
        <Button type="button" style="black">
          Botón
        </Button>
        <Button type="button" style="neutral">
          Botón
        </Button>
        <Button type="button" style="danger">
          Botón
        </Button>
        <Button type="button" style="warning">
          Botón
        </Button>
        <Button type="button" style="success">
          Botón
        </Button>
      </div>
      <div className="flex gap-4">
        <h1 className="w-14 dark:text-white">Border</h1>
        <Button type="button" style="primary" rounded="full" variant="border">
          Botón
        </Button>
        <Button type="button" style="black" rounded="full" variant="border">
          Botón
        </Button>
        <Button type="button" style="neutral" rounded="full" variant="border">
          Botón
        </Button>
        <Button type="button" style="danger" rounded="full" variant="border">
          Botón
        </Button>
        <Button type="button" style="warning" rounded="full" variant="border">
          Botón
        </Button>
        <Button type="button" style="success" rounded="full" variant="border">
          Botón
        </Button>
      </div>
      <div className="flex gap-4">
        <h1 className="w-14 dark:text-white">Light</h1>
        <Button type="button" style="primary" rounded="lg" variant="light">
          Botón
        </Button>
        <Button type="button" style="black" rounded="lg" variant="light">
          Botón
        </Button>
        <Button type="button" style="neutral" rounded="lg" variant="light">
          Botón
        </Button>
        <Button type="button" style="danger" rounded="lg" variant="light">
          Botón
        </Button>
        <Button type="button" style="warning" rounded="lg" variant="light">
          Botón
        </Button>
        <Button type="button" style="success" rounded="lg" variant="light">
          Botón
        </Button>
      </div>
      <div className="flex gap-6">
        <h1 className="w-14 dark:text-white">Icon</h1>
        <Button type="button" style="primary" variant="icon">
          <CgHello size={40} />
        </Button>
        <Button type="button" style="black" variant="icon">
          <CgHello size={40} />
        </Button>
        <Button type="button" style="neutral" variant="icon">
          <CgHello size={40} />
        </Button>
        <Button type="button" style="danger" variant="icon">
          <CgHello size={40} />
        </Button>
        <Button type="button" style="warning" variant="icon">
          <CgHello size={40} />
        </Button>
        <Button type="button" style="success" variant="icon">
          <CgHello size={40} />
        </Button>
      </div>
      <div className="flex gap-10">
        <h1 className="w-14 dark:text-white">Combinate</h1>
        <Button
          type="button"
          style="primary"
          variant="solid"
          rounded="xl"
          onClick={() => setLove(!love)}
          value={love}
        >
          {love ? (
            <AiFillPauseCircle size={27} />
          ) : (
            <AiFillPlayCircle size={27} />
          )}
        </Button>
        <Button
          type="button"
          style="black"
          variant="border"
          rounded="xl"
          onClick={() => setLove(!love)}
          value={love}
        >
          <div className="flex gap-1">
            <AiFillLike size={20} />
            <p>Me gusta</p>
          </div>
        </Button>
        <Button
          type="button"
          style="neutral"
          variant="light"
          isIcon
          rounded="xl"
          value={love}
          onClick={() => setLove(!love)}
        >
          {love ? (
            <div className="flex gap-1 items-center">
              <FaBell size={20} />
            </div>
          ) : (
            <FaBellSlash size={24} />
          )}
        </Button>
        <Button
          type="button"
          isIcon
          style="danger"
          variant="solid"
          rounded="xl"
          onClick={() => setLove(!love)}
          value={love}
        >
          {love ? (
            <IoIosHeart className="w-6 h-6" />
          ) : (
            <IoIosHeartEmpty className="w-6 h-6" />
          )}
        </Button>
        <Button
          type="button"
          style="warning"
          variant="icon"
          value={love}
          onClick={() => setLove(!love)}
        >
          {love ? <FaStar size={30} /> : <FaRegStar size={30} />}
        </Button>
        <Button
          type="button"
          style="success"
          variant="light"
          value={love}
          rounded="xl"
          onClick={() => setLove(!love)}
        >
          <div className="flex gap-1 items-center text-base">
          <TbMessageChatbot size={30} />
          <p>Chats</p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default TestButton;
