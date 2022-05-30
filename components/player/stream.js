import React, { Component } from 'react';
import PropTypes from 'prop-types';
import flvjs from 'flv.js';

export default class StreamPlayer extends Component {
    static propTypes = {
        channel: PropTypes.oneOf(['pokemon']).isRequired
    }

    initPlayer = ($video) => {
        console.log($video);

        if ($video) {
            if (flvjs.isSupported()) {
                let player = flvjs.createPlayer({
                    type: 'flv',
                    url: `http://broadcast.pokemon.watch:7001/live/${ this.props.channel }.flv`
                }, {});
                player.attachMediaElement($video);
                player.load();
                player.play();
                this.player = player;
            }
        }
    }

    componentWillUnmount() {
        if (this.player) {
            this.player.unload();
            this.player.detachMediaElement();
        }
    }

    render() {
        const style = {};

        return(
            <video
                className='player stream'
                controls={ true }
                style={Object.assign({
                    width: '100%'
                }, style)}
                ref={ this.initPlayer }
            />
        );
    }
}