import React, { useState } from "react";
import "./App.css";
import { Wheel } from "react-custom-roulette";
import { Button, Center, Container, Group, Modal } from "@mantine/core";

const data = [
  {
    option: "Try again",
    style: { backgroundColor: "pink", textColor: "black" },
  },
  {
    option: "You won RM100!",
    style: { backgroundColor: "green", textColor: "black" },
  },
  {
    option: "You won a voucher!",
    style: { backgroundColor: "lightBlue", textColor: "black" },
  },
  {
    option: "Try again",
    style: { backgroundColor: "pink", textColor: "black" },
  },
  {
    option: "You won RM100!",
    style: { backgroundColor: "green", textColor: "black" },
  },
  {
    option: "Better luck next time :(!",
    style: { backgroundColor: "pink", textColor: "black" },
  },
  {
    option: "You won a voucher!",
    style: { backgroundColor: "lightBlue", textColor: "black" },
  },
];

function App() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [prizeModalOpen, setPrizeModalOpen] = useState(false);
  const [prizeText, setPrizeText] = useState("Try again");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  const handlePrizeText = () => {
    if (prizeNumber === 0 || prizeNumber === 3) {
      setPrizeText("Try again");
    } else if (prizeNumber === 1 || prizeNumber === 4) {
      setPrizeText("You won RM100!");
    } else if (prizeNumber === 2 || prizeNumber === 6) {
      setPrizeText("You won a voucher!");
    } else {
      setPrizeText("Better luck next time!");
    }
  };

  const handleStopSpin = () => {
    handlePrizeText();
    setPrizeModalOpen(true);
    setButtonDisabled(true);
  };

  return (
    <>
      <Container>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          backgroundColors={["#3e3e3e", "#df3428"]}
          textColors={["#ffffff"]}
          fontSize={12}
          onStopSpinning={handleStopSpin}
        />
        <Group position="center" mt={20}>
          <Button onClick={handleSpinClick} disabled={buttonDisabled}>
            Spin
          </Button>
        </Group>
      </Container>
      <Modal
        opened={prizeModalOpen}
        onClose={() => setPrizeModalOpen(false)}
        title="Result"
      >
        <Center>{prizeText}</Center>
      </Modal>
    </>
  );
}

export default App;
