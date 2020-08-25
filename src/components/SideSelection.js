import React, { Component } from 'react';
import { Card, Typography, Grid, Button } from '@material-ui/core';
import TicTacToe from './mainGame.js';

import '../css/image_style.css';
import '../css/style1.css';
import '../css/style2.css';
import '../css/mobile_device.css';

const cross = require('../assets/cross.jpg');
const circle = require('../assets/circle.jpg');
const settings_img1 = require('../assets/settings_icon.png');
const minus_img1 = require('../assets/minus_img.jpg');

class SideSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tray_panel: false
        };
    }

    open_settings_side = () => {
        document.getElementById("screen2").style.opacity = "0.4";
        if (this.state.tray_panel == false) {
            document.getElementById("settings_panel_side").style.display = "block";
            this.setState({ tray_panel: true });
            document.getElementById('spin_off_side').style.display = "none";
            document.getElementById('spin_on_side').style.display = "block";

        }

    }

    close_settings_side = () => {
        document.getElementById("screen2").style.opacity = "1";
        if (this.state.tray_panel == true) {
            document.getElementById("settings_panel_side").style.display = "none";
            this.setState({ tray_panel: false });
            document.getElementById('spin_off_side').style.display = "block";
            document.getElementById('spin_on_side').style.display = "none";
        }
    }

    crossplayer = () => {
        const { c1, c2 } = this.state;
        localStorage.setItem('c1', 1);
        localStorage.setItem('c2', 1);
        document.getElementById("mainGameSection").style.display = 'block';
        document.getElementById("mainGameSection").style.transition = '1.5s';
        document.getElementById("choose_side").style.display = 'none';
    }

    circleplayer = () => {
        const { c1, c2 } = this.state;
        localStorage.setItem('c1', 2);
        localStorage.setItem('c2', 2);
        document.getElementById("mainGameSection").style.display = 'block';
        document.getElementById("mainGameSection").style.transition = '1.5s';
        document.getElementById("choose_side").style.display = 'none';
    }



    render() {
        return (
            <div>
                <div id="screen2">



                    <div id="choose_side">


                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"

                            id="mobile_adjustments"
                        >
                            <Typography style={{ padding:'4px',opacity:'0.6',fontFamily: 'Helvetica', fontSize: '15px', color: 'white' ,background:'black'}}><b>Choose X or O</b></Typography>
                        </Grid>
                        <br />
                        <br />
                        <Grid
                            id="catch_space"
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >

                            <Grid container spacing={24} >
                                <Grid item sm={4} md={4} xs={6} id='buttonSelect'>
                                    <Grid
                                        container
                                        direction="column"
                                        justify="right"
                                        alignItems="right"
                                    >
                                        <img src={cross} class="cross_player" />
                                        <br />
                                        <Button onClick={this.crossplayer} id="Select_button"><i>Select Cross</i></Button>
                                    </Grid>
                                </Grid>
                                <Grid item sm={2} md={2} id='buttonSelectmobile'>
                                    <Grid
                                        container
                                        direction="column"
                                        justify="center"
                                        alignItems="center"
                                    >
                                    </Grid>
                                </Grid>
                                <Grid item sm={4} md={4} xs={6} id='buttonSelect'>
                                    <Grid
                                        container
                                        direction="column"
                                        justify="left"
                                        alignItems="left"
                                    >
                                        <img src={circle} class="circle_player" />
                                        <br />
                                        <Button onClick={this.circleplayer} id="Select_button"><i>Select Circle</i></Button>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                        <br />
                        <br />





                    </div>



                    <div id="mainGameSection">

                        <TicTacToe />

                    </div>



                </div>

                <div id="settings_icon_side">
                    <img src={settings_img1} onClick={this.open_settings_side} id='spin_off_side' />
                    <img src={minus_img1} onClick={this.close_settings_side} id='spin_on_side' />
                </div>


                <div id="settings_panel_side">
                    <br />
                    <a href='/' style={{ textDecoration: 'none', color: 'white', fontFamily: 'Helvetica', fontSize: '10px' }}> Exit Game </a>
                    <br />
                    <a href='https://gamefaqs.gamespot.com/android/986009-tic-tac-toe' style={{ textDecoration: 'none', color: 'white', fontFamily: 'Helvetica', fontSize: '10px' }}>FAQs </a>

                </div>
            </div>
        );
    }
}

export default (SideSelection);
