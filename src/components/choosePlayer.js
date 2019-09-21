import React, { Component } from 'react';
import "./choosePlayer.css";

class Player extends Component {
    handleForm(e) {
        e.preventDefault();
        this.props.player(e.target.player.value)
    }
    render() {
        return (
            <form onSubmit={(e) => this.handleForm(e)}>
                <label className="colorX">
                    Player X
                <input type="radio" name="player" value="X" />
                </label>
                <label className="colorO">
                    Player O
                <input type="radio" name="player" value="O" />
                </label>
                <br></br>
                <input className="button" type="submit" value="Start" />
            </form>
        )
    }
}

export default Player;