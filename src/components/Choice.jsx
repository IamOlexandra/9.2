import {Component} from "react";
import {ChoiceStyled, ChoiceImgStyled, ChoiceLabelStyled} from "./styled";

export default class Choice extends Component {
    render() {
        const stickerData = this.props.sticker;
        return (
            <ChoiceStyled>
                <ChoiceImgStyled src={stickerData.img} alt={stickerData.label + " sticker"}/>
                <ChoiceLabelStyled>{stickerData.label}</ChoiceLabelStyled>
            </ChoiceStyled>
        );
    }
}