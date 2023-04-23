import React, { useState } from "react";
import styled from "styled-components";

interface MenuItemProps {
  text: string;
  onClick: () => void;
  active?: boolean;
  image: string;
}

const LittleImages = () => {
  const [menuItems, setMenuItems] = useState<MenuItemProps[]>([
    {
      text: "Books",
      onClick: () => {},
      image: "../../public/working_img/books.png",
      active: false,
    },
    {
      text: "Folder",
      onClick: () => {},
      image: "../../public/working_img/folder.png",
      active: false,
    },
    {
      text: "Laptop",
      onClick: () => {},
      image: "../../public/working_img/laptop.png",
      active: false,
    },
    {
      text: "Printer",
      onClick: () => {},
      image: "../../public/working_img/printer.png",
      active: false,
    },
    {
      text: "Telephone",
      onClick: () => {},
      image: "../../public/working_img/telephone.png",
      active: false,
    },
  ]);

  const [selectedItem, setSelectedItem] = useState<string>("");

  const MenuWrapper = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: space-around;
  `;

  const MenuItem = styled.li<{ active?: boolean }>`
    padding: 10px;
    font-family: monospace;
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px;
    margin: 0 5px;
    margin-left: 20px;
    background-color: ${({ active }) => (active ? "cyan" : "transparent")};
    color: ${({ active }) => (active ? "deeppink" : "cyan")};
    font-weight: ${({ active }) => (active ? "bold" : "normal")};
    &:hover {
      background-color: deepskyblue;
      font-weight: bold;
    }

    img {
      display: ${({ active }) => (active ? "block" : "none")};
      width: 150px;
      height: 150px;
      margin-top: 20px;
    }
  `;

  const Selected = styled.div`
    font-family: monospace;
    font-size: 24px;
    margin-top: 20px;
    margin-left: 20px;
    img {
      width: 150px;
      height: 150px;
    }
  `;

  const handleItemClick = (index: number) => {
    setMenuItems(
      menuItems.map((item, i) => {
        if (i === index) {
          return { ...item, active: true };
        } else {
          return { ...item, active: false };
        }
      })
    );
    setSelectedItem(menuItems[index].image);
  };

  return (
    <>
      <MenuWrapper>
        {menuItems.map((item, index) => (
          <MenuItem
            key={item.text}
            onClick={() => handleItemClick(index)}
            active={item.active}
          >
            {item.text}
          </MenuItem>
        ))}
      </MenuWrapper>
      {selectedItem && (
        <Selected>
          <img src={selectedItem} alt="Selected Item" />
        </Selected>
      )}
    </>
  );
};
export default LittleImages;
