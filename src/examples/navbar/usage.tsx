import React, { useState } from "react";
import TestNavbar from "../../components/navigation/navbar/TestNavbar";
import Container from "../../components/container/Container";

const Usage = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="dark:bg-black-600 bg-gray-50 w-full min-h-screen flex flex-col overflow-y-hidden">
      <TestNavbar />
      <Container className="gap-4 mt-4 px-6 dark:text-gray-100">
        <h1 className="font-bold text-3xl">Lorem ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          vehicula dolor nec lacus efficitur, ut convallis sem fringilla. Cras
          scelerisque malesuada lacus, vel dictum justo cursus non. Sed
          scelerisque arcu ut elit viverra, a fermentum sapien dapibus. Aenean
          aliquet, orci nec gravida fermentum, lorem lacus cursus nulla, a
          lacinia libero ipsum non nunc. Ut bibendum, ligula vel volutpat
          bibendum, ipsum eros facilisis orci, a maximus tortor erat a est.
          Vivamus sit amet ex auctor, dignissim elit eu, lacinia eros. Aliquam
          euismod, sapien sit amet tincidunt convallis, mi arcu sollicitudin
          risus, sed auctor lectus justo eu ligula.
        </p>

        <p>
          Mauris efficitur metus ac purus ultrices mollis. Curabitur consequat,
          lacus id consectetur blandit, ipsum odio vehicula elit, eu
          pellentesque ligula nisi sed mi. In dapibus tellus at eros cursus, non
          gravida nisl auctor. Nulla eget nunc et erat malesuada tincidunt id
          nec lectus. Donec fringilla purus quis dui egestas, non gravida nisl
          facilisis. Duis maximus leo et nisi tincidunt viverra. Integer
          pharetra tincidunt nibh, eu cursus mauris consectetur at. Donec
          euismod, ligula eu auctor iaculis, dui quam venenatis odio, in laoreet
          eros urna ac dolor. Phasellus eget sapien eu lorem dictum tempor a id
          purus.
        </p>

        <p>
          Pellentesque in ipsum ac felis consequat maximus. Proin in justo sed
          risus vehicula facilisis. Nunc ultrices ex nec mi auctor, vel lacinia
          lectus varius. Ut mollis orci a ligula efficitur, ut posuere lorem
          ultrices. Morbi et metus nec justo pharetra vestibulum. Donec non
          augue a odio facilisis fermentum. Etiam vel justo eget est pretium
          pharetra. Maecenas egestas velit in erat pharetra, sed laoreet dolor
          auctor. Fusce sit amet mauris felis. Quisque iaculis dolor sed nulla
          euismod, nec volutpat eros faucibus.
        </p>
      </Container>
    </div>
  );
};

export default Usage;
