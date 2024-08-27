import {
  Card,
  CardBadge,
  CardBody,
  CardDetail,
  CardFooter,
  CardHeader,
  CardImage,
  CardSubtitle,
  CardTitle,
} from "./Card";
import { Button } from "../buttons/clasic/Button";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { useState } from "react";

const TestCard = () => {
  const [love, setLove] = useState(false);
  return (
    <>
      <Card>
        {/* <CardImage
          src="https://i.pinimg.com/564x/db/52/2f/db522ffce41a91deb7624a021d1a874d.jpg"
          alt=""
        /> */}
        <br/>
         <CardBadge style="success-solid">
         Recommended
        </CardBadge>
        <CardHeader>
          <CardTitle>Heading</CardTitle>
          <CardSubtitle>
            This is a short description about the card.
          </CardSubtitle>
        </CardHeader>
      </Card>

      <Card>
        <CardImage
          src="https://i.pinimg.com/564x/db/52/2f/db522ffce41a91deb7624a021d1a874d.jpg"
          alt=""
        />
        <CardHeader>
          <CardTitle>Heading</CardTitle>
          <CardSubtitle>
            This is a short description about the card.
          </CardSubtitle>
        </CardHeader>
        <CardFooter>
          <Button type="button" style="danger" variant="solid" rounded="full">
            Action
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardImage
          src="https://i.pinimg.com/564x/db/52/2f/db522ffce41a91deb7624a021d1a874d.jpg"
          alt=""
        />
        <CardHeader>
          <CardTitle>Heading</CardTitle>
          <CardSubtitle>
            This is a short description about the card.
          </CardSubtitle>
        </CardHeader>
        <CardBody>
          <CardDetail>$ 1200</CardDetail>
        </CardBody>
        <CardFooter>
          <Button type="button" style="warning" variant="solid" rounded="full">
            Action
          </Button>
        </CardFooter>
      </Card>

      <Card hasPadding>
        <CardImage
          src="https://i.pinimg.com/564x/db/52/2f/db522ffce41a91deb7624a021d1a874d.jpg"
          alt=""
        />
        <CardHeader>
          <CardTitle>Heading</CardTitle>
          <CardSubtitle>
            This is a short description about the card.
          </CardSubtitle>
        </CardHeader>
      </Card>
      <Card hasPadding>
        <CardImage
          src="https://i.pinimg.com/564x/db/52/2f/db522ffce41a91deb7624a021d1a874d.jpg"
          alt=""
        />
        <CardBadge style="">
          <Button
            type="button"
            isIcon
            style="primary"
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
        </CardBadge>
        <CardHeader>
          <CardTitle>Heading</CardTitle>
          <CardSubtitle>
            This is a short description about the card.
          </CardSubtitle>
        </CardHeader>
        <CardFooter>
          <Button type="button" style="black" variant="border" rounded="full">
            Action
          </Button>
        </CardFooter>
      </Card>
     
      <Card hasPadding>
        <CardImage
          src="https://i.pinimg.com/564x/db/52/2f/db522ffce41a91deb7624a021d1a874d.jpg"
          alt=""
        />
        <CardHeader>
          <CardTitle>Heading</CardTitle>
          <CardSubtitle>
            This is a short description about the card.
          </CardSubtitle>
        </CardHeader>
        <CardBody>
          <CardDetail>$ 1200</CardDetail>
        </CardBody>
        <CardFooter>
          <Button type="button" style="success" variant="solid" rounded="full">
            Action
          </Button>
        </CardFooter>
      </Card>

      <Card horizontal>
        <CardImage
          src="https://i.pinimg.com/564x/db/52/2f/db522ffce41a91deb7624a021d1a874d.jpg"
          alt=""
        />
         <CardBadge style="warning-solid">
          Recommended
        </CardBadge>
        <CardHeader>
          <CardTitle>Heading</CardTitle>
          <CardSubtitle>
            This is a short description about the card.
          </CardSubtitle>
        </CardHeader>
      </Card>

      <Card horizontal hasPadding>
        <CardImage
          src="https://i.pinimg.com/564x/db/52/2f/db522ffce41a91deb7624a021d1a874d.jpg"
          alt=""
        />
        <CardHeader>
          <CardTitle>Heading</CardTitle>
          <CardSubtitle>
            This is a short description about the card.
          </CardSubtitle>
        </CardHeader>
        <CardFooter>
          <Button type="button" style="primary" variant="border" rounded="full">
            Action
          </Button>
          <Button type="button" style="primary" variant="solid" rounded="full">
            Action
          </Button>
        </CardFooter>
      </Card>

      <Card horizontal hasPadding>
        <CardImage
          src="https://i.pinimg.com/564x/db/52/2f/db522ffce41a91deb7624a021d1a874d.jpg"
          alt=""
        />
        <CardBadge style="danger-solid">
          Recommended
        </CardBadge>
        <CardHeader>
          <CardTitle>Heading</CardTitle>
          <CardSubtitle>
            This is a short description about the card.
          </CardSubtitle>
        </CardHeader>
        <CardBody>
          <CardDetail>$ 1200</CardDetail>
        </CardBody>
        <CardFooter>
          <Button type="button" style="danger" variant="solid" rounded="full">
            Action
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default TestCard;
