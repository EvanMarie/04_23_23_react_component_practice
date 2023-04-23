import React, { useState } from "react";
import styled from "styled-components";

interface MenuItemProps {
  text: string;
  onClick: () => void;
  active?: boolean;
  message: string;
}

const DynamicList = () => {
  const [menuItems, setMenuItems] = useState<MenuItemProps[]>([
    { text: "Home", onClick: () => {}, message: "Welcome Home!" },
    { text: "About", onClick: () => {}, message: "Find out more!" },
    { text: "Contact", onClick: () => {}, message: "Get in touch!" },
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
  `;

  const Selected = styled.div`
    font-family: monospace;
    font-size: 24px;
    margin-top: 20px;
    margin-left: 20px;
  `;

  const handleItemClick = (index: number) => {
    const newMenuItems = [...menuItems];
    newMenuItems.forEach((item, i) => {
      item.active = i === index;
    });
    setMenuItems(newMenuItems);
    setSelectedItem(menuItems[index].message);
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
      {selectedItem && <Selected>{selectedItem}</Selected>}
    </>
  );
};

export default DynamicList;
