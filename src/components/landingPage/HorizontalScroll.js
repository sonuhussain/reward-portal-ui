import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";

// list of items
const list = [
  { name: "All" },
  { name: "Lifestyle" },
  { name: "Travel" },
  { name: "Education" },
  { name: "Health & Fitness" },
  { name: "Food" },
  { name: "item-7" },
  { name: "item-8" },
  { name: "item-9" },
  { name: "item-10" },
];
// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
  return (
    <div className={`btn s-tab-btn ${selected ? "active" : ""}`}>{text}</div>
  );
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map((el) => {
    const { name } = el;

    return <MenuItem text={name} key={name} selected={selected} />;
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({
  text: <i class="fas fa-angle-left"></i>,
  className: "arrow-prev",
});
const ArrowRight = Arrow({
  text: <i class="fas fa-angle-right"></i>,
  className: "arrow-next",
});

const selected = "All";

class HorizontalScroll extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }

  state = {
    selected,
  };

  onSelect = (key) => {
    this.setState({ selected: key });
  };

  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;

    return (
      <div>
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

export default HorizontalScroll;
