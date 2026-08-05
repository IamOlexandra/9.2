import {Component} from "react";
import Choice from "./components/Choice";
import stickersData from "./stickers.json";
import {AppStyled, StickerListStyled, StickerStyled} from "./components/styled";

export default class App extends Component {
  state = {
    currentSticker: stickersData[0],
  }
  changeSticker = stickerIndex => {
    this.setState({currentSticker: stickersData[stickerIndex]});
  }
  render() {
    return (
      <AppStyled>
        <StickerListStyled>
          {stickersData.map((stickerData, stickerIndex) => (
            <StickerStyled key={stickerIndex} onClick={() => this.changeSticker(stickerIndex)} style={{backgroundImage: "url(" + stickerData.img + ")"}}/>
          ))}
        </StickerListStyled>
        <Choice sticker={this.state.currentSticker}/>
      </AppStyled>
    );
  }
}