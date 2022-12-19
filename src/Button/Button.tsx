import React from "react";

interface BaseButton {
  size: "large" | "small" | "fixed";
  text: string;

  /* internal props */
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export class Button extends React.Component<BaseButton> {
  large = " max-w-[89px] py-[13px] p-[20px] rounded-lg text-sm";
  small = " max-w-[67px] py-[5px] p-[12px] rounded-md text-xs";
  fixed = " w-full py-[13px] p-[20px] rounded-lg text-sm";

  constructor(props: BaseButton) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {this.props.size === "large" && (
          <button
            type="button"
            className={this.props.className ? this.props.className + this.large : this.large}
            disabled={this.props.disabled}
            onClick={this.props.onClick}
          >
            {this.props.text}
          </button>
        )}
        {this.props.size === "small" && (
          <button
            type="button"
            className={this.props.className ? this.props.className + this.small : this.small}
            disabled={this.props.disabled}
            onClick={this.props.onClick}
          >
            {this.props.text}
          </button>
        )}
        {this.props.size === "fixed" && (
          <button
            type="button"
            className={this.props.className ? this.props.className + this.fixed : this.fixed}
            disabled={this.props.disabled}
            onClick={this.props.onClick}
          >
            {this.props.text}
          </button>
        )}
      </>
    );
  }
}

export class DisabledButton extends Button {
  constructor(props: BaseButton) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {this.props.size === "large" && (
          <Button className="bg-[#F5F5F5] text-sm text-[#D6D6D6]" size={this.props.size} text={this.props.text} disabled onClick={this.props.onClick} />
        )}
        {this.props.size === "small" && (
          <Button className="bg-[#F5F5F5] text-xs text-[#D6D6D6]" size={this.props.size} text={this.props.text} disabled onClick={this.props.onClick} />
        )}
        {this.props.size === "fixed" && (
          <Button className="bg-[#F5F5F5] text-sm text-[#D6D6D6]" size={this.props.size} text={this.props.text} disabled onClick={this.props.onClick} />
        )}
      </>
    );
  }
}

export class FistButton extends Button {
  constructor(props: BaseButton) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {this.props.size === "large" && (
          <Button className="bg-[#FF00D5] text-base text-white" size={this.props.size} text={this.props.text} onClick={this.props.onClick} />
        )}
        {this.props.size === "small" && (
          <Button className="bg-[#FF00D5] text-sm text-white" size={this.props.size} text={this.props.text} onClick={this.props.onClick} />
        )}
        {this.props.size === "fixed" && (
          <Button className="bg-[#FF00D5] text-base text-white" size={this.props.size} text={this.props.text} onClick={this.props.onClick} />
        )}
      </>
    );
  }
}

export class SecondButton extends Button {
  constructor(props: BaseButton) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {this.props.size === "large" && (
          <Button className="bg-[#292929] text-base text-white" size={this.props.size} text={this.props.text} onClick={this.props.onClick} />
        )}
        {this.props.size === "small" && (
          <Button className="bg-[#292929] text-sm text-white" size={this.props.size} text={this.props.text} onClick={this.props.onClick} />
        )}
        {this.props.size === "fixed" && (
          <Button className="bg-[#292929] text-base text-white" size={this.props.size} text={this.props.text} onClick={this.props.onClick} />
        )}
      </>
    );
  }
}

export class ThirdButton extends Button {
  constructor(props: BaseButton) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {this.props.size === "large" && (
          <Button className="bg-[#EBEBEB] text-base text-[#525252]" size={this.props.size} text={this.props.text} onClick={this.props.onClick} />
        )}
        {this.props.size === "small" && (
          <Button className="bg-[#EBEBEB] text-sm text-[#525252]" size={this.props.size} text={this.props.text} onClick={this.props.onClick} />
        )}
        {this.props.size === "fixed" && (
          <Button className="bg-[#EBEBEB] text-base text-[#525252]" size={this.props.size} text={this.props.text} onClick={this.props.onClick} />
        )}
      </>
    );
  }
}

export class GhostButton extends Button {
  constructor(props: BaseButton) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {this.props.size === "large" && (
          <Button
            className="bg-[#ffffff] text-base text-[#525252] hover:bg-[#1f1f1f0f]"
            size={this.props.size}
            text={this.props.text}
            onClick={this.props.onClick}
          />
        )}
        {this.props.size === "small" && (
          <Button
            className="bg-[#ffffff] text-sm text-[#525252] hover:bg-[#1f1f1f0f]"
            size={this.props.size}
            text={this.props.text}
            onClick={this.props.onClick}
          />
        )}
        {this.props.size === "fixed" && (
          <Button
            className="bg-[#ffffff] text-base text-[#525252] hover:bg-[#1f1f1f0f]"
            size={this.props.size}
            text={this.props.text}
            onClick={this.props.onClick}
          />
        )}
      </>
    );
  }
}
